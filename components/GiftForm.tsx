'use client'

import { useState } from 'react'
import BowSvg from '@/components/BowSvg'

const GIFT_API =
  process.env.NEXT_PUBLIC_GIFT_API ||
  'https://us-central1-parent-admin-manager.cloudfunctions.net/createGiftCheckout'

type Plan = 'plus' | 'couple' | 'family'
type Months = 3 | 6 | 12

const PRICES: Record<Plan, Record<Months, string>> = {
  plus:   { 3: '44.99',  6: '89.99',  12: '144.99' },
  couple: { 3: '74.99',  6: '149.99', 12: '239.99' },
  family: { 3: '89.99',  6: '179.99', 12: '289.99' },
}

const PLANS: { id: Plan; name: string; blurb: string }[] = [
  { id: 'plus',   name: 'PAM Plus', blurb: '1 parent' },
  { id: 'couple', name: 'Couple',   blurb: '2 parents' },
  { id: 'family', name: 'Family',   blurb: '+ carers' },
]

const DURATIONS: { id: Months; label: string }[] = [
  { id: 3,  label: '3 months' },
  { id: 6,  label: '6 months' },
  { id: 12, label: '12 months' },
]

const CHIPS = [
  "You’re doing an amazing job ♡",
  'One less thing to remember',
  'For all the little moments',
]


export default function GiftForm({ cancelled = false }: { cancelled?: boolean }) {
  const [plan, setPlan]                   = useState<Plan>('plus')
  const [months, setMonths]               = useState<Months>(3)
  const [recipientName, setRecipientName] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [message, setMessage]             = useState('')
  const [buyerName, setBuyerName]         = useState('')
  const [buyerEmail, setBuyerEmail]       = useState('')
  const [sendToMe, setSendToMe]           = useState(false)
  const [website, setWebsite]             = useState('')
  const [error, setError]                 = useState(
    cancelled ? 'Payment cancelled. Your gift hasn’t been bought, so you can try again.' : ''
  )
  const [submitting, setSubmitting]       = useState(false)
  const [showPlanChanger, setShowPlanChanger] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch(GIFT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan, months,
          sendTo: sendToMe ? 'buyer' : 'recipient',
          recipientName, recipientEmail,
          message, buyerName, buyerEmail, website,
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
  const planObj = PLANS.find(p => p.id === plan)!

  return (
    <div className="gift-checkout-wrap">
      <div className="gift-checkout-head">
        <span className="gift-checkout-eyebrow">Checkout</span>
        <h2 className="gift-checkout-h2">Make it <em>personal.</em></h2>
      </div>

      <form className="gift-checkout-cols" onSubmit={submit} noValidate>
        {/* ===== LEFT COLUMN ===== */}
        <div className="gift-checkout-left">

          {/* Step 1 */}
          <div className="gift-step-block">
            <h3 className="gift-step-block-h">
              <span className="gift-step-num">1</span> WHO&apos;S IT FOR?
            </h3>
            <div className="gift-field-row">
              <div className="field">
                <label htmlFor="g-rname">Their first name</label>
                <input id="g-rname" placeholder="e.g. Sarah" value={recipientName} onChange={e => setRecipientName(e.target.value)} maxLength={60} required autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="g-remail">Their email</label>
                <input id="g-remail" type="email" placeholder="sarah@email.com" value={recipientEmail} onChange={e => setRecipientEmail(e.target.value)} maxLength={254} required={!sendToMe} autoComplete="off" />
              </div>
            </div>
            <label className="gift-send-toggle">
              <input type="checkbox" checked={sendToMe} onChange={e => setSendToMe(e.target.checked)} />
              <span>Send the gift to my email instead (to give in person)</span>
            </label>
          </div>

          {/* Step 2 */}
          <div className="gift-step-block">
            <h3 className="gift-step-block-h">
              <span className="gift-step-num">2</span> FROM YOU
            </h3>
            <div className="gift-field-row">
              <div className="field">
                <label htmlFor="g-bname">Your name</label>
                <input id="g-bname" placeholder="e.g. Mum &amp; Dad" value={buyerName} onChange={e => setBuyerName(e.target.value)} maxLength={60} required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="g-bemail">Your email <span className="field-note">(for your receipt)</span></label>
                <input id="g-bemail" type="email" placeholder="you@email.com" value={buyerEmail} onChange={e => setBuyerEmail(e.target.value)} maxLength={254} required autoComplete="email" />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="gift-step-block">
            <h3 className="gift-step-block-h">
              <span className="gift-step-num">3</span> YOUR MESSAGE
            </h3>
            <div className="field">
              <label htmlFor="g-msg">Add a personal note <span className="field-note">(optional)</span></label>
              <textarea id="g-msg" placeholder="Write something from the heart..." value={message} onChange={e => setMessage(e.target.value)} maxLength={250} rows={4} />
              <span className="field-hint">{message.length}/250</span>
            </div>
            <div className="gift-chips">
              {CHIPS.map(c => (
                <button key={c} type="button" className="gift-chip" onClick={() => setMessage(c)}>{c}</button>
              ))}
            </div>
          </div>

          {/* honeypot */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
            <label>Website<input tabIndex={-1} value={website} onChange={e => setWebsite(e.target.value)} autoComplete="off" /></label>
          </div>

          {error && <p className="gift-error" role="alert">{error}</p>}
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="gift-checkout-right">

          {/* Gift preview */}
          <p className="gift-sidebar-label">GIFT PREVIEW</p>
          <div className="gift-preview-card">
            <div className="gift-preview-header">
              <span className="gift-preview-for">FOR {recipientName.toUpperCase() || 'YOU'}</span>
              <BowSvg className="gift-preview-bow" />
            </div>
            <p className="gift-preview-msg" data-empty={!message ? '' : undefined}>
              {message || 'Your message will appear here…'}
            </p>
            <div className="gift-preview-footer">
              <span className="gift-preview-with-love">With love</span>
              <span className="gift-preview-pam">PAM</span>
            </div>
          </div>

          {/* Order summary */}
          <p className="gift-sidebar-label" style={{ marginTop: 20 }}>ORDER SUMMARY</p>
          <div className="gift-summary-box">
            <div className="gift-summary-line">
              <span>Plan</span>
              <b>{planObj.name} · {planObj.blurb}</b>
            </div>
            <div className="gift-summary-line">
              <span>Duration</span>
              <b>{months} months</b>
            </div>
            <div className="gift-summary-line">
              <span>Delivery</span>
              <b>Instantly by email</b>
            </div>

            <button type="button" className="gift-change-plan" onClick={() => setShowPlanChanger(v => !v)}>
              Change plan
            </button>

            {showPlanChanger && (
              <div className="gift-plan-changer">
                <p className="gift-changer-label">Plan</p>
                <div className="gift-changer-options">
                  {PLANS.map(p => (
                    <button key={p.id} type="button" className={`gift-changer-btn${plan === p.id ? ' on' : ''}`} onClick={() => setPlan(p.id)}>
                      {p.name}
                    </button>
                  ))}
                </div>
                <p className="gift-changer-label">Duration</p>
                <div className="gift-changer-options">
                  {DURATIONS.map(d => (
                    <button key={d.id} type="button" className={`gift-changer-btn${months === d.id ? ' on' : ''}`} onClick={() => setMonths(d.id)}>
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="gift-summary-total">
              <span>Total (AUD)</span>
              <span className="gift-summary-amount">${price}</span>
            </div>

            <button type="submit" className="gift-pay-btn" disabled={submitting}>
              {submitting ? 'Opening secure checkout…' : 'Continue to payment'}
            </button>
            <p className="gift-fineprint2">
              Secure payment on the next step · Redeemed in-app · No expiry
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
