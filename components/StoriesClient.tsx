'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { stories } from '@/app/stories/stories-data'

const CATEGORIES = ['All', 'Newborn', 'Sleep', 'Wellbeing', 'Memories', 'Feeding', 'Community']

export default function StoriesClient() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? stories
    : stories.filter((s) => s.tag === activeCategory)

  return (
    <>
      <div className="blog-filter">
        <div className="blog-filter-label">Filter by topic</div>
        <div className="blog-filter-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`blog-filter-pill${activeCategory === cat ? ' blog-filter-pill--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <select
          className="blog-filter-select"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="blog-grid">
        {filtered.map((s) => {
          const card = (
            <article className={`story${s.published ? '' : ' is-coming-soon'}`}>
              {s.heroImage ? (
                <div className="cover cover-photo">
                  <Image src={s.heroImage} alt={s.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', objectPosition: s.heroImagePosition ?? 'center 30%' }} />
                  <b>{s.label}</b>
                </div>
              ) : (
                <div className={`cover ${s.cover}`}>
                  <b>{s.label}</b>
                </div>
              )}
              <div className="body">
                <span className="tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className="read">
                  {s.published ? 'Read story →' : 'Coming soon'}
                </span>
              </div>
            </article>
          )
          return s.published ? (
            <Link key={s.slug} href={`/stories/${s.slug}`} className="story-link">
              {card}
            </Link>
          ) : (
            <div key={s.slug} className="story-link">
              {card}
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: 'var(--ink-soft)', padding: '48px 0' }}>
          No stories in this category yet - check back soon.
        </p>
      )}
    </>
  )
}
