import type { Metadata } from 'next'
import Image from 'next/image'
import PricingFeatures from '@/components/PricingFeatures'

export const metadata: Metadata = {
  title: "What's Inside PAM | Parental Admin Manager",
  description: "Everything a parent needs, all in one place. Smart Checklist, Tracker, Family Hub and Memories.",
}

export default function AppFeaturesPage() {
  return (
    <main>
      <section className="pricing-hero-banner">
        <Image
          src="/DSC01229.JPG"
          alt="Mother holding baby"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div className="pricing-hero-overlay" />
        <div className="pricing-hero-content">
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
