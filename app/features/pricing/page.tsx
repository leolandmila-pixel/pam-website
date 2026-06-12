import type { Metadata } from 'next'
import { pricingMetadata } from '../../metadata'
import Image from 'next/image'
import PricingTiles from '@/components/PricingTiles'
import PricingFeatures from '@/components/PricingFeatures'

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

      <PricingFeatures />
    </main>
  )
}
