'use client'

import { useState } from 'react'

export default function FoundingListForm() {
  const [email, setEmail] = useState('')
  const [note, setNote] = useState("No spam, ever. Just gentle updates from two mums building something good.")
  const [submitting, setSubmitting] = useState(false)

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
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setEmail('')
        setNote("You're on the list! Check your inbox for a welcome email from us.")
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
          required
        />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Join Now'}
        </button>
      </form>
      <p className="founding-note">{note}</p>
    </>
  )
}
