export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PAM',
  alternateName: 'Parental Admin Manager',
  url: 'https://pamapp.com.au',
  logo: 'https://pamapp.com.au/logo.png',
  description:
    'The assistant every parent deserves - smart checklists, a gentle tracker, memories, family info and Ask PAM.',
  sameAs: [
    'https://www.instagram.com/pam.app',
    'https://www.tiktok.com/@pam.app',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@pamapp.com.au',
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
