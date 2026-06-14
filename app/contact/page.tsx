import type { Metadata } from 'next'
import { Suspense } from 'react'
import { contactMetadata } from '../metadata'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = contactMetadata

export default function ContactPage() {
  return (
    <main>
      <section className="hero" style={{ paddingTop: 40, paddingBottom: 80 }}>
        <div className="container">
          <div className="contact-card">
            <div className="contact-card-info">
              <span className="eyebrow">Say hello</span>
              <h1 className="contact-card-h">
                We want to <span className="em">hear from you.</span>
              </h1>
              <p className="contact-card-intro">
                Real humans, real replies. Questions, feedback, or a story to share - we read every message.
              </p>
              <div className="contact-card-details">
                <div className="contact-card-detail">
                  <span className="contact-card-label">Email</span>
                  <a href="mailto:hello@parentaladminmanager.com">hello@parentaladminmanager.com</a>
                </div>
                <div className="contact-card-detail">
                  <span className="contact-card-label">Social</span>
                  <a href="https://instagram.com/parentaladminmanager" target="_blank" rel="noreferrer">
                    @parentaladminmanager on Instagram
                  </a>
                </div>
                <div className="contact-card-detail">
                  <span className="contact-card-label">Made in</span>
                  <span>Melbourne, Australia</span>
                </div>
              </div>
            </div>
            <div className="contact-card-form-wrap">
              <h3 className="contact-card-form-h">Send us a message</h3>
              <Suspense fallback={<div className="contact-form-skeleton" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
