import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { trackerMetadata } from '../../metadata'

export const metadata: Metadata = trackerMetadata

export default function TrackerFeaturePage() {
  return (
    <main>
      <section className="hero feature-hero">
        <div className="container">
          <div className="feature-hero-grid">
            <div className="feature-hero-copy">
              <span className="eyebrow">App · Tracker</span>
              <h1 className="display-xl feature-hero-title">Every part of your baby&apos;s day, in <em>one calm</em> place.</h1>
              <p className="feature-hero-lead">
                Daily logs, percentile charts, clear reports and nap predictions built around your baby. Shared with
                your partner so you&apos;re never the only one keeping track.
              </p>
              <a href="https://tally.so/r/q4J1vg" target="_blank" rel="noreferrer" className="quiz-cta feature-cta">
                Get early access
                <span className="arrow">
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </a>
            </div>
            <div className="feature-hero-phone">
              <Image src="/phone-tracker.jpeg" alt="PAM Tracker screen" width={420} height={910} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-body">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Why it matters</span>
            <h2>One place. <span className="em">Both of you.</span></h2>
          </div>
          <p className="feature-prose">
            New parents track dozens of data points by hand - feeds, sleeps, nappies, weight, percentile, milestones -
            usually scattered across three apps and a notebook. PAM puts all of it in one place that updates in real
            time, and shares with your partner so you both see the same picture.
          </p>
          <p className="feature-prose">
            No more &ldquo;has she fed yet?&rdquo; texts. No more guessing whether the last nap was 40 minutes or two
            hours. The day is written down as it happens, by either of you.
          </p>
        </div>
      </section>

      <section className="feature-grid-section">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">What you can track</span>
            <h2>Built for the way <span className="em">parenting actually works.</span></h2>
          </div>
          <div className="feature-grid">
            <div className="feature-tile">
              <h3>Feeding</h3>
              <p>Breast, bottle or expressed - log feeds in seconds. PAM tracks duration, side, volume and time-since-last automatically.</p>
            </div>
            <div className="feature-tile">
              <h3>Sleep &amp; nap prediction</h3>
              <p>Naps and night sleep logged with one tap. PAM learns your baby&apos;s rhythm and suggests the next sleep window.</p>
            </div>
            <div className="feature-tile">
              <h3>Nappies</h3>
              <p>Wet, dirty, both. Tap to log. PAM flags if a stretch is unusually quiet so you can mention it at the next MCH visit.</p>
            </div>
            <div className="feature-tile">
              <h3>Growth &amp; percentiles</h3>
              <p>Weight, length and head circumference plotted against the WHO percentile curves used by Australian MCH nurses.</p>
            </div>
            <div className="feature-tile">
              <h3>Milestones</h3>
              <p>First smile. First roll. First steps. PAM prompts you when each one is typically due, so you can celebrate (and notice if something&apos;s a bit late).</p>
            </div>
            <div className="feature-tile">
              <h3>GP-ready reports</h3>
              <p>One tap and PAM gives you a clean summary of the last week - feeds, sleeps, nappies, weight. Show your GP or MCH nurse and skip the &ldquo;how often have you been feeding?&rdquo; guessing.</p>
            </div>
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
