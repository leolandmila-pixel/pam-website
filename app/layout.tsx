import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif, Montserrat, Lavishly_Yours } from 'next/font/google'
import Script from 'next/script'
import { baseMetadata } from './metadata'
import { organizationSchema, mobileAppSchema, websiteSchema } from './structured-data'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const lavishlyYours = Lavishly_Yours({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lavishly-yours',
  display: 'swap',
})

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    types: {
      'application/rss+xml': 'https://parentaladminmanager.com/feed.xml',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${instrumentSerif.variable} ${montserrat.variable} ${lavishlyYours.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1BMMSSHD1W"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1BMMSSHD1W');
          `}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
