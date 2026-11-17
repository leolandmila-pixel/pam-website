import type { Metadata } from 'next'
import { redeemMetadata } from '../metadata'
import RedeemForm from '@/components/RedeemForm'
import './redeem.css'

export const metadata: Metadata = redeemMetadata

export default async function RedeemPage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const { code } = await searchParams
  return (
    <main>
      <section className="gift-hero">
        <div className="container">
          <span className="eyebrow">Redeem a gift</span>
          <h1 className="gift-hero-h">Someone’s given you <span className="em">PAM.</span></h1>
          <p className="feature-prose">
            Enter your gift code and your PAM account code, and your plan starts straight away. No payment details
            needed, and nothing renews automatically.
          </p>
        </div>
      </section>
      <section className="gift-section">
        <div className="container gift-container">
          <RedeemForm initialCode={typeof code === 'string' ? code.slice(0, 40) : ''} />
        </div>
      </section>
    </main>
  )
}
