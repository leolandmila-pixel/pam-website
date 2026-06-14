import type { Metadata } from 'next'
import Script from 'next/script'
import { faqMetadata } from '../metadata'
import { buildFaqSchema } from '../structured-data'
import FaqList from '@/components/FaqList'

export const metadata: Metadata = faqMetadata

const faqSchemaData = buildFaqSchema([
  { q: 'What is PAM?', a: 'PAM (Parental Admin Manager) is a parenting app built to reduce the mental load of running a family. Smart checklists, a daily tracker, memory keeping, and family info - all in one place, designed around how parents actually think and live.' },
  { q: 'Who is PAM designed for?', a: "PAM is built for parents in the early years - from pregnancy through to the primary school years. Whether you're a first-time mum, a solo parent, a couple trying to share the load, or a blended family - if you're carrying mental load for little ones, PAM is for you." },
  { q: 'Can I use PAM without a partner?', a: "Absolutely. PAM is designed for all kinds of families, including solo parents. You get full access to every feature whether you're flying solo or sharing the load with a partner." },
  { q: 'Is there a free trial?', a: '14 days of full access to everything - Smart Lists, the Daily Tracker, Memories, and Family & Kids Info. No credit card needed to start.' },
  { q: 'Can I cancel at any time?', a: "Yes, always. There are no lock-in contracts. You can cancel your subscription at any time from within the app, and you'll keep access until the end of your current billing period." },
  { q: "Is my family's information secure?", a: "Always. Your data is encrypted, stored securely, and never sold or shared with advertisers. Your family's information belongs to you and only you." },
])

export default function FaqPage() {
  return (
    <main>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />
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
