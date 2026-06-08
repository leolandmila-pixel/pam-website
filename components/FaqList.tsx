'use client'

import { useState } from 'react'

type Faq = { cat: 'launch' | 'pricing' | 'privacy' | 'family'; q: string; a: string }

const items: Faq[] = [
  { cat: 'launch', q: 'When does PAM launch?', a: "PAM pre-sign up is open now. Join the list and you'll be the first to know the moment we launch." },
  { cat: 'launch', q: 'How do I get started?', a: "Download PAM from the App Store or Google Play, create your account, and follow the setup flow to add your family details. It takes about 5 minutes." },
  { cat: 'launch', q: 'What features does PAM include?', a: "PAM includes a family calendar, task and to-do management, a memory keeper, feeding and sleep trackers, and shared access for partners — all designed to reduce the mental load of running a family." },
  { cat: 'launch', q: 'Which devices does PAM support?', a: "PAM is built for iPhone and Android, with everything synced securely across your family's devices." },
  { cat: 'launch', q: 'Is PAM available in my country?', a: "PAM is an Australian app but is available to download worldwide via the App Store and Google Play." },
  { cat: 'launch', q: 'How is PAM different from just using Google Calendar or Notes?', a: "Google Calendar and Notes are general tools — PAM is built specifically for parents. That means everything from the features to the language is designed around the real, messy, beautiful chaos of family life." },
  { cat: 'launch', q: 'Can I sync my existing calendar?', a: "Yes — PAM can sync with your calendar so appointments and reminders sit alongside everything else you're already juggling." },
  { cat: 'pricing', q: "What's included in the free trial?", a: "14 days of full access to everything — Smart Lists, the Daily Tracker, Memories, and Family & Kids Info. No credit card needed to start." },
  { cat: 'pricing', q: 'How much will PAM cost?', a: 'PAM will be a simple, affordable monthly subscription — far less than a single coffee a week. Founding members lock in a discounted rate that never goes up.' },
  { cat: 'pricing', q: 'Is there a free version or is it subscription only?', a: "PAM offers a free trial so you can explore the app before committing. After that, a subscription is required to continue using the full feature set." },
  { cat: 'privacy', q: "Is my family's data private?", a: "Always. Your data is encrypted, stored securely, and never sold or shared with advertisers. Your family's information belongs to you and only you." },
  { cat: 'privacy', q: 'What happens to my data if I cancel?', a: "Your data is stored securely and you can export it before cancelling. If you resubscribe, your information will still be there." },
  { cat: 'family', q: 'Can my partner share the same account?', a: 'PAM supports multiple users — perfect for partners, co-parents and trusted carers. You just need a two-user or family subscription to unlock shared access.' },
  { cat: 'family', q: 'Can I use PAM without a partner?', a: "Absolutely. PAM is designed for all kinds of families, including solo parents. You get full access to every feature whether you're flying solo or sharing the load with a partner." },
  { cat: 'family', q: 'Do I need to invite my partner or can I use it solo?', a: "You can start using PAM completely on your own. If you want to share the load with a partner, you can invite them at any time from within the app." },
  { cat: 'family', q: 'Does PAM work for non-traditional families?', a: 'Absolutely. Single parents, same-sex parents, blended families, grandparents and carers — PAM flexes around however your family is shaped.' },
  { cat: 'family', q: 'What ages is PAM for?', a: "From the newborn fog through to the school years. PAM's lists and content grow with your child, surfacing what's relevant at every stage." },
]

const cats: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'launch', label: 'Launch' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'privacy', label: 'Privacy' },
  { key: 'family', label: 'Family' },
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
