import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '../../structured-data'
import TopicAccordion from '@/components/TopicAccordion'

export const metadata: Metadata = {
  title: "Why You're Not Actually Fine: The Truth About the Mental Load in the First Year",
  description:
    'The mental load does not just arrive when your baby does - it intensifies. Here is what it actually looks like in the first year, why it falls on mothers, and what genuinely helps.',
  keywords: [
    'mental load first year baby',
    'mental load new mum',
    'invisible labour parenting',
    'cognitive load motherhood',
    'why mums carry the mental load',
    'sharing the mental load',
    'newborn mental load',
    'postnatal mental load',
  ],
  openGraph: {
    title: "Why You're Not Actually Fine: The Truth About the Mental Load in the First Year",
    description:
      'The mental load does not just arrive when your baby does - it intensifies. Here is what it actually looks like in the first year, why it falls on mothers, and what genuinely helps.',
    url: 'https://parentaladminmanager.com/blog/mental-load-first-year-baby',
  },
  alternates: {
    canonical: 'https://parentaladminmanager.com/blog/mental-load-first-year-baby',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://parentaladminmanager.com' },
  { name: 'The Mental Load in the First Year', url: 'https://parentaladminmanager.com/blog/mental-load-first-year-baby' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Why You're Not Actually Fine: The Truth About the Mental Load in the First Year",
  description:
    'The mental load does not just arrive when your baby does - it intensifies. Here is what it actually looks like in the first year, why it falls on mothers, and what genuinely helps.',
  url: 'https://parentaladminmanager.com/blog/mental-load-first-year-baby',
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
    { '@type': 'Thing', name: 'Mental load' },
    { '@type': 'Thing', name: 'Postnatal mental load' },
    { '@type': 'Thing', name: 'Invisible labour' },
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

const topics = [
  {
    heading: 'What the mental load actually is',
    body: (
      <>
        <p>Your partner might do the bath. But who remembered that the next MCH appointment is on Thursday, that the immunisation history statement needs to be updated first, and that you are almost out of nappies in size 2? That thinking - the management layer above the tasks - is the mental load.</p>
        <p>Research from the University of Melbourne and multiple international studies has consistently found that mothers carry a disproportionate share of this cognitive household labour, even in couples where physical tasks are shared relatively equally.</p>
      </>
    ),
  },
  {
    heading: 'Why the first year is particularly heavy',
    body: (
      <>
        <p>The first year introduces an entirely new category of mental load that neither of you has carried before: Australian newborn admin.</p>
        <p>In the twelve months after your baby is born, there are immunisations to track, MCH visits to book, Centrelink applications to submit, Medicare details to update, childcare waitlists to join, and developmental milestones to watch for. There is a timeline to all of it. Some things have to happen before other things can happen. And almost all of it sits with one parent - typically the one on parental leave, typically the mother - simply because they are the one who is home.</p>
        <p>This is not a character flaw. It is a structural problem.</p>
      </>
    ),
  },
  {
    heading: 'What genuinely helps (and what does not)',
    body: (
      <>
        <p>&ldquo;Just ask for help&rdquo; does not help. Asking for help means you still have to know what needs doing, assess the priority, and delegate it - which is still mental load.</p>
        <p>What actually reduces the mental load is genuine ownership. Not task completion. Ownership. One parent being fully responsible for a domain - not &ldquo;helping with&rdquo; it, but actually owning the awareness, the planning, and the execution.</p>
        <p>It is also, honestly, having systems. When the information does not live only inside your head - when it is somewhere you can both access, where reminders come automatically, where nothing depends on you remembering to remember - that is when the load actually lifts.</p>
      </>
    ),
  },
  {
    heading: 'The quiet cost',
    body: (
      <>
        <p>The mental load is not just inconvenient. Research links chronic cognitive overload in new parents to increased rates of anxiety and postnatal depression, relationship dissatisfaction, and burnout. It is not nothing. It is a genuine, measurable weight.</p>
        <p>Which is part of why we built PAM. Because &ldquo;mum knows&rdquo; should not be the default. And because the first year of your baby&apos;s life should have more space in it than the admin allows.</p>
      </>
    ),
  },
]

export default function MentalLoadFirstYearBlogPage() {
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
            <span>The Mental Load in the First Year</span>
          </nav>
          <div className="sec-head" style={{ maxWidth: 720 }}>
            <span className="eyebrow">For new parents</span>
            <h1>Why you&apos;re not actually fine: <span className="em">the truth about the mental load in the first year</span></h1>
            <p className="ml-lead">
              There is a version of new parenthood that looks like this: you are both tired, you are both doing your best, and somehow you are still the one lying awake at 2am remembering that the Medicare form needs to be lodged before the end of the month.
            </p>
          </div>
        </div>
      </section>

      <section className="ml-section">
        <div className="container ml-prose" style={{ maxWidth: 980 }}>
          <p>You are not imagining it. And it is not because you are more anxious, or more organised, or more naturally suited to this. It is the mental load - and the first year of a baby&apos;s life is when it arrives with full force.</p>

          <div className="ml-definition-block">
            <p className="ml-definition">
              The mental load is not the tasks themselves. It is the invisible cognitive work of knowing what tasks exist, tracking their status, anticipating what comes next, and holding everything in your head so nothing falls through the cracks.
            </p>
          </div>

          <TopicAccordion layout="grid" items={topics} />

          <div className="ml-cta-block">
            <p>PAM holds the appointments, the checklists, the reminders, and the milestones - so the mental load has somewhere to live that is not inside your head.</p>
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
              <li><Link href="/mental-load">What Is the Mental Load? The Complete Guide for Parents</Link></li>
              <li><Link href="/blog/newborn-admin-checklist-australia">The Admin That Nobody Warned You About</Link></li>
              <li><Link href="/newborn-admin-checklist">The Newborn Admin Checklist, In Order</Link></li>
              <li><Link href="/features/smart-checklist">PAM Smart Checklist - every appointment and registration, pre-loaded</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
