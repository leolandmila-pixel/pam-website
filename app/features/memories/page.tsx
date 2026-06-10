import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { memoriesMetadata } from '../../metadata'

export const metadata: Metadata = memoriesMetadata

export default function MemoriesFeaturePage() {
  return (
    <main>
      <section className="pricing-hero-banner">
        <Image src="/pricing-hero.jpg" alt="" fill priority style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
        <div className="pricing-hero-overlay" />
        <div className="pricing-hero-content">
          <h1 className="pricing-hero-heading">The little moments, <em>saved as they happen.</em></h1>
          <p className="pricing-hero-sub">Voice notes, photos and milestones - captured in a single tap.</p>
        </div>
      </section>
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
          <div className="sec-head">
            <span className="eyebrow">Why it matters</span>
            <h2>The year that <span className="em">disappears.</span></h2>
          </div>
          <p className="feature-prose">
            The first year vanishes at a speed nobody warned you about. The sounds gone by week six. The expressions
            that change weekly. Most parents try to capture it and end up with thousands of unsorted photos in their
            camera roll, a few voice notes they can&apos;t find again, and the sense that they&apos;ve already missed
            something.
          </p>
          <p className="feature-prose">
            PAM&apos;s Memories tab makes capturing a moment a single tap - and saves it where you&apos;ll actually find
            it again. Searchable by month, by milestone, by mood. Your family&apos;s story, gathering quietly as you
            live it.
          </p>
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

      <section className="feature-callout-section">
        <div className="container">
          <div className="story-callout feature-callout">
            <h4>From the founding mums</h4>
            <p>&ldquo;The voice note is the thing I&apos;ll treasure forever. She&apos;ll never sound like that again, and I&apos;ve still got it.&rdquo;</p>
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
