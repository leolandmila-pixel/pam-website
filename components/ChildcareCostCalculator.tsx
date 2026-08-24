'use client'

import { useMemo, useState } from 'react'

const GUARANTEED_HOURS_PER_WEEK = 36 // 3-day guarantee, from Jan 2026 - no activity test needed up to this
const EXTENDED_HOURS_PER_WEEK = 50 // up to 100hrs/fortnight for families meeting the activity test
const LOWER_INCOME_THRESHOLD = 83280
const UPPER_INCOME_THRESHOLD = 533280

function ccsPercent(income: number, higherRate: boolean) {
  let pct: number
  if (income <= LOWER_INCOME_THRESHOLD) pct = 90
  else if (income >= UPPER_INCOME_THRESHOLD) pct = 0
  else {
    const steps = Math.floor((income - LOWER_INCOME_THRESHOLD) / 5000)
    pct = Math.max(0, 90 - steps)
  }
  if (higherRate && pct > 0) pct = Math.min(95, pct + 30)
  return pct
}

function money(n: number) {
  return n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 })
}

export default function ChildcareCostCalculator() {
  const [income, setIncome] = useState('95000')
  const [hoursPerWeek, setHoursPerWeek] = useState('30')
  const [hourlyFee, setHourlyFee] = useState('12.50')
  const [rateCap, setRateCap] = useState('14.29')
  const [higherRate, setHigherRate] = useState(false)
  const [meetsActivityTest, setMeetsActivityTest] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  const result = useMemo(() => {
    const incomeNum = parseFloat(income)
    const hoursNum = parseFloat(hoursPerWeek)
    const feeNum = parseFloat(hourlyFee)
    const capNum = parseFloat(rateCap)

    if ([incomeNum, hoursNum, feeNum, capNum].some((n) => Number.isNaN(n) || n < 0)) return null

    const pct = ccsPercent(incomeNum, higherRate)

    const cappedHours = hoursNum <= GUARANTEED_HOURS_PER_WEEK
      ? hoursNum
      : meetsActivityTest
        ? Math.min(hoursNum, EXTENDED_HOURS_PER_WEEK)
        : GUARANTEED_HOURS_PER_WEEK

    const effectiveRate = Math.min(feeNum, capNum)
    const weeklySubsidy = (pct / 100) * effectiveRate * cappedHours
    const grossWeekly = feeNum * hoursNum
    const outOfPocket = Math.max(0, grossWeekly - weeklySubsidy)

    return { pct, cappedHours, weeklySubsidy, grossWeekly, outOfPocket }
  }, [income, hoursPerWeek, hourlyFee, rateCap, higherRate, meetsActivityTest])

  function reset() {
    setIncome('95000')
    setHoursPerWeek('30')
    setHourlyFee('12.50')
    setRateCap('14.29')
    setHigherRate(false)
    setMeetsActivityTest(true)
    setSubmitted(false)
  }

  const needsActivityQuestion = parseFloat(hoursPerWeek) > GUARANTEED_HOURS_PER_WEEK

  return (
    <div className="calc-card">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
      >
        <div className="field">
          <label htmlFor="ccIncome">Combined family income ($/year)</label>
          <input id="ccIncome" type="number" min="0" step="1000" value={income} onChange={(e) => { setIncome(e.target.value); setSubmitted(false) }} required />
        </div>

        <div className="field">
          <label htmlFor="ccHours">Hours of care needed per week</label>
          <input id="ccHours" type="number" min="0" step="1" value={hoursPerWeek} onChange={(e) => { setHoursPerWeek(e.target.value); setSubmitted(false) }} required />
        </div>

        <div className="field">
          <label htmlFor="ccFee">Hourly fee charged by your centre ($)</label>
          <input id="ccFee" type="number" min="0" step="0.1" value={hourlyFee} onChange={(e) => { setHourlyFee(e.target.value); setSubmitted(false) }} required />
        </div>

        <div className="field">
          <label htmlFor="ccCap">Government hourly rate cap ($)</label>
          <input id="ccCap" type="number" min="0" step="0.01" value={rateCap} onChange={(e) => { setRateCap(e.target.value); setSubmitted(false) }} required />
          <span className="field-hint">Indicative figure - check the current cap at servicesaustralia.gov.au</span>
        </div>

        <div className="field">
          <label htmlFor="ccHigherRate">Do you have another child aged 5 or under also in child care?</label>
          <select id="ccHigherRate" value={higherRate ? 'yes' : 'no'} onChange={(e) => { setHigherRate(e.target.value === 'yes'); setSubmitted(false) }}>
            <option value="no">No</option>
            <option value="yes">Yes - I get the higher subsidy rate</option>
          </select>
        </div>

        {needsActivityQuestion && (
          <div className="field">
            <label htmlFor="ccActivity">Do you and your partner both work, study or volunteer 48+ hours a fortnight?</label>
            <select id="ccActivity" value={meetsActivityTest ? 'yes' : 'no'} onChange={(e) => { setMeetsActivityTest(e.target.value === 'yes'); setSubmitted(false) }}>
              <option value="yes">Yes</option>
              <option value="no">No - I only need the guaranteed 3 days</option>
            </select>
            <span className="field-hint">This unlocks subsidised hours beyond the guaranteed 3 days (36 hrs) a week.</span>
          </div>
        )}

        <div className="calc-btn-row">
          <button type="submit" className="send-btn calc-submit-btn">Calculate my cost</button>
          <button type="button" className="calc-reset-link" onClick={reset}>Reset</button>
        </div>
      </form>

      {submitted && result && (
        <>
          <div className="calc-result">
            <span className="calc-result-label">Estimated out-of-pocket cost</span>
            <span className="calc-result-value">{money(result.outOfPocket)} / week</span>
            <div className="calc-result-meta">Your Child Care Subsidy rate: {result.pct}%</div>
          </div>

          <div className="calc-schedule-secondary">
            <span className="calc-schedule-heading">Breakdown</span>
            <ul className="calc-schedule-list">
              <li className="calc-schedule-item">
                <span className="calc-schedule-label">Gross weekly fee</span>
                <span className="calc-schedule-time">{money(result.grossWeekly)}</span>
              </li>
              <li className="calc-schedule-item">
                <span className="calc-schedule-label">Subsidised hours / week</span>
                <span className="calc-schedule-time">{result.cappedHours} hrs</span>
              </li>
              <li className="calc-schedule-item">
                <span className="calc-schedule-label">Estimated weekly subsidy</span>
                <span className="calc-schedule-time">- {money(result.weeklySubsidy)}</span>
              </li>
              <li className="calc-schedule-item">
                <span className="calc-schedule-label">Your out-of-pocket cost</span>
                <span className="calc-schedule-time">{money(result.outOfPocket)}</span>
              </li>
            </ul>
          </div>
        </>
      )}

      <p className="calc-note">
        Indicative estimate only, based on published Child Care Subsidy settings including the 3-day guarantee (from January 2026).
        Actual entitlements depend on your individual circumstances - confirm your subsidy via Services Australia / Centrelink.
      </p>
    </div>
  )
}
