'use client'

import { useState } from 'react'

type Tier = {
  name: string
  monthly: string
  yearly: string
  yearlyTotal: string
  tagline: string
  popular?: boolean
  features: string[]
}

const tiers: Tier[] = [
  {
    name: 'Single',
    monthly: '$9.99',
    yearly: '$7.99',
    yearlyTotal: '$95.88 billed annually',
    tagline: 'For one parent, getting it together.',
    features: [
      'One parent account',
      'One child profile',
      'Every PAM feature unlocked',
      'AU-specific checklists & reminders',
      '7-day free trial · cancel anytime',
    ],
  },
  {
    name: 'Couple',
    monthly: '$14.99',
    yearly: '$12.99',
    yearlyTotal: '$155.88 billed annually',
    tagline: 'For two parents sharing the load.',
    popular: true,
    features: [
      'Two parent accounts, fully shared',
      'Up to two child profiles',
      'Every PAM feature unlocked',
      'Trusted carer view (grandparent, sitter)',
      'Real-time sync across both phones',
      '7-day free trial · cancel anytime',
    ],
  },
  {
    name: 'Family',
    monthly: '$29.99',
    yearly: '$24.99',
    yearlyTotal: '$299.88 billed annually',
    tagline: 'For the whole family, growing together.',
    features: [
      'Two parent accounts, fully shared',
      'Unlimited child profiles',
      'Every PAM feature unlocked',
      'Trusted carer & grandparent views',
      'Priority support',
      '7-day free trial · cancel anytime',
    ],
  },
]

export default function PricingTiles() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')
  const isAnnual = billing === 'annual'

  return (
    <>
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

      <div className="pricing-grid">
        {tiers.map((t) => (
          <div key={t.name} className={`pricing-tile${t.popular ? ' pricing-tile--popular' : ''}`}>
            {t.popular && <span className="pricing-badge">Most popular</span>}
            <div className="pricing-tile-name">{t.name}</div>
            <div className="pricing-tile-price">
              <span className="pricing-amount">{isAnnual ? t.yearly : t.monthly}</span>
              <span className="pricing-period">/month</span>
            </div>
            <div className="pricing-yearly">
              {isAnnual ? (
                <>
                  <b>{t.yearlyTotal}</b>
                  <span className="pricing-yearly-total">Equivalent to {t.yearly}/month</span>
                </>
              ) : (
                <>
                  or <b>{t.yearly}/month</b> billed annually
                  <span className="pricing-yearly-total">{t.yearlyTotal}</span>
                </>
              )}
            </div>
            <p className="pricing-tagline">{t.tagline}</p>
            <ul className="pricing-features">
              {t.features.map((f) => (
                <li key={f}>
                  <span className="pricing-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 12l4 4L19 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://tally.so/r/q4J1vg" target="_blank" rel="noreferrer" className="pricing-cta">
              Start free trial
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
