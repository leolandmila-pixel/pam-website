import type { Metadata } from 'next'
import { homepageMetadata } from './metadata'
import PhoneShowcase from '@/components/PhoneShowcase'
import FoundingListForm from '@/components/FoundingListForm'
import ChaosQuiz from '@/components/ChaosQuiz'

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

      {/* ============== CHAOS QUIZ ============== */}
      <ChaosQuiz />

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
