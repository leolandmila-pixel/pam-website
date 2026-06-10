'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

const topics = [
  'General question',
  'Share my story',
  'Feedback & ideas',
  'Partnership or press',
  'App support',
  'Something else',
]

export default function ContactForm() {
  const params = useSearchParams()
  const defaultTopic = params.get('topic') === 'story' ? 'Share my story' : 'General question'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState(defaultTopic)
  const [message, setMessage] = useState('')
  const [note, setNote] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || email.indexOf('@') < 1) {
      setNote("Please add your name and a valid email and we'll get right back to you.")
      return
    }
    setSubmitting(true)
    try {
      // TODO: wire to Ortto / n8n / email backend
      await new Promise((r) => setTimeout(r, 400))
      const greet = name
      setName('')
      setEmail('')
      setMessage('')
      setNote(`Thank you ${greet} - your message is on its way. We'll reply soon.`)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="cName">First name</label>
          <input id="cName" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="cEmail">Email</label>
          <input id="cEmail" type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="cTopic">What&apos;s this about?</label>
        <select id="cTopic" value={topic} onChange={(e) => setTopic(e.target.value)}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cMsg">Message</label>
        <textarea id="cMsg" placeholder="Tell us what's on your mind..." value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <button type="submit" className="send-btn" disabled={submitting}>
        {submitting ? 'Sending…' : 'Send message'}
      </button>
      {note && <p className="presignup-note" style={{ marginTop: 16, color: 'var(--wine)' }}>{note}</p>}
    </form>
  )
}
