import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { familyInfoMetadata } from '../../metadata'
import { buildFaqSchema } from '../../structured-data'

export const metadata: Metadata = familyInfoMetadata

const faqSchema = buildFaqSchema([
  { q: 'Can I store my baby\'s medical information in PAM?', a: 'Yes. PAM\'s Family Hub stores your baby\'s health card details, Medicare number, GP and specialist information, vaccination history, medications, allergies, and appointment notes. Everything is in one place so you\'re never searching for it in a waiting room or when a carer asks.' },
  { q: 'Can I share my family\'s health information with a carer or grandparent?', a: 'Yes. You can invite trusted people — a partner, grandparent, or regular carer — to your PAM family space. They get their own login and access to the health information you choose to share, so whoever is looking after your child has everything they need.' },
  { q: 'Is there an app to store my child\'s medical history in Australia?', a: 'Yes — PAM\'s Family Hub is designed for exactly this. It stores vaccination records, allergy information, medication details, doctor and specialist contacts, and notes from healthcare appointments. It replaces the scattered notes, photos of paperwork, and memory-dependent system most parents currently rely on.' },
  { q: 'What information can I store in PAM\'s Family Hub?', a: 'PAM\'s Family Hub stores: child health record details (the Blue Book/Personal Health Record), Medicare and health insurance information, GP and specialist names and contact details, current medications and dosages, known allergies and reactions, vaccination history, and notes from healthcare appointments.' },
  { q: 'Is my family\'s health information secure in PAM?', a: 'Yes. All data in PAM is encrypted and stored securely. Your family\'s health information is never sold or shared with advertisers. Only you and the people you explicitly invite can access your family space.' },
])

export default function FamilyInfoFeaturePage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              <video
                src="/WhatsApp Video 2026-06-18 at 1.24.03 PM.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', maxWidth: 280, height: 'auto', display: 'block', borderRadius: 32, boxShadow: '0 30px 80px rgba(74,7,19,0.22)' }}
              />
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
              </div>
              <p>Family life runs on hundreds of little pieces of information. The kind you don&apos;t need every day, but need immediately when you do.</p>
              <p>PAM keeps your family&apos;s important information together in one secure place, so it&apos;s easy to access, easy to share, and available to the people who need it.</p>
              <p>It also brings together trusted local services, resources and guides relevant to your family and where you live. From healthcare and immunisation information to childcare, schools and parenting support, the information that helps families navigate everyday life is already within reach.</p>
              <p>Whether you&apos;re enrolling, booking, updating, registering or simply looking for answers, PAM gives your family a reliable place to start.</p>
              <p>Because the important details shouldn&apos;t depend on who remembers them.</p>
            </div>
            <div className="feature-image-placeholder">
              <Image src="/family-hub-why-matters.png" alt="Family Hub why it matters" width={500} height={600} style={{width: '100%', height: 'auto'}} />
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
              <p>Every family member with their key details. Blood type, allergies, medications, conditions, Medicare number, emergency contacts.</p>
            </div>
            <div className="feature-tile">
              <h3>Records</h3>
              <p>Immunisation history, GP visit notes, prescription history, hospital discharges. The medical paper trail without the paper.</p>
            </div>
            <div className="feature-tile">
              <h3>Services</h3>
              <p>Childcare, school, GP, paediatrician, dentist, optometrist, lactation consultant, insurance. Saved with the info you actually need, after-hours numbers, account references.</p>
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
    </>
  )
}
