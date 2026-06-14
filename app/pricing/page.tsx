import type { Metadata } from 'next'
import { pricingMetadata } from '../metadata'
import Image from 'next/image'
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
            Prices in AUD. Includes GST. 14-day free trial on every plan. Cancel anytime in the app - no questions asked.
          </p>
        </div>
      </section>

      <section className="feature-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Join the PAM <span className="em">waitlist.</span></h2>
          <p className="feature-prose" style={{ margin: '14px auto 28px', maxWidth: 540 }}>
            Pre-sign up is open. We&apos;re launching to a small group of founding families first.
          </p>
          <a href="https://tally.so/r/q4J1vg" target="_blank" rel="noreferrer" className="quiz-cta feature-cta">
            Get early access
            <span className="arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </a>
        </div>
      </section>

    </main>
  )
}
