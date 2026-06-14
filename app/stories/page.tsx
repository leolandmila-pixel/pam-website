import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { storiesMetadata } from '../metadata'
import StoriesClient from '@/components/StoriesClient'

export const metadata: Metadata = storiesMetadata

export default function StoriesPage() {
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
          <StoriesClient />
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
