import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY!
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID)
const BREVO_TEMPLATE_ID = Number(process.env.BREVO_TEMPLATE_ID)

// ---------------------------------------------------------------------------
// Abuse protection. This endpoint sends a Brevo email to whatever address it is
// given, so without guards it is a spam relay and a quota-burn target.
// Layers (cheapest first): honeypot -> time-to-submit -> email validation ->
// per-IP rate limit. A CAPTCHA (Cloudflare Turnstile) can be added later.
// ---------------------------------------------------------------------------

/** Form must be on screen at least this long before submitting (bots are instant). */
const MIN_SUBMIT_MS = 2_000
/** Reject stale/forged timestamps (form left open > 1 day, or from the future). */
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000
const CLOCK_SKEW_MS = 60_000

/** Best-effort rate limit: N subscribe attempts per IP per window. */
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000

// NOTE: in-memory, so it is per serverless instance. Netlify may run several
// warm instances and recycles them, so this only slows down a single-source
// flood; it is not a hard global limit. A shared store (Netlify Blobs, Upstash)
// or Turnstile is needed for a real guarantee.
const hits = new Map<string, { count: number; resetAt: number }>()

function rateLimited(ip: string, now: number): boolean {
  // Opportunistic sweep so the Map can't grow without bound on a warm instance.
  if (hits.size > 5_000) {
    for (const [key, v] of hits) if (v.resetAt <= now) hits.delete(key)
  }
  const entry = hits.get(ip)
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > RATE_LIMIT_MAX
}

function clientIp(req: NextRequest): string {
  return (
    req.headers.get('x-nf-client-connection-ip') || // Netlify
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  )
}

// Pragmatic address check: one @, no whitespace/quotes/angle brackets, a dotted
// domain with an alphabetic TLD. Not full RFC 5322 on purpose.
const EMAIL_RE =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@(?=.{1,253}$)(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,24}$/

function isValidEmail(email: string): boolean {
  if (email.length < 6 || email.length > 254) return false
  if (!EMAIL_RE.test(email)) return false
  const [local, domain] = email.split('@')
  if (local.startsWith('.') || local.endsWith('.') || local.includes('..')) return false
  if (domain.includes('..')) return false
  // Obvious junk / reserved domains that can never receive mail.
  if (/(^|\.)(example\.(com|org|net)|test|invalid|localhost|local)$/i.test(domain)) return false
  return true
}

/** Pretend success so bots tripping the honeypot/timer get no signal to adapt. */
function silentOk() {
  return NextResponse.json({ success: true })
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  const { email: rawEmail, website, t } = (body ?? {}) as {
    email?: unknown
    website?: unknown // honeypot: hidden field, humans leave it empty
    t?: unknown // ms timestamp of when the form was rendered
  }

  // 1. Honeypot.
  if (typeof website === 'string' && website.trim() !== '') return silentOk()

  // 2. Time-to-submit. Missing/garbled timestamp = not our form.
  const now = Date.now()
  const renderedAt = typeof t === 'number' ? t : Number(t)
  if (!Number.isFinite(renderedAt)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  const elapsed = now - renderedAt
  if (elapsed < -CLOCK_SKEW_MS || elapsed > MAX_FORM_AGE_MS) {
    return NextResponse.json(
      { error: 'This form has expired - please refresh the page and try again.' },
      { status: 400 },
    )
  }
  if (elapsed < MIN_SUBMIT_MS) return silentOk()

  // 3. Email validation.
  const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : ''
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // 4. Per-IP rate limit (best effort, see note above).
  if (rateLimited(clientIp(req), now)) {
    return NextResponse.json(
      { error: 'Too many requests - please try again later.' },
      { status: 429 },
    )
  }

  if (!BREVO_API_KEY) {
    return NextResponse.json({ error: 'Subscribe is not configured' }, { status: 500 })
  }

  // Add contact to Brevo list
  const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    }),
  })

  if (!contactRes.ok && contactRes.status !== 204) {
    const err = await contactRes.json().catch(() => null)
    // Contact already exists is fine - still send the welcome email
    if (err?.code !== 'duplicate_parameter') {
      return NextResponse.json({ error: 'Failed to add contact' }, { status: 500 })
    }
  }

  // Send welcome email via template
  const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: [{ email }],
      templateId: BREVO_TEMPLATE_ID,
    }),
  })

  if (!emailRes.ok) {
    return NextResponse.json({ error: 'Failed to send welcome email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
