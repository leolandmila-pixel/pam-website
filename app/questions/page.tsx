import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { buildFaqSchema, buildBreadcrumbSchema } from '../structured-data'
import { qaItems } from '@/lib/qa-data'
import QAList from '@/components/QAList'

export const metadata: Metadata = {
  title: 'Parent Questions, Answered | PAM',
  description:
    'Real answers to the questions parents ask - newborn care, baby sleep, feeding, Australian admin (MCH, Centrelink, immunisations), development milestones, and the mental load. Written for Australian families.',
  keywords: [
    'parenting questions australia',
    'newborn questions',
    'baby sleep questions',
    'MCH visit questions',
    'breastfeeding questions australia',
    'centrelink newborn payment',
    'baby development milestones',
    'mental load parenting',
    'new mum questions',
    'parenting advice australia',
  ],
  openGraph: {
    title: 'Parent Questions, Answered | PAM',
    description:
      'Real answers to the questions parents ask - newborn care, baby sleep, feeding, Australian admin, development, and the mental load.',
    url: 'https://parentaladminmanager.com/questions',
  },
  alternates: {
    canonical: 'https://parentaladminmanager.com/questions',
  },
}

const faqSchema = buildFaqSchema(
  qaItems.map((item) => ({
    q: item.q,
    a: item.a.replace(/\n\n/g, ' ').replace(/\n/g, ' '),
  }))
)

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://parentaladminmanager.com' },
  { name: 'Parent Questions', url: 'https://parentaladminmanager.com/questions' },
])

const stats = [
  { n: '50+', label: 'questions answered' },
  { n: '6', label: 'topic areas' },
  { n: 'AU', label: 'Australian-specific' },
]

export default function QuestionsPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <main>
        {/* Hero */}
        <section className="hero" style={{ paddingTop: 48, paddingBottom: 0 }}>
          <div className="container">
            <nav className="ml-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <span>Parent Questions</span>
            </nav>
            <div className="sec-head" style={{ maxWidth: 760, marginBottom: 0 }}>
              <span className="eyebrow">For Australian parents</span>
              <h1>
                Questions parents ask.<br />
                <span className="em">Real answers.</span>
              </h1>
              <p className="ml-lead">
                The newborn stage. Baby sleep. Feeding. Australian admin - MCH visits, Centrelink, immunisations. Development milestones. And the mental load. All in one place, written for Australian families.
              </p>
            </div>

            <div className="qa-stats">
              {stats.map((s) => (
                <div key={s.label} className="qa-stat">
                  <span className="qa-stat-n">{s.n}</span>
                  <span className="qa-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Q&A */}
        <section style={{ padding: '40px 0 80px' }}>
          <div className="container">
            <QAList />
          </div>
        </section>

        {/* CTA */}
        <section className="feature-cta-section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>
              PAM holds it all,<br />so you don&apos;t have to.
            </h2>
            <p className="feature-prose" style={{ margin: '14px auto 28px', maxWidth: 520 }}>
              Smart checklists pre-loaded with Australian milestones. A shared baby tracker both parents can use in real time. Family health info, memories, and mental load - managed.
            </p>
            <a
              href="https://tally.so/r/q4J1vg"
              target="_blank"
              rel="noreferrer"
              className="quiz-cta feature-cta"
            >
              Get early access
              <span className="arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
            <p style={{ marginTop: 14, fontSize: '0.82rem', color: 'var(--ink-faint)' }}>
              14-day free trial · No credit card needed · Australian-built
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
