import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://parentaladminmanager.com'),
  title: {
    default: 'PAM - The mental load, managed.',
    template: '%s | PAM',
  },
  description:
    'PAM (Parental Admin Manager) - the assistant every parent deserves. Smart checklists, a gentle tracker, memories, family info and Ask PAM, all in one beautifully simple app.',
  keywords: [
    'parenting app',
    'Australian parents',
    'baby tracker',
    'mental load',
    'parental admin',
    'immunisation reminders',
    'MCH appointments',
    'baby milestones',
    'Ask PAM',
    'family organiser',
  ],
  authors: [{ name: 'PAM' }],
  creator: 'PAM',
  publisher: 'PAM',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://parentaladminmanager.com',
    title: 'PAM - The mental load, managed.',
    description:
      'The assistant every parent deserves - built for the appointments, checklists, milestones and quiet moments that make up a family.',
    siteName: 'PAM',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'PAM - The mental load, managed.' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAM - The mental load, managed.',
    description: 'The assistant every parent deserves. Built in Australia by two mums.',
    images: ['/og-image.png'],
    creator: '@pam.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const homepageMetadata: Metadata = {
  ...baseMetadata,
  alternates: { canonical: 'https://parentaladminmanager.com' },
}

export const aboutMetadata: Metadata = {
  title: 'About - Ash, Oly, and the story behind PAM.',
  description:
    "Meet Ash and Oly - two mums of 15-month-olds (Mila and Leo) who built PAM because they were holding too much in their heads. The story, values and people behind PAM.",
  alternates: { canonical: 'https://parentaladminmanager.com/about' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'About PAM - Mums, founders, best friends.',
    description: 'The founders, values and story behind PAM.',
    url: 'https://parentaladminmanager.com/about',
  },
}

export const storiesMetadata: Metadata = {
  title: 'Real Mums, Real Stories',
  description:
    "The honest, unfiltered bits - real Australian parents sharing what helped, what hurt, and what they wish they'd known.",
  alternates: { canonical: 'https://parentaladminmanager.com/stories' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Real Mums, Real Stories - PAM',
    description: 'No highlight reels. Just real parents, telling it straight.',
    url: 'https://parentaladminmanager.com/stories',
  },
}

export const contactMetadata: Metadata = {
  title: 'Contact',
  description:
    "Real humans, real replies. Questions, feedback or a story to share - we read every message.",
  alternates: { canonical: 'https://parentaladminmanager.com/contact' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Contact PAM',
    description: 'Say hello - real humans, real replies.',
    url: 'https://parentaladminmanager.com/contact',
  },
}

export const faqMetadata: Metadata = {
  title: 'FAQ',
  description:
    'Everything you might be wondering before you join the PAM founding trial - launch, pricing, privacy, Ask PAM and more.',
  alternates: { canonical: 'https://parentaladminmanager.com/faq' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'PAM FAQ',
    description: 'Launch, pricing, privacy and family - answered.',
    url: 'https://parentaladminmanager.com/faq',
  },
}

export const checklistMetadata: Metadata = {
  title: 'Smart Checklist',
  description:
    "PAM's Smart Checklist - every appointment, registration, and reminder Australian parents need to remember, pre-loaded and ready.",
  alternates: { canonical: 'https://parentaladminmanager.com/features/smart-checklist' },
  openGraph: { ...baseMetadata.openGraph, title: 'PAM Smart Checklist', url: 'https://parentaladminmanager.com/features/smart-checklist' },
}

export const trackerMetadata: Metadata = {
  title: 'Tracker',
  description:
    "PAM's tracker - feeds, sleep, nappies, growth charts and nap predictions in one calm place. Shared with your partner.",
  alternates: { canonical: 'https://parentaladminmanager.com/features/baby-tracker' },
  openGraph: { ...baseMetadata.openGraph, title: 'PAM Tracker', url: 'https://parentaladminmanager.com/features/baby-tracker' },
}

export const familyInfoMetadata: Metadata = {
  title: 'Family Hub',
  description:
    "Everything you'd scramble for at 2am - already where it should be. People, records and services for your whole family.",
  alternates: { canonical: 'https://parentaladminmanager.com/features/family-hub' },
  openGraph: { ...baseMetadata.openGraph, title: 'PAM Family Hub', url: 'https://parentaladminmanager.com/features/family-hub' },
}

export const memoriesMetadata: Metadata = {
  title: 'Memories',
  description:
    "Voice notes, photos and milestones - saved as they happen. The little moments and big firsts, gently gathered into your family's story.",
  alternates: { canonical: 'https://parentaladminmanager.com/features/memories' },
  openGraph: { ...baseMetadata.openGraph, title: 'PAM Memories', url: 'https://parentaladminmanager.com/features/memories' },
}

export const calculatorsMetadata: Metadata = {
  title: 'Baby Calculators',
  description:
    'Free calculators for Australian parents - due date, wake windows, growth percentile, childcare costs and Parental Leave Pay.',
  alternates: { canonical: 'https://parentaladminmanager.com/calculators' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'PAM Baby Calculators',
    description: 'Due date, wake windows, growth, childcare cost and parental leave calculators, free to use.',
    url: 'https://parentaladminmanager.com/calculators',
  },
}

export const dueDateCalculatorMetadata: Metadata = {
  title: 'Due Date Calculator',
  description:
    "Free due date calculator for Australian parents - estimate baby's due date from the first day of your last period.",
  alternates: { canonical: 'https://parentaladminmanager.com/calculators/due-date' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'PAM Due Date Calculator',
    description: "Estimate baby's due date in seconds.",
    url: 'https://parentaladminmanager.com/calculators/due-date',
  },
}

export const wakeWindowCalculatorMetadata: Metadata = {
  title: 'Wake Window Calculator',
  description:
    "Free wake window calculator for Australian parents - find baby's age-appropriate wake window, with suggested nap times for today.",
  alternates: { canonical: 'https://parentaladminmanager.com/calculators/wake-windows' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'PAM Wake Window Calculator',
    description: "Find baby's age-appropriate wake window in seconds.",
    url: 'https://parentaladminmanager.com/calculators/wake-windows',
  },
}

export const growthPercentileCalculatorMetadata: Metadata = {
  title: 'Growth Percentile Calculator',
  description:
    "Free child growth percentile calculator - a quick estimate of where baby's weight or length sits for their age, based on WHO growth standards.",
  alternates: { canonical: 'https://parentaladminmanager.com/calculators/growth-percentile' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'PAM Growth Percentile Calculator',
    description: "Estimate baby's growth percentile in seconds.",
    url: 'https://parentaladminmanager.com/calculators/growth-percentile',
  },
}

export const childcareCostCalculatorMetadata: Metadata = {
  title: 'Childcare Cost Calculator Australia',
  description:
    'Free childcare cost calculator for Australian families - estimate your Child Care Subsidy (CCS) rate and weekly out-of-pocket cost.',
  alternates: { canonical: 'https://parentaladminmanager.com/calculators/childcare-cost' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'PAM Childcare Cost Calculator',
    description: 'Estimate your Child Care Subsidy and out-of-pocket cost.',
    url: 'https://parentaladminmanager.com/calculators/childcare-cost',
  },
}

export const parentalLeaveCalculatorMetadata: Metadata = {
  title: 'Parental Leave Calculator Australia',
  description:
    'Free parental leave calculator for Australian families - estimate your Government Parental Leave Pay, split between both parents.',
  alternates: { canonical: 'https://parentaladminmanager.com/calculators/parental-leave' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'PAM Parental Leave Calculator',
    description: 'Estimate your Parental Leave Pay in seconds.',
    url: 'https://parentaladminmanager.com/calculators/parental-leave',
  },
}

export const pricingMetadata: Metadata = {
  title: 'App Pricing',
  description:
    'Simple, transparent PAM pricing - Single, Couple and Family plans. From $7.99/month with a 14-day free trial.',
  alternates: { canonical: 'https://parentaladminmanager.com/pricing' },
  openGraph: { ...baseMetadata.openGraph, title: 'PAM Pricing', url: 'https://parentaladminmanager.com/pricing' },
}
