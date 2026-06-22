import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { checklistMetadata } from '../../metadata'
import { buildFaqSchema } from '../../structured-data'

export const metadata: Metadata = checklistMetadata

const faqSchema = buildFaqSchema([
  { q: 'What is the PAM Smart Checklist?', a: 'The PAM Smart Checklist is a pre-loaded milestone and task checklist built specifically for Australian families. It includes MCH (Maternal and Child Health) visit reminders, the Australian National Immunisation Program schedule, Centrelink admin milestones, birth registration reminders, and developmental milestones from newborn to school age — all surfacing at exactly the right time.' },
  { q: 'Does PAM have the Australian MCH visit schedule pre-loaded?', a: 'Yes. PAM\'s Smart Checklist includes all standard Australian MCH visit ages: 1–4 weeks, 2 months, 4 months, 6 months, 12 months, 18 months, 2 years, 3.5 years, and the optional 4-year visit. You get a reminder before each one so you never miss an appointment.' },
  { q: 'Does PAM include the Australian immunisation schedule?', a: 'Yes. PAM includes the National Immunisation Program (NIP) schedule for Australia — from the birth Hepatitis B dose through to the 18-month and 4-year boosters. Each immunisation milestone is pre-loaded and appears at the right time in your checklist.' },
  { q: 'Can I add my own tasks to the PAM checklist?', a: 'Yes. As well as the pre-loaded Australian milestones, you can add your own custom tasks, reminders, and to-dos. PAM is designed to be the one place you hold everything your family needs to remember.' },
  { q: 'Is there an app that reminds me of baby appointments in Australia?', a: 'Yes — PAM is built for exactly this. The Smart Checklist is pre-loaded with the Australian MCH visit schedule, immunisation program, Centrelink claim milestones, and birth registration deadline — so you get prompted at the right time for every appointment and admin task in your baby\'s first year.' },
])

export default function ChecklistFeaturePage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  return (
    <main>
      <section className="hero feature-hero">
        <div className="container">
          <div className="feature-hero-grid">
            <div className="feature-hero-copy">
              <span className="eyebrow">App · Smart Checklist</span>
              <h1 className="display-xl feature-hero-title">Always know what&apos;s next.</h1>
              <p className="feature-hero-lead">
                Every appointment, immunisation and registration an Australian parent needs. Pre-loaded, date-aware, and gently surfacing exactly when you need to know.
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
                src="/WhatsApp Video 2026-06-18 at 1.13.37 PM.mp4"
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
              <p>When a new baby arrives, there&apos;s suddenly so much to remember - birth registrations, immunisations, check-ups, MCH visits and countless appointments. At the exact moment your brain is already stretched thin.</p>
              <p>Most parenting apps give you a blank calendar and leave the planning to you. PAM takes a different approach.</p>
              <p>Our Smart Checklist already knows what needs to happen, when it needs to happen, and what applies in your area. No digging through government websites. No researching immunisation schedules. No setting up complicated reminders.</p>
              <p>Just open PAM and see the next thing that needs your attention.</p>
            </div>
            <div className="feature-image-placeholder">
              <Image src="/checklist-why-matters.png" alt="Smart Checklist why it matters" width={500} height={600} style={{width: '100%', height: 'auto'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-grid-section">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">What&apos;s inside</span>
            <h2>Pre-loaded for <span className="em">Australian parents.</span></h2>
          </div>
          <div className="feature-grid">
            <div className="feature-tile">
              <h3>Australian-specific by default</h3>
              <p>Every state&apos;s MCH visit schedule, immunisation timeline, and birth registration steps already in the app. We&apos;ve done the research so you don&apos;t have to.</p>
            </div>
            <div className="feature-tile">
              <h3>Date-aware reminders</h3>
              <p>PAM nudges you the week before each appointment, then the day before, then the morning of. Quiet, calm, and never too late.</p>
            </div>
            <div className="feature-tile">
              <h3>Custom tasks for your family</h3>
              <p>Add the things only you know about - sleep school, allergist follow-up, swimming registration. Recurring or one-off, your call.</p>
            </div>
            <div className="feature-tile">
              <h3>Shared with your partner</h3>
              <p>Both of you see what&apos;s done and what&apos;s coming. No more being the only one holding it all.</p>
            </div>
            <div className="feature-tile">
              <h3>Done feels good</h3>
              <p>Tick something off and PAM saves it to your child&apos;s history. Future you (or your GP) can look back at what happened and when.</p>
            </div>
            <div className="feature-tile">
              <h3>Centrelink &amp; Medicare steps</h3>
              <p>The newborn upfront payment, parental leave pay, Medicare enrolment - guided steps with the links and deadlines you&apos;ll need.</p>
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
