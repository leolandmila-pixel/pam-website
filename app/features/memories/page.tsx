import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { memoriesMetadata } from '../../metadata'

export const metadata: Metadata = memoriesMetadata

export default function MemoriesFeaturePage() {
  return (
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
              <Image src="/phone-memories.jpg" alt="PAM Memories screen" width={420} height={910} priority />
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
                <h2>The year that <span className="em">disappears.</span></h2>
              </div>
              <p>The first year is full of moments you assume you&apos;ll never forget.</p>
              <p>Then one day you realise you can&apos;t remember exactly when they stopped sleeping on your chest, making that funny noise, or reaching for your hand.</p>
              <p>PAM gives those moments a place to live. A simple way to capture memories as they happen, and revisit them months or years later.</p>
              <p>Because the moments that matter most are often the ones nobody thinks to write down.</p>
            </div>
            <div className="feature-image-placeholder"></div>
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
              <p>Press and hold to record. The sound of a giggle, a first word, a 3am settle song - kept exactly as it was.</p>
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
  )
}
