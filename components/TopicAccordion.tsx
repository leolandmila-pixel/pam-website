'use client'

import { useState } from 'react'

type Item = {
  heading: string
  body: React.ReactNode
}

export default function TopicAccordion({
  items,
  level = 'h2',
}: {
  items: Item[]
  level?: 'h2' | 'h3'
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const Heading = level

  return (
    <div className="qa-list">
      {items.map((item, i) => {
        const isOpen = openIdx === i
        return (
          <div key={item.heading} className={`qa-item${isOpen ? ' open' : ''}`}>
            <Heading style={{ margin: 0 }}>
              <button
                className="qa-q"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{item.heading}</span>
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
            </Heading>
            <div className="qa-a" hidden={!isOpen}>
              {item.body}
            </div>
          </div>
        )
      })}
    </div>
  )
}
