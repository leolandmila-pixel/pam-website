import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delete Your PAM Account',
  description: 'How to permanently delete your PAM (Parental Admin Manager) account and associated data, what is removed, and what we are required to keep.',
  alternates: { canonical: 'https://parentaladminmanager.com/delete-account' },
}

export default function DeleteAccountPage() {
  return (
    <main>
      <section className="hero" style={{ paddingTop: 40, paddingBottom: 20 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Account</span>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 400, fontSize: 'clamp(2.4rem,5vw,3.6rem)', lineHeight: 1.1, margin: '18px 0 10px' }}>
            Delete Your Account
          </h1>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', marginBottom: 0 }}>Parental Admin Manager (PAM)</p>
        </div>
      </section>

      <section style={{ paddingTop: 10, paddingBottom: 80 }}>
        <div className="privacy-body container" style={{ maxWidth: 760 }}>

          <div className="privacy-section">
            <p style={{ background: 'var(--wine)', color: '#fff', borderRadius: 12, padding: '1.5rem 1.75rem', lineHeight: 1.75, marginBottom: 0 }}>
              You can permanently delete your PAM (Parental Admin Manager) account and the personal
              information associated with it at any time. This page explains how to request deletion,
              what data is removed, and what we are required to retain.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Delete your account from within the app</h2>
            <p>The quickest way to delete your account is directly in the PAM app:</p>
            <ol style={{ lineHeight: 1.9, paddingLeft: '1.25rem' }}>
              <li>Open the PAM app and make sure you are signed in.</li>
              <li>Go to the <strong>Settings</strong> tab (the account icon in the top right of the Home screen).</li>
              <li>Scroll to the bottom and tap <strong>Delete Account</strong>.</li>
              <li>In the confirmation dialog, type <strong>DELETE</strong> and enter your password.</li>
              <li>Tap <strong>Delete</strong>. Your account will be permanently closed and you will be signed out.</li>
            </ol>
          </div>

          <div className="privacy-section">
            <h2>Request deletion by email</h2>
            <p>
              If you cannot access the app, or would like us to process the deletion for you, email{' '}
              <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a>{' '}
              from the email address linked to your account with the subject line <strong>&ldquo;Delete my account&rdquo;</strong>.
              We will verify your identity and complete the deletion on your behalf.
            </p>
          </div>

          <div className="privacy-section" id="delete-data">
            <h2>Delete some of your data without closing your account</h2>
            <p>
              You do not have to delete your whole account to remove your data. Most content can be
              deleted from within the app while keeping your account open &mdash; for example, deleting
              individual photos, videos, voice notes, documents, milestones, contacts or a child profile
              from the relevant screen.
            </p>
            <p>
              If you would like us to delete a specific set of your data for you, email{' '}
              <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a>{' '}
              from the email address linked to your account, describing what you would like removed. We will
              verify your identity and action the request within 30 days.
            </p>
          </div>

          <div className="privacy-section">
            <h2>What is deleted</h2>
            <p>When your account is deleted, we remove the personal information associated with it, including:</p>
            <ul style={{ lineHeight: 1.9, paddingLeft: '1.25rem' }}>
              <li>Your account and sign-in credentials (email address and password)</li>
              <li>Your profile details and family and child profiles</li>
              <li>Tracker data, milestones, checklists and reminders</li>
              <li>Memories, photos, videos, voice notes and documents you have uploaded</li>
              <li>Saved contacts, articles and other content you have added</li>
            </ul>
            <p>
              We delete or de-identify this personal information within <strong>30 days</strong> of your request,
              except where we are required to retain it by law.
            </p>
          </div>

          <div className="privacy-section">
            <h2>What we keep, and for how long</h2>
            <p>
              Billing and transaction records may be retained for up to <strong>seven years</strong> to meet our
              obligations under Australian tax law. These records are kept securely and are not used for any
              other purpose. Note that subscriptions purchased through the Apple App Store or Google Play are
              managed by Apple or Google, and any active subscription should be cancelled through your app store
              account separately.
            </p>
          </div>

          <div className="privacy-section">
            <h2>Need help?</h2>
            <p>
              If you have any questions about deleting your account or your data, contact us at{' '}
              <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a>.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
