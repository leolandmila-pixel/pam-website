import type { Metadata } from 'next'
import Image from 'next/image'
import { homepageMetadata } from './metadata'
import ChaosQuiz from '@/components/ChaosQuiz'

export const metadata: Metadata = homepageMetadata

const CheckIcon = () => (
  <svg className="hero-check-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="9" fill="var(--wine)" />
    <path d="M4.5 9.5L7.5 12.5L13.5 6.5" stroke="#fff" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HomePage() {
  return (
    <main>
      {/* ============== HERO ============== */}
      <section className="hero hero-video">
        <video
          className="hero-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-copy hero-copy-center">
            <h1 className="display-xl">
              <span className="word">The</span>{' '}
              <span className="word">mental</span>{' '}
              <span className="word">load,</span>{' '}
              <span className="word"><strong>managed.</strong></span>
            </h1>
            <p className="hero-sub">
              PAM is the assistant every parent deserves - built for the appointments, checklists, milestones and quiet moments that make up a family. So you have more space for what <span style={{whiteSpace:'nowrap'}}>matters most.</span>
            </p>
            <div className="hero-signup" id="founding">
              <a href="https://apps.apple.com/au/app/parental-admin-manager/id6780860987" target="_blank" rel="noreferrer" className="hero-signup-pill">
                Start your free PAM trial
              </a>
            </div>
          </div>
        </div>
        <a href="#hero-split" className="scroll-down" aria-label="Scroll to next section">
          Scroll down
        </a>
      </section>

      {/* ============== HERO SPLIT ============== */}
      <section className="hero-split" id="hero-split">
        <div className="container">
          <div className="hero-split-inner">
            <div className="hero-split-copy">
              <span className="eyebrow">It starts with PAM.</span>
              <h1 className="hero-split-h1">Try PAM <em>free</em><br />for 14 <em>days.</em></h1>
              <p className="hero-split-sub">The admin, milestones and memories of family life, finally out of your head.</p>
              <ul className="hero-checklist">
                <li><CheckIcon />A Smart Checklist that knows what&apos;s due, and lets you hand tasks to your partner</li>
                <li><CheckIcon />Track feeds, sleep and nappies in one tap, for you and your partner</li>
                <li><CheckIcon />Nap predictions so you can actually plan your day</li>
                <li><CheckIcon />Voice Command: hold, talk, done. PAM turns it into a task or record</li>
                <li><CheckIcon />A baby book that builds itself, with milestones, photos, letters and voice notes</li>
                <li><CheckIcon />Australian guides for every stage, tailored to your state</li>
              </ul>
              <a
                href="https://apps.apple.com/au/app/parental-admin-manager/id6780860987"
                target="_blank"
                rel="noreferrer"
                className="appstore-badge hero-appstore-badge"
                aria-label="Download PAM on the App Store"
              >
                <svg width="18" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="appstore-badge-text">
                  <span className="appstore-badge-sub">Download on the</span>
                  <span className="appstore-badge-main">App Store</span>
                </span>
              </a>
            </div>
            <div className="hero-phones">
              <div className="hero-phone hero-phone--left">
                <Image src="/phone-nap.jpg" alt="PAM Nap Predictions" width={158} height={342} style={{width:'100%',height:'auto'}} />
              </div>
              <div className="hero-phone hero-phone--center">
                <Image src="/phone-checklist.jpg" alt="PAM Smart Checklist" width={188} height={407} style={{width:'100%',height:'auto'}} priority />
              </div>
              <div className="hero-phone hero-phone--right">
                <Image src="/phone-voice.jpg" alt="PAM Voice Command" width={158} height={342} style={{width:'100%',height:'auto'}} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== LIFE WITH PAM ============== */}
      <section className="lifewith">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Life with PAM</span>
            <h2>Designed around the <em>realities</em> of parenting.</h2>
          </div>
          <div className="life-grid">
            <article className="life-card life-card--organise">
              <div className="life-headline"><h3>Stay Organised</h3></div>
              <p className="life-body">Never miss an appointment, self care or important date.</p>
            </article>
            <article className="life-card life-card--prepare">
              <div className="life-headline"><h3>Stay Prepared</h3></div>
              <p className="life-body">Keep essential family information at your fingertips.</p>
            </article>
            <article className="life-card life-card--connect">
              <div className="life-headline"><h3>Stay Connected</h3></div>
              <p className="life-body">Share updates, milestones, and memories with the people who matter.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============== CHAOS QUIZ ============== */}
      <ChaosQuiz />

      {/* ============== A DAY IN THE LIFE ============== */}
      <section className="dayinlife">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">A day in the life with PAM</span>
            <h2>Your day, a little <em>more manageable.</em></h2>
          </div>
          <div className="flow-list">
            <article className="flow-row">
              <div className="flow-col">
                <div className="flow-image flow-image--morning">
                  <span className="flow-pill">Morning · Smart Checklist</span>
                </div>
              </div>
              <div className="flow-content">
                <h3>Morning</h3>
                <h4>A clear start</h4>
                <p>Wake to a day already laid out - what&apos;s due, what&apos;s done, who needs what. The remembering&apos;s handled, so you can simply be present.</p>
              </div>
            </article>
            <article className="flow-row">
              <div className="flow-col">
                <div className="flow-image flow-image--midday">
                  <span className="flow-pill">Midday · Tracker</span>
                </div>
              </div>
              <div className="flow-content">
                <h3>Midday</h3>
                <h4>A shared pause</h4>
                <p>While bub naps, a few taps keeps the day captured - a feed here, a sleep there. Your partner sees every entry, so you&apos;re never the only one keeping track.</p>
              </div>
            </article>
            <article className="flow-row">
              <div className="flow-col">
                <div className="flow-image flow-image--afternoon">
                  <span className="flow-pill">Afternoon · Calendar</span>
                </div>
              </div>
              <div className="flow-content">
                <h3>Afternoon</h3>
                <h4>The week, in hand</h4>
                <p>As the afternoon softens, look to what&apos;s coming - the next check-up, an appointment, a reminder you set weeks ago. Tomorrow arrives already handled.</p>
              </div>
            </article>
            <article className="flow-row">
              <div className="flow-col">
                <div className="flow-image flow-image--evening">
                  <span className="flow-pill">Evening · Memories</span>
                </div>
              </div>
              <div className="flow-content">
                <h3>Evening</h3>
                <h4>A soft landing</h4>
                <p>Wind down and let the day settle - a voice note, a photo tucked into the baby book, a glance at what tomorrow holds. Then rest, properly.</p>
              </div>
            </article>
            <article className="flow-row">
              <div className="flow-col">
                <div className="flow-image flow-image--everyday">
                  <span className="flow-pill">Every Day · Family Hub</span>
                </div>
              </div>
              <div className="flow-content">
                <h3>Every Day</h3>
                <h4>Your story, gathering</h4>
                <p>Through it all, PAM works quietly in the background - holding the details, easing the admin, gathering the moments. Bit by bit, your family&apos;s story takes shape.</p>
              </div>
            </article>
          </div>
        </div>
      </section>


    </main>
  )
}
