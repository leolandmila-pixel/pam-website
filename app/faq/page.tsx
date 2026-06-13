import type { Metadata } from 'next'
import { faqMetadata } from '../metadata'
import FaqList from '@/components/FaqList'

export const metadata: Metadata = faqMetadata

export default function FaqPage() {
  return (
    <main>
      <section className="hero" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Good to know</span>
            <h2>Frequently Asked <span className="em">Questions.</span></h2>
          </div>
          <FaqList />
        </div>
      </section>
    </main>
  )
}
