import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { calculatorsMetadata } from '../metadata'
import { buildBreadcrumbSchema } from '../structured-data'

export const metadata: Metadata = calculatorsMetadata

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://parentaladminmanager.com' },
  { name: 'Calculators', url: 'https://parentaladminmanager.com/calculators' },
])

const calculators = [
  {
    href: '/calculators/due-date',
    eyebrow: 'Pregnancy',
    title: 'Due date calculator',
    blurb: 'Work out your estimated due date from the first day of your last period.',
  },
  {
    href: '/calculators/wake-windows',
    eyebrow: 'Sleep',
    title: 'Wake window calculator',
    blurb: "Find age-appropriate wake windows for baby, with suggested nap times for today.",
  },
  {
    href: '/calculators/growth-percentile',
    eyebrow: 'Growth',
    title: 'Growth percentile calculator',
    blurb: "A quick estimate of where baby's weight or length sits for their age.",
  },
  {
    href: '/calculators/childcare-cost',
    eyebrow: 'Childcare',
    title: 'Childcare cost calculator',
    blurb: 'Estimate your Child Care Subsidy and weekly out-of-pocket cost in Australia.',
  },
  {
    href: '/calculators/parental-leave',
    eyebrow: 'Parental leave',
    title: 'Parental leave calculator',
    blurb: 'Estimate your Government Parental Leave Pay, split between you and your partner.',
  },
]

export default function CalculatorsPage() {
  return (
    <main>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="hero" style={{ paddingTop: 108, paddingBottom: 20 }}>
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Free tools for parents</span>
            <h1>Quick answers, <span className="em">no maths required.</span></h1>
            <p>Handy calculators for the questions that come up again and again - free to use, no sign up needed.</p>
          </div>
        </div>
      </section>

      <section className="calc-section">
        <div className="container">
          <div className="calc-tile-grid">
            {calculators.map((c) => (
              <Link key={c.href} href={c.href} className="calc-tile">
                <span className="eyebrow">{c.eyebrow}</span>
                <h2>{c.title}</h2>
                <p>{c.blurb}</p>
                <span className="calc-tile-cta">
                  Open calculator
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </Link>
            ))}
          </div>
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
    </main>
  )
}
