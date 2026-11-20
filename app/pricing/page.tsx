import type { Metadata } from 'next'
import { pricingMetadata } from '../metadata'
import Image from 'next/image'
import Link from 'next/link'
import PricingTiles from '@/components/PricingTiles'

export const metadata: Metadata = pricingMetadata

export default function PricingPage() {
  return (
    <main>
      {/* Image hero banner */}
      <section className="pricing-hero-banner">
        <Image
          src="/pricing-hero.jpg"
          alt="Mother holding baby"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div className="pricing-hero-overlay" />
        <div className="pricing-hero-content">
          <h1 className="pricing-hero-heading">
            Choose a plan that works<br />for you and your family.
          </h1>
          <p className="pricing-hero-sub">Every plan. Every feature. No surprises.</p>
        </div>
      </section>

      <section className="pricing-section" style={{ paddingTop: 60 }}>
        <div className="container">
          <PricingTiles />
          <p className="pricing-fineprint">
            Prices in AUD, including any GST charged by the App Store or Google Play. Free plan available - upgrade anytime. Cancel anytime in the app - no questions asked.
          </p>
          <p className="pricing-gift">
            Buying for someone else? <Link href="/gift">Give PAM as a gift →</Link>
          </p>
        </div>
      </section>

      <section className="feature-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>PAM is now on the <span className="em">App Store.</span></h2>
          <p className="feature-prose" style={{ margin: '14px auto 28px', maxWidth: 540 }}>
            Start for free today - no credit card needed.
          </p>
          <a href="https://apps.apple.com/au/app/parental-admin-manager/id6780860987" target="_blank" rel="noreferrer" className="quiz-cta feature-cta">
            Get PAM free
            <span className="arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </a>
        </div>
      </section>

    </main>
  )
}
