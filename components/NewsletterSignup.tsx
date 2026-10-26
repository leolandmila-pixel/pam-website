'use client'

import { useState, useRef } from 'react'

export default function NewsletterSignup() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const renderedAt = useRef(Date.now())

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value.trim()
    const website = (form.elements.namedItem('website') as HTMLInputElement).value

    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, website, t: renderedAt.current }),
      })
      const data = await res.json()
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      } else {
        setStatus('success')
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-inner">
          <div className="newsletter-copy">
            <span className="eyebrow">Stay in the loop</span>
            <h2 className="newsletter-heading">
              The PAM edit, <em>straight to your inbox.</em>
            </h2>
            <p className="newsletter-sub">
              Parenting tips, app updates and expert-backed Australian guides - without the overwhelm.
            </p>
          </div>

          {status === 'success' ? (
            <div className="newsletter-success">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="10" fill="var(--wine)" />
                <path d="M5 10.5L8.5 14L15 7" stroke="#fff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>You&apos;re in. We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
              {/* honeypot */}
              <input name="website" type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />

              <div className="newsletter-fields">
                <div className="newsletter-field">
                  <label htmlFor="nl-firstname">First name</label>
                  <input
                    id="nl-firstname"
                    name="firstName"
                    type="text"
                    placeholder="Your first name"
                    autoComplete="given-name"
                  />
                </div>
                <div className="newsletter-field">
                  <label htmlFor="nl-email">Email</label>
                  <input
                    id="nl-email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              {status === 'error' && (
                <p className="newsletter-error">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="newsletter-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
              <p className="newsletter-privacy">By signing up, you agree to receive marketing emails. View our <a href="/privacy">privacy policy</a> and <a href="/terms">terms of service</a> for more info.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
