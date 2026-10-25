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

const CONTACT_EMAIL = 'hello@parentaladminmanager.com'

export default function ContactForm() {
  const params = useSearchParams()
  const defaultTopic = params.get('topic') === 'story' ? 'Share my story' : 'General question'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState(defaultTopic)
  const [message, setMessage] = useState('')
  const [note, setNote] = useState('')
  // There is no contact backend yet, so this form does NOT send anything itself.
  // It opens the visitor's own email app with the message pre-filled, addressed
  // to CONTACT_EMAIL, and says so plainly. (Previously it faked a success.)
  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || email.indexOf('@') < 1) {
      setNote("Please add your name and a valid email so we can reply.")
      return
    }
    const subject = `${topic} - from ${name}`
    const body = `${message}\n\n- ${name} (${email})`
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setNote(
      `Your email app should now open with your message ready to send - press Send there to reach us. ` +
        `Nothing opened? Email us directly at ${CONTACT_EMAIL}.`,
    )
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
      <button type="submit" className="send-btn">
        Open in my email app
      </button>
      <p style={{ marginTop: 12, fontSize: 14 }}>
        This form doesn&apos;t send messages itself - it opens your email app so you can send it to{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      {note && <p className="presignup-note" style={{ marginTop: 16, color: 'var(--wine)' }}>{note}</p>}
    </form>
  )
}
