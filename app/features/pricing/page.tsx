import type { Metadata } from 'next'
import { pricingMetadata } from '../../metadata'
import PricingTiles from '@/components/PricingTiles'
import PricingFeatures from '@/components/PricingFeatures'

export const metadata: Metadata = pricingMetadata

export default function PricingPage() {
  return (
    <main>
      <section className="hero feature-hero" style={{ paddingBottom: 20 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>App · Pricing</span>
          <h1 className="display-xl feature-hero-title" style={{ marginTop: 14, marginBottom: 16 }}>
            One app. <em>Three plans.</em> No surprises.
          </h1>
          <p className="feature-hero-lead" style={{ margin: '0 auto 0', maxWidth: 600 }}>
            Choose what fits your family. Every plan unlocks the full PAM experience — the checklists, the tracker,
            family info, memories, all of it. Save when you pay yearly.
          </p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <PricingTiles />
          <p className="pricing-fineprint">
            Prices in AUD. Includes GST. 7-day free trial on every plan. Cancel anytime in the app — no questions asked.
          </p>
        </div>
      </section>

      <PricingFeatures />
    </main>
  )
}
