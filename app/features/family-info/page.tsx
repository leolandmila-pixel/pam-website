import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { familyInfoMetadata } from '../../metadata'

export const metadata: Metadata = familyInfoMetadata

export default function FamilyInfoFeaturePage() {
  return (
    <main>
      <section className="hero feature-hero">
        <div className="container">
          <div className="feature-hero-grid">
            <div className="feature-hero-copy">
              <span className="eyebrow">App · Family Info</span>
              <h1 className="display-xl feature-hero-title">Whatever you&apos;d scramble for at 2am.</h1>
              <p className="feature-hero-lead">
                The people, details and services that hold your family together - kept close, organised, and ready
                exactly when you need them.
              </p>
              <a href="https://tally.so/r/q4J1vg" target="_blank" rel="noreferrer" className="quiz-cta feature-cta">
                Get early access
                <span className="arrow">
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </a>
            </div>
            <div className="feature-hero-phone">
              <Image src="/phone-family.jpg" alt="PAM Family Info screen" width={300} height={650} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-body">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Why it matters</span>
            <h2>The info you need, <span className="em">where you need it.</span></h2>
          </div>
          <p className="feature-prose">
            Emergency numbers. GP contacts. Blood types. Allergies. The childcare educator&apos;s name. The school
            uniform supplier. Insurance details. Medicare numbers. Lockbox codes. Half of it lives in a notes app,
            half on a fridge magnet, half in your head - and none of it is where you need it at the worst possible
            moment.
          </p>
          <p className="feature-prose">
            PAM&apos;s Family Info tab gathers all of it in one place. People, records and services for every member of
            your family - searchable, shareable, and quietly there when you need it most.
          </p>
        </div>
      </section>

      <section className="feature-grid-section">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">What lives here</span>
            <h2>Everything that holds the <span className="em">family together.</span></h2>
          </div>
          <div className="feature-grid">
            <div className="feature-tile">
              <h3>People</h3>
              <p>Every family member with their key details - blood type, allergies, medications, conditions, Medicare number, emergency contacts.</p>
            </div>
            <div className="feature-tile">
              <h3>Records</h3>
              <p>Immunisation history, GP visit notes, prescription history, hospital discharges. The medical paper trail without the paper.</p>
            </div>
            <div className="feature-tile">
              <h3>Services</h3>
              <p>Childcare, school, GP, paediatrician, dentist, optometrist, lactation consultant, insurance - saved with the info you actually need (after-hours numbers, account references).</p>
            </div>
            <div className="feature-tile">
              <h3>Journey timeline</h3>
              <p>Key family dates and milestones gathered in one chronological view. The story of your family at a glance.</p>
            </div>
            <div className="feature-tile">
              <h3>Shared with carers</h3>
              <p>Hand off to a grandparent, babysitter or sleep-school nurse with a read-only view. No more 3am phone calls because nobody knows the formula brand.</p>
            </div>
            <div className="feature-tile">
              <h3>Private and secure</h3>
              <p>Encrypted at rest. Never sold. Never used to train anything. You decide who sees what, and you can revoke access in a tap.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-callout-section">
        <div className="container">
          <div className="story-callout feature-callout">
            <h4>From the founding mums</h4>
            <p>&ldquo;Whatever I&apos;d scramble for at 2am, already where it should be.&rdquo;</p>
          </div>
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
          <p className="feature-back"><Link href="/#showcase">← Back to all features</Link></p>
        </div>
      </section>
    </main>
  )
}
