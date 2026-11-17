import type { Metadata } from 'next'
import { giftThanksMetadata } from '../../metadata'

export const metadata: Metadata = giftThanksMetadata

export default function GiftThanksPage() {
  return (
    <main>
      <section className="gift-hero gift-thanks">
        <div className="container">
          <span className="eyebrow">Thank you</span>
          <h1 className="gift-hero-h">Your gift is <span className="em">on its way.</span></h1>
          <p className="feature-prose">
            We’ve emailed you a confirmation, and the gift code has been sent to the email address you entered.
            <br />
            It can take a few minutes to arrive, also check the junk folder in case it has landed there.
          </p>
          <p className="feature-prose">
            Questions? Email <a href="mailto:support@parentaladminmanager.com">support@parentaladminmanager.com</a>.
          </p>
          <a href="/" className="send-btn gift-home">Back to PAM</a>
        </div>
      </section>
    </main>
  )
}
