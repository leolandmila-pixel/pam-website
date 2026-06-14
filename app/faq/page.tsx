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
            <h1>Questions, <span className="em">answered.</span></h1>
            <p>Everything you might be wondering before you join the founding trial.</p>
          </div>
          <FaqList />
        </div>
      </section>
    </main>
  )
}
