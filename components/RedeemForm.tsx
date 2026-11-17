'use client'

import { useState } from 'react'

const REDEEM_API =
  process.env.NEXT_PUBLIC_REDEEM_API ||
  'https://us-central1-parent-admin-manager.cloudfunctions.net/redeemGift'

type StoreSub = { store: 'app_store' | 'google_play'; trial: boolean }
type Done = { planName: string; months: number; expiresOn: string | null; already: boolean; storeSubscription: StoreSub | null }

const CANCEL_STEPS: Record<StoreSub['store'], string> = {
  app_store: 'On your iPhone, open Settings → tap your name → Subscriptions → PAM → Cancel Subscription.',
  google_play: 'Open the Google Play Store → tap your profile picture → Payments & subscriptions → Subscriptions → PAM → Cancel.',
}

export default function RedeemForm({ initialCode = '' }: { initialCode?: string }) {
  const [giftCode, setGiftCode] = useState(initialCode || 'PAM-')
  const [accountCode, setAccountCode] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState<Done | null>(null)

  const giftKind = kindOf(giftCode)
  const acctKind = kindOf(accountCode)
  const [editingGift, setEditingGift] = useState(!initialCode || kindOf(initialCode) !== 'gift')

  function moveToAccount() {
    setAccountCode(giftCode.trim())
    setGiftCode('PAM-')
    setError('')
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (giftKind === 'account') {
      setError('Box 1 has your account code in it. Use the gift code from your email (it starts with PAM-) in box 1, and put the account code in box 2.')
      return
    }
    if (acctKind === 'gift') {
      setError('Box 2 has your gift code in it. Put the gift code from your email in box 1, and the account code from the PAM app in box 2.')
      return
    }
    if (giftKind !== 'gift') {
      setError('Please enter the gift code from your email. It starts with PAM- and has 12 more letters and numbers.')
      return
    }
    if (acctKind !== 'account') {
      setError('Please enter your account code from the PAM app. It has 8 letters and numbers, like K7QM-4XPA.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch(REDEEM_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ giftCode, accountCode }),
      })
      const data = await res.json().catch(() => null)
      if (res.ok && data?.ok) {
        setDone({
          planName: data.planName, months: data.months, expiresOn: data.expiresOn,
          already: !!data.already, storeSubscription: data.storeSubscription || null,
        })
      } else {
        setError(data?.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please check your connection and try again.')
    }
    setSubmitting(false)
  }

  if (done) {
    return (
      <div className="gift-form redeem-done" role="status">
        <h2>{done.already ? 'Already redeemed' : 'Your gift is ready'}</h2>
        <p className="feature-prose">
          {done.already ? 'This gift is already on your account. ' : ''}
          <strong>{done.planName}</strong> is now on your PAM account
          {done.expiresOn ? <> until <strong>{done.expiresOn}</strong></> : null}.
        </p>
        <p className="feature-prose">Open PAM and your new features will be there. You may need to close and reopen the app.</p>
        {done.storeSubscription && (
          <div className="gift-error redeem-warn" role="alert">
            <strong>
              One more step: you also have a PAM {done.storeSubscription.trial ? 'free trial' : 'subscription'} through{' '}
              {done.storeSubscription.store === 'app_store' ? 'the App Store' : 'Google Play'}.
            </strong>{' '}
            Your gift already covers you, so cancel it to avoid being charged. {CANCEL_STEPS[done.storeSubscription.store]}
          </div>
        )}
      </div>
    )
  }

  return (
    <form className="gift-form" onSubmit={submit} noValidate>
      <p className="redeem-intro">You need <strong>two codes</strong>: one from your gift email, and one from the PAM app.</p>

      <fieldset className="gift-step">
        <legend className="gift-step-h"><span>1</span> Gift code (from your gift email)</legend>
        {!editingGift && giftKind === 'gift' ? (
          <div className="redeem-chip">
            <span className="redeem-chip-code">{formatGift(giftCode)}</span>
            <span className="redeem-ok">✓ Added from your email</span>
            <button type="button" className="redeem-link" onClick={() => setEditingGift(true)}>Change</button>
          </div>
        ) : (
          <div className="redeem-source">
            <div className="redeem-mock redeem-mock-email" aria-hidden="true">
              <small>Your gift code</small>
              <b>PAM-XXXX-XXXX-XXXX</b>
            </div>
            <div className="field redeem-code">
              <label htmlFor="r-gift">Gift code</label>
              <input id="r-gift" value={giftCode} onChange={(e) => setGiftCode(maskGift(e.target.value))}
                onPaste={(e) => {
                  // An account code pasted here stays as-is so the "move it to box 2" hint shows.
                  const text = e.clipboardData.getData('text').trim()
                  e.preventDefault()
                  setGiftCode(kindOf(text) === 'account' ? text : maskGift(text))
                }} placeholder="PAM-XXXX-XXXX-XXXX"
                maxLength={40} required autoComplete="off" autoCapitalize="characters" spellCheck={false}
                aria-invalid={giftKind === 'account'} />
              {giftKind === 'gift' && <span className="redeem-ok">✓ That’s a gift code</span>}
              {giftKind === 'account' && (
                <span className="redeem-bad">
                  That’s your account code from the app, not the gift code.{' '}
                  <button type="button" className="redeem-link" onClick={moveToAccount}>Move it to box 2</button>
                </span>
              )}
              {giftKind !== 'gift' && giftKind !== 'account' && (
                <span className="field-hint">In the email you were sent, inside the dotted box. It starts with <strong>PAM-</strong>.</span>
              )}
            </div>
          </div>
        )}
      </fieldset>

      <fieldset className="gift-step">
        <legend className="gift-step-h"><span>2</span> Account code (from the PAM app)</legend>
        <div className="redeem-source">
          <div className="redeem-mock redeem-mock-app" aria-hidden="true">
            <small>Settings → Account code</small>
            <b>K7QM-4XPA</b>
          </div>
          <div className="field redeem-code">
            <label htmlFor="r-acct">Account code</label>
            <input id="r-acct" value={accountCode} onChange={(e) => setAccountCode(e.target.value)} placeholder="XXXX-XXXX"
              maxLength={20} required autoComplete="off" autoCapitalize="characters" spellCheck={false}
              aria-invalid={acctKind === 'gift'} />
            {acctKind === 'account' && <span className="redeem-ok">✓ That’s an account code</span>}
            {acctKind === 'gift' && <span className="redeem-bad">That’s the gift code from your email. It goes in box 1.</span>}
            {acctKind !== 'account' && acctKind !== 'gift' && (
              <span className="field-hint">
                This tells us which PAM account to add your gift to. In the PAM app, open <strong>Settings</strong> →{' '}
                <strong>Account code</strong> and tap <strong>Copy</strong>. It’s 8 letters and numbers.
              </span>
            )}
          </div>
        </div>
        <p className="redeem-new">
          <strong>New to PAM?</strong> Download it from the App Store or Google Play and create a free account first.
          When it asks you to choose a plan, pick <strong>PAM Free</strong>: your gift upgrades you.
        </p>
      </fieldset>

      {error && <p className="gift-error" role="alert">{error}</p>}

      <button type="submit" className="send-btn gift-pay" disabled={submitting}>
        {submitting ? 'Redeeming…' : 'Redeem my gift'}
      </button>
      <p className="gift-fineprint">
        Your gift starts today. If you already have a gift running, the new one is added on the end.
      </p>
    </form>
  )
}

const ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ'

/** Which code this looks like, ignoring spaces, dashes and case. */
function kindOf(raw: string): 'gift' | 'account' | 'partial' | 'empty' {
  let t = raw.toUpperCase().replace(/[^A-Z0-9]/g, '')
  if (!t) return 'empty'
  if (t.startsWith('PAM') && t.length === 15) t = t.slice(3)
  const valid = [...t].every((c) => ALPHABET.includes(c))
  if (valid && t.length === 12) return 'gift'
  if (valid && t.length === 8 && !raw.trim().toUpperCase().startsWith('PAM')) return 'account'
  return 'partial'
}

/** Keeps the PAM- prefix and adds a dash after every 4 characters as people type. */
function maskGift(raw: string) {
  let t = raw.toUpperCase().replace(/[^A-Z0-9]/g, '')
  if (t.startsWith('PAM')) t = t.slice(3)
  t = t.slice(0, 12)
  return 'PAM-' + (t.match(/.{1,4}/g) ?? []).join('-')
}

function formatGift(raw: string) {
  let t = raw.toUpperCase().replace(/[^A-Z0-9]/g, '')
  if (t.startsWith('PAM') && t.length === 15) t = t.slice(3)
  return `PAM-${t.slice(0, 4)}-${t.slice(4, 8)}-${t.slice(8)}`
}
