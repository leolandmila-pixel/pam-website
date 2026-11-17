'use client'

import { useState } from 'react'

const GIFT_API =
  process.env.NEXT_PUBLIC_GIFT_API ||
  'https://us-central1-parent-admin-manager.cloudfunctions.net/createGiftCheckout'

type Plan = 'plus' | 'couple' | 'family'
type Months = 3 | 6 | 12

// Must match the Stripe prices (lookup keys gift_<plan>_<months>m).
// Stripe charges its own stored price; these are for display only.
const PRICES: Record<Plan, Record<Months, string>> = {
  plus: { 3: '44.99', 6: '89.99', 12: '144.99' },
  couple: { 3: '74.99', 6: '149.99', 12: '239.99' },
  family: { 3: '89.99', 6: '179.99', 12: '289.99' },
}

const PLANS: { id: Plan; name: string; blurb: string }[] = [
  { id: 'plus', name: 'PAM Plus', blurb: 'For one parent' },
  { id: 'couple', name: 'PAM Couple', blurb: 'For both parents' },
  { id: 'family', name: 'PAM Family', blurb: 'Parents plus grandparents, nannies and carers' },
]

const DURATIONS: { id: Months; label: string }[] = [
  { id: 3, label: '3 months' },
  { id: 6, label: '6 months' },
  { id: 12, label: '12 months' },
]

export default function GiftForm({ cancelled = false }: { cancelled?: boolean }) {
  const [plan, setPlan] = useState<Plan>('couple')
  const [months, setMonths] = useState<Months>(12)
  const [sendTo, setSendTo] = useState<'recipient' | 'buyer'>('recipient')
  const [recipientName, setRecipientName] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [message, setMessage] = useState('')
  const [buyerName, setBuyerName] = useState('')
  const [buyerEmail, setBuyerEmail] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [error, setError] = useState(cancelled ? 'Payment cancelled. Your gift hasn’t been bought, so you can try again.' : '')
  const [submitting, setSubmitting] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch(GIFT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan, months, sendTo, recipientName, recipientEmail, message,
          buyerName, buyerEmail, website,
        }),
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data?.url) {
        window.location.href = data.url
        return
      }
      setError(data?.error || 'Something went wrong. Please try again.')
    } catch {
      setError('Something went wrong. Please check your connection and try again.')
    }
    setSubmitting(false)
  }

  const price = PRICES[plan][months]

  return (
    <form className="gift-form" onSubmit={submit} noValidate>
      <fieldset className="gift-step">
        <legend className="gift-step-h"><span>1</span> Choose a plan</legend>
        <div className="gift-options gift-options-3">
          {PLANS.map((p) => (
            <label key={p.id} className={`gift-option${plan === p.id ? ' is-on' : ''}`}>
              <input type="radio" name="plan" value={p.id} checked={plan === p.id} onChange={() => setPlan(p.id)} />
              <b>{p.name}</b>
              <small>{p.blurb}</small>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="gift-step">
        <legend className="gift-step-h"><span>2</span> Choose how long</legend>
        <div className="gift-options gift-options-3">
          {DURATIONS.map((d) => (
            <label key={d.id} className={`gift-option${months === d.id ? ' is-on' : ''}`}>
              <input type="radio" name="months" value={d.id} checked={months === d.id} onChange={() => setMonths(d.id)} />
              <b>{d.label}</b>
              <small>A${PRICES[plan][d.id]}</small>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="gift-step">
        <legend className="gift-step-h"><span>3</span> Who’s it for?</legend>
        <div className="field">
          <label htmlFor="g-rname">Their first name</label>
          <input id="g-rname" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} maxLength={60} required autoComplete="off" />
        </div>
        <div className="gift-options gift-options-2" role="radiogroup" aria-label="How should we deliver the gift?">
          <label className={`gift-option${sendTo === 'recipient' ? ' is-on' : ''}`}>
            <input type="radio" name="sendTo" checked={sendTo === 'recipient'} onChange={() => setSendTo('recipient')} />
            <b>Email it to them</b>
            <small>We’ll send it straight away</small>
          </label>
          <label className={`gift-option${sendTo === 'buyer' ? ' is-on' : ''}`}>
            <input type="radio" name="sendTo" checked={sendTo === 'buyer'} onChange={() => setSendTo('buyer')} />
            <b>Send it to me</b>
            <small>To print or give in person</small>
          </label>
        </div>
        {sendTo === 'recipient' && (
          <div className="field">
            <label htmlFor="g-remail">Their email</label>
            <input id="g-remail" type="email" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} maxLength={254} required autoComplete="off" />
          </div>
        )}
        <div className="field">
          <label htmlFor="g-msg">Personal message (optional)</label>
          <textarea id="g-msg" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={300} rows={3} />
          <span className="field-hint">{300 - message.length} characters left</span>
        </div>
      </fieldset>

      <fieldset className="gift-step">
        <legend className="gift-step-h"><span>4</span> Your details</legend>
        <div className="form-row">
          <div className="field">
            <label htmlFor="g-bname">Your name</label>
            <input id="g-bname" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} maxLength={60} required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="g-bemail">Your email</label>
            <input id="g-bemail" type="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} maxLength={254} required autoComplete="email" />
          </div>
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
          <label>Website<input tabIndex={-1} value={website} onChange={(e) => setWebsite(e.target.value)} autoComplete="off" /></label>
        </div>
      </fieldset>

      {error && <p className="gift-error" role="alert">{error}</p>}

      <button type="submit" className="send-btn gift-pay" disabled={submitting}>
        {submitting ? 'Opening secure checkout…' : `Continue to payment · A$${price}`}
      </button>
      <p className="gift-fineprint">
        Secure payment by Stripe. Prices in AUD, no GST charged. The gift starts when it’s redeemed, can be redeemed
        within 3 years, and doesn’t renew. Unredeemed gifts can be refunded within 30 days.
      </p>
    </form>
  )
}
