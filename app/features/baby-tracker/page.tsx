import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { trackerMetadata } from '../../metadata'
import { buildFaqSchema } from '../../structured-data'

export const metadata: Metadata = trackerMetadata

const faqSchema = buildFaqSchema([
  { q: 'Is there a baby tracker app where both parents can log at the same time?', a: 'Yes — PAM\'s Daily Tracker is designed for exactly this. Both parents can log feeds, sleep, nappies, and measurements from their own devices simultaneously, and both see each other\'s entries in real time. No more asking "did you feed her?" at 3am.' },
  { q: 'What can I track in the PAM Daily Tracker?', a: 'PAM\'s Daily Tracker lets you log breastfeeds (including side and duration), bottle feeds (amount and type), solid meals, sleep sessions (start time, duration, and quality), nappy changes, and measurements like weight and head circumference.' },
  { q: 'What is the best baby tracking app for couples in Australia?', a: 'For couples who want to track together in real time, PAM is the strongest option available in Australia. Both partners log from their own devices and see each other\'s entries instantly. PAM also includes smart checklists, family health information, and memory keeping — so you\'re not managing multiple apps.' },
  { q: 'Does PAM track baby sleep?', a: 'Yes. PAM\'s tracker logs sleep sessions including start time, end time, duration, and whether it was a nap or night sleep. Both parents can see the full sleep history in real time, which helps identify patterns and decide when the next sleep window should be.' },
  { q: 'Can I track breastfeeding and bottle feeding in PAM?', a: 'Yes. PAM tracks both breastfeeding (including which side and duration) and bottle feeding (amount and formula or expressed milk). You can see a full feed history for the day at a glance, shared between both parents in real time.' },
])

export default function TrackerFeaturePage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
              <video
                src="/WhatsApp Video 2026-06-18 at 1.24.12 PM.mp4"
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
              <p>Breast, bottle or expressed. Log feeds in seconds. PAM tracks duration, side, volume and time-since-last automatically.</p>
            </div>
            <div className="feature-tile">
              <h3>Sleep &amp; nap prediction</h3>
              <p>Naps and night sleep logged with one tap. PAM learns your baby&apos;s rhythm and suggests the next sleep window.</p>
            </div>
            <div className="feature-tile">
              <h3>Nappies</h3>
              <p>Wet, dirty, both. Tap to log. PAM flags if a stretch goes unusually quiet so you can mention it at the next MCH visit.</p>
            </div>
            <div className="feature-tile">
              <h3>Growth &amp; percentiles</h3>
              <p>Weight, length and head circumference plotted against the WHO percentile curves used by Australian MCH nurses.</p>
            </div>
            <div className="feature-tile">
              <h3>Milestones</h3>
              <p>First smile. First roll. First steps. PAM prompts you when each one is typically due, so you can celebrate and notice if something&apos;s a bit late.</p>
            </div>
            <div className="feature-tile">
              <h3>GP-ready reports</h3>
              <p>One tap and PAM gives you a clean summary of the last week: feeds, sleeps, nappies, weight. Show your GP or MCH nurse and skip the guessing.</p>
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
