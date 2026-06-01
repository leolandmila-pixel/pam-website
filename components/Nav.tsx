'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/stories', label: 'Real Mums, Real Stories' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

// TODO: replace with real App Store / Google Play URLs at launch
const APP_STORE_URL = '#founding'
const GOOGLE_PLAY_URL = '#founding'

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="PAM — Parental Admin Manager" width={120} height={34} className="logo-img" priority />
          <small>Parental Admin Manager</small>
        </Link>
        <ul className={`nav-pills${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-pill${pathname === l.href ? ' active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="store-buttons">
          <a href={APP_STORE_URL} className="store-btn" aria-label="Download on the App Store">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <span>App Store</span>
          </a>
          <a href={GOOGLE_PLAY_URL} className="store-btn" aria-label="Get it on Google Play">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3.6 2.3a1.5 1.5 0 0 0-.6 1.2v17a1.5 1.5 0 0 0 .6 1.2l9.8-9.7L3.6 2.3z" />
              <path d="M16.8 9.1L5.5 2.6 13.4 10.5l3.4-1.4z" />
              <path d="M20.5 11l-3.7-2-3.4 3 3.4 3 3.7-2a1.5 1.5 0 0 0 0-2z" />
              <path d="M5.5 21.4l11.3-6.5-3.4-1.4-7.9 7.9z" />
            </svg>
            <span>Google Play</span>
          </a>
        </div>
        <button
          className="menu-btn"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </nav>
    </div>
  )
}
