import type { Metadata } from 'next'
import Link from 'next/link'
import { storiesMetadata } from '../metadata'
import { stories } from './stories-data'

export const metadata: Metadata = storiesMetadata

export default function StoriesPage() {
  return (
    <main>
      <section className="hero" style={{ paddingTop: 40, paddingBottom: 30 }}>
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Real Mums, Real Stories</span>
            <h2>The honest, <span className="em">unfiltered</span> bits.</h2>
            <p>No highlight reels. Just real parents sharing what helped, what hurt, and what they wish they&apos;d known.</p>
          </div>
          <div className="blog-note">
            <p>&ldquo;We started PAM because the hardest parts of early parenthood are the ones no one talks about. This is the space for those conversations.&rdquo;</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="blog-grid">
            {stories.map((s) => {
              const card = (
                <article className={`story${s.published ? '' : ' is-coming-soon'}`}>
                  <div className={`cover ${s.cover}`}>
                    <b>{s.label}</b>
                  </div>
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
        </div>
      </section>

      <div className="share-cta">
        <div className="container">
          <h2>Got a story <em>to share?</em></h2>
          <p>We&apos;d love to feature your real, honest, beautiful parenting journey. Big or small — every story matters here.</p>
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
