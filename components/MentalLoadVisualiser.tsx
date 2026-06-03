'use client'

import { useState } from 'react'

const ITEMS = [
  { id: 1,  text: 'GP appointment',      cat: 'medical',   x: 4,  y: 8,  delay: 0   },
  { id: 2,  text: '4-month check',       cat: 'medical',   x: 62, y: 4,  delay: 60  },
  { id: 3,  text: 'Immunisations',       cat: 'medical',   x: 10, y: 58, delay: 120 },
  { id: 4,  text: 'Dental checkup',      cat: 'medical',   x: 72, y: 70, delay: 180 },
  { id: 5,  text: 'Pharmacy run',        cat: 'medical',   x: 50, y: 84, delay: 240 },
  { id: 6,  text: 'Kindy orientation',   cat: 'school',    x: 22, y: 6,  delay: 30  },
  { id: 7,  text: 'Book week costume',   cat: 'school',    x: 68, y: 20, delay: 90  },
  { id: 8,  text: 'Permission slips',    cat: 'school',    x: 6,  y: 36, delay: 150 },
  { id: 9,  text: 'School photos',       cat: 'school',    x: 76, y: 46, delay: 210 },
  { id: 10, text: 'Excursion form',      cat: 'school',    x: 32, y: 76, delay: 270 },
  { id: 11, text: 'Insurance renewal',   cat: 'admin',     x: 40, y: 2,  delay: 15  },
  { id: 12, text: 'Car registration',    cat: 'admin',     x: 78, y: 10, delay: 75  },
  { id: 13, text: 'Centrelink forms',    cat: 'admin',     x: 16, y: 86, delay: 135 },
  { id: 14, text: 'Tax return',          cat: 'admin',     x: 66, y: 88, delay: 195 },
  { id: 15, text: 'Passport renewal',    cat: 'admin',     x: 2,  y: 72, delay: 255 },
  { id: 16, text: 'Meal planning',       cat: 'logistics', x: 54, y: 14, delay: 45  },
  { id: 17, text: 'Daycare pickup',      cat: 'logistics', x: 28, y: 44, delay: 105 },
  { id: 18, text: 'Swimming lessons',    cat: 'logistics', x: 74, y: 58, delay: 165 },
  { id: 19, text: 'Grocery order',       cat: 'logistics', x: 44, y: 70, delay: 225 },
  { id: 20, text: 'Playdate scheduling', cat: 'logistics', x: 8,  y: 22, delay: 285 },
] as const

type Cat = (typeof ITEMS)[number]['cat']

const CAT_CLASS: Record<Cat, string> = {
  medical:   'mlv-cat-medical',
  school:    'mlv-cat-school',
  admin:     'mlv-cat-admin',
  logistics: 'mlv-cat-logistics',
}

export default function MentalLoadVisualiser() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <section className="mentalload">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">The mental load</span>
          <h2>Everything you <em>carry</em> in a week.</h2>
          <p className="mlv-intro">Every appointment, form, reminder and task — held in your head, all at once. Watch what happens when PAM holds it instead.</p>
        </div>

        <div className="mlv-stage">
          {ITEMS.map((item) => (
            <span
              key={item.id}
              className={`mlv-item ${CAT_CLASS[item.cat]}${collapsed ? ' mlv-item--out' : ''}`}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transitionDelay: collapsed ? `${item.delay}ms` : '0ms',
              }}
            >
              {item.text}
            </span>
          ))}

          <div className={`mlv-pam${collapsed ? ' mlv-pam--on' : ''}`}>
            <div className="mlv-pam-glow" />
            <span className="mlv-pam-word">PAM</span>
            <span className="mlv-pam-label">Everything, held.</span>
          </div>
        </div>

        <div className="mlv-cta">
          {!collapsed ? (
            <button className="mlv-trigger" onClick={() => setCollapsed(true)}>
              Watch it collapse into PAM
              <span className="arrow">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </button>
          ) : (
            <button className="mlv-reset" onClick={() => setCollapsed(false)}>
              ↩ Start again
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
