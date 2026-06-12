'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { stories } from './stories-data'

const CATEGORIES = ['All', 'Newborn', 'Sleep', 'Wellbeing', 'Memories', 'Feeding', 'Community']

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? stories
    : stories.filter((s) => s.tag === activeCategory)

  return (
    <main>
      <section className="pricing-hero-banner">
        <Image src="/stories-hero.png" alt="Real mums, real stories" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center center' }} />
        <div className="pricing-hero-overlay" />
        <div className="pricing-hero-content">
          <h1 className="pricing-hero-heading">Real Mums, Real Stories</h1>
          <p className="pricing-hero-sub">The honest, unfiltered bits.</p>
        </div>
      </section>
      <section className="hero" style={{ paddingTop: 40, paddingBottom: 30 }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--ink-soft)', fontSize: '1.05rem', maxWidth: 560, margin: '0 auto 28px' }}>No highlight reels. Just real parents sharing what helped, what hurt, and what they wish they&apos;d known.</p>
          <div className="blog-note">
            <p>&ldquo;We started PAM because the hardest parts of early parenthood are the ones no one talks about. This is the space for those conversations.&rdquo;</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 10 }}>
        <div className="container">

          {/* Category filter */}
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
        </div>
      </section>

      <div className="share-cta">
        <div className="container">
          <h2>Got a story <em>to share?</em></h2>
          <p>We&apos;d love to feature your real, honest, beautiful parenting journey. Big or small - every story matters here.</p>
          <Link href="/contact?topic=story" className="floating-cta" style={{ animation: 'none' }}>
            Share Your Story
            <span className="arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </Link>
        </div>
      </div>
    </main>
  )
}
