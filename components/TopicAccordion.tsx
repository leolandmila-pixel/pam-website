'use client'

import { useState } from 'react'

type Item = {
  heading: string
  meta?: React.ReactNode
  body: React.ReactNode
}

export default function TopicAccordion({
  items,
  level = 'h2',
  layout = 'list',
}: {
  items: Item[]
  level?: 'h2' | 'h3'
  layout?: 'list' | 'grid'
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const Heading = level

  const wrapperClass = layout === 'grid' ? 'stage-grid' : 'qa-list'
  const itemClass = layout === 'grid' ? 'stage-card' : 'qa-item'
  const qClass = layout === 'grid' ? 'stage-q' : 'qa-q'
  const chevronClass = layout === 'grid' ? 'stage-chevron' : 'qa-chevron'
  const metaClass = layout === 'grid' ? 'stage-meta' : 'qa-meta'
  const aClass = layout === 'grid' ? 'stage-a' : 'qa-a'

  return (
    <div className={wrapperClass}>
      {items.map((item, i) => {
        const isOpen = openIdx === i
        return (
          <div key={item.heading} className={`${itemClass}${isOpen ? ' open' : ''}`}>
            <Heading style={{ margin: 0 }}>
              <button
                className={qClass}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{item.heading}</span>
                <svg
                  className={chevronClass}
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
            {item.meta && <div className={metaClass}>{item.meta}</div>}
            <div className={aClass} hidden={!isOpen}>
              {item.body}
            </div>
          </div>
        )
      })}
    </div>
  )
}
