import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | PAM',
  description: 'Terms and Conditions governing your use of the PAM app and website.',
}

export default function TermsPage() {
  return (
    <main>
      <section className="hero" style={{ paddingTop: 40, paddingBottom: 20 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Legal</span>
          <h1 style={{ fontFamily: 'var(--display)', fontWeight: 400, fontSize: 'clamp(2.4rem,5vw,3.6rem)', lineHeight: 1.1, margin: '18px 0 10px' }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', marginBottom: 0 }}>Last updated: June 2026</p>
        </div>
      </section>

      <section style={{ paddingTop: 10, paddingBottom: 80 }}>
        <div className="privacy-body container" style={{ maxWidth: 760 }}>

          <div className="privacy-section">
            <p style={{ background: 'var(--wine)', color: '#fff', borderRadius: 12, padding: '1.5rem 1.75rem', lineHeight: 1.75, marginBottom: 0 }}>
              These Terms and Conditions govern your use of the PAM (Parental Admin Manager) app and website. By creating an account or using PAM, you agree to be bound by these Terms. Please read them carefully. If you do not agree, please do not use PAM.
            </p>
          </div>

          <div className="privacy-section">
            <h2>1. Who Can Use PAM</h2>
            <p>You must be at least 18 years of age to create a PAM account. By registering, you confirm that you are a parent or legal guardian and that you are using PAM on behalf of your family.</p>
            <p>PAM is not intended for direct use by children. Child profiles within the app are created and managed by the account holder only.</p>
          </div>

          <div className="privacy-section">
            <h2>2. Account Registration</h2>
            <p>When you create an account, you agree to:</p>
            <ul className="terms-check-list">
              <li>Provide accurate, current, and complete information</li>
              <li>Keep your login credentials secure and confidential</li>
              <li><span>Notify us immediately if you suspect any unauthorised access to your account - contact us at <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a></span></li>
              <li>Take responsibility for all activity that occurs under your account</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>PAM reserves the right to suspend or terminate accounts where false or misleading information has been provided.</p>
          </div>

          <div className="privacy-section">
            <h2>3. Subscription Plans</h2>
            <p>PAM is available on a subscription basis. The following plans are currently offered:</p>
            <div className="terms-pricing-grid">
              <div className="terms-pricing-card">
                <h3>Monthly</h3>
                <ul>
                  <li><span>Single</span><span>$7.99/mo</span></li>
                  <li><span>Two</span><span>$12.99/mo</span></li>
                  <li><span>Family</span><span>$24.99/mo</span></li>
                </ul>
              </div>
              <div className="terms-pricing-card terms-pricing-card--annual">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>Annual <span className="terms-savings-badge" style={{ margin: 0 }}>Save 2 months</span></h3>
                <ul>
                  <li><span>Single</span><span>$79.90/yr</span></li>
                  <li><span>Two</span><span>$129.90/yr</span></li>
                  <li><span>Family</span><span>$249.90/yr</span></li>
                </ul>
              </div>
            </div>
            <div className="terms-note">All prices are in Australian dollars and inclusive of any applicable taxes.</div>
            <p style={{ marginTop: '1.25rem' }}>Your subscription begins at the end of your free trial period (if applicable) or immediately upon purchase. Monthly subscriptions are billed in advance at the start of each billing cycle. Annual subscriptions are billed in full at the start of the subscription year.</p>
            <p>Subscriptions automatically renew unless cancelled before the renewal date. You will not receive a separate reminder before each renewal - it is your responsibility to cancel if you no longer wish to continue.</p>
          </div>

          <div className="privacy-section">
            <h2>4. Free Trial</h2>
            <p>New users are eligible for a 14-day free trial. During this period you have full access to PAM&apos;s features at no charge.</p>
            <p>If you cancel before the 14-day trial ends, you will not be charged. If you do not cancel, your subscription will automatically begin at the end of the trial and your nominated payment method will be billed at the applicable plan rate.</p>
            <div className="terms-note">Only one free trial is available per user. PAM reserves the right to withdraw or modify the trial offer at any time.</div>
          </div>

          <div className="privacy-section">
            <h2>5. Cancellation</h2>
            <p>You may cancel your subscription at any time through your account settings or through the App Store on your device.</p>
            <h3>Monthly plans</h3>
            <p>Cancellation takes effect at the end of the current billing period. You will retain access to PAM until that date and will not be charged again.</p>
            <h3>Annual plans</h3>
            <p>Cancellation takes effect at the end of the current annual period. No refund is issued for unused months remaining in the year. You will retain full access until the annual period expires.</p>
            <div className="terms-note">Deleting the PAM app from your device does not cancel your subscription. You must cancel through your account settings or the App Store.</div>
          </div>

          <div className="privacy-section">
            <h2>6. Refunds</h2>
            <p>PAM subscriptions are generally non-refundable once a billing period has commenced.</p>
            <p>Exceptions may be considered in the following circumstances:</p>
            <ul className="terms-check-list">
              <li>A technical fault caused by PAM prevented you from accessing the service</li>
              <li>You were charged in error</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>To request a refund under these circumstances, contact us at <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a> within 14 days of the charge. We will assess each request on a case-by-case basis.</p>
            <p>If your subscription was purchased through the Apple App Store, refunds are managed by Apple. You can submit a refund request at <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="privacy-link">reportaproblem.apple.com</a>. PAM has no control over Apple&apos;s refund decisions.</p>
            <div className="terms-note">Nothing in these Terms limits your rights under the Australian Consumer Law.</div>
          </div>

          <div className="privacy-section">
            <h2>7. Price Changes</h2>
            <p>PAM reserves the right to change subscription pricing. Where a price increase affects your plan, we will provide at least 30 days&apos; notice via email or in-app notification before the change takes effect. Continued use of PAM after the notice period constitutes acceptance of the new price.</p>
          </div>

          <div className="privacy-section">
            <h2>8. Child Profiles and Family Data</h2>
            <p>You are solely responsible for the child profiles and family information you create and store within PAM. By adding a child profile, you confirm that you are the parent or legal guardian of that child and that you have the right to manage their information within the app.</p>
            <p>PAM does not verify the relationship between account holders and the children they add to the app.</p>
            <p>You agree not to add profiles for individuals without the appropriate parental or guardian authority to do so.</p>
          </div>

          <div className="privacy-section">
            <h2>9. Location Features</h2>
            <p>Certain features of PAM allow you to enable location monitoring for linked devices. By enabling these features, you confirm that:</p>
            <ul className="terms-check-list">
              <li>You have the legal right to monitor the device in question</li>
              <li>Where required, appropriate consent has been obtained from the device user</li>
              <li>You will use location data only for lawful family management purposes</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>PAM accepts no liability for how location data is interpreted or acted upon by the account holder.</p>
          </div>

          <div className="privacy-section">
            <h2>10. Acceptable Use</h2>
            <p>You agree to use PAM only for lawful purposes and in accordance with these Terms. You must not:</p>
            <ul className="terms-cross-list">
              <li>Use PAM to monitor any person without lawful authority to do so</li>
              <li>Attempt to gain unauthorised access to any part of the app or its systems</li>
              <li>Use PAM to harass, stalk, or harm any individual</li>
              <li>Upload or transmit any content that is unlawful, offensive, or infringing</li>
              <li>Reverse engineer, copy, or reproduce any part of the PAM app or platform</li>
              <li>Use PAM for any commercial purpose without our written consent</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>PAM reserves the right to suspend or terminate accounts that breach these conditions without notice or refund.</p>
          </div>

          <div className="privacy-section">
            <h2>11. Intellectual Property</h2>
            <p>The PAM app, website, brand, logo, design, and all content created by PAM are the intellectual property of PAM (Parental Admin Manager) and are protected under Australian copyright and trademark law.</p>
            <p>You are granted a limited, non-exclusive, non-transferable licence to use PAM for personal, family management purposes only. This licence does not permit you to copy, modify, distribute, or commercially exploit any part of the platform.</p>
            <p>You retain ownership of any personal data, photos, notes, and memories you store within the app. By uploading content to PAM, you grant us a limited licence to store and process that content solely for the purpose of providing the service to you.</p>
          </div>

          <div className="privacy-section">
            <h2>12. Privacy</h2>
            <p>Your use of PAM is also governed by our <a href="/privacy" className="privacy-link">Privacy Policy</a>, which is incorporated into these Terms by reference. By using PAM, you also agree to our Privacy Policy.</p>
          </div>

          <div className="privacy-section">
            <h2>13. Disclaimers</h2>
            <p>PAM is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the maximum extent permitted by law, we make no warranties or representations that:</p>
            <ul className="terms-cross-list">
              <li>PAM will be uninterrupted, error-free, or secure at all times</li>
              <li>The information or features within PAM will always be accurate or complete</li>
              <li>PAM will meet your specific requirements</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>We reserve the right to modify, suspend, or discontinue any feature of PAM at any time with reasonable notice where possible.</p>
          </div>

          <div className="privacy-section">
            <h2>14. Limitation of Liability</h2>
            <p>To the maximum extent permitted by Australian law, PAM and its founders, employees, and contractors will not be liable for any indirect, incidental, special, or consequential loss or damage arising from your use of the app, including but not limited to loss of data, loss of revenue, or reliance on any content within PAM.</p>
            <p>Our total liability to you for any claim arising out of or relating to these Terms or your use of PAM shall not exceed the amount you paid to PAM in the 3 months preceding the claim.</p>
            <div className="terms-note">Nothing in these Terms excludes or limits any rights you have under the Australian Consumer Law that cannot be excluded or limited by agreement.</div>
          </div>

          <div className="privacy-section">
            <h2>15. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. When we do, we will revise the &ldquo;last updated&rdquo; date at the top of this page. Where changes are material, we will notify you by email or in-app notification at least 14 days before they take effect.</p>
            <p>Continued use of PAM after changes take effect constitutes your acceptance of the updated Terms.</p>
          </div>

          <div className="privacy-section">
            <h2>16. Termination</h2>
            <p>We reserve the right to suspend or terminate your account at our discretion if you breach these Terms, engage in fraudulent activity, or use PAM in a way that may cause harm to others.</p>
            <p>If your account is terminated for a breach of these Terms, you will not be entitled to a refund for any unused subscription period.</p>
            <p>You may also terminate your account at any time by contacting us at <a href="mailto:hello@parentaladminmanager.com" className="privacy-link">hello@parentaladminmanager.com</a>. Account deletion is subject to the data retention terms set out in our Privacy Policy.</p>
          </div>

          <div className="privacy-section">
            <h2>17. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Victoria, Australia. Any disputes arising out of or in connection with these Terms will be subject to the exclusive jurisdiction of the courts of Victoria.</p>
          </div>

          <div className="privacy-section" style={{ borderBottom: 'none' }}>
            <div style={{ background: 'var(--wine)', borderRadius: 12, padding: '2rem', textAlign: 'center' }}>
              <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Questions about these Terms?</p>
              <a href="mailto:hello@parentaladminmanager.com" className="privacy-link" style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>hello@parentaladminmanager.com</a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
