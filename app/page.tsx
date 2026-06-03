import type { Metadata } from 'next'
import Link from 'next/link'
import { homepageMetadata } from './metadata'
import PhoneShowcase from '@/components/PhoneShowcase'
import FoundingListForm from '@/components/FoundingListForm'

export const metadata: Metadata = homepageMetadata

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
              PAM is the assistant every parent deserves — built for the appointments, checklists, milestones and quiet moments that make up a family. So you have more space for what matters most.
            </p>
          </div>
        </div>
        <a href="#showcase" className="scroll-down" aria-label="Scroll to next section">
          Scroll down
        </a>
      </section>

      {/* ============== PHONE SHOWCASE ============== */}
      <section className="showcase" id="showcase">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">A look inside</span>
            <h2>Everything, in <em>one calm</em> place</h2>
          </div>
          <PhoneShowcase />
        </div>
      </section>

      {/* ============== FOUNDING LIST ============== */}
      <div className="founding" id="founding">
        <div className="container">
          <div className="founding-inner">
            <span className="eyebrow">Sign up to get early access</span>
            <h2 className="display-lg">Pre-Launch <em>Now Open</em></h2>
            <FoundingListForm />
          </div>
        </div>
      </div>

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

      {/* ============== A DAY IN THE LIFE ============== */}
      <section className="dayinlife">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">A day in the life</span>
            <h2>Calm, <em>daily flows</em> that stick.</h2>
          </div>
          <div className="flow-list">
            <article className="flow-row">
              <div className="flow-col">
                <div className="flow-image flow-image--morning">
                  <span className="flow-pill">Morning · Checklist</span>
                </div>
              </div>
              <div className="flow-content">
                <h3>Morning</h3>
                <h4>A clear start</h4>
                <p>Wake to a day already laid out — what&apos;s due, what&apos;s done, who needs what. The remembering&apos;s handled, so you can simply be present.</p>
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
                <p>While bub naps, a few taps keeps the day captured — a feed here, a sleep there. Your partner sees every entry, so you&apos;re never the only one keeping track.</p>
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
                <p>As the afternoon softens, look to what&apos;s coming — the next check-up, an appointment, a reminder you set weeks ago. Tomorrow arrives already handled.</p>
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
                <p>Wind down and let the day settle — a voice note, a photo tucked into the baby book, a glance at what tomorrow holds. Then rest, properly.</p>
              </div>
            </article>
            <article className="flow-row">
              <div className="flow-col">
                <div className="flow-image flow-image--everyday">
                  <span className="flow-pill">Every Day · Family Info</span>
                </div>
              </div>
              <div className="flow-content">
                <h3>Every Day</h3>
                <h4>Your story, gathering</h4>
                <p>Through it all, PAM works quietly in the background — holding the details, easing the admin, gathering the moments. Bit by bit, your family&apos;s story takes shape.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section>
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">The PAM experience</span>
            <h2>In their <span className="em">own words.</span></h2>
          </div>
          <div className="testimonials-grid">
            <div className="tst">
              <div className="stars">★★★★★</div>
              <p>&ldquo;I used to keep everything in my head and a dozen open tabs. PAM gave me my evenings back.&rdquo;</p>
              <div className="who">
                <div className="av" style={{ background: 'var(--wine)' }}>E</div>
                <div><b>Emma</b><span>Mum of two · VIC</span></div>
              </div>
            </div>
            <div className="tst">
              <div className="stars">★★★★★</div>
              <p>&ldquo;The checklist told me exactly what to do in those first foggy weeks. I didn&apos;t miss a single appointment.&rdquo;</p>
              <div className="who">
                <div className="av" style={{ background: 'var(--blush)', color: 'var(--wine)' }}>J</div>
                <div><b>Jess</b><span>First-time mum · NSW</span></div>
              </div>
            </div>
            <div className="tst">
              <div className="stars">★★★★★</div>
              <p>&ldquo;It feels less like an app and more like a friend who&apos;s three steps ahead of me.&rdquo;</p>
              <div className="who">
                <div className="av" style={{ background: 'var(--tan)' }}>L</div>
                <div><b>Liv</b><span>Mum of three · QLD</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
