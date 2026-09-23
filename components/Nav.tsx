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
          <svg width="18" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
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
