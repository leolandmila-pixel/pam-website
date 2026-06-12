'use client'

import { useState } from 'react'

type Cat = 'getting-started' | 'sharing' | 'features' | 'pricing' | 'privacy'
type Faq = { cat: Cat; q: string; a: string }

const items: Faq[] = [
  {
    cat: 'getting-started',
    q: 'What is PAM?',
    a: 'PAM (Parental Admin Manager) is a parenting app built to reduce the mental load of running a family. Smart checklists, a daily tracker, memory keeping, and family info - all in one place, designed around how parents actually think and live.',
  },
  {
    cat: 'getting-started',
    q: 'How do I get started?',
    a: 'Download PAM from the App Store or Google Play, create your account, and follow the setup flow to add your family details. It takes about 5 minutes.',
  },
  {
    cat: 'getting-started',
    q: 'Who is PAM designed for?',
    a: "PAM is built for parents in the early years - from pregnancy through to the primary school years. Whether you're a first-time mum, a solo parent, a couple trying to share the load, or a blended family - if you're carrying mental load for little ones, PAM is for you.",
  },
  {
    cat: 'sharing',
    q: 'Can I use PAM without a partner?',
    a: "Absolutely. PAM is designed for all kinds of families, including solo parents. You get full access to every feature whether you're flying solo or sharing the load with a partner.",
  },
  {
    cat: 'sharing',
    q: 'Can I invite grandparents, carers, or other family members?',
    a: "Yes. On the Family and Couple plans, you can invite trusted people to your family space - a partner, a grandparent, a babysitter. Each person gets their own login and access to the information you choose to share with them.",
  },
  {
    cat: 'sharing',
    q: 'Can I control what others can see?',
    a: 'Yes. You decide exactly what each person has access to. Sharing is opt-in and easy to adjust or revoke at any time from within the app.',
  },
  {
    cat: 'features',
    q: 'What can I manage with PAM?',
    a: "PAM brings together the things parents are always trying to hold in their heads - checklists and milestones, feeding and sleep tracking, family health information, memory keeping, and shared schedules. Everything your family needs, in one calm place.",
  },
  {
    cat: 'features',
    q: 'How is PAM different from Google Calendar, Notes, or a spreadsheet?',
    a: "Google Calendar and Notes are general tools - PAM is built specifically for parents. That means everything from the features to the language is designed around the real, messy, beautiful chaos of family life.",
  },
  {
    cat: 'features',
    q: 'Will PAM send reminders and notifications?',
    a: "Yes. PAM can send reminders for upcoming appointments, milestone check-ins, and tasks - so the important things don't get lost in the chaos of everyday life. You control what you hear about and when.",
  },
  {
    cat: 'pricing',
    q: 'Is there a free trial?',
    a: "14 days of full access to everything - Smart Lists, the Daily Tracker, Memories, and Family & Kids Info. No credit card needed to start.",
  },
  {
    cat: 'pricing',
    q: 'Is there a free version of PAM?',
    a: "PAM offers a 14-day free trial so you can explore everything before committing. After that, a subscription is required to keep access to the full feature set.",
  },
  {
    cat: 'pricing',
    q: 'Can I cancel at any time?',
    a: "Yes, always. There are no lock-in contracts. You can cancel your subscription at any time from within the app, and you'll keep access until the end of your current billing period.",
  },
  {
    cat: 'privacy',
    q: "Is my family's information secure?",
    a: "Always. Your data is encrypted, stored securely, and never sold or shared with advertisers. Your family's information belongs to you and only you.",
  },
  {
    cat: 'privacy',
    q: "Who can see my family's information?",
    a: "Only you and the people you explicitly invite. PAM staff cannot access the content of your account. We never sell data or use it for advertising purposes.",
  },
  {
    cat: 'privacy',
    q: 'What happens to my data if I cancel?',
    a: "Your data is stored securely and you can export it before cancelling. If you resubscribe, your information will still be there.",
  },
]

const cats: { key: string; label: string }[] = [
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'sharing', label: 'Sharing & Permissions' },
  { key: 'features', label: 'Features' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'privacy', label: 'Privacy & Security' },
  { key: 'all', label: 'All' },
]

export default function FaqList() {
  const [activeCat, setActiveCat] = useState('all')
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const filtered = activeCat === 'all' ? items : items.filter((item) => item.cat === activeCat)

  return (
    <>
      <div className="faq-cats">
        {cats.map((c) => (
          <button
            key={c.key}
            className={`faq-cat${activeCat === c.key ? ' active' : ''}`}
            onClick={() => { setActiveCat(c.key); setOpenIdx(null) }}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div className="faq-list">
        {filtered.map((item, i) => {
          const isOpen = openIdx === i
          return (
            <div key={item.q} className={`faq-item${isOpen ? ' open' : ''}`}>
              <div className="faq-q" onClick={() => setOpenIdx(isOpen ? null : i)}>
                {item.q}
                <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
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
