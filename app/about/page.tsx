import type { Metadata } from 'next'
import { aboutMetadata } from '../metadata'

export const metadata: Metadata = aboutMetadata

export default function AboutPage() {
  return (
    <main>
      <section className="hero" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-story">
              <span className="eyebrow">Our Story</span>
              <h1 className="display-xl" style={{ fontSize: 'clamp(2.4rem,4.6vw,3.6rem)', margin: '18px 0 22px' }}>
                We&apos;re Oly &amp; Ash. Mums, founders <em>and best friends.</em>
              </h1>
              <p>We both have 15-month-olds — Mila (Ash) and Leo (Oly) — and like so many mums, we found ourselves in the thick of it together.</p>
              <p>The love, the chaos, the exhaustion… and the constant mental load no one really prepares you for. Somewhere between the feeds, the naps, the appointments and the endless to-do lists, we kept coming back to the same thought: <em>why are we trying to hold all of this on our own?</em></p>
              <p>We created PAM because we knew other mums were feeling it too. The remembering. The organising. The invisible weight that sits in your mind every single day.</p>
              <p>PAM is our way of supporting mums — not by adding more, but by taking something off your plate. Because you deserve to be present for the moments that matter most.</p>
            </div>
            <div className="about-art">
              <div className="mark">PAM<small>For the moments that matter</small></div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">What we believe</span>
            <h2>The values <span className="em">behind</span> PAM.</h2>
          </div>
          <div className="values-grid">
            <div className="value">
              <div className="v-ico">
                <svg viewBox="0 0 24 24"><path d="M3 12h4l2-7 4 14 2-7h4" /></svg>
              </div>
              <h3>Calm by design</h3>
              <p>Less noise, fewer notifications. Only what matters, exactly when it matters.</p>
            </div>
            <div className="value">
              <div className="v-ico">
                <svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <h3>Privacy first</h3>
              <p>Your family&apos;s data is yours. Always encrypted, never sold — full stop.</p>
            </div>
            <div className="value">
              <div className="v-ico">
                <svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M15.5 18.5c0-2 1.6-3.4 4-3.4" /></svg>
              </div>
              <h3>Built by parents</h3>
              <p>Every feature comes from a real 2am moment we&apos;ve actually lived through.</p>
            </div>
            <div className="value">
              <div className="v-ico">
                <svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" /></svg>
              </div>
              <h3>For every family</h3>
              <p>However your family is shaped, PAM fits gently around it.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 30 }}>
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">The founders</span>
            <h2>Hello from <span className="em">us two.</span></h2>
          </div>
          <div className="founders-grid">
            <div className="founder">
              <div className="av" style={{ background: 'linear-gradient(140deg,var(--blush),var(--wine))' }}>O</div>
              <div>
                <h3>Oly</h3>
                <div className="role">Co-Founder · Mum to Leo</div>
                <p>&ldquo;Somewhere between feeds, naps and a never-ending mental to-do list, we said: <em>why are we trying to hold all of this on our own?</em>&rdquo;</p>
              </div>
            </div>
            <div className="founder">
              <div className="av" style={{ background: 'linear-gradient(140deg,var(--tan),var(--wine))' }}>A</div>
              <div>
                <h3>Ash</h3>
                <div className="role">Co-Founder · Mum to Mila</div>
                <p>&ldquo;PAM is our way of supporting mums — not by adding more, but by taking something off your plate.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="quote-banner">
        <div className="container">
          <q>Made by two mums who get it.</q>
          <div className="attribution">PAM · Parental Admin Manager</div>
        </div>
      </div>
    </main>
  )
}
