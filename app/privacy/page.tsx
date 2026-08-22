import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How PAM collects, uses, and protects your family\'s information across the app and website.',
  alternates: { canonical: 'https://parentaladminmanager.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <main>
      <section className="hero" style={{ paddingTop: 40, paddingBottom: 20 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Legal</span>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 400, fontSize: 'clamp(2.4rem,5vw,3.6rem)', lineHeight: 1.1, margin: '18px 0 10px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', marginBottom: 0 }}>Last updated: July 2026</p>
        </div>
      </section>

      <section style={{ paddingTop: 10, paddingBottom: 80 }}>
        <div className="privacy-body container" style={{ maxWidth: 760 }}>

          <div className="privacy-section">
            <h2>Our Commitment to Your Privacy</h2>
            <p>PAM (Parental Admin Manager) is committed to protecting the privacy of every family that uses our platform. This Privacy Policy explains what information we collect, how we use it, and the choices you have. PAM is currently offered only to residents of Australia, and this Privacy Policy is written on that basis. By using PAM, you agree to the practices described here.</p>
          </div>

          <div className="privacy-section">
            <h2>Who We Are</h2>
            <p>PAM (Parental Admin Manager) is an Australian app that helps parents organise and manage family administrative tasks, including school and appointment reminders, family calendars, child profiles, notes and family content, and — where enabled — location features for linked family devices. References to &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;PAM&rdquo; in this policy mean the PAM team.</p>
            <p>For privacy-related enquiries, contact us at: <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a></p>
          </div>

          <div className="privacy-section">
            <h2>What Information We Collect</h2>

            <h3>Account Information</h3>
            <p>When you create an account, we collect your name, email address, and a password. If you choose to add a profile photo, that image is also stored.</p>

            <h3>Child Profiles</h3>
            <p>To provide our core features, you may create profiles for your children. This may include a first name or nickname, age or date of birth, and activity or usage data generated through the app.</p>

            <h3>Family Content</h3>
            <p>Where you use PAM to store photos, notes, journal entries, or other family &ldquo;memories&rdquo;, we collect and store that content on your behalf so that it can be displayed back to you within the app.</p>

            <h3>Device Information</h3>
            <p>We may collect information about the devices connected to your PAM account, including device type, operating system version, and a unique device identifier.</p>

            <h3>Location Data</h3>
            <p>Where you enable location features, we may collect approximate or precise location information from linked devices. You can withdraw this permission at any time through your device settings or within the app.</p>

            <h3>Billing and Payment Information</h3>
            <p>When you subscribe to PAM, we collect billing details necessary to process your subscription. This includes your name, billing address, and payment method details. Payment transactions are processed by a third-party payment provider (for example, Apple, Google Play, or a payment processor such as Stripe, depending on how you subscribe) and we do not store your full card details on our systems.</p>

            <h3>Usage Data</h3>
            <p>We collect information about how you use PAM, such as features accessed, session duration, and in-app interactions, to help us improve the product.</p>
          </div>

          <div className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain the PAM app and its features</li>
              <li>Set up and manage family accounts and child profiles</li>
              <li>Store and display family content you choose to add, such as photos and notes</li>
              <li>Process and manage your subscription and payments</li>
              <li>Send you billing confirmations, renewal reminders, and receipts</li>
              <li>Enable location and activity monitoring features you have turned on</li>
              <li>Send you important service notifications, security alerts, and support messages</li>
              <li>Improve and personalise your experience</li>
              <li>Diagnose technical issues and ensure the security of your account</li>
              <li>Meet our legal and compliance obligations under Australian law</li>
            </ul>
            <p>We will not use your information for purposes that are incompatible with those listed above without your consent.</p>
          </div>

          <div className="privacy-section">
            <h2>How We Share Your Information</h2>
            <p>We do not sell your personal information to third parties. We may share information in the following limited circumstances:</p>

            <h3>Service Providers</h3>
            <p>We work with trusted third-party providers (such as cloud hosting, analytics, and payment processing services) who process data on our behalf. These providers are contractually required to handle data securely and only as directed by us.</p>

            <h3>Overseas Disclosure</h3>
            <p>Some of our service providers — including cloud hosting, payment processing, and analytics providers — may store or process personal information on servers located outside Australia, including in the United States or other countries in which those providers operate. Where this occurs, we take reasonable steps to ensure the overseas recipient handles your information in a manner consistent with the Australian Privacy Principles, including through contractual protections.</p>

            <h3>Legal Requirements</h3>
            <p>We may disclose information where required by law, court order, or a government authority in Australia.</p>

            <h3>Business Transfers</h3>
            <p>If PAM is acquired or merged with another entity, your information may be transferred as part of that transaction. We will notify you before this occurs.</p>

            <p>We do not share child profile data with advertisers or third-party marketing platforms.</p>
          </div>

          <div className="privacy-section">
            <h2>Children&apos;s Privacy</h2>
            <p>PAM is designed for use by parents and guardians. Child profiles within the app are created and managed by the account holder (the parent or guardian). We do not knowingly collect personal information directly from children, and children should not create their own PAM accounts.</p>
            <p>If you believe a child has provided personal information to us without parental consent, please contact us at <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a> and we will promptly delete it.</p>
          </div>

          <div className="privacy-section">
            <h2>Subscription and Billing</h2>
            <p>PAM is offered on a subscription basis and will automatically renew at the end of each billing period unless cancelled before the renewal date. You can manage or cancel your subscription at any time through your account settings or the relevant app store.</p>
            <p>Refunds are handled in accordance with our Refund Policy and your rights under the Australian Consumer Law. For billing queries, contact us at <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a>.</p>
          </div>

          <div className="privacy-section">
            <h2>Data Storage and Security</h2>
            <p>Your personal information is primarily stored on secure servers located in Australia. As noted above, certain service providers we rely on (such as payment processing and analytics) may store or process data overseas. We use industry-standard security measures including encryption in transit and at rest, access controls, and regular security reviews.</p>
            <p>While we take every reasonable precaution, no method of data transmission or storage is 100% secure. We encourage you to use a strong, unique password and to contact us immediately if you suspect any unauthorised access to your account.</p>
          </div>

          <div className="privacy-section">
            <h2>How Long We Keep Your Data</h2>
            <p>We retain your personal information for as long as your account is active, or as long as necessary to provide our services. If you delete your account, we will delete or de-identify your personal information within 30 days, except where we are required to retain it by law. Billing records may be retained for up to seven years to meet our obligations under Australian tax law.</p>
          </div>

          <div className="privacy-section">
            <h2>Your Rights and Choices</h2>
            <p>Under the Australian Privacy Act, you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Correct information that is inaccurate, incomplete, or out of date</li>
              <li>Request deletion of your account and associated data</li>
              <li>Opt out of non-essential communications at any time</li>
              <li>Withdraw consent for location or activity monitoring through your app settings</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a>. We will respond within a reasonable timeframe (generally within 30 days).</p>
          </div>

          <div className="privacy-section">
            <h2>Cookies and Analytics</h2>
            <p>Our website may use cookies and similar technologies to understand how visitors interact with it. You can control cookie preferences through your browser settings. The PAM app itself does not use advertising cookies.</p>
          </div>

          <div className="privacy-section">
            <h2>Where PAM Operates</h2>
            <p>PAM is currently offered only to users located in Australia. If we expand to other countries in future, we will update this Privacy Policy to reflect any additional rights or obligations that apply to users in those countries.</p>
          </div>

          <div className="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;last updated&rdquo; date at the top of this page and, where changes are material, notify you via email or an in-app notice. We encourage you to review this policy periodically.</p>
          </div>

          <div className="privacy-section">
            <h2>Complaints</h2>
            <p>If you have a concern about how we handle your personal information, please contact us first at <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a>. If you are not satisfied with our response, you have the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <a href="https://oaic.gov.au" target="_blank" rel="noreferrer" className="privacy-link">oaic.gov.au</a>.</p>
          </div>

          <div className="privacy-section">
            <h2>Contact Us</h2>
            <p>For any privacy-related questions, email <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a>.</p>
          </div>

        </div>
      </section>
    </main>
  )
}
