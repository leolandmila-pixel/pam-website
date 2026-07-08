import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { buildFaqSchema } from '../../structured-data'

export const metadata: Metadata = {
  title: 'Local Info | Parental Admin Manager',
  description: 'Local services, resources and guides relevant to your family and where you live - hospitals, playgroups, early childhood services and more, all in one place.',
}

const faqSchema = buildFaqSchema([
  { q: 'Is there an app that shows local services for parents in Australia?', a: 'Yes - PAM\'s Local Info feature surfaces services, resources, and guides relevant to your family and your location. This includes local maternal and child health centres, hospitals, playgroups, early childhood services, and parenting support programs relevant to your area.' },
  { q: 'How does PAM show local parenting services?', a: 'PAM\'s Local Info section uses your location to surface relevant local services - maternal and child health centres, nearby hospitals, playgroups, early childhood education options, and community parenting programs. It is designed to reduce the time parents spend searching for this information across multiple council websites and directories.' },
  { q: 'Does PAM include information about local hospitals and emergency services?', a: 'Yes. PAM\'s Local Info section includes relevant local hospital and emergency service information so you have it on hand when you need it - without having to search in a stressful moment.' },
  { q: 'Can PAM help me find playgroups near me?', a: 'Yes. PAM\'s Local Info feature includes playgroup and early childhood activity information relevant to your location, so you can find local options without searching across multiple websites and council directories.' },
])

export default function LocalInfoFeaturePage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
      <section className="hero feature-hero">
        <div className="container">
          <div className="feature-hero-grid">
            <div className="feature-hero-copy">
              <span className="eyebrow">App · Local Info</span>
              <h1 className="display-xl feature-hero-title">Everything local, <em>right where you need it.</em></h1>
              <p className="feature-hero-lead">
                Trusted services, resources and guides curated for your area. From hospitals and maternal health to
                childcare and parenting support, all in one place, relevant to where you live.
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
                src="/WhatsApp Video 2026-06-18 at 1.24.05 PM.mp4"
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

      <section className="feature-grid-section">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">What&apos;s inside</span>
            <h2>Local support, <span className="em">already found.</span></h2>
          </div>
          <div className="feature-grid">
            <div className="feature-tile">
              <h3>Hospitals &amp; birth centres</h3>
              <p>Your nearest public and private hospitals, birth centres and maternity wards - with addresses, phone numbers and after-hours contacts.</p>
            </div>
            <div className="feature-tile">
              <h3>Maternal &amp; child health</h3>
              <p>MCH centres near you, with details on how to book your scheduled visits and what to expect at each one.</p>
            </div>
            <div className="feature-tile">
              <h3>GPs &amp; paediatricians</h3>
              <p>Family doctors and paediatricians in your area who bulk bill or accept new patients - filtered to what matters for your family.</p>
            </div>
            <div className="feature-tile">
              <h3>Childcare &amp; early learning</h3>
              <p>Childcare centres, family day care and kindergartens nearby - with CCS information and enrolment guidance.</p>
            </div>
            <div className="feature-tile">
              <h3>Parenting support services</h3>
              <p>Helplines, counselling, sleep schools, lactation consultants and postnatal support groups in your local area.</p>
            </div>
            <div className="feature-tile">
              <h3>Community &amp; playgroups</h3>
              <p>Local mothers&apos; groups, playgroups and family programs - the connections that make early parenthood less lonely.</p>
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
