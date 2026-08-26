import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { childcareCostCalculatorMetadata } from '../../metadata'
import { buildBreadcrumbSchema } from '../../structured-data'
import ChildcareCostCalculator from '@/components/ChildcareCostCalculator'

export const metadata: Metadata = childcareCostCalculatorMetadata

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://parentaladminmanager.com' },
  { name: 'Calculators', url: 'https://parentaladminmanager.com/calculators' },
  { name: 'Childcare Cost Calculator', url: 'https://parentaladminmanager.com/calculators/childcare-cost' },
])

export default function ChildcareCostCalculatorPage() {
  return (
    <main>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="hero" style={{ paddingTop: 108, paddingBottom: 20 }}>
        <div className="container">
          <nav className="ml-breadcrumb" aria-label="Breadcrumb">
            <Link href="/calculators">Calculators</Link>
            <span aria-hidden="true"> / </span>
            <span>Childcare Cost Calculator</span>
          </nav>
          <div className="sec-head calc-hero">
            <span className="eyebrow">Childcare</span>
            <h1>What will childcare <span className="em">actually cost?</span></h1>
            <p>Estimate your Child Care Subsidy and weekly out-of-pocket cost, including the 3-day guarantee.</p>
          </div>
        </div>
      </section>

      <section className="calc-section">
        <div className="container calc-single-wrap">
          <ChildcareCostCalculator />
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
