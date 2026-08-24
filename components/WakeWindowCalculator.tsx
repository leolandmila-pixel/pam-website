'use client'

import { useMemo, useState } from 'react'

const ageOptions = [
  { value: '0-1', label: 'Newborn (0-1 month)', wakeWindow: 50, naps: 5 },
  { value: '1-2', label: '1-2 months', wakeWindow: 65, naps: 5 },
  { value: '2-3', label: '2-3 months', wakeWindow: 80, naps: 4 },
  { value: '3-4', label: '3-4 months', wakeWindow: 105, naps: 4 },
  { value: '4-6', label: '4-6 months', wakeWindow: 135, naps: 3 },
  { value: '6-9', label: '6-9 months', wakeWindow: 165, naps: 3 },
  { value: '9-12', label: '9-12 months', wakeWindow: 210, naps: 2 },
  { value: '12-18', label: '12-18 months', wakeWindow: 270, naps: 2 },
  { value: '18-24', label: '18-24 months', wakeWindow: 330, naps: 1 },
  { value: '24-36', label: '2-3 years', wakeWindow: 330, naps: 1 },
]

const napLengthOptions = [30, 45, 60, 90, 120]

function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m === 0 ? `${h}h` : `${h}h ${m}m`
}

function formatMinutes(totalMinutes: number) {
  const m = ((totalMinutes % 1440) + 1440) % 1440
  const hour24 = Math.floor(m / 60)
  const min = m % 60
  const period = hour24 < 12 ? 'AM' : 'PM'
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12
  return `${hour12}:${String(min).padStart(2, '0')} ${period}`
}

export default function WakeWindowCalculator() {
  const [ageValue, setAgeValue] = useState('')
  const [wakeTime, setWakeTime] = useState('07:00')
  const [napLength, setNapLength] = useState(45)
  const [submitted, setSubmitted] = useState(false)

  const result = useMemo(() => {
    const age = ageOptions.find((a) => a.value === ageValue)
    if (!age || !wakeTime) return null

    const [h, m] = wakeTime.split(':').map(Number)
    if (Number.isNaN(h) || Number.isNaN(m)) return null

    let cursor = h * 60 + m
    const schedule = [{ label: 'Wake up', time: formatMinutes(cursor) }]

    for (let i = 1; i <= age.naps; i++) {
      const napStart = cursor + age.wakeWindow
      const napEnd = napStart + napLength
      schedule.push({ label: `Nap ${i}`, time: `${formatMinutes(napStart)} - ${formatMinutes(napEnd)}` })
      cursor = napEnd
    }

    schedule.push({ label: 'Bedtime', time: formatMinutes(cursor + age.wakeWindow) })

    return { schedule, wakeWindowLabel: formatDuration(age.wakeWindow), naps: age.naps }
  }, [ageValue, wakeTime, napLength])

  function reset() {
    setAgeValue('')
    setWakeTime('07:00')
    setNapLength(45)
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
          <label htmlFor="babyAge">Baby&apos;s age</label>
          <select id="babyAge" value={ageValue} onChange={(e) => { setAgeValue(e.target.value); setSubmitted(false) }} required>
            <option value="" disabled>Select age</option>
            {ageOptions.map((a) => (
              <option key={a.value} value={a.value}>{a.label}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="wakeTime">Morning wake time</label>
          <input
            id="wakeTime"
            type="time"
            value={wakeTime}
            onChange={(e) => { setWakeTime(e.target.value); setSubmitted(false) }}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="napLength">Typical nap length</label>
          <select id="napLength" value={napLength} onChange={(e) => { setNapLength(Number(e.target.value)); setSubmitted(false) }}>
            {napLengthOptions.map((n) => (
              <option key={n} value={n}>{n} min{n === 45 ? ' (average)' : ''}</option>
            ))}
          </select>
        </div>

        <div className="calc-btn-row">
          <button type="submit" className="send-btn calc-submit-btn">Calculate wake window</button>
          <button type="button" className="calc-reset-link" onClick={reset}>Reset</button>
        </div>
      </form>

      {submitted && result && (
        <>
          <div className="calc-result">
            <span className="calc-result-label">Wake window for this age</span>
            <span className="calc-result-value">{result.wakeWindowLabel}</span>
            <div className="calc-result-meta">{result.naps} nap{result.naps === 1 ? '' : 's'} a day</div>
          </div>

          <div className="calc-schedule-secondary">
            <span className="calc-schedule-heading">Suggested times today</span>
            <ul className="calc-schedule-list">
              {result.schedule.map((item) => (
                <li key={item.label} className="calc-schedule-item">
                  <span className="calc-schedule-label">{item.label}</span>
                  <span className="calc-schedule-time">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <p className="calc-note">Every baby is different - use this as a starting guide, not a strict schedule.</p>
    </div>
  )
}
