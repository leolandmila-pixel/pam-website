'use client'

import { useState } from 'react'
import Image from 'next/image'

const OPTIONS = [
  {
    id: 'appointments',
    label: "I can never stay on top of immunisation schedules and booking appointments at the right ages",
    result: {
      tag: 'Smart Calendar & Checklists',
      heading: 'You need a brain that never forgets.',
      tagline: 'PAM surfaces what\'s due, when it\'s due - before you even have to think about it.',
      body: 'Every appointment, reminder and upcoming task lives in one calm place. PAM sends gentle nudges so nothing slips, and your mornings start already organised.',
      gradient: 'linear-gradient(140deg,#F4E2E3,#C68A8E 60%,#9A1E37)',
      phone: '/phone-checklist.jpg',
      phoneAlt: 'PAM Smart Checklist screen',
    },
  },
  {
    id: 'load',
    label: "I carry the mental load alone - my partner has no idea what's going on",
    result: {
      tag: 'Shared Family Tracking',
      heading: 'You shouldn\'t be the only one holding it.',
      tagline: 'PAM is built for two - so the load is actually shared.',
      body: 'Everything you track, your partner sees too. From feeds to schedules to family info, PAM keeps both of you in sync without the constant catch-up conversations.',
      gradient: 'linear-gradient(140deg,#E6D3B8,#B06E72 60%,#9A1E37)',
      phone: '/phone-tracker.jpg',
      phoneAlt: 'PAM daily tracker screen',
    },
  },
  {
    id: 'milestones',
    label: "I'm worried I'm missing milestones or forgetting to track development",
    result: {
      tag: 'Milestone & Baby Tracker',
      heading: 'Every moment deserves to be remembered.',
      tagline: 'PAM tracks your child\'s journey so you don\'t have to hold it all in your head.',
      body: 'From the first smile to the first steps, log and celebrate every milestone without the admin overwhelm. It\'s all there when you want to look back.',
      gradient: 'linear-gradient(140deg,#C5A085,#8B3A50 60%,#6D0015)',
      phone: '/phone-family.jpg',
      phoneAlt: 'PAM family tracker screen',
    },
  },
  {
    id: 'memories',
    label: "I want to capture memories but life is too chaotic to keep up",
    result: {
      tag: 'Memories & Voice Notes',
      heading: 'The little moments are slipping by.',
      tagline: 'PAM makes capturing memories as easy as a single tap.',
      body: 'A voice note, a photo, a thought - tucked away in your family\'s story before it disappears. The sounds that are gone by week six. Future you will thank you.',
      gradient: 'linear-gradient(140deg,#7E0F25,#4A0010 60%,#260008)',
      phone: '/phone-memories.jpg',
      phoneAlt: 'PAM memories screen',
    },
  },
  {
    id: 'scattered',
    label: "Everything is scattered across apps, notes and my head - I need one place",
    result: {
      tag: 'Family Dashboard',
      heading: 'One calm place for everything.',
      tagline: 'PAM brings it all together so your brain can finally let go.',
      body: 'Appointments, checklists, trackers, memories, family info - all in one app, built for the way parenting actually works. No more juggling twelve tabs.',
      gradient: 'linear-gradient(140deg,#F1DBDC,#C5A085 50%,#6D0015)',
      phone: '/phone-home.jpg',
      phoneAlt: 'PAM home dashboard screen',
    },
  },
]

export default function ChaosQuiz() {
  const [selected, setSelected] = useState<string | null>(null)

  const result = OPTIONS.find((o) => o.id === selected)?.result ?? null

  return (
    <section className="chaosquiz">
      <div className="container">
        <div className={`quiz-pre${result ? ' quiz-pre--hidden' : ''}`}>
          <div className="quiz-pre-image">
            <Image
              src="/mum-juggling.jpg"
              alt="A mum on a couch with a child on her lap, working on a laptop, while another draws on the floor"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="quiz-pre-content">
            <div className="sec-head">
              <span className="eyebrow">Find your fit</span>
              <h2>What kind of family admin <em>chaos</em> is yours?</h2>
              <p className="quiz-intro">Pick the one that feels most like you. We&apos;ll show you exactly how PAM helps.</p>
            </div>
            <div className="quiz-options">
              {OPTIONS.map((o) => (
                <button
                  key={o.id}
                  className={`quiz-opt${selected === o.id ? ' quiz-opt--selected' : ''}`}
                  onClick={() => setSelected(o.id)}
                >
                  <span className="quiz-opt-check">
                    <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="quiz-body">

          {/* RESULT */}
          {result && (
            <div className="quiz-result">
              <div className="quiz-result-text">
                <div className="quiz-result-tag" style={{ background: result.gradient }}>
                  {result.tag}
                </div>
                <h3 className="quiz-result-heading">{result.heading}</h3>
                <p className="quiz-result-tagline">{result.tagline}</p>
                <p className="quiz-result-body">{result.body}</p>
                <div className="quiz-result-actions">
                  <a href="https://tally.so/r/q4J1vg" target="_blank" rel="noreferrer" className="quiz-cta">
                    Get early access
                    <span className="arrow">
                      <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </span>
                  </a>
                  <button className="quiz-restart" onClick={() => setSelected(null)}>
                    ↩ Try another
                  </button>
                </div>
              </div>

              <div className="quiz-phone-wrap">
                <div className="quiz-phone-frame">
                  <div className="quiz-phone-notch" />
                  <div className="quiz-phone-screen">
                    <Image
                      src={result.phone}
                      alt={result.phoneAlt}
                      fill
                      sizes="260px"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                  <div className="quiz-phone-btn quiz-phone-btn--side" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
