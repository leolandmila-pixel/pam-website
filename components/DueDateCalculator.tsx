'use client'

import { useMemo, useState } from 'react'

function addDays(date: Date, days: number) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function formatDate(date: Date) {
  return date.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

const cycleLengths = Array.from({ length: 15 }, (_, i) => i + 21) // 21-35 days

export default function DueDateCalculator() {
  const [lmp, setLmp] = useState('')
  const [cycleLength, setCycleLength] = useState(28)
  const [submitted, setSubmitted] = useState(false)

  const result = useMemo(() => {
    if (!lmp) return null
    const lmpDate = new Date(`${lmp}T00:00:00`)
    if (Number.isNaN(lmpDate.getTime())) return null

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (lmpDate.getTime() > today.getTime()) {
      return { error: 'That date is in the future - pop in the first day of your last period.' }
    }

    const dueDate = addDays(lmpDate, 280 + (cycleLength - 28))
    const diffDays = Math.floor((today.getTime() - lmpDate.getTime()) / 86400000)
    const weeks = Math.floor(diffDays / 7)
    const days = diffDays % 7

    const trimester = weeks < 13 ? 'First trimester' : weeks < 27 ? 'Second trimester' : 'Third trimester'
    const overdue = weeks >= 42

    return {
      dueDate: formatDate(dueDate),
      gestation: `${weeks} week${weeks === 1 ? '' : 's'}${days ? `, ${days} day${days === 1 ? '' : 's'}` : ''}`,
      trimester,
      overdue,
    }
  }, [lmp, cycleLength])

  return (
    <div className="calc-card">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
      >
        <div className="field">
          <label htmlFor="lmpDate">First day of last period</label>
          <input
            id="lmpDate"
            type="date"
            value={lmp}
            onChange={(e) => { setLmp(e.target.value); setSubmitted(false) }}
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div className="field">
          <label htmlFor="cycleLength">Average cycle length</label>
          <select
            id="cycleLength"
            value={cycleLength}
            onChange={(e) => { setCycleLength(Number(e.target.value)); setSubmitted(false) }}
          >
            {cycleLengths.map((n) => (
              <option key={n} value={n}>{n} days{n === 28 ? ' (average)' : ''}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="send-btn calc-submit-btn">Calculate my due date</button>
      </form>

      {submitted && result && 'error' in result && <p className="calc-note calc-note-error">{result.error}</p>}

      {submitted && result && 'dueDate' in result && (
        <div className="calc-result">
          <span className="calc-result-label">Estimated due date</span>
          <span className="calc-result-value">{result.dueDate}</span>
          <div className="calc-result-meta">
            {result.overdue ? (
              <span>Your estimated due date has passed - congratulations if baby&apos;s already here!</span>
            ) : (
              <span>{result.gestation} along - {result.trimester}</span>
            )}
          </div>
        </div>
      )}

      <p className="calc-note">This is a general estimate, not medical advice. Your care provider&apos;s dating scan is the most accurate guide.</p>
    </div>
  )
}
