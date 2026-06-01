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
            <div className="floating-cta-wrap" style={{ marginTop: 32 }}>
              <Link href="#founding" className="floating-cta">
                Start your free 14-day PAM trial today
                <span className="arrow">
                  <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </Link>
            </div>
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
              <div className="flow-image flow-image--morning">
                <span className="flow-pill">Checklist · Morning</span>
              </div>
              <div className="flow-content">
                <h3>Morning</h3>
                <h4>Know what&apos;s ahead</h4>
                <p>Wake up to today&apos;s checklist already laid out. See what&apos;s due, who needs what, and start the day knowing nothing&apos;s slipping through.</p>
              </div>
            </article>
            <article className="flow-row">
              <div className="flow-image flow-image--midday">
                <span className="flow-pill">Tracker · Midday</span>
              </div>
              <div className="flow-content">
                <h3>Midday</h3>
                <h4>Stay in the loop</h4>
                <p>Pause for a quick log while bub naps. Tap in a feed, sync with your partner, and step away knowing everyone&apos;s on the same page.</p>
              </div>
            </article>
            <article className="flow-row">
              <div className="flow-image flow-image--afterschool">
                <span className="flow-pill">Calendar · After School</span>
              </div>
              <div className="flow-content">
                <h3>After School</h3>
                <h4>Keep life moving</h4>
                <p>Glance at the calendar between pickups. See permission slips, after-school plans and tomorrow&apos;s commitments, and keep life moving without missing a thing.</p>
              </div>
            </article>
            <article className="flow-row">
              <div className="flow-image flow-image--evening">
                <span className="flow-pill">Memories · Evening</span>
              </div>
              <div className="flow-content">
                <h3>Evening</h3>
                <h4>Reflect and prepare</h4>
                <p>Wind down with the day in voice notes. Tuck a memory into the baby book, peek at tomorrow&apos;s checklist, and rest knowing nothing&apos;s missed.</p>
              </div>
            </article>
            <article className="flow-row">
              <div className="flow-image flow-image--everyday">
                <span className="flow-pill">Family Info · Every Day</span>
              </div>
              <div className="flow-content">
                <h3>Every Day</h3>
                <h4>Build your family&apos;s story</h4>
                <p>Lean on PAM in the background. Capture the moments, organise the admin and share the load, and watch your family&apos;s story take shape — bit by bit.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section>
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Loved by early families</span>
            <h2>Real relief, in <span className="em">real life.</span></h2>
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
