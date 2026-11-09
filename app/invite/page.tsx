import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import InviteSteps from './InviteSteps'

export const metadata: Metadata = {
  title: "You've been invited to PAM",
  description: 'Accept your family invitation to PAM (Parental Admin Manager): download the app, open your invite, and join the family.',
  alternates: { canonical: 'https://parentaladminmanager.com/invite' },
  robots: { index: false, follow: false },
}

// Landing page for the "Accept invitation" button in the invite email.
// The email link carries ?i=<invitationId>&t=<token>; InviteSteps turns
// that into a pam://invite link that opens the app and joins the family.
// Older emails have no token and get the manual "Join here" steps.
export default function InvitePage() {
  return (
    <main>
      {/* Wine hero with white logo */}
      <section
        style={{
          background: 'var(--wine)',
          color: '#FFFBF8',
          padding: '72px 20px 56px',
          textAlign: 'center',
        }}
      >
        <Image
          src="/logo-white.png"
          alt="PAM"
          width={140}
          height={112}
          priority
          style={{ height: 'auto', margin: '0 auto 18px' }}
        />
        <div
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: 11,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: '#FFFBF8',
            marginBottom: 28,
          }}
        >
          Parental Admin Manager
        </div>
        <h1
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 400,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            lineHeight: 1.15,
            margin: '0 auto',
            maxWidth: 640,
            color: '#FFFBF8',
          }}
        >
          You&apos;ve been invited to PAM
        </h1>
        <p
          style={{
            margin: '18px auto 0',
            maxWidth: 520,
            fontSize: '1.05rem',
            lineHeight: 1.55,
            color: 'rgba(255,251,248,0.9)',
          }}
        >
          The support system every parent deserves.
        </p>
      </section>

      {/* Body */}
      <section style={{ padding: '48px 20px 20px' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <InviteSteps />

          <p
            style={{
              margin: '32px auto 0',
              textAlign: 'center',
              fontSize: '0.9rem',
              color: 'var(--ink-soft, #555)',
            }}
          >
            Need help?{' '}
            <a href="mailto:hello@parentaladminmanager.com" style={{ color: 'var(--wine)', textDecoration: 'underline' }}>
              hello@parentaladminmanager.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer nudge back home */}
      <section style={{ padding: '20px 20px 80px', textAlign: 'center' }}>
        <Link
          href="/"
          style={{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '0.9rem',
            color: 'var(--wine)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--wine)',
            paddingBottom: 2,
          }}
        >
          Learn more about PAM
        </Link>
      </section>
    </main>
  )
}
