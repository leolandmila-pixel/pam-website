import type { Metadata } from 'next'
import { giftMetadata } from '../metadata'
import GiftForm from '@/components/GiftForm'

export const metadata: Metadata = giftMetadata

const BowSvg = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 60 72" fill="currentColor" className={className} style={style} aria-hidden="true">
    <path d="M30 28 C27 20 18 11 12 14 C8 17 9 24 14 26 C19 28.5 27 28 30 28Z" />
    <path d="M30 28 C28 23 22 16 19 18 C17 19.5 18 23 21 24 C24 25.5 28 27 30 28Z" opacity={0.45} />
    <path d="M30 28 C33 20 42 11 48 14 C52 17 51 24 46 26 C41 28.5 33 28 30 28Z" />
    <path d="M30 28 C32 23 38 16 41 18 C43 19.5 42 23 39 24 C36 25.5 32 27 30 28Z" opacity={0.45} />
    <ellipse cx="30" cy="28.5" rx="3.5" ry="4" />
    <path d="M27 32 C25 44 23.5 56 23 70 L26.5 70 C26.5 56 28 44 30 32Z" />
    <path d="M30 32 C32 44 33.5 56 34 70 L37.5 70 C37.5 56 36 44 33 32Z" />
  </svg>
)

function GiftCard({ rotate, offset, opacity }: { rotate: number; offset: string; opacity?: number }) {
  return (
    <div
      className="gift2-card"
      style={{ transform: `rotate(${rotate}deg) translateX(${offset})`, opacity: opacity ?? 1 }}
    >
      <BowSvg className="gift2-card-bow" style={{ top: '5%', left: '5%', width: 18 }} />
      <BowSvg className="gift2-card-bow" style={{ top: '4%', right: '7%', width: 16 }} />
      <BowSvg className="gift2-card-bow" style={{ bottom: '6%', left: '7%', width: 16 }} />
      <BowSvg className="gift2-card-bow" style={{ bottom: '4%', right: '5%', width: 14 }} />
      <span className="gift2-card-pam">PAM</span>
    </div>
  )
}

export default async function GiftPage({ searchParams }: { searchParams: Promise<{ cancelled?: string }> }) {
  const { cancelled } = await searchParams
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="gift2-hero">
        <BowSvg className="gift2-corner gift2-corner-tl" />
        <BowSvg className="gift2-corner gift2-corner-tr" />
        <BowSvg className="gift2-corner gift2-corner-bl" />
        <BowSvg className="gift2-corner gift2-corner-br" />

        <div className="container gift2-inner">
          <span className="eyebrow gift2-eyebrow">PAM Gift Cards</span>
          <h1 className="gift2-h1">
            Give someone <em>a little less</em> to remember.
          </h1>
          <p className="gift2-sub">
            3, 6 or 12 months of PAM for a mum or dad you love. Immunisations, checklists, sleep and every small milestone - out of their head and into the app.
          </p>

          <div className="gift2-cards" aria-hidden="true">
            <GiftCard rotate={-7} offset="-48%" opacity={0.75} />
            <GiftCard rotate={1} offset="0%" />
            <GiftCard rotate={8} offset="48%" opacity={0.75} />
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="gift-section">
        <div className="container gift-container">
          <GiftForm cancelled={cancelled === '1'} />
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="gift2-how-wrap">
        <div className="container">
          <div className="gift2-how">
            <div className="gift2-step">
              <BowSvg className="gift2-step-bow" />
              <h3>Choose a gift</h3>
              <p>Pick the plan and duration, add a personal message and check out securely.</p>
            </div>
            <div className="gift2-step">
              <BowSvg className="gift2-step-bow" />
              <h3>It lands in their inbox</h3>
              <p>Your gift arrives by email, beautifully presented, the moment you check out.</p>
            </div>
            <div className="gift2-step">
              <BowSvg className="gift2-step-bow" />
              <h3>They redeem in-app</h3>
              <p>One tap to unlock PAM. No credit card needed from them, ever.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
