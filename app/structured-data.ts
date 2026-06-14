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
  alternateName: 'Parental Admin Manager',
  url: 'https://parentaladminmanager.com',
  logo: 'https://parentaladminmanager.com/logo.png',
  description:
    'The assistant every parent deserves - smart checklists, a gentle tracker, memories, family info and Ask PAM.',
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

export const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'PAM - Parental Admin Manager',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'LifestyleApplication',
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
