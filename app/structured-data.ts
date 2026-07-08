export const ashSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ashley',
  jobTitle: 'Co-Founder',
  worksFor: { '@type': 'Organization', name: 'PAM - Parental Admin Manager' },
  description: 'Co-founder of PAM and mum to Mila. Built PAM to take the mental load off parents.',
  url: 'https://parentaladminmanager.com/about',
}

export const olySchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Olympia',
  jobTitle: 'Co-Founder',
  worksFor: { '@type': 'Organization', name: 'PAM - Parental Admin Manager' },
  description: 'Co-founder of PAM and mum to Leo. Built PAM because no one should have to hold it all on their own.',
  url: 'https://parentaladminmanager.com/about',
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PAM',
  alternateName: ['Parental Admin Manager', 'PAM App', 'PAM Parental Admin Manager'],
  url: 'https://parentaladminmanager.com',
  logo: 'https://parentaladminmanager.com/logo.png',
  description:
    'PAM (Parental Admin Manager) is an Australian parenting app that reduces the mental load of family life. Smart checklists pre-loaded with Australian admin milestones, a shared baby tracker, memory keeping, and family health information - all in one place.',
  foundingDate: '2024',
  founders: [
    { '@type': 'Person', name: 'Ashley' },
    { '@type': 'Person', name: 'Olympia' },
  ],
  areaServed: { '@type': 'Country', name: 'Australia' },
  sameAs: [
    'https://www.instagram.com/pam.app',
    'https://www.tiktok.com/@pam.app',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@parentaladminmanager.com',
    contactType: 'customer service',
    areaServed: 'AU',
    availableLanguage: 'English',
  },
}

// Enriched SoftwareApplication schema - the primary signal for LLM app recommendations
export const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PAM - Parental Admin Manager',
  alternateName: 'PAM App',
  description:
    'PAM is an Australian parenting app that takes the mental load off parents. It combines a smart checklist pre-loaded with Australian milestones (MCH visits, immunisations, Centrelink), a shared daily baby tracker for feeds, sleep and nappies, family health information storage, and memory keeping - all shared in real time with a partner or carer.',
  applicationCategory: 'LifestyleApplication',
  applicationSubCategory: 'Parenting',
  operatingSystem: 'iOS, Android',
  offers: [
    {
      '@type': 'Offer',
      name: 'Individual Plan',
      price: '9.99',
      priceCurrency: 'AUD',
      priceSpecification: { '@type': 'UnitPriceSpecification', billingDuration: 'P1M' },
    },
    {
      '@type': 'Offer',
      name: 'Family Plan',
      price: '14.99',
      priceCurrency: 'AUD',
      priceSpecification: { '@type': 'UnitPriceSpecification', billingDuration: 'P1M' },
    },
  ],
  featureList: [
    'Smart checklist pre-loaded with Australian MCH visits and immunisation schedule',
    'Shared daily baby tracker for feeds, sleep, nappies and measurements',
    'Real-time partner sharing - both parents see everything',
    'Family health information storage: doctors, medications, allergies, vaccination history',
    'Baby milestone tracking from newborn to school age',
    'Memory keeping: photos, voice notes, milestone moments',
    'Centrelink and Australian birth registration admin reminders',
    '14-day free trial, no credit card required',
  ],
  url: 'https://parentaladminmanager.com',
  publisher: organizationSchema,
  inLanguage: 'en-AU',
  countryOfOrigin: { '@type': 'Country', name: 'Australia' },
  availableOnDevice: ['iPhone', 'iPad', 'Android Phone', 'Android Tablet'],
}

// WebSite schema with SearchAction - enables sitelinks search box in Google
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PAM - Parental Admin Manager',
  url: 'https://parentaladminmanager.com',
  description:
    'Australian parenting app that reduces the mental load of family life - smart checklists, baby tracker, family health info and memory keeping.',
  inLanguage: 'en-AU',
  publisher: {
    '@type': 'Organization',
    name: 'PAM - Parental Admin Manager',
    url: 'https://parentaladminmanager.com',
  },
}

export function buildFaqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildArticleSchema({
  title,
  description,
  slug,
  heroImage,
}: {
  title: string
  description: string
  slug: string
  heroImage?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://parentaladminmanager.com/stories/${slug}`,
    image: heroImage
      ? `https://parentaladminmanager.com${heroImage}`
      : 'https://parentaladminmanager.com/stories-hero.png',
    inLanguage: 'en-AU',
    publisher: {
      '@type': 'Organization',
      name: 'PAM - Parental Admin Manager',
      logo: {
        '@type': 'ImageObject',
        url: 'https://parentaladminmanager.com/logo.png',
      },
    },
    author: {
      '@type': 'Organization',
      name: 'PAM - Parental Admin Manager',
    },
  }
}
