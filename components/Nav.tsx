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
          href="https://tally.so/r/q4J1vg"
          target="_blank"
          rel="noreferrer"
          className="top-bar-text"
        >
          Less mental load. Start your free PAM trial today.
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
