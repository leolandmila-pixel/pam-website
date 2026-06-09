import Image from 'next/image'

type Tab = {
  name: string
  body: string
  src: string
  alt: string
}

const tabs: Tab[] = [
  {
    name: 'Today',
    body: "What's due, what's done, and nothing left to remember — your whole day the moment you open the app.",
    src: '/phone-home.jpg',
    alt: 'PAM Today tab — Welcome back, daily reminder and quick log',
  },
  {
    name: 'Smart Checklist',
    body: 'Everything from immunisations to MCH visits to registering the birth — pre-loaded and reminded as each task nears, and a nudge if one slips by.',
    src: '/phone-checklist.jpg',
    alt: 'PAM Smart Checklist tab — calendar view with upcoming tasks',
  },
  {
    name: 'Tracker',
    body: 'From feeds to growth in one place — daily logs, percentile charts, clear reports, and nap predictions built around your baby.',
    src: '/phone-tracker.jpg',
    alt: 'PAM Tracker tab — daily tracking tiles and summary',
  },
  {
    name: 'Family Info',
    body: "Whatever you'd scramble for at 2am, already where it should be — the people, details and services, kept close and organised.",
    src: '/phone-family.jpg',
    alt: 'PAM Family Info tab — People, Records and Journey',
  },
  {
    name: 'Memories',
    body: 'The little moments and big firsts, saved as they happen.',
    src: '/phone-memories.jpg',
    alt: 'PAM Memories tab — Capture, Preserve and Write',
  },
]

export default function PhoneShowcase() {
  return (
    <div className="feature-cards-grid">
      {tabs.map((t) => (
        <article
          key={t.name}
          id={`feature-${t.name.toLowerCase().replace(/\s+/g, '-')}`}
          className="feature-card"
        >
          <div className="feature-card-stage">
            <div className="feature-card-phone">
              <Image
                src={t.src}
                alt={t.alt}
                width={300}
                height={650}
                sizes="(max-width: 700px) 50vw, 220px"
              />
            </div>
          </div>
          <h3 className="feature-card-title">{t.name}</h3>
          <p className="feature-card-body">{t.body}</p>
        </article>
      ))}
    </div>
  )
}
