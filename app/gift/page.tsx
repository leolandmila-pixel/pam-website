import type { Metadata } from 'next'
import { giftMetadata } from '../metadata'
import GiftForm from '@/components/GiftForm'
import BowSvg from '@/components/BowSvg'

export const metadata: Metadata = giftMetadata

function GiftCard({ rotate, offset, opacity }: { rotate: number; offset: string; opacity?: number }) {
  return (
    <div className="gift2-card" style={{ transform: `rotate(${rotate}deg) translateX(${offset})`, opacity: opacity ?? 1 }}>
      <BowSvg className="gift2-card-bow" style={{ top: '8%', left: '8%', width: 20 }} />
      <BowSvg className="gift2-card-bow" style={{ top: '6%', right: '10%', width: 18 }} />
      <BowSvg className="gift2-card-bow" style={{ bottom: '8%', left: '10%', width: 18 }} />
      <BowSvg className="gift2-card-bow" style={{ bottom: '6%', right: '8%', width: 16 }} />
      <span className="gift2-card-pam">PAM</span>
    </div>
  )
}

/* Scattered background bows */
const bgBows: { top: string; left?: string; right?: string; width: number }[] = [
  { top: '12%', left: '3%',   width: 20 },
  { top: '18%', right: '5%',  width: 18 },
  { top: '32%', left: '2%',   width: 16 },
  { top: '38%', right: '3%',  width: 20 },
  { top: '52%', left: '4%',   width: 18 },
  { top: '58%', right: '4%',  width: 16 },
  { top: '72%', left: '3%',   width: 20 },
  { top: '78%', right: '5%',  width: 16 },
  { top: '90%', left: '10%',  width: 14 },
  { top: '93%', right: '10%', width: 14 },
]

export default async function GiftPage({ searchParams }: { searchParams: Promise<{ cancelled?: string }> }) {
  const { cancelled } = await searchParams
  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="gift2-hero">
        {/* scattered background bows */}
        {bgBows.map((b, i) => (
          <BowSvg
            key={i}
            className="gift2-bg-bow"
            style={{ top: b.top, left: b.left, right: b.right, width: b.width }}
          />
        ))}

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
            <GiftCard rotate={1}  offset="0%" />
            <GiftCard rotate={8}  offset="48%" opacity={0.75} />
          </div>
        </div>
      </section>

      {/* ===== CHECKOUT FORM ===== */}
      <section className="gift2-form-section">
        <GiftForm cancelled={cancelled === '1'} />
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
