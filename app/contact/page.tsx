import type { Metadata } from 'next'
import { Suspense } from 'react'
import { contactMetadata } from '../metadata'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = contactMetadata

export default function ContactPage() {
  return (
    <main>
      <section className="hero" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="sec-head left">
            <span className="eyebrow">Say hello</span>
            <h2 style={{ fontSize: 'clamp(2.2rem,4.4vw,3.2rem)' }}>We want to <span className="em">hear from you.</span></h2>
            <p>Real humans, real replies. Questions, feedback, or a story to share — we read every message.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <a className="detail" href="mailto:hello@parentaladminmanager.com">
                <div className="d-ico">
                  <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></svg>
                </div>
                <div>
                  <b>Email us</b>
                  <span>hello@parentaladminmanager.com</span>
                </div>
              </a>
              <a className="detail" href="https://instagram.com/parentaladminmanager" target="_blank" rel="noreferrer">
                <div className="d-ico">
                  <svg viewBox="0 0 24 24"><path d="M5 6.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9.5L5 19z" /></svg>
                </div>
                <div>
                  <b>Social</b>
                  <span>@parentaladminmanager on Instagram</span>
                </div>
              </a>
              <div className="detail">
                <div className="d-ico">
                  <svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z" /><circle cx="12" cy="11" r="2.5" /></svg>
                </div>
                <div>
                  <b>Made in</b>
                  <span>Melbourne, Australia</span>
                </div>
              </div>
              <div className="story-callout">
                <h4>Share my story</h4>
                <p>Want to be featured in Real Mums, Real Stories? Pick &ldquo;Share my story&rdquo; in the form and tell us a little about your experience — we&apos;ll take it from there.</p>
              </div>
            </div>
            <Suspense fallback={<div className="contact-form" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  )
}
