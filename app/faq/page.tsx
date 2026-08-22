import type { Metadata } from 'next'
import { faqMetadata } from '../metadata'
import { buildFaqSchema } from '../structured-data'
import { faqItems } from '@/lib/faq-data'
import FaqList from '@/components/FaqList'

export const metadata: Metadata = faqMetadata

const faqSchemaData = buildFaqSchema(faqItems.map((item) => ({ q: item.q, a: item.a })))

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <section className="hero" style={{ paddingTop: 108 }}>
        <div className="container">
          <div className="sec-head">
            <h1>Frequently Asked Questions</h1>
          </div>
          <FaqList />
        </div>
      </section>
    </main>
  )
}
