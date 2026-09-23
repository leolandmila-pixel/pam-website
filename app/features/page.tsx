import type { Metadata } from 'next'
import Image from 'next/image'
import PricingFeatures from '@/components/PricingFeatures'

export const metadata: Metadata = {
  title: "What's Inside PAM: Checklist, Tracker & Family Hub",
  description: "Everything a parent needs in one place - Smart Checklist, Tracker, Family Hub and Memories, built to lighten the mental load for Australian families.",
  alternates: { canonical: 'https://parentaladminmanager.com/features' },
}

export default function AppFeaturesPage() {
  return (
    <main>
      <section className="pricing-hero-banner">
        <Image
          src="/WhatsApp Image 2026-06-18 at 12.55.24 PM.jpeg"
          alt="Mother holding baby"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div className="pricing-hero-overlay" />
        <div className="pricing-hero-content" style={{ marginTop: 0 }}>
          <h1 className="pricing-hero-heading">
            Everything your family<br />needs, all in one place.
          </h1>
        </div>
      </section>

      <div className="pfeat-wrapper">
        <PricingFeatures />
      </div>

      <section className="feature-cta-section" style={{ paddingTop: 80 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>PAM is now on the <span className="em">App Store.</span></h2>
          <p className="feature-prose" style={{ margin: '14px auto 28px', maxWidth: 540 }}>
            Start your free 14-day trial today — no commitment needed.
          </p>
          <a href="https://apps.apple.com/au/app/parental-admin-manager/id6780860987" target="_blank" rel="noreferrer" className="quiz-cta feature-cta">
            Start your free PAM trial
            <span className="arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </a>
        </div>
      </section>
    </main>
  )
}
