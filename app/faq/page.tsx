import type { Metadata } from 'next'
import Script from 'next/script'
import { faqMetadata } from '../metadata'
import { buildFaqSchema } from '../structured-data'
import { faqItems } from '@/lib/faq-data'
import FaqList from '@/components/FaqList'

export const metadata: Metadata = faqMetadata

const faqSchemaData = buildFaqSchema(faqItems.map((item) => ({ q: item.q, a: item.a })))

export default function FaqPage() {
  return (
    <main>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <section className="hero" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Good to know</span>
            <h1>
              Your questions, <span className="em">answered.</span>
            </h1>
            <p>
              Everything parents ask us — about the mental load, Australian family admin, how PAM
              compares to other apps, and how to get started.
            </p>
          </div>
          <FaqList />
        </div>
      </section>
    </main>
  )
}
