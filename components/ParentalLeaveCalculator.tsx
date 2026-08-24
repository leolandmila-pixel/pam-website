'use client'

import { useMemo, useState } from 'react'

const MAX_SCHEME_WEEKS = 26 // from 1 July 2026
const STANDARD_HOURS_PER_WEEK = 38
const SUPER_RATE = 0.12 // Government PLP has included super since July 2025

function money(n: number) {
  return n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 })
}

export default function ParentalLeaveCalculator() {
  const [totalWeeks, setTotalWeeks] = useState('26')
  const [yourWeeks, setYourWeeks] = useState('18')
  const [hourlyRate, setHourlyRate] = useState('25.00')
  const [submitted, setSubmitted] = useState(false)

  type Result =
    | { error: string }
    | {
        partnerWeeks: number
        weeklyPayment: number
        totalPayment: number
        yourPayment: number
        partnerPayment: number
        superAmount: number
      }

  const result = useMemo<Result | null>(() => {
    const total = parseFloat(totalWeeks)
    const yours = parseFloat(yourWeeks)
    const rate = parseFloat(hourlyRate)

    if ([total, yours, rate].some((n) => Number.isNaN(n) || n < 0)) return null
    if (yours > total) return { error: "Your weeks can't be more than the total weeks you're using." }

    const partnerWeeks = Math.max(0, total - yours)
    const weeklyPayment = rate * STANDARD_HOURS_PER_WEEK

    const totalPayment = total * weeklyPayment
    const yourPayment = yours * weeklyPayment
    const partnerPayment = partnerWeeks * weeklyPayment
    const superAmount = totalPayment * SUPER_RATE

    return { partnerWeeks, weeklyPayment, totalPayment, yourPayment, partnerPayment, superAmount }
  }, [totalWeeks, yourWeeks, hourlyRate])

  function reset() {
    setTotalWeeks('26')
    setYourWeeks('18')
    setHourlyRate('25.00')
    setSubmitted(false)
  }

  return (
    <div className="calc-card">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
      >
        <div className="field">
          <label htmlFor="plTotal">Total weeks of Parental Leave Pay you&apos;ll use</label>
          <input
            id="plTotal"
            type="number"
            min="0"
            max={MAX_SCHEME_WEEKS}
            step="1"
            value={totalWeeks}
            onChange={(e) => { setTotalWeeks(e.target.value); setSubmitted(false) }}
            required
          />
          <span className="field-hint">Up to {MAX_SCHEME_WEEKS} weeks total from 1 July 2026, shared between both parents.</span>
        </div>

        <div className="field">
          <label htmlFor="plYours">Weeks you&apos;ll personally take</label>
          <input
            id="plYours"
            type="number"
            min="0"
            step="1"
            value={yourWeeks}
            onChange={(e) => { setYourWeeks(e.target.value); setSubmitted(false) }}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="plRate">Hourly pay rate ($)</label>
          <input id="plRate" type="number" min="0" step="0.01" value={hourlyRate} onChange={(e) => { setHourlyRate(e.target.value); setSubmitted(false) }} required />
          <span className="field-hint">Government Parental Leave Pay is set at the national minimum wage - check the current rate at fairwork.gov.au</span>
        </div>

        <div className="calc-btn-row">
          <button type="submit" className="send-btn calc-submit-btn">Calculate my payment</button>
          <button type="button" className="calc-reset-link" onClick={reset}>Reset</button>
        </div>
      </form>

      {submitted && result && 'error' in result && <p className="calc-note calc-note-error">{result.error}</p>}

      {submitted && result && 'totalPayment' in result && (
        <>
          <div className="calc-result">
            <span className="calc-result-label">Estimated total payment</span>
            <span className="calc-result-value">{money(result.totalPayment)}</span>
            <div className="calc-result-meta">Plus an estimated {money(result.superAmount)} in superannuation (12%)</div>
          </div>

          <div className="calc-schedule-secondary">
            <span className="calc-schedule-heading">Breakdown</span>
            <ul className="calc-schedule-list">
              <li className="calc-schedule-item">
                <span className="calc-schedule-label">Weekly payment rate</span>
                <span className="calc-schedule-time">{money(result.weeklyPayment)}</span>
              </li>
              <li className="calc-schedule-item">
                <span className="calc-schedule-label">Your weeks &amp; payment</span>
                <span className="calc-schedule-time">{yourWeeks} wks - {money(result.yourPayment)}</span>
              </li>
              <li className="calc-schedule-item">
                <span className="calc-schedule-label">Partner&apos;s weeks &amp; payment</span>
                <span className="calc-schedule-time">{result.partnerWeeks} wks - {money(result.partnerPayment)}</span>
              </li>
              <li className="calc-schedule-item">
                <span className="calc-schedule-label">Estimated super (12%)</span>
                <span className="calc-schedule-time">{money(result.superAmount)}</span>
              </li>
            </ul>
          </div>
        </>
      )}

      <p className="calc-note">
        Indicative estimate only. Government Parental Leave Pay is subject to income tests and a reserved &quot;use it or lose it&quot;
        portion for each parent - eligibility and current rates are confirmed by Services Australia at servicesaustralia.gov.au.
      </p>
    </div>
  )
}
