import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://pamapp.com.au'),
  title: {
    default: 'PAM — The mental load, managed.',
    template: '%s | PAM',
  },
  description:
    'PAM (Parental Admin Manager) — the assistant every parent deserves. Smart checklists, a gentle tracker, memories, family info and Ask PAM, all in one beautifully simple app.',
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
    url: 'https://pamapp.com.au',
    title: 'PAM — The mental load, managed.',
    description:
      'The assistant every parent deserves — built for the appointments, checklists, milestones and quiet moments that make up a family.',
    siteName: 'PAM',
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: 'PAM — The mental load, managed.' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PAM — The mental load, managed.',
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
  alternates: { canonical: 'https://pamapp.com.au' },
}

export const aboutMetadata: Metadata = {
  title: 'About — Oly, Ash, and the story behind PAM.',
  description:
    "Meet Oly and Ash — two mums of 15-month-olds (Leo and Mila) who built PAM because they were holding too much in their heads. The story, values and people behind PAM.",
  alternates: { canonical: 'https://pamapp.com.au/about' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'About PAM — Mums, founders, best friends.',
    description: 'The founders, values and story behind PAM.',
    url: 'https://pamapp.com.au/about',
  },
}

export const storiesMetadata: Metadata = {
  title: 'Real Mums, Real Stories',
  description:
    "The honest, unfiltered bits — real Australian parents sharing what helped, what hurt, and what they wish they'd known.",
  alternates: { canonical: 'https://pamapp.com.au/stories' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Real Mums, Real Stories — PAM',
    description: 'No highlight reels. Just real parents, telling it straight.',
    url: 'https://pamapp.com.au/stories',
  },
}

export const contactMetadata: Metadata = {
  title: 'Contact',
  description:
    "Real humans, real replies. Questions, feedback or a story to share — we read every message.",
  alternates: { canonical: 'https://pamapp.com.au/contact' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Contact PAM',
    description: 'Say hello — real humans, real replies.',
    url: 'https://pamapp.com.au/contact',
  },
}

export const faqMetadata: Metadata = {
  title: 'FAQ',
  description:
    'Everything you might be wondering before you join the PAM founding trial — launch, pricing, privacy, Ask PAM and more.',
  alternates: { canonical: 'https://pamapp.com.au/faq' },
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'PAM FAQ',
    description: 'Launch, pricing, privacy and family — answered.',
    url: 'https://pamapp.com.au/faq',
  },
}
