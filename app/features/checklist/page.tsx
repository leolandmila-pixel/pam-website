import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { checklistMetadata } from '../../metadata'

export const metadata: Metadata = checklistMetadata

export default function ChecklistFeaturePage() {
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
              <Image src="/phone-checklist.jpeg" alt="PAM Smart Checklist screen" width={420} height={910} priority />
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
                <h2>The mental load, <span className="em">lightened.</span></h2>
              </div>
              <p>When a new baby arrives, there&apos;s suddenly so much to remember - birth registrations, immunisations, check-ups, MCH visits and countless appointments. At the exact moment your brain is already stretched thin.</p>
              <p>Most parenting apps give you a blank calendar and leave the planning to you. PAM takes a different approach.</p>
              <p>Our Smart Checklist already knows what needs to happen, when it needs to happen, and what applies in your area. No digging through government websites. No researching immunisation schedules. No setting up complicated reminders.</p>
              <p>Just open PAM and see the next thing that needs your attention.</p>
            </div>
            <div className="feature-image-placeholder">
              <Image src="/checklist-feature.png" alt="Smart Checklist feature" fill style={{objectFit: 'contain'}} />
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
              <p>Every state&apos;s MCH visit schedule, blue book milestones, immunisation timeline, and birth-registration steps. We&apos;ve done the research so you don&apos;t.</p>
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
  )
}
