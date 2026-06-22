import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { memoriesMetadata } from '../../metadata'
import { buildFaqSchema } from '../../structured-data'

export const metadata: Metadata = memoriesMetadata

const faqSchema = buildFaqSchema([
  { q: 'What is the best app for saving baby memories in Australia?', a: 'PAM\'s Memories feature lets you capture photos, voice notes, and milestone moments in one place — organised by your baby\'s age and stored alongside the context that makes them meaningful. Unlike a camera roll, memories in PAM are dated, tagged, and never get buried under 3,000 other photos.' },
  { q: 'Can I save voice notes as baby memories in PAM?', a: 'Yes. PAM lets you record voice notes as memories — the sound of a first laugh, a babbled first word, a bedtime routine. These are stored alongside photos and milestone records, with the date and context preserved.' },
  { q: 'Is there an app that acts as a digital baby book?', a: 'Yes — PAM\'s Memories feature is designed as a living digital baby book. You can capture photos, voice notes, and milestone moments, and they are stored chronologically alongside your baby\'s age and development records. It updates as your baby grows, rather than being a one-time keepsake you fill in.' },
  { q: 'Can both parents add memories in PAM?', a: 'Yes. Both parents can add photos, voice notes, and milestone moments from their own devices. All memories are shared in the family space, so neither parent misses a moment — even if they were not there for it.' },
  { q: 'Does PAM save baby milestone moments automatically?', a: 'When you check off a milestone in PAM\'s Smart Checklist, you can add a photo or note to mark the moment and it is saved as a memory. This means your developmental record and your memory keeping are connected, rather than living in separate apps.' },
])

export default function MemoriesFeaturePage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
      <section className="hero feature-hero">
        <div className="container">
          <div className="feature-hero-grid">
            <div className="feature-hero-copy">
              <span className="eyebrow">App · Memories</span>
              <h1 className="display-xl feature-hero-title">The little moments, <em>saved as they happen.</em></h1>
              <p className="feature-hero-lead">
                Voice notes. Photos. First smiles, first rolls, first steps. The sounds that disappear by week six.
                Captured in a single tap, gently gathered into your family&apos;s story.
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
                src="/WhatsApp Video 2026-06-18 at 1.24.08 PM.mp4"
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
              <p>The first year is full of moments you assume you&apos;ll never forget.</p>
              <p>Then one day you realise you can&apos;t remember exactly when they stopped sleeping on your chest, making that funny noise, or reaching for your hand.</p>
              <p>PAM gives those moments a place to live. A simple way to capture memories as they happen, and revisit them months or years later.</p>
              <p>Because the moments that matter most are often the ones nobody thinks to write down.</p>
            </div>
            <div className="feature-image-placeholder">
              <Image src="/memories-why-matters.png" alt="Memories why it matters" width={500} height={600} style={{width: '100%', height: 'auto'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="feature-grid-section">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2>One tap. <span className="em">Saved forever.</span></h2>
          </div>
          <div className="feature-grid">
            <div className="feature-tile">
              <h3>Voice notes</h3>
              <p>Press and hold to record. The sound of a giggle, a first word, a 3am settle song. Kept exactly as it was.</p>
            </div>
            <div className="feature-tile">
              <h3>Photo moments</h3>
              <p>Tap a photo from your camera roll and attach a note. PAM saves it to the right day, the right milestone, the right child.</p>
            </div>
            <div className="feature-tile">
              <h3>Milestone entries</h3>
              <p>First smile. First roll. First word. PAM prompts you when each milestone is typically due and saves it to your timeline forever.</p>
            </div>
            <div className="feature-tile">
              <h3>Browse by month</h3>
              <p>Scroll back through any month of your child&apos;s life and see what happened, who said what, what you noticed.</p>
            </div>
            <div className="feature-tile">
              <h3>Shared with family</h3>
              <p>Grandparents, godparents, anyone you choose. They see what you choose to share, when you choose to share it.</p>
            </div>
            <div className="feature-tile">
              <h3>Print-ready baby book</h3>
              <p>Export any year as a beautifully laid-out baby book. The keepsake your parents made by hand, without the cutting and gluing.</p>
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
