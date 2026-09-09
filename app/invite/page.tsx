import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "You've been invited to PAM",
  description: 'Accept your family invitation to PAM (Parental Admin Manager) — download the app and sign in to join.',
  alternates: { canonical: 'https://parentaladminmanager.com/invite' },
  robots: { index: false, follow: false },
}

// Landing page that the "Accept Invitation" button in the invitation
// email points to. Once the app has an Associated Domains entitlement
// with `applinks:parentaladminmanager.com`, this URL becomes a
// Universal Link — iOS users with PAM installed will open straight
// into the app. Everyone else lands here with clear next steps.
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
          <div
            style={{
              background: '#ffffff',
              borderRadius: 16,
              padding: '32px 28px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 400,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                margin: '0 0 14px',
                color: 'var(--wine)',
              }}
            >
              Here&apos;s how to accept
            </h2>
            <ol
              style={{
                paddingLeft: '1.2rem',
                margin: '0 0 8px',
                lineHeight: 1.7,
                fontSize: '1rem',
                color: 'var(--ink)',
              }}
            >
              <li>
                <strong>Download PAM</strong> on your iPhone or iPad from the App Store.
              </li>
              <li>
                <strong>Sign up or sign in</strong> using the same email address the invitation was sent to.
              </li>
              <li>
                On the setup screen, tap <strong>&quot;Skip - I&apos;m joining an existing family&quot;</strong>.
              </li>
              <li>
                You&apos;ll be added to the family and land in PAM ready to go.
              </li>
            </ol>
          </div>

          {/* App Store CTA */}
          <div
            style={{
              marginTop: 28,
              padding: '28px 24px',
              background: '#f7ede2',
              borderRadius: 16,
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                color: 'var(--wine)',
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              Coming soon
            </div>
            <p
              style={{
                margin: '0 0 20px',
                fontSize: '1rem',
                lineHeight: 1.55,
                color: 'var(--ink)',
              }}
            >
              PAM is finalising review with Apple and will be on the App Store shortly. We&apos;ll email you as soon as it&apos;s live so you can install and accept your invitation.
            </p>
            <a
              href="https://apps.apple.com/au/app/pam-parental-admin-manager"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '14px 30px',
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 15,
                fontWeight: 700,
                color: '#ffffff',
                background: '#AF686B',
                textDecoration: 'none',
                borderRadius: 28,
              }}
            >
              Open in the App Store
            </a>
          </div>

          {/* Reassurance */}
          <p
            style={{
              margin: '28px auto 0',
              maxWidth: 520,
              textAlign: 'center',
              fontSize: '0.9rem',
              color: 'var(--ink-soft, #555)',
              lineHeight: 1.6,
            }}
          >
            Already have PAM installed? Open the app on the device where you&apos;re signed in — invitations appear automatically the first time you sign in with the invited email address.
          </p>

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
