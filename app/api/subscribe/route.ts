import { NextRequest, NextResponse } from 'next/server'

const BREVO_API_KEY = process.env.BREVO_API_KEY!
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID)
const BREVO_TEMPLATE_ID = Number(process.env.BREVO_TEMPLATE_ID)

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
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
    const err = await contactRes.json()
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
