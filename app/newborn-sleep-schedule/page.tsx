import type { Metadata } from 'next'
import Link from 'next/link'
import { buildFaqSchema, buildBreadcrumbSchema } from '../structured-data'

export const metadata: Metadata = {
  title: 'Newborn Sleep Schedule by Week: 0-12 Weeks',
  description:
    'What a normal newborn sleep schedule looks like week by week - total sleep, wake windows and feeds for weeks 1-12, and how to tell if your baby is on track.',
  keywords: [
    'newborn sleep schedule',
    'newborn sleep schedule by week',
    '4 week old sleep schedule',
    '5 week old sleep schedule',
    '7 week old sleep schedule',
    'newborn sleep chart',
    'newborn sleep patterns by week',
    'baby wake windows',
  ],
  openGraph: {
    title: 'Newborn Sleep Schedule by Week: 0-12 Weeks',
    description:
      'Total sleep, wake windows and feeds for weeks 1-12 - and how to tell if your baby\'s sleep is on track, whatever the schedule looks like.',
    url: 'https://parentaladminmanager.com/newborn-sleep-schedule',
  },
  alternates: {
    canonical: 'https://parentaladminmanager.com/newborn-sleep-schedule',
  },
}

const faqItems = [
  {
    q: 'What is a normal newborn sleep schedule?',
    a: "There is no single normal newborn sleep schedule - newborns haven't developed circadian rhythms yet, so sleep is driven by hunger and tiredness rather than the clock. What is consistent is the pattern: 14-18 hours of total sleep across 24 hours in the first month, broken into short bursts around the clock, gradually stretching into longer, more predictable periods by 2-3 months.",
  },
  {
    q: 'When do babies start sleeping on a schedule?',
    a: "Most babies start showing the first hints of a predictable pattern - rather than a strict schedule - around 6-8 weeks, once wake windows lengthen and a light day/night distinction emerges. A genuinely consistent schedule (regular nap times, longer night stretches) is more common from 3-4 months, once circadian rhythms mature.",
  },
  {
    q: 'How much sleep does a newborn need by week?',
    a: "Roughly 16-18 hours a day in weeks 1-2, settling to 14-17 hours by weeks 3-4, and gradually consolidating into fewer, longer stretches from week 5 onward. Total sleep changes less than you'd expect week to week - what changes is how it's distributed across day and night.",
  },
  {
    q: 'Why does my baby fight sleep even when tired?',
    a: "This is almost always a wake-window mismatch - your baby is either overtired (cortisol and adrenaline from being awake too long make it harder to settle) or undertired (not enough awake time to build sleep pressure). See the overtired vs undertired section below for how to tell which one you're dealing with.",
  },
  {
    q: 'Is it normal for a newborn sleep schedule to change every week?',
    a: 'Yes. Growth spurts, developmental leaps, and the 4-month sleep regression all disrupt whatever pattern you\'d settled into. This is normal brain and body development, not a sign anything is wrong or that you\'ve done something to unsettle a previously "good" sleeper.',
  },
]

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://parentaladminmanager.com' },
  { name: 'Newborn Sleep Schedule', url: 'https://parentaladminmanager.com/newborn-sleep-schedule' },
])

const faqSchema = buildFaqSchema(faqItems)

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Newborn Sleep Schedule by Week: 0-12 Weeks',
  description:
    'What a normal newborn sleep schedule looks like week by week - total sleep, wake windows and feeds for weeks 1-12, and how to tell if your baby is on track.',
  url: 'https://parentaladminmanager.com/newborn-sleep-schedule',
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
    { '@type': 'Thing', name: 'Newborn sleep' },
    { '@type': 'Thing', name: 'Baby sleep schedule' },
    { '@type': 'Thing', name: 'Wake windows' },
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

const stages = [
  {
    range: 'Weeks 1-2',
    stats: '16-18 hours total sleep - wake windows of 30-45 minutes - feeds every 2-3 hours, day and night',
    body: "Sleep is almost entirely feed-driven at this age - your baby wakes because they're hungry, not because of any internal clock. Expect 1-3 hour bursts of sleep around the clock with no distinction between day and night. This is biologically normal: newborns haven't developed circadian rhythms yet, and frequent waking to feed is necessary for weight gain and establishing milk supply.",
  },
  {
    range: 'Weeks 3-4',
    stats: '14-17 hours total sleep - wake windows of 45-60 minutes - evenings often more unsettled',
    body: "Total sleep drops slightly and wake windows stretch a little, but the bigger change most parents notice is the evenings - cluster feeding and unsettled behaviour (sometimes called the witching hour) tend to peak in this window, usually between 4pm and 10pm. It's exhausting and it's temporary; it typically eases by 6-8 weeks.",
  },
  {
    range: 'Weeks 5-6',
    stats: 'First hints of a longer overnight stretch (3-4 hours) - a light day/night distinction can start to emerge',
    body: 'Some babies begin linking sleep cycles into a slightly longer overnight stretch around this point, though plenty don\'t yet - both are within the normal range. A social smile usually appears around 6-8 weeks too, often alongside the first faint signs of a day/night rhythm.',
  },
  {
    range: 'Weeks 7-8',
    stats: 'Wake windows stretch to 60-75 minutes - a loose, more predictable nap pattern often becomes visible',
    body: "This is often when a recognisable pattern - not a strict schedule, but a pattern - starts to show up: naps at roughly similar times, slightly longer stretches overnight. If your baby is still unpredictable at this stage, that's also completely normal; the range of what's typical is wide.",
  },
  {
    range: 'Weeks 9-12',
    stats: 'Wake windows continue lengthening toward 75-90 minutes - naps consolidate further',
    body: "By 3 months, many babies have a loosely predictable daily rhythm, though a genuinely consistent schedule usually isn't established until closer to 4 months, when circadian rhythms mature and sleep architecture changes (see the 4-month sleep regression). Two healthy 3-month-olds can still look very different from each other.",
  },
]

export default function NewbornSleepSchedulePage() {
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
            <span>Newborn Sleep Schedule</span>
          </nav>
          <div className="sec-head" style={{ maxWidth: 720 }}>
            <span className="eyebrow">The first three months</span>
            <h1>Newborn sleep, <span className="em">week by week</span></h1>
            <p className="ml-lead">
              What actually changes week to week in the first three months - total sleep, wake windows and feeds - and why chasing a fixed &ldquo;schedule&rdquo; this early usually isn&apos;t the point.
            </p>
          </div>
        </div>
      </section>

      <section className="ml-section">
        <div className="container ml-prose">
          <div className="ml-definition-block">
            <p className="ml-definition">
              There is no single &ldquo;normal&rdquo; newborn sleep schedule. In the first weeks, sleep is driven by hunger and tiredness, not the clock - your baby hasn&apos;t developed circadian rhythms yet. What follows is a week-by-week guide to what usually changes, and what to watch instead of the clock.
            </p>
          </div>

          <h2>Newborn sleep by week: quick reference</h2>
          <ul className="ml-list">
            {stages.map((s) => (
              <li key={s.range}><strong>{s.range}:</strong> {s.stats}</li>
            ))}
          </ul>

          {stages.map((s) => (
            <div key={s.range}>
              <h2>{s.range}: what to expect</h2>
              <p>{s.body}</p>
            </div>
          ))}

          <h2>How to tell if your baby&apos;s sleep is on track</h2>
          <p>Weight gain is the clearest signal - more useful than any chart. If your baby is feeding well and gaining weight at their scheduled checks, their sleep pattern is very likely fine, even if it doesn&apos;t match a chart like this one. Every baby&apos;s weight and growth is tracked at MCH visits in the first year, which are pre-loaded in PAM&apos;s Smart Checklist so you always know when the next one falls.</p>

          <h2>Overtired vs undertired: the wake-window balance</h2>
          <p>When a baby fights sleep despite seeming tired, it&apos;s almost always one of two things: overtired (awake too long - cortisol and adrenaline make it harder to settle) or undertired (not awake long enough to build sleep pressure). The lever for both is the same: age-appropriate wake windows, listed stage by stage above. For the full breakdown of signs and how to tell which one you&apos;re dealing with, see <Link href="/questions">our answer on overtired vs undertired babies</Link>, or use the <Link href="/calculators/wake-windows">Wake Window Calculator</Link> to get today&apos;s exact window for baby&apos;s age.</p>

          <div className="ml-cta-block">
            <p>Log feeds, sleep and wake times as they happen - PAM shows you your own baby&apos;s pattern, not a generic chart.</p>
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
              <li><Link href="/calculators/wake-windows">Wake Window Calculator - baby&apos;s exact age-appropriate window, today</Link></li>
              <li><Link href="/questions">Parent Questions, Answered - wake windows, sleep regressions, safe sleep and more</Link></li>
              <li><Link href="/mental-load">What is the mental load? A guide for parents</Link></li>
              <li><Link href="/features/baby-tracker">PAM Baby Tracker - feeds, sleep and nappies, shared in real time</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
