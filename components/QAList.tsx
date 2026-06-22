'use client'

import { useState } from 'react'
import { qaItems } from '@/lib/qa-data'

const cats: { key: string; label: string; emoji: string }[] = [
  { key: 'all', label: 'All questions', emoji: '' },
  { key: 'newborn', label: 'The newborn stage', emoji: '👶' },
  { key: 'sleep', label: 'Baby sleep', emoji: '🌙' },
  { key: 'feeding', label: 'Feeding', emoji: '🍼' },
  { key: 'development', label: 'Development', emoji: '🌱' },
  { key: 'australia', label: 'Australian admin', emoji: '🦘' },
  { key: 'mental-load', label: 'Mental load', emoji: '🧠' },
]

export default function QAList() {
  const [activeCat, setActiveCat] = useState('all')
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const filtered =
    activeCat === 'all' ? qaItems : qaItems.filter((item) => item.cat === activeCat)

  return (
    <>
      <div className="qa-cats">
        {cats.map((c) => (
          <button
            key={c.key}
            className={`qa-cat${activeCat === c.key ? ' active' : ''}`}
            onClick={() => {
              setActiveCat(c.key)
              setOpenIdx(null)
            }}
          >
            {c.emoji && <span className="qa-cat-emoji">{c.emoji}</span>}
            {c.label}
          </button>
        ))}
      </div>

      <div className="qa-count">
        {filtered.length} question{filtered.length !== 1 ? 's' : ''}
      </div>

      <div className="qa-list">
        {filtered.map((item, i) => {
          const isOpen = openIdx === i
          return (
            <div key={item.q} className={`qa-item${isOpen ? ' open' : ''}`}>
              <button
                className="qa-q"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <svg
                  className="qa-chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="qa-a" hidden={!isOpen}>
                {item.a.split('\n\n').map((para, pi) => {
                  if (para.startsWith('•')) {
                    const lines = para.split('\n').filter(Boolean)
                    return (
                      <ul key={pi} className="qa-bullets">
                        {lines.map((line) => (
                          <li key={line}>{line.replace(/^•\s*/, '')}</li>
                        ))}
                      </ul>
                    )
                  }
                  return <p key={pi}>{para}</p>
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
