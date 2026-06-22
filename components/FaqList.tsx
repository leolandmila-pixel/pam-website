'use client'

import { useState } from 'react'
import { faqItems } from '@/lib/faq-data'

const cats: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'getting-started', label: 'Getting Started' },
  { key: 'mental-load', label: 'Mental Load' },
  { key: 'sharing', label: 'Sharing & Family' },
  { key: 'features', label: 'Features' },
  { key: 'australia', label: 'Australian Families' },
  { key: 'compare', label: 'How We Compare' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'privacy', label: 'Privacy & Security' },
]

export default function FaqList() {
  const [activeCat, setActiveCat] = useState('all')
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const filtered =
    activeCat === 'all' ? faqItems : faqItems.filter((item) => item.cat === activeCat)

  return (
    <>
      <div className="faq-cats">
        {cats.map((c) => (
          <button
            key={c.key}
            className={`faq-cat${activeCat === c.key ? ' active' : ''}`}
            onClick={() => {
              setActiveCat(c.key)
              setOpenIdx(null)
            }}
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
                <svg
                  className="faq-chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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
