import type { Metadata } from 'next'
import { giftMetadata } from '../metadata'
import GiftForm from '@/components/GiftForm'

export const metadata: Metadata = giftMetadata

export default async function GiftPage({ searchParams }: { searchParams: Promise<{ cancelled?: string }> }) {
  const { cancelled } = await searchParams
  return (
    <main>
      <section className="gift-hero">
        <div className="container">
          <span className="eyebrow">Gift PAM</span>
          <h1 className="gift-hero-h">Give a new parent <span className="em">a little less to remember.</span></h1>
          <p className="feature-prose">
            A PAM gift card covers 3, 6 or 12 months of PAM for a mum or dad you love. It’s the gift that keeps on
            remembering: immunisations, appointments, sleep and feeds, and every little milestone.
          </p>
        </div>
      </section>
      <section className="gift-section">
        <div className="container gift-container">
          <GiftForm cancelled={cancelled === '1'} />
        </div>
      </section>
    </main>
  )
}
