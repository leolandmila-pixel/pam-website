'use client'

import { useState } from 'react'

type Tier = {
  name: string
  monthly: string
  yearly: string
  yearlyTotal: string
  tagline: string
  popular?: boolean
  summaryFeature: string   // single key feature shown in collapsed pill
  features: string[]
}

const tiers: Tier[] = [
  {
    name: 'Single',
    monthly: '$9.99',
    yearly: '$7.99',
    yearlyTotal: '$95.88 billed annually',
    tagline: 'For one parent, getting it together.',
    summaryFeature: 'One parent account',
    features: [
      'One parent account',
      'One child profile',
      'Every PAM feature unlocked',
      'AU-specific checklists & reminders',
    ],
  },
  {
    name: 'Couple',
    monthly: '$14.99',
    yearly: '$12.99',
    yearlyTotal: '$155.88 billed annually',
    tagline: 'For two parents sharing the load.',
    popular: true,
    summaryFeature: 'Two parent accounts, fully shared',
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
    yearly: '$24.99',
    yearlyTotal: '$299.88 billed annually',
    tagline: 'For the whole family, growing together.',
    summaryFeature: 'Unlimited child profiles',
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
  const [expanded, setExpanded] = useState<string>('Couple')
  const isAnnual = billing === 'annual'

  const toggle = (name: string) => setExpanded(prev => prev === name ? '' : name)

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
        {tiers.map((t) => {
          const isOpen = expanded === t.name
          const priceLabel = isAnnual
            ? `${t.yearly}/month billed annually`
            : `${t.monthly} billed monthly`

          return (
            <div
              key={t.name}
              className={`pricing-tile${t.popular ? ' pricing-tile--popular' : ''}${isOpen ? ' pricing-tile--open' : ''}`}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => toggle(t.name)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle(t.name)}
            >
              {t.popular && <span className="pricing-badge">Most popular</span>}

              {/* Always-visible header */}
              <div className="pricing-tile-header">
                <div className="pricing-tile-header-left">
                  <div className="pricing-tile-name">{t.name}</div>
                  <div className="pricing-tile-price">
                    <span className="pricing-amount">{isAnnual ? t.yearly : t.monthly}</span>
                    <span className="pricing-period">/month</span>
                  </div>
                </div>
                <svg className="pricing-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* 3 summary bullets - visible when collapsed */}
              {!isOpen && (
                <ul className="pricing-summary">
                  <li>{priceLabel}</li>
                  <li>{t.summaryFeature}</li>
                  <li>14-day free trial, cancel anytime</li>
                </ul>
              )}

              {/* Expanded detail */}
              <div className="pricing-tile-body">
                <div className="pricing-tile-body-inner">
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
                  </ul>
                  <div className="pricing-yearly-note">
                    {isAnnual
                      ? <span>{t.yearlyTotal}</span>
                      : <span>or <b>{t.yearly}/month</b> billed annually - save 20%</span>
                    }
                  </div>
                </div>
              </div>

              {/* CTA always visible */}
              <a
                href="https://tally.so/r/q4J1vg"
                target="_blank"
                rel="noreferrer"
                className="pricing-cta"
                onClick={(e) => e.stopPropagation()}
              >
                Start free trial
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}
