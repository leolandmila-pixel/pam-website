'use client'

import { useState } from 'react'

type Faq = { cat: 'launch' | 'pricing' | 'privacy' | 'family' | 'askpam'; q: string; a: string }

const items: Faq[] = [
  { cat: 'launch', q: 'When does PAM launch?', a: "PAM is in its founding-trial phase right now. Pre-sign up and you'll be first to know the moment we open the doors — plus you'll lock in founding-member pricing for life." },
  { cat: 'pricing', q: "What's included in the free trial?", a: "14 days of full access to everything — Smart Lists, the Daily Tracker, Memories, Family & Kids Info and Ask PAM. No credit card needed to start." },
  { cat: 'pricing', q: 'How much will PAM cost?', a: 'PAM will be a simple, affordable monthly subscription — far less than a single coffee a week. Founding members lock in a discounted rate that never goes up.' },
  { cat: 'privacy', q: "Is my family's data private?", a: "Always. Your data is encrypted, stored securely, and never sold or shared with advertisers. Your family's information belongs to you and only you." },
  { cat: 'family', q: 'Can my partner share the same account?', a: 'Yes. PAM is built for shared parenting — partners, co-parents and trusted carers can all stay in sync on the same family, so the load is genuinely shared.' },
  { cat: 'family', q: 'Does PAM work for non-traditional families?', a: 'Absolutely. Single parents, same-sex parents, blended families, grandparents and carers — PAM flexes around however your family is shaped.' },
  { cat: 'family', q: 'What ages is PAM for?', a: "From the newborn fog through to the school years. PAM's lists and content grow with your child, surfacing what's relevant at every stage." },
{ cat: 'launch', q: 'Can I sync my existing calendar?', a: 'Yes — PAM can sync with your calendar so appointments and reminders sit alongside everything else you\'re already juggling.' },
  { cat: 'launch', q: 'Which devices does PAM support?', a: "PAM is built for iPhone and Android, with everything synced securely across your family's devices." },
]

const cats: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'launch', label: 'Launch' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'privacy', label: 'Privacy' },
  { key: 'family', label: 'Family' },
  { key: 'askpam', label: 'Ask PAM' },
]

export default function FaqList() {
  const [activeCat, setActiveCat] = useState('all')
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <>
      <div className="faq-cats">
        {cats.map((c) => (
          <button
            key={c.key}
            className={`faq-cat${activeCat === c.key ? ' active' : ''}`}
            onClick={() => setActiveCat(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="faq-list">
        {items.map((item, i) => {
          if (activeCat !== 'all' && item.cat !== activeCat) return null
          const isOpen = openIdx === i
          return (
            <div key={item.q} className={`faq-item${isOpen ? ' open' : ''}`}>
              <div className="faq-q" onClick={() => setOpenIdx(isOpen ? null : i)}>
                {item.q}
                <span className="pm" />
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
