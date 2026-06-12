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
          <div className="feature-content-grid">
            <div className="feature-text-card">
              <div className="sec-head" style={{marginBottom: '16px', textAlign: 'left', maxWidth: 'none'}}>
                <span className="eyebrow">Why it matters</span>
              </div>
              <p>Feeds, sleeps, nappies, milestones, growth checks - there&apos;s a lot to keep track of in the first year. When information lives in different apps, notebooks or text messages, it&apos;s easy to lose track of the bigger picture.</p>
              <p>PAM keeps everything in one shared place, updating in real time for both parents.</p>
              <p>That means fewer check-in texts, fewer handover conversations, and less time trying to piece together what happened today.</p>
              <p>Just one up-to-date view of your baby&apos;s world, available whenever either of you needs it.</p>
            </div>
            <div className="feature-image-placeholder">
              <Image src="/tracker-why-matters.png" alt="Tracker why it matters" width={500} height={600} style={{width: '100%', height: 'auto'}} />
            </div>
          </div>
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


      <section style={{ padding: '40px 0', textAlign: 'center' }}>
        <div className="container">
          <p className="feature-back"><Link href="/#showcase">← Back to all features</Link></p>
        </div>
      </section>
    </main>
  )
}
