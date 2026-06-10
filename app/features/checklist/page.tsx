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
              <h1 className="display-xl feature-hero-title">Never miss what&apos;s due.</h1>
              <p className="feature-hero-lead">
                Every appointment, registration and reminder Australian parents need to remember - pre-loaded, date-aware,
                and gently surfacing exactly when you need to know.
              </p>
              <a href="https://tally.so/r/q4J1vg" target="_blank" rel="noreferrer" className="quiz-cta feature-cta">
                Get early access
                <span className="arrow">
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </a>
            </div>
            <div className="feature-hero-phone">
              <Image src="/phone-checklist.jpg" alt="PAM Smart Checklist screen" width={300} height={650} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-body">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Why it matters</span>
            <h2>The remembering, <span className="em">handled.</span></h2>
          </div>
          <p className="feature-prose">
            Newborn life means dozens of appointments, registrations, immunisations and MCH visits - and a brain that
            suddenly can&apos;t hold any of it. Other apps give you a blank calendar and ask you to figure it out.
            PAM&apos;s Smart Checklist is different. It already knows what you need to do, when you need to do it, and
            where you live.
          </p>
          <p className="feature-prose">
            You don&apos;t set it up. You don&apos;t research the immunisation schedule or hunt down the birth
            registration form. PAM has done that. You just open the app and see what&apos;s next.
          </p>
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

      <section className="feature-callout-section">
        <div className="container">
          <div className="story-callout feature-callout">
            <h4>From the founding mums</h4>
            <p>&ldquo;The checklist told me exactly what to do in those first foggy weeks. I didn&apos;t miss a single appointment.&rdquo;</p>
          </div>
        </div>
      </section>

      <section className="feature-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Join the PAM <span className="em">waitlist.</span></h2>
          <p className="feature-prose" style={{ margin: '14px auto 28px', maxWidth: 540 }}>
            Pre-sign up is open. We&apos;re launching to a small group of founding families first - keep your spot before doors open.
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
