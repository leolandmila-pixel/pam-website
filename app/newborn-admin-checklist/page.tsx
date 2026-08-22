import type { Metadata } from 'next'
import Link from 'next/link'
import { buildFaqSchema, buildBreadcrumbSchema } from '../structured-data'

export const metadata: Metadata = {
  title: 'Newborn Admin Checklist for Australian Parents',
  description:
    'Every government step after having a baby in Australia - birth registration, Medicare, Centrelink and MCH visits - in one checklist, in the right order.',
  keywords: [
    'newborn checklist australia',
    'baby admin checklist',
    'birth registration australia',
    'newborn medicare enrolment',
    'centrelink newborn payment',
    'MCH visits schedule',
    'immunisation schedule australia',
    'parental leave pay australia',
  ],
  openGraph: {
    title: 'Newborn Admin Checklist for Australian Parents',
    description:
      'Birth registration, Medicare, Centrelink payments, MCH visits and immunisations - what to do and when, in one Australian newborn admin checklist.',
    url: 'https://parentaladminmanager.com/newborn-admin-checklist',
  },
  alternates: {
    canonical: 'https://parentaladminmanager.com/newborn-admin-checklist',
  },
}

const faqItems = [
  {
    q: 'What admin do I need to do after having a baby in Australia?',
    a: 'The core list: register the birth with your state or territory (within 60 days), enrol your baby in Medicare, claim Family Tax Benefit and the Newborn Upfront Payment/Supplement through Centrelink, apply for Parental Leave Pay if eligible, book your first Maternal and Child Health (MCH) visit, and start the National Immunisation Program from 6 weeks. All of it is time-sensitive, which is why most parents miss at least one step in the first-weeks fog.',
  },
  {
    q: 'What is the first thing I should do after registering the birth?',
    a: "Enrol your baby in Medicare next - you'll need the birth registration reference number to do it, and your baby's Medicare number is required for bulk-billed GP visits, MCH referrals, and recording vaccinations in the Australian Immunisation Register.",
  },
  {
    q: 'How long do I have to claim Centrelink payments for a newborn?',
    a: "Apply for Family Tax Benefit (which unlocks the Newborn Upfront Payment and Newborn Supplement) as soon as possible after birth - it can be backdated, but not indefinitely. Parental Leave Pay has a harder deadline: it must be claimed within 12 months of your baby's birth and before you return to work.",
  },
  {
    q: 'Is the MCH service free in Australia?',
    a: 'Yes. Maternal and Child Health is a free, universal service delivered through local councils, with no referral or private health insurance required. Your first visit is usually arranged before you leave hospital, and the schedule continues through to school age.',
  },
  {
    q: "What happens if I miss a step, like Medicare enrolment or a Centrelink deadline?",
    a: "Most steps aren't a hard cutoff (you can generally still enrol in Medicare or claim FTB late), but delays cascade - you can't claim some Centrelink payments without a Medicare number, and you can't get a Medicare number without birth registration. Parental Leave Pay is the one genuinely strict deadline: 12 months from birth, and before returning to work.",
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://parentaladminmanager.com' },
  { name: 'Newborn Admin Checklist', url: 'https://parentaladminmanager.com/newborn-admin-checklist' },
])

const faqSchema = buildFaqSchema(faqItems)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Newborn Admin Checklist for Australian Parents',
  description:
    'Every government step after having a baby in Australia - birth registration, Medicare, Centrelink and MCH visits - in one checklist, in the right order.',
  url: 'https://parentaladminmanager.com/newborn-admin-checklist',
  inLanguage: 'en-AU',
  author: {
    '@type': 'Organization',
    name: 'PAM - Parental Admin Manager',
    url: 'https://parentaladminmanager.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PAM - Parental Admin Manager',
    logo: { '@type': 'ImageObject', url: 'https://parentaladminmanager.com/logo.png' },
  },
  about: [
    { '@type': 'Thing', name: 'Newborn admin' },
    { '@type': 'Thing', name: 'Centrelink newborn payments' },
    { '@type': 'Thing', name: 'Maternal and Child Health' },
  ],
  mentions: [
    {
      '@type': 'SoftwareApplication',
      name: 'PAM - Parental Admin Manager',
      url: 'https://parentaladminmanager.com',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'iOS, Android',
    },
  ],
}

const steps = [
  {
    when: 'Within 60 days',
    title: 'Register the birth',
    body: "Birth registration is compulsory and handled by your state or territory's Births, Deaths and Marriages (BDM) office - most offer online registration. You'll need both parents' full names, date and place of birth, and the baby's name. This is the step everything else depends on: you need the registration reference number to enrol in Medicare, and a birth certificate for Medicare, a passport, and future ID.",
  },
  {
    when: 'First few weeks',
    title: 'Enrol your baby in Medicare',
    body: "Add your baby to your existing Medicare card or create a new family card, via a service centre or myGov. Do this early - Medicare covers GP visits, specialist referrals, and the immunisations that start at 6 weeks, and you'll need the Medicare number for MCH referrals and the Australian Immunisation Register.",
  },
  {
    when: 'As soon as possible',
    title: 'Claim Family Tax Benefit and Centrelink newborn payments',
    body: 'Apply for Family Tax Benefit Part A through myGov or a Services Australia service centre - this is what unlocks the Newborn Upfront Payment (a lump sum) and Newborn Supplement (paid fortnightly for up to 13 weeks). Both are assessed automatically as part of the FTB application.',
  },
  {
    when: 'Within 12 months, before returning to work',
    title: 'Apply for Parental Leave Pay',
    body: 'Up to 20 weeks of payment at the national minimum wage for eligible parents. Main eligibility criteria: worked at least 10 of the 13 months before the birth, at least 330 hours in that period, income under the relevant threshold, and primary carer of the newborn. This is the one deadline in this checklist with no flexibility - claim before you return to work and within 12 months of the birth.',
  },
  {
    when: 'Before leaving hospital',
    title: 'Book your first MCH visit',
    body: "Maternal and Child Health is a free, universal service delivered through local councils - no referral or private health insurance needed. Your first visit is usually arranged before discharge. The 6-week visit is the most comprehensive early check: weight and measurements, developmental progress, feeding and sleep, and a wellbeing check for you, including postnatal depression screening.",
  },
  {
    when: 'From 6 weeks',
    title: 'Start the immunisation schedule',
    body: "Australia's National Immunisation Program covers vaccinations at 6 weeks, 4 months, 6 months, 12 months and 18 months, all free for eligible children. Your GP or vaccination provider updates the Australian Immunisation Register automatically after each dose - bring your Blue Book (or your state's equivalent Personal Health Record) to every appointment.",
  },
]

export default function NewbornAdminChecklistPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="hero" style={{ paddingTop: 48, paddingBottom: 24 }}>
        <div className="container">
          <nav className="ml-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Newborn Admin Checklist</span>
          </nav>
          <div className="sec-head" style={{ maxWidth: 720 }}>
            <span className="eyebrow">For Australian parents</span>
            <h1>The newborn admin checklist, <span className="em">in order</span></h1>
            <p className="ml-lead">
              Birth registration, Medicare, Centrelink, MCH visits and immunisations - six government steps, each one unlocking the next, laid out in the order they actually need doing.
            </p>
          </div>
        </div>
      </section>

      <section className="ml-section">
        <div className="container ml-prose">
          <div className="ml-definition-block">
            <p className="ml-definition">
              None of these steps are optional, and several depend on each other - you can&apos;t claim some Centrelink payments without a Medicare number, and you can&apos;t get a Medicare number without birth registration. This is the order that avoids getting stuck.
            </p>
          </div>

          <h2>The six steps, at a glance</h2>
          <ul className="ml-list">
            {steps.map((s) => (
              <li key={s.title}><strong>{s.when}:</strong> {s.title}</li>
            ))}
          </ul>

          {steps.map((s) => (
            <div key={s.title}>
              <h2>{s.title}</h2>
              <p className="ml-lead" style={{ fontSize: '1rem', marginBottom: 8 }}>{s.when}</p>
              <p>{s.body}</p>
            </div>
          ))}

          <h2>Keeping track of it all</h2>
          <p>Every step above is time-sensitive, and most of them arrive in the same exhausting first weeks as feeding, sleep and recovery. PAM&apos;s Smart Checklist pre-loads all of it - birth registration, Medicare, Centrelink deadlines, MCH visits and immunisations - so nothing depends on remembering it while running on no sleep.</p>

          <div className="ml-cta-block">
            <p>Every government step, pre-loaded with reminders - so nothing slips through in the newborn fog.</p>
            <a href="https://tally.so/r/q4J1vg" target="_blank" rel="noreferrer" className="quiz-cta">
              Get early access to PAM
              <span className="arrow">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </a>
          </div>

          <h2>Frequently asked questions</h2>
          <div className="ml-faq">
            {faqItems.map((item) => (
              <div key={item.q} className="ml-faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          <div className="ml-further">
            <h2>Related reading</h2>
            <ul className="ml-list">
              <li><Link href="/questions">Parent Questions, Answered - MCH visits, Centrelink, Medicare and more</Link></li>
              <li><Link href="/newborn-sleep-schedule">Newborn Sleep Schedule by Week: 0-12 Weeks</Link></li>
              <li><Link href="/features/smart-checklist">PAM Smart Checklist - every appointment and registration, pre-loaded</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
