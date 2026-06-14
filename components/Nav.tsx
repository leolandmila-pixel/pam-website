'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type NavLink = {
  href: string
  label: string
  children?: { href: string; label: string }[]
}

const links: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/#showcase',
    label: 'PAM App',
    children: [
      { href: '/features', label: "What's Inside PAM" },
      { href: '/features/smart-checklist', label: 'Smart Checklist' },
      { href: '/features/baby-tracker', label: 'Tracker' },
      { href: '/features/family-hub', label: 'Family Hub' },
      { href: '/features/memories', label: 'Memories' },
      { href: '/pricing', label: 'App Pricing' },
    ],
  },
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
          <Image src="/logo.png" alt="PAM - Parental Admin Manager" width={120} height={34} className="logo-img" priority />
          <small>Parental Admin Manager</small>
        </Link>
        <ul className={`nav-pills${open ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.label} className={l.children ? 'has-dropdown' : undefined}>
              <Link
                href={l.href}
                className={`nav-pill${pathname === l.href ? ' active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
                {l.children && (
                  <svg className="nav-caret" viewBox="0 0 12 8" aria-hidden="true">
                    <path d="M1 1.5L6 6.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
              {l.children && (
                <ul className="nav-dropdown">
                  {l.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        className="nav-dropdown-item"
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
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
