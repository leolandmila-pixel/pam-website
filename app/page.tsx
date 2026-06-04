import type { Metadata } from 'next'
import Image from 'next/image'
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
            <div className="hero-signup" id="founding">
              <span className="eyebrow hero-signup-eyebrow">Pre-sign up is open</span>
              <FoundingListForm />
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

          {/* Featured testimonial — swap photo + copy when a real one is ready */}
          <div className="tst-featured">
            <div className="tst-featured-photo">
              <Image src="/testimonial-1.jpg" alt="Sarah" fill sizes="148px" style={{ objectFit: 'cover', objectPosition: 'center 20%' }} />
            </div>
            <div className="stars">★★★★★</div>
            <p className="tst-featured-quote">&ldquo;PAM has completely changed the way I parent — I&apos;m no longer the only one holding everything in my head, and that has given me back so much more than just time.&rdquo;</p>
            <div className="tst-featured-who">
              <b>Sarah</b>
              <span>Mum of two · Working full-time</span>
            </div>
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
