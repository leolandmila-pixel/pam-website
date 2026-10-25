'use client'

import { useEffect, useRef, useState } from 'react'

export default function FoundingListForm() {
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('') // honeypot - humans never see or fill it
  const [note, setNote] = useState("No spam, ever. Just gentle updates from two mums building something good.")
  const [submitting, setSubmitting] = useState(false)
  // When the form became interactive; the API rejects sub-2s submissions.
  const renderedAt = useRef<number>(0)
  useEffect(() => {
    renderedAt.current = Date.now()
  }, [])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || email.indexOf('@') < 1) {
      setNote('Please pop in a valid email so we can reach you.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website, t: renderedAt.current || Date.now() }),
      })
      if (res.ok) {
        setEmail('')
        setNote("You're on the list! Check your inbox for a welcome email from us.")
      } else if (res.status === 429) {
        setNote('Too many attempts - please try again a little later.')
      } else if (res.status === 400) {
        const data = await res.json().catch(() => null)
        setNote(
          data?.error === 'Invalid email'
            ? 'Please pop in a valid email so we can reach you.'
            : data?.error || 'Something went wrong - please try again or email us directly.',
        )
      } else {
        setNote("Something went wrong - please try again or email us directly.")
      }
    } catch {
      setNote("Something went wrong - please try again or email us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <form className="notify" onSubmit={submit}>
        <input
          id="presignEmail"
          type="email"
          placeholder="your@email.com.au"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          maxLength={254}
          required
        />
        {/* Honeypot: off-screen, skipped by keyboard and screen readers. */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-10000px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}
        >
          <label htmlFor="presignWebsite">Website</label>
          <input
            id="presignWebsite"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Join Now'}
        </button>
      </form>
      <p className="founding-note">{note}</p>
    </>
  )
}
