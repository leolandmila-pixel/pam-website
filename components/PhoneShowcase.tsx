import Image from 'next/image'

type Tab = {
  name: string
  body: string
  src: string
  alt: string
}

// TODO: replace body placeholders when final copy is ready
const tabs: Tab[] = [
  {
    name: 'Home',
    body: "What's due today, what's been done, and a gentle daily reminder — all in one warm place.",
    src: '/phone-home.jpg',
    alt: 'PAM Home tab — Welcome back, daily reminder and quick log',
  },
  {
    name: 'Checklist',
    body: 'Immunisations, MCH appointments, health checks and registrations — surfaced exactly when they’re due.',
    src: '/phone-checklist.jpg',
    alt: 'PAM Checklist tab — calendar view with upcoming tasks',
  },
  {
    name: 'Tracker',
    body: 'Feeds, sleep, nappies, medicine and activities in seconds. See patterns, not pressure.',
    src: '/phone-tracker.jpg',
    alt: 'PAM Tracker tab — daily tracking tiles and summary',
  },
  {
    name: 'Family Info',
    body: 'Contacts, kids’ profiles, documents, local services and postpartum support — organised in one trusted place.',
    src: '/phone-family.jpg',
    alt: 'PAM Family Info tab — People, Records and Journey',
  },
  {
    name: 'Memories',
    body: 'Photos, voice notes, baby books and letters — the story of your growing family, captured as it happens.',
    src: '/phone-memories.jpg',
    alt: 'PAM Memories tab — Capture, Preserve and Write',
  },
]

export default function PhoneShowcase() {
  return (
    <div className="feature-cards-grid">
      {tabs.map((t) => (
        <article key={t.name} className="feature-card">
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
