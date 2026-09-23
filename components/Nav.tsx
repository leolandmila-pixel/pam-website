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
      { href: '/features/local-info', label: 'Local Info' },
      { href: '/features/memories', label: 'Memories' },
      { href: '/pricing', label: 'App Pricing' },
    ],
  },
  { href: '/stories', label: 'Real Mums, Real Stories' },
  { href: '/calculators', label: 'Calculators' },
  {
    href: '/questions',
    label: 'Guides',
    children: [
      { href: '/questions', label: 'Parent Questions, Answered' },
      { href: '/mental-load', label: 'What Is the Mental Load?' },
      { href: '/newborn-sleep-schedule', label: 'Newborn Sleep Schedule' },
      { href: '/newborn-admin-checklist', label: 'Newborn Admin Checklist' },
    ],
  },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)

  const closeAll = () => { setOpen(false); setSubOpen(false) }

  return (
    <header className="site-header">
      {/* Top bar: logo left + announcement text */}
      <div className="top-bar">
        <Link href="/" className="top-bar-logo" onClick={closeAll}>
          <Image
            src="/logo.png"
            alt="PAM - Parental Admin Manager"
            width={90}
            height={26}
            className="top-bar-logo-img"
            priority
          />
          <span className="top-bar-wordmark">Parental Admin Manager</span>
        </Link>
        <a
          href="https://apps.apple.com/au/app/parental-admin-manager/id6780860987"
          target="_blank"
          rel="noreferrer"
          className="top-bar-text"
        >
          Less mental load. Start your free PAM trial today.
        </a>
        <a
          href="https://apps.apple.com/au/app/parental-admin-manager/id6780860987"
          target="_blank"
          rel="noreferrer"
          className="appstore-badge"
          aria-label="Download PAM on the App Store"
        >
          <svg width="20" height="24" viewBox="0 0 814 1000" fill="#fff" aria-hidden="true">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 440.8 0 300.3 0 167.8c0-139.1 91.5-212.7 181.5-212.7 72.6 0 132.1 46.3 171.7 46.3 37.8 0 106.6-52.5 188.8-52.5 30.6 0 108.2 9.7 164 72.6zm-362.4-182.4c-10.9-50.2 17.2-100.1 52.5-130.4 39.8-34.4 98.7-55.3 153.5-55.3 4.5 51.8-15.9 99.9-53.7 135.3-35.7 33.1-93.4 59.8-152.3 50.4z" />
          </svg>
          <span className="appstore-badge-text">
            <span className="appstore-badge-sub">Download on the</span>
            <span className="appstore-badge-main">App Store</span>
          </span>
        </a>
        <button
          className="menu-btn top-bar-menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => { setOpen(v => !v); setSubOpen(false) }}
        >
          {open ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Floating nav pill */}
      <div className="nav-wrapper">
        <nav className="nav">
          <ul className={`nav-pills${open ? ' open' : ''}`}>
            {links.map((l) => (
              <li key={l.label} className={l.children ? 'has-dropdown' : undefined}>
                <Link
                  href={l.href}
                  className={`nav-pill${pathname === l.href ? ' active' : ''}`}
                  onClick={(e) => {
                    if (open && l.children) {
                      e.preventDefault()
                      setSubOpen(v => !v)
                    } else {
                      closeAll()
                    }
                  }}
                >
                  {l.label}
                  {l.children ? (
                    <svg className={`nav-caret${open && subOpen ? ' open' : ''}`} viewBox="0 0 12 8" aria-hidden="true">
                      <path d="M1 1.5L6 6.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg className="nav-pill-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </Link>
                {l.children && (
                  <ul className={`nav-dropdown${open && subOpen ? ' mobile-open' : ''}`}>
                    {l.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="nav-dropdown-item"
                          onClick={closeAll}
                        >
                          {c.label}
                          <svg className="nav-pill-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
