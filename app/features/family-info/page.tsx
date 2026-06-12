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
              <span className="eyebrow">App · Family Hub</span>
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
              <Image src="/phone-family.jpeg" alt="PAM Family Hub screen" width={420} height={910} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-body">
        <div className="container">
          <div className="feature-content-grid">
            <div className="feature-text-card">
              <div className="sec-head" style={{marginBottom: '16px', textAlign: 'left', maxWidth: 'none'}}>
                <span className="eyebrow">Why it matters</span>
                <h2>The details, <span className="em">organised.</span></h2>
              </div>
              <p>Family life runs on hundreds of little pieces of information. The kind you don&apos;t need every day, but need immediately when you do.</p>
              <p>PAM keeps your family&apos;s important information together in one secure place, so it&apos;s easy to access, easy to share, and available to the people who need it.</p>
              <p>It also brings together trusted local services, resources and guides relevant to your family and where you live. From healthcare and immunisation information to childcare, schools and parenting support, the information that helps families navigate everyday life is already within reach.</p>
              <p>Whether you&apos;re enrolling, booking, updating, registering or simply looking for answers, PAM gives your family a reliable place to start.</p>
              <p>Because the important details shouldn&apos;t depend on who remembers them.</p>
            </div>
            <div className="feature-image-placeholder">
              <Image src="/family-info-why-matters.png" alt="Family Hub why it matters" width={500} height={600} style={{width: '100%', height: 'auto'}} />
            </div>
          </div>
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


      <section style={{ padding: '40px 0', textAlign: 'center' }}>
        <div className="container">
          <p className="feature-back"><Link href="/#showcase">← Back to all features</Link></p>
        </div>
      </section>
    </main>
  )
}
