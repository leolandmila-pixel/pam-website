import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '../../structured-data'
import TopicAccordion from '@/components/TopicAccordion'

export const metadata: Metadata = {
  title: 'The Admin That Nobody Warned You About: What Happens After Your Baby Is Born',
  description:
    'From birth registration to Medicare to Centrelink - here is the complete list of admin tasks Australian parents need to do after a baby arrives, and when to do them.',
  keywords: [
    'newborn admin checklist australia',
    'baby admin after birth',
    'birth registration australia',
    'newborn immunisation schedule',
    'bloodspot screening newborn',
    'medicare enrolment baby',
    'centrelink newborn payment',
    'MCH appointment newborn',
    'parental leave pay claim',
    'childcare waitlist australia',
  ],
  openGraph: {
    title: 'The Admin That Nobody Warned You About: What Happens After Your Baby Is Born',
    description:
      'From birth registration to Medicare to Centrelink - here is the complete list of admin tasks Australian parents need to do after a baby arrives, and when to do them.',
    url: 'https://parentaladminmanager.com/blog/newborn-admin-checklist-australia',
  },
  alternates: {
    canonical: 'https://parentaladminmanager.com/blog/newborn-admin-checklist-australia',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://parentaladminmanager.com' },
  { name: 'After Your Baby Is Born', url: 'https://parentaladminmanager.com/blog/newborn-admin-checklist-australia' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Admin That Nobody Warned You About: What Happens After Your Baby Is Born',
  description:
    'From birth registration to Medicare to Centrelink - here is the complete list of admin tasks Australian parents need to do after a baby arrives, and when to do them.',
  url: 'https://parentaladminmanager.com/blog/newborn-admin-checklist-australia',
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
    { '@type': 'Thing', name: 'Birth registration' },
    { '@type': 'Thing', name: 'Newborn immunisation schedule' },
    { '@type': 'Thing', name: 'Centrelink newborn payments' },
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

const timeline = [
  {
    heading: 'In the first 24 hours',
    body: (
      <p>Your baby will receive their first immunisation - the hepatitis B injection - in hospital before you go home. This is time-sensitive: it needs to happen within 7 days of birth, and ideally within the first 24 hours. You will also be asked to give consent for the vitamin K injection and the newborn hearing screen.</p>
    ),
  },
  {
    heading: 'In the first week',
    body: (
      <p>The newborn bloodspot screening (heel prick test) is done between 48 and 72 hours after birth. If you have a straightforward hospital birth, this usually happens before you are discharged. If you go home early, a midwife will arrange it.</p>
    ),
  },
  {
    heading: 'Within 60 days',
    body: (
      <>
        <p>You have 60 days to register your baby&apos;s birth with your state or territory&apos;s Births, Deaths and Marriages registry. This is a legal requirement. The birth certificate you receive from this registration is the document that unlocks almost everything else - Medicare, Centrelink, passport applications.</p>
        <p>Do not wait until you feel ready. Book it in during your first week home if you can, so it does not slip.</p>
      </>
    ),
  },
  {
    heading: 'As soon as possible',
    body: (
      <ul className="ml-list">
        <li>Enrol in Medicare - add your baby to your Medicare card via myGov, the Express Plus Medicare app, or the Newborn Child Declaration form from hospital</li>
        <li>Register with Centrelink - claim your Newborn Upfront Payment and Newborn Supplement, and set up your Family Tax Benefit, through your myGov account</li>
        <li>Apply for Parental Leave Pay - if you have not already applied before the birth, do this now. You can claim up to 52 weeks after the birth.</li>
      </ul>
    ),
  },
  {
    heading: 'Within the first few months',
    body: (
      <ul className="ml-list">
        <li>Book your 2-month immunisations (from 6 weeks)</li>
        <li>Confirm your Maternal and Child Health (MCH) appointments - your first visit should happen within the first two weeks of your baby&apos;s life</li>
        <li>If you are planning on childcare, get on waitlists now - even if you are not going back to work for 12 months, popular centres in most metro areas can book out 12 to 18 months ahead</li>
      </ul>
    ),
  },
]

export default function NewbornAdminChecklistAustraliaBlogPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="hero" style={{ paddingTop: 108, paddingBottom: 24 }}>
        <div className="container">
          <nav className="ml-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>After Your Baby Is Born</span>
          </nav>
          <div className="sec-head" style={{ maxWidth: 720 }}>
            <span className="eyebrow">The first weeks after birth</span>
            <h1>The admin nobody warned you about: <span className="em">what happens after your baby is born</span></h1>
            <p className="ml-lead">
              Nobody puts &ldquo;register the birth&rdquo; in the nappy bag. Here is the complete list of admin tasks Australian parents need to do after a baby arrives, and roughly when.
            </p>
          </div>
        </div>
      </section>

      <section className="ml-section">
        <div className="container ml-prose" style={{ maxWidth: 980 }}>
          <div className="ml-definition-block">
            <p className="ml-definition">
              Having a baby in Australia triggers a cascade of registrations, applications and appointments that need to happen in a specific order, within specific timeframes, to make sure your family gets the payments and services you are entitled to. Miss one step, and it can delay everything downstream.
            </p>
          </div>

          <p>You spend months preparing for the baby - the nursery, the bag, the birth plan - and then the baby arrives and suddenly there is a whole other list waiting that nobody warned you about. Not the feeding and the sleep. The admin.</p>

          <p>Here is what needs to happen, and roughly when.</p>

          <TopicAccordion layout="grid" items={timeline} />

          <h2>The thing nobody tells you</h2>
          <p>Most of these tasks are linked. Centrelink needs your Medicare details. Medicare needs your birth certificate. Your birth certificate needs you to have lodged the registration. If one step is delayed, everything behind it is delayed too.</p>
          <p>PAM&apos;s Smart Checklist has all of this pre-loaded in the right order, with reminders that appear as each task becomes due. Because remembering all of this in the fog of new parenthood is exactly the kind of thing you should not have to carry in your head.</p>

          <div className="ml-cta-block">
            <p>Ready to hand the admin off to someone else? PAM has every Australian newborn milestone pre-loaded and ready to go.</p>
            <a href="https://tally.so/r/q4J1vg" target="_blank" rel="noreferrer" className="quiz-cta">
              Start your free 14-day trial
              <span className="arrow">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </a>
          </div>

          <div className="ml-further">
            <h2>Related reading</h2>
            <ul className="ml-list">
              <li><Link href="/newborn-admin-checklist">The Newborn Admin Checklist, In Order - the six government steps in detail</Link></li>
              <li><Link href="/newborn-sleep-schedule">Newborn Sleep Schedule by Week: 0-12 Weeks</Link></li>
              <li><Link href="/calculators/parental-leave">Parental Leave Pay Calculator</Link></li>
              <li><Link href="/features/smart-checklist">PAM Smart Checklist - every appointment and registration, pre-loaded</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
