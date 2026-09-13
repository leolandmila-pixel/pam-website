import type { Metadata } from 'next'
import Link from 'next/link'
import { buildBreadcrumbSchema } from '../../structured-data'
import TopicAccordion from '@/components/TopicAccordion'

export const metadata: Metadata = {
  title: 'The 4-Month Sleep Regression: What Is Actually Happening and How to Get Through It',
  description:
    'The 4-month sleep regression is real, it is developmental, and it is not your fault. Here is what is happening in your baby\'s brain, and what actually helps.',
  keywords: [
    '4 month sleep regression',
    '4 month sleep regression australia',
    'baby sleep regression signs',
    'why is my baby waking more at 4 months',
    '4 month sleep regression how long',
    'baby wake windows 4 months',
    'newborn sleep cycles',
  ],
  openGraph: {
    title: 'The 4-Month Sleep Regression: What Is Actually Happening and How to Get Through It',
    description:
      'The 4-month sleep regression is real, it is developmental, and it is not your fault. Here is what is happening in your baby\'s brain, and what actually helps.',
    url: 'https://parentaladminmanager.com/blog/4-month-sleep-regression-australia',
  },
  alternates: {
    canonical: 'https://parentaladminmanager.com/blog/4-month-sleep-regression-australia',
  },
}

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', url: 'https://parentaladminmanager.com' },
  { name: 'The 4-Month Sleep Regression', url: 'https://parentaladminmanager.com/blog/4-month-sleep-regression-australia' },
])

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The 4-Month Sleep Regression: What Is Actually Happening and How to Get Through It',
  description:
    'The 4-month sleep regression is real, it is developmental, and it is not your fault. Here is what is happening in your baby\'s brain, and what actually helps.',
  url: 'https://parentaladminmanager.com/blog/4-month-sleep-regression-australia',
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
    { '@type': 'Thing', name: '4-month sleep regression' },
    { '@type': 'Thing', name: 'Baby sleep cycles' },
    { '@type': 'Thing', name: 'Infant sleep development' },
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
    heading: "What is happening in your baby's brain",
    body: (
      <>
        <p>Up until now, your baby has been cycling through sleep differently to adults - spending a lot of time in active, light REM sleep, with less distinct transitions between cycles. This is actually why some newborns are relatively easy to settle and seem to sleep through anything.</p>
        <p>At 3 to 4 months, their sleep matures. It starts to look more like adult sleep - cycling through distinct light and deep phases, with a natural brief arousal at the end of each cycle (roughly every 45 minutes). Adults do this too - we just have the skill to roll over and go back to sleep without fully waking.</p>
        <p>Babies do not yet have that skill. So instead of transitioning quietly between cycles, they surface and call out. Every. 45. minutes.</p>
      </>
    ),
  },
  {
    heading: 'Why it feels so hard',
    body: (
      <>
        <p>Two reasons.</p>
        <p>First, it often happens just when you thought you were through the worst of it. The 6-week fog has lifted. You have had a few reasonable nights. You are starting to feel like you might be finding your feet. And then this.</p>
        <p>Second, unlike the newborn phase - where you expected disruption - the 4-month regression can feel like you have done something wrong. You have not. No amount of sleep training, routine-building, or correct behaviour on your part prevents the 4-month regression, because it is not behavioural. It is neurological.</p>
      </>
    ),
  },
  {
    heading: 'What actually helps',
    body: (
      <>
        <p>There is no way to skip this stage. But there are things that make it more manageable.</p>
        <p>Watch wake windows carefully. At this age, most babies can comfortably stay awake for 90 minutes to 2 hours between sleeps. An overtired baby who has been awake too long will fight sleep even harder - so catching them before they hit the wall matters.</p>
        <p>Start to offer your baby the opportunity to settle. If you have been feeding or rocking to sleep, this is a good time to experiment with putting your baby down drowsy but awake, and seeing whether they can bridge the gap between cycles. Some babies take to this quickly. Others need more time. Both are normal.</p>
        <p>Prioritise your own rest where you can. Tag-team night duties if you have a partner at home. Accept help. Lower the bar on everything non-essential.</p>
        <p>Know that it passes. Most families are through the worst of it within 2 to 6 weeks.</p>
      </>
    ),
  },
  {
    heading: 'A note on sleep tracking',
    body: (
      <>
        <p>One thing that can genuinely help during regressions is having a clear picture of your baby&apos;s sleep patterns - how long they are sleeping, when, and how nap timing is affecting night sleep. When you can see the data, it is much easier to spot patterns and make adjustments.</p>
        <p>PAM&apos;s tracker logs feeds, sleep, and nappy changes in one place - and both parents can log in real time, so the picture is always complete regardless of who was on duty overnight.</p>
      </>
    ),
  },
]

export default function FourMonthSleepRegressionBlogPage() {
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
            <span>The 4-Month Sleep Regression</span>
          </nav>
          <div className="sec-head" style={{ maxWidth: 720 }}>
            <span className="eyebrow">Baby sleep</span>
            <h1>The 4-month sleep regression: <span className="em">what is actually happening, and how to get through it</span></h1>
            <p className="ml-lead">
              The 4-month sleep regression is real, it is developmental, and it is not your fault. Here is what is happening in your baby&apos;s brain, and what actually helps.
            </p>
          </div>
        </div>
      </section>

      <section className="ml-section">
        <div className="container ml-prose" style={{ maxWidth: 980 }}>
          <p>Around 3 to 4 months, a lot of parents notice something change. The baby who was starting to settle into a pattern suddenly is not. Night wakes that were getting less frequent are back, or worse. Naps that used to run 90 minutes are ending at 45. And your baby, who was increasingly content, seems unsettled in a way that feels different.</p>

          <p>Welcome to the 4-month sleep regression. It is real, it is very common, and unlike some of the other sleep challenges of early parenthood, it actually has a clear explanation.</p>

          <div className="ml-definition-block">
            <p className="ml-definition">
              This is not a problem to be fixed. It is a developmental shift. Your baby&apos;s brain is doing exactly what it is supposed to do.
            </p>
          </div>

          <TopicAccordion layout="grid" items={topics} />

          <div className="ml-cta-block">
            <p>PAM tracks sleep, feeds, and nappy changes so you can spot patterns and stop trying to hold it all in your head.</p>
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
              <li><Link href="/newborn-sleep-schedule">Newborn Sleep Schedule by Week: 0-12 Weeks</Link></li>
              <li><Link href="/calculators/wake-windows">Wake Window Calculator</Link></li>
              <li><Link href="/questions">Parent Questions, Answered - sleep regressions, wake windows and more</Link></li>
              <li><Link href="/features/baby-tracker">PAM Baby Tracker - feeds, sleep and nappies, shared in real time</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
