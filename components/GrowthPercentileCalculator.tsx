'use client'

import { useMemo, useState } from 'react'

const ageOptions = [
  { value: '0', label: 'Birth' },
  { value: '1', label: '1 month' },
  { value: '2', label: '2 months' },
  { value: '4', label: '4 months' },
  { value: '6', label: '6 months' },
  { value: '9', label: '9 months' },
  { value: '12', label: '12 months' },
  { value: '18', label: '18 months' },
  { value: '24', label: '24 months' },
]

// Approximate median values from the WHO Child Growth Standards, at common check-up ages.
const weightMedianKg: Record<string, Record<string, number>> = {
  boy: { '0': 3.3, '1': 4.5, '2': 5.6, '4': 7.0, '6': 7.9, '9': 8.9, '12': 9.6, '18': 10.9, '24': 12.2 },
  girl: { '0': 3.2, '1': 4.2, '2': 5.1, '4': 6.4, '6': 7.3, '9': 8.2, '12': 8.9, '18': 10.2, '24': 11.5 },
}

const lengthMedianCm: Record<string, Record<string, number>> = {
  boy: { '0': 49.9, '1': 54.7, '2': 58.4, '4': 63.9, '6': 67.6, '9': 72.0, '12': 75.7, '18': 81.2, '24': 87.1 },
  girl: { '0': 49.1, '1': 53.7, '2': 57.1, '4': 62.1, '6': 65.7, '9': 70.1, '12': 74.0, '18': 79.1, '24': 85.5 },
}

const WEIGHT_CV = 0.13
const LENGTH_CV = 0.045

function erf(x: number) {
  const sign = x < 0 ? -1 : 1
  const ax = Math.abs(x)
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911
  const t = 1 / (1 + p * ax)
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-ax * ax)
  return sign * y
}

function normalCdf(z: number) {
  return 0.5 * (1 + erf(z / Math.SQRT2))
}

function describe(percentile: number, metric: 'weight' | 'length') {
  const word = metric === 'weight' ? ['lighter', 'heavier'] : ['shorter', 'taller']
  if (percentile < 10) return `notably ${word[0]} than most children this age`
  if (percentile < 25) return `on the ${word[0]} side for this age`
  if (percentile <= 75) return `right around the typical range for this age`
  if (percentile <= 90) return `on the ${word[1]} side for this age`
  return `notably ${word[1]} than most children this age`
}

export default function GrowthPercentileCalculator() {
  const [sex, setSex] = useState<'boy' | 'girl'>('boy')
  const [age, setAge] = useState('12')
  const [metric, setMetric] = useState<'weight' | 'length'>('weight')
  const [value, setValue] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const result = useMemo(() => {
    const num = parseFloat(value)
    if (!value || Number.isNaN(num) || num <= 0) return null

    const table = metric === 'weight' ? weightMedianKg : lengthMedianCm
    const median = table[sex][age]
    const cv = metric === 'weight' ? WEIGHT_CV : LENGTH_CV

    const z = (num - median) / (cv * median)
    const raw = normalCdf(z) * 100
    const percentile = Math.max(1, Math.min(99, Math.round(raw)))

    return { percentile, median, description: describe(percentile, metric) }
  }, [sex, age, metric, value])

  function reset() {
    setSex('boy')
    setAge('12')
    setMetric('weight')
    setValue('')
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
          <label htmlFor="gpSex">Sex</label>
          <select id="gpSex" value={sex} onChange={(e) => { setSex(e.target.value as 'boy' | 'girl'); setSubmitted(false) }}>
            <option value="boy">Boy</option>
            <option value="girl">Girl</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="gpAge">Age</label>
          <select id="gpAge" value={age} onChange={(e) => { setAge(e.target.value); setSubmitted(false) }}>
            {ageOptions.map((a) => (
              <option key={a.value} value={a.value}>{a.label}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="gpMetric">Measurement</label>
          <select id="gpMetric" value={metric} onChange={(e) => { setMetric(e.target.value as 'weight' | 'length'); setValue(''); setSubmitted(false) }}>
            <option value="weight">Weight (kg)</option>
            <option value="length">Length / height (cm)</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="gpValue">{metric === 'weight' ? "Baby's weight (kg)" : "Baby's length or height (cm)"}</label>
          <input
            id="gpValue"
            type="number"
            step="0.1"
            min="0"
            inputMode="decimal"
            placeholder={metric === 'weight' ? 'e.g. 9.5' : 'e.g. 74'}
            value={value}
            onChange={(e) => { setValue(e.target.value); setSubmitted(false) }}
            required
          />
        </div>

        <div className="calc-btn-row">
          <button type="submit" className="send-btn calc-submit-btn">Calculate percentile</button>
          <button type="button" className="calc-reset-link" onClick={reset}>Reset</button>
        </div>
      </form>

      {submitted && result && (
        <div className="calc-result">
          <span className="calc-result-label">Approximate percentile</span>
          <span className="calc-result-value">{result.percentile}th percentile</span>
          <div className="calc-result-meta">
            That&apos;s {result.description} - the typical median at this age is about {result.median}{metric === 'weight' ? 'kg' : 'cm'}.
          </div>
        </div>
      )}

      <p className="calc-note">
        This is a simplified estimate for general interest, based on WHO Child Growth Standards medians - it is not a clinical growth chart.
        Your Maternal Child Health nurse or GP plots official growth charts at each check-up - always use those for a real assessment, especially if you have any concerns.
      </p>
    </div>
  )
}
