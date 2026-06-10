import type { Metadata } from 'next'
import Image from 'next/image'
import { aboutMetadata } from '../metadata'

export const metadata: Metadata = aboutMetadata

export default function AboutPage() {
  return (
    <main>
      {/* About header banner */}
      <section className="pricing-hero-banner">
        <Image
          src="/about-hero.png"
          alt="Ash and Oly - founders of PAM"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
      </section>

      <section className="hero" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-story">
              <span className="eyebrow">Our Story</span>
              <h1 className="display-xl" style={{ fontSize: 'clamp(2.4rem,4.6vw,3.6rem)', margin: '18px 0 22px' }}>
                <span className="about-name">We&apos;re Ash &amp; Oly</span><br /><em className="about-tagline">Mums, Founders and Best Friends</em>
              </h1>
              <p>We both have 16-month-olds: Mila (Ash) and Leo (Oly) and like so many mums, we found ourselves in the thick of it together.</p>
              <p>The love, the chaos, the exhaustion… and the constant mental load no one really prepares you for. Somewhere between the feeds, the naps, the appointments and the endless to-do lists, we kept coming back to the same thought: <em>why are we trying to hold all of this on our own?</em></p>
              <p>We created PAM because we knew other mums were feeling it too. The remembering. The organising. The invisible weight that sits in your mind every single day.</p>
              <p>PAM is our way of supporting mums - not by adding more, but by taking something off your plate. Because you deserve to be present for the moments that matter most.</p>
            </div>
            <div className="about-art">
              <Image
                src="/DSC01229.JPG"
                alt="Ash and Oly - the mums and founders behind PAM"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
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
            <div className="value value--morning">
              <div className="value-head"><h3>We see you</h3><p className="v-tagline">The whole you - not just the parent.</p></div>
              <p>Not the version of you that has it together. The one at 3am with cracked nipples and a racing mind. The one who loves her baby and misses her old life in the same breath. PAM is built for that person. We don&apos;t look away from the hard parts - we design for them.</p>
            </div>
            <div className="value value--midday">
              <div className="value-head"><h3>Helpful is the point</h3><p className="v-tagline">We exist to make your life genuinely easier.</p></div>
              <p>Not easier in theory. Easier today, in this moment, with this problem. Every feature, every article, every tool we build is measured against one question: does this actually help? If it doesn&apos;t, it doesn&apos;t belong here.</p>
            </div>
            <div className="value value--afternoon">
              <div className="value-head"><h3>Calm in the chaos</h3><p className="v-tagline">Less noise. More clarity.</p></div>
              <p>New parenthood comes with enough overwhelm. PAM&apos;s job is to reduce it - to be the steady, quiet thing in a loud season. We don&apos;t add complexity. We cut through it.</p>
            </div>
            <div className="value value--evening">
              <div className="value-head"><h3>You should feel capable, not compared</h3><p className="v-tagline">PAM lifts you up. Full stop.</p></div>
              <p>There&apos;s no perfect timeline here, no implied standard you&apos;re falling short of. We write, design, and build in a way that leaves every mum feeling more confident walking away than she did arriving. Empowered, not judged.</p>
            </div>
            <div className="value value--everyday">
              <div className="value-head"><h3>The little things are the big things</h3><p className="v-tagline">We take it all seriously - because you do.</p></div>
              <p>The sounds that disappear by week six. The mental load that nobody sees. The milestone that happened on a Tuesday with no one watching. PAM exists because these things matter enormously, even when the world doesn&apos;t treat them that way.</p>
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
              <div className="av av--photo">
                <Image src="/oly-avatar.jpg" alt="Oly" fill sizes="94px" style={{ objectFit: 'cover', objectPosition: 'center 45%' }} />
              </div>
              <div>
                <h3>Oly</h3>
                <div className="role">Co-Founder · Mum to Leo</div>
                <p>&ldquo;Somewhere between feeds, naps and a never-ending mental to-do list, we said: <em>why are we trying to hold all of this on our own?</em>&rdquo;</p>
                <dl className="founder-qa">
                  <dt>Coffee or sleep?</dt>
                  <dd>Sleep &amp; lots of coffee - can I say both?</dd>
                  <dt>How many tabs do you currently have open?</dt>
                  <dd>Too many.</dd>
                  <dt>What&apos;s one thing parents never have enough of?</dt>
                  <dd>Time.</dd>
                  <dt>Biggest parenting challenge?</dt>
                  <dd>Remembering everything.</dd>
                </dl>
              </div>
            </div>
            <div className="founder">
              <div className="av av--photo">
                <Image src="/ash-avatar.jpg" alt="Ash" fill sizes="94px" style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <h3>Ash</h3>
                <div className="role">Co-Founder · Mum to Mila</div>
                <p>&ldquo;PAM is our way of supporting mums - not by adding more, but by taking something off your plate.&rdquo;</p>
                <dl className="founder-qa">
                  <dt>Morning or Evening person?</dt>
                  <dd>Morning, don&apos;t ask me anything after 3pm.</dd>
                  <dt>Planner or wing it?</dt>
                  <dd>Little bit of both, actually.</dd>
                  <dt>Phone call or text?</dt>
                  <dd>Text me, I&apos;m usually doing a million things and will answer when I can.</dd>
                  <dt>One word to describe motherhood?</dt>
                  <dd>Beautiful &amp; chaotic (I know that&apos;s two).</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
