'use client'

import { useEffect, useState } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/au/app/parental-admin-manager/id6780860987'

// Only ids/tokens of the shape the server issues ever reach the pam:// link.
const SAFE = /^[A-Za-z0-9_-]{1,128}$/

function readInviteLink(): string | null {
  const q = new URLSearchParams(window.location.search)
  const i = q.get('i') ?? ''
  const t = q.get('t') ?? ''
  if (!SAFE.test(i) || !SAFE.test(t)) return null
  return `pam://invite?i=${encodeURIComponent(i)}&t=${encodeURIComponent(t)}`
}

const card: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: 16,
  padding: '24px 22px',
  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  border: '1px solid rgba(0,0,0,0.05)',
  display: 'flex',
  gap: 16,
  alignItems: 'flex-start',
}

const num: React.CSSProperties = {
  flex: '0 0 auto',
  width: 34,
  height: 34,
  borderRadius: '50%',
  background: 'var(--wine)',
  color: '#FFFBF8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--display)',
  fontSize: 17,
}

const title: React.CSSProperties = {
  fontFamily: 'var(--display)',
  fontWeight: 400,
  fontSize: '1.3rem',
  margin: '4px 0 6px',
  color: 'var(--wine)',
}

const body: React.CSSProperties = {
  margin: 0,
  fontSize: '1rem',
  lineHeight: 1.55,
  color: 'var(--ink)',
}

const button = (primary: boolean): React.CSSProperties => ({
  display: 'inline-block',
  marginTop: 14,
  padding: '13px 26px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: 15,
  fontWeight: 700,
  color: primary ? '#ffffff' : 'var(--wine)',
  background: primary ? 'var(--wine)' : 'transparent',
  border: primary ? 'none' : '1.5px solid var(--wine)',
  textDecoration: 'none',
  borderRadius: 28,
})

export default function InviteSteps() {
  // null until mounted; false = old email without a link token.
  const [inviteLink, setInviteLink] = useState<string | null | false>(null)
  useEffect(() => {
    setInviteLink(readInviteLink() ?? false)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={card}>
        <div style={num} aria-hidden="true">1</div>
        <div>
          <h2 style={title}>Download PAM</h2>
          <p style={body}>
            Get PAM on the phone you&apos;ll use it on. Already have it? Go straight to step 2.
          </p>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={button(false)}>
            Download on the App Store
          </a>
        </div>
      </div>

      <div style={card}>
        <div style={num} aria-hidden="true">2</div>
        <div>
          <h2 style={title}>Open your invite in PAM</h2>
          {inviteLink === false ? (
            <p style={body}>
              Open PAM, tap <strong>Been invited to a family? Join here</strong>, and sign up or log in with
              the email address this invitation was sent to.
            </p>
          ) : (
            <>
              <p style={body}>
                Tap the button below on this phone. PAM opens, and you sign up or log in with the email
                address this invitation was sent to.
              </p>
              <a
                href={inviteLink || '#'}
                aria-disabled={!inviteLink}
                style={button(true)}
              >
                Open my invite in PAM
              </a>
              <p style={{ ...body, marginTop: 10, fontSize: '0.9rem', color: 'var(--ink-soft, #555)' }}>
                Nothing happened? Install or update PAM (step 1) and tap the button again. Or open PAM,
                tap <strong>Been invited to a family? Join here</strong>, and sign up with the email this
                invitation was sent to.
              </p>
            </>
          )}
        </div>
      </div>

      <div style={card}>
        <div style={num} aria-hidden="true">3</div>
        <div>
          <h2 style={title}>You&apos;re in</h2>
          <p style={body}>
            PAM welcomes you to the family, and the children and everything shared with you appear straight
            away.
          </p>
        </div>
      </div>
    </div>
  )
}
