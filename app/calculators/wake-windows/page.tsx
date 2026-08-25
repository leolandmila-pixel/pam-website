import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { wakeWindowCalculatorMetadata } from '../../metadata'
import { buildBreadcrumbSchema } from '../../structured-data'
import WakeWindowCalculator from '@/components/WakeWindowCalculator'

export const metadata: Metadata = wakeWindowCalculatorMetadata

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://parentaladminmanager.com' },
  { name: 'Calculators', url: 'https://parentaladminmanager.com/calculators' },
  { name: 'Wake Window Calculator', url: 'https://parentaladminmanager.com/calculators/wake-windows' },
])

export default function WakeWindowCalculatorPage() {
  return (
    <main>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="hero" style={{ paddingTop: 108, paddingBottom: 20 }}>
        <div className="container">
          <nav className="ml-breadcrumb" aria-label="Breadcrumb">
            <Link href="/calculators">Calculators</Link>
            <span aria-hidden="true"> / </span>
            <span>Wake Window Calculator</span>
          </nav>
          <div className="sec-head">
            <span className="eyebrow">Sleep</span>
            <h1>How long can baby <span className="em">be awake?</span></h1>
            <p>Find baby&apos;s age-appropriate wake window, plus a suggested run of times for today.</p>
          </div>
        </div>
      </section>

      <section className="calc-section">
        <div className="container calc-single-wrap">
          <WakeWindowCalculator />
        </div>
      </section>

      <section>
        <div className="container calc-cta-wrap">
          <div className="ml-cta-block">
            <p>Want the rest of the mental load handled too? PAM tracks all of this and more, shared with your partner in real time.</p>
            <a href="https://tally.so/r/q4J1vg" target="_blank" rel="noreferrer" className="quiz-cta">
              Get early access to PAM
              <span className="arrow">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 40px', textAlign: 'center' }}>
        <div className="container">
          <p className="feature-back"><Link href="/calculators">← Back to all calculators</Link></p>
        </div>
      </section>
    </main>
  )
}
