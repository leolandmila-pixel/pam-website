'use client'

import { useState } from 'react'

type Tier = {
  name: string
  monthly: string
  yearlyTotal: string
  yearlyPerMonth: string
  tagline: string
  popular?: boolean
  features: string[]
}

const tiers: Tier[] = [
  {
    name: 'Single',
    monthly: '$14.99',
    yearlyTotal: '$144.99',
    yearlyPerMonth: '$12.08',
    tagline: 'For one parent, getting it together.',
    features: [
      'One parent account',
      'One child profile',
      'Every PAM feature unlocked',
      'AU-specific checklists & reminders',
    ],
  },
  {
    name: 'Couple',
    monthly: '$24.99',
    yearlyTotal: '$239.99',
    yearlyPerMonth: '$20.00',
    tagline: 'For two parents sharing the load.',
    popular: true,
    features: [
      'Two parent accounts, fully shared',
      'Up to two child profiles',
      'Every PAM feature unlocked',
      'Trusted carer view (grandparent, sitter)',
      'Real-time sync across both phones',
    ],
  },
  {
    name: 'Family',
    monthly: '$29.99',
    yearlyTotal: '$289.99',
    yearlyPerMonth: '$24.17',
    tagline: 'For the whole family, growing together.',
    features: [
      'Two parent accounts, fully shared',
      'Unlimited child profiles',
      'Every PAM feature unlocked',
      'Trusted carer & grandparent views',
      'Priority support',
    ],
  },
]

export default function PricingTiles() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const isAnnual = billing === 'annual'

  return (
    <>
      <div className="pricing-section-head">
        <span className="eyebrow">App Plans</span>
        <h2>Made for your village.</h2>
        <p className="pricing-section-sub">Single, Couple or Family. Try any of them free for 14 days.</p>
      </div>

      <div className="pricing-toggle" role="tablist" aria-label="Billing period">
        <span className={`pricing-toggle-slider${isAnnual ? ' pricing-toggle-slider--annual' : ''}`} />
        <button
          type="button"
          role="tab"
          aria-selected={!isAnnual}
          className={`pricing-toggle-btn${!isAnnual ? ' is-active' : ''}`}
          onClick={() => setBilling('monthly')}
        >
          Monthly
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={isAnnual}
          className={`pricing-toggle-btn${isAnnual ? ' is-active' : ''}`}
          onClick={() => setBilling('annual')}
        >
          Annual <span className="pricing-toggle-save">Save up to 20%</span>
        </button>
      </div>

      <div className="pricing-grid pricing-grid--static">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`pricing-tile pricing-tile--static${t.popular ? ' pricing-tile--popular' : ''}`}
          >
            {t.popular && <span className="pricing-badge">Most popular</span>}

            <div className="pricing-tile-name">{t.name}</div>
            <div className="pricing-tile-price">
              <span className="pricing-amount">{isAnnual ? t.yearlyTotal : t.monthly}</span>
              <span className="pricing-period">{isAnnual ? '/year' : '/month'}</span>
            </div>

            <div className="pricing-divider" />
            <p className="pricing-tagline">{t.tagline}</p>

            <ul className="pricing-features">
              {t.features.map((f) => (
                <li key={f}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
              <li>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                14-day free trial · cancel anytime
              </li>
              <li className="pricing-yearly-note">
                {isAnnual
                  ? <><b>{t.yearlyTotal}</b> billed once per year (works out to {t.yearlyPerMonth}/month)</>
                  : <>or <b>{t.yearlyTotal}/year</b> - save ~20% vs monthly</>
                }
              </li>
            </ul>

            <a
              href="https://apps.apple.com/au/app/parental-admin-manager/id6780860987"
              target="_blank"
              rel="noreferrer"
              className="pricing-cta"
            >
              Start free trial
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
