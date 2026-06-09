export default function PricingFeatures() {
  return (
    <>
      <div className="pfeat-intro">
        <p className="eyebrow">What&apos;s inside PAM</p>
        <h2>
          Everything a parent needs, <em>all in one place.</em>
        </h2>
        <p className="pfeat-intro-lead">
          From your baby&apos;s first feed to their first day of school — PAM holds the detail so you can hold the
          moments.
        </p>
      </div>

      {/* SECTION 1 — Smart Checklist */}
      <section className="pfeat-section">
        <div className="pfeat-visual pfeat-visual--warm" aria-hidden="true">
          <div className="pfeat-phone">
            <div className="pfeat-phone-screen">
              <div className="pfeat-status">
                <span className="pfeat-time">9:41</span>
                <span className="pfeat-icons">
                  <span className="pfeat-wifi" />
                  <span className="pfeat-battery" />
                </span>
              </div>
              <div className="pfeat-phone-header">
                <div className="pfeat-phone-title">Smart Checklist</div>
                <div className="pfeat-phone-sub">11 tasks this month</div>
              </div>
              <div className="pfeat-phone-body">
                <div className="pfeat-pill">Due soon</div>
                <PhoneRow text="6-week immunisation" badge="3 days" />
                <PhoneRow text="MCH nurse visit" badge="1 week" />
                <PhoneRow text="6-week postnatal check" badge="1 week" />
                <div style={{ height: 10 }} />
                <div className="pfeat-pill pfeat-pill--muted">Coming up</div>
                <PhoneRow text="4-month immunisation" badge="4 weeks" badgeMuted />
                <PhoneRow text="Book dentist — mum" badge="6 weeks" badgeMuted />
                <PhoneRow text="Postpartum eye check" badge="8 weeks" badgeMuted />
              </div>
            </div>
          </div>
        </div>
        <div className="pfeat-copy">
          <p className="eyebrow">Stay organised</p>
          <h3>
            Nothing falls through the <em>cracks.</em>
          </h3>
          <p className="pfeat-subhead">
            Every important date, appointment and reminder — already there when you need it.
          </p>
          <ul className="pfeat-list">
            <li>Pre-populated immunisation schedule aligned to the Australian childhood program</li>
            <li>MCH appointments and postnatal check reminders built in from day one</li>
            <li>Mum&apos;s health reminders too — 6-week check, dentist, eye health and more</li>
            <li>Add your own tasks and set custom reminders alongside the pre-populated ones</li>
            <li>Tick things off as you go — because you deserve to see how much you&apos;re actually doing</li>
          </ul>
        </div>
      </section>

      {/* SECTION 2 — Tracker (flipped) */}
      <section className="pfeat-section pfeat-section--flip">
        <div className="pfeat-visual pfeat-visual--rose" aria-hidden="true">
          <div className="pfeat-phone">
            <div className="pfeat-phone-screen">
              <div className="pfeat-status">
                <span className="pfeat-time">9:41</span>
                <span className="pfeat-icons">
                  <span className="pfeat-wifi" />
                  <span className="pfeat-battery" />
                </span>
              </div>
              <div className="pfeat-phone-header">
                <div className="pfeat-phone-title">Tracker</div>
                <div className="pfeat-phone-sub">Today — 14 Jun</div>
              </div>
              <div className="pfeat-phone-body">
                <div className="pfeat-section-label">Feeds today</div>
                <div className="pfeat-chart">
                  <span style={{ height: '50%' }} />
                  <span style={{ height: '80%' }} className="hi" />
                  <span style={{ height: '55%' }} />
                  <span style={{ height: '95%' }} className="hi" />
                  <span style={{ height: '45%' }} />
                  <span style={{ height: '70%' }} />
                  <span style={{ height: '38%' }} />
                </div>
                <div className="pfeat-chart-labels"><span>6am</span><span>9pm</span></div>
                <div className="pfeat-section-label">Last logged</div>
                <PhoneRow text="Sleep — 2h 40min nap" badge="2hr ago" badgeMuted />
                <PhoneRow text="Nappy — wet" badge="1hr ago" badgeMuted />
                <PhoneRow text="Paracetamol 2.5ml" badge="4hr ago" badgeMuted />
                <PhoneRow text="Weight — 5.2 kg" badge="today" badgeMuted />
              </div>
            </div>
          </div>
        </div>
        <div className="pfeat-copy">
          <p className="eyebrow">Track everything</p>
          <h3>
            Every feed, sleep and <em>moment</em> logged.
          </h3>
          <p className="pfeat-subhead">
            The early days are a blur. PAM keeps the detail so you don&apos;t have to hold it all in your head.
          </p>
          <ul className="pfeat-list">
            <li>Feeding tracker for breast, bottle and solids — times, amounts and which side</li>
            <li>Sleep tracking with nap and overnight logs so you can start to spot patterns</li>
            <li>Nappy logs — wet, dirty and mixed, with notes for the doctor if needed</li>
            <li>Medicine tracker with dose, time and next-due reminder so nothing is doubled up</li>
            <li>Growth measurements and activity logs — all in one place, ready for any appointment</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 — Family Info */}
      <section className="pfeat-section">
        <div className="pfeat-visual pfeat-visual--sage" aria-hidden="true">
          <div className="pfeat-phone">
            <div className="pfeat-phone-screen">
              <div className="pfeat-status">
                <span className="pfeat-time">9:41</span>
                <span className="pfeat-icons">
                  <span className="pfeat-wifi" />
                  <span className="pfeat-battery" />
                </span>
              </div>
              <div className="pfeat-phone-header">
                <div className="pfeat-phone-title">Family Info</div>
                <div className="pfeat-phone-sub">Your family hub</div>
              </div>
              <div className="pfeat-phone-body">
                <div className="pfeat-section-label">People</div>
                <div className="pfeat-grid">
                  <PhoneTile label="Contacts" />
                  <PhoneTile label="Kids Info" />
                </div>
                <div className="pfeat-section-label">Resources</div>
                <div className="pfeat-grid">
                  <PhoneTile label="Local Info & guides" />
                  <PhoneTile label="Documents" />
                </div>
                <div className="pfeat-section-label">Stages</div>
                <div className="pfeat-grid">
                  <PhoneTile label="Key Ages & Stages" />
                  <PhoneTile label="Postpartum" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pfeat-copy">
          <p className="eyebrow">Know your family</p>
          <h3>
            Everything you need, <em>right when</em> you need it.
          </h3>
          <p className="pfeat-subhead">
            From your GP&apos;s number to your baby&apos;s birth weight — it&apos;s all here, organised and easy to find.
          </p>
          <ul className="pfeat-list">
            <li>Curated local guides — hospitals, maternal health services, support lines and helplines</li>
            <li>Kids profiles with health history, allergies, Medicare details and key contacts</li>
            <li>Document storage for birth certificates, immunisation records and hospital summaries</li>
            <li>Age and stage guides so you always know what to expect — and when</li>
            <li>A dedicated postpartum section with resources for mum&apos;s physical and mental recovery</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 — Memories (flipped) */}
      <section className="pfeat-section pfeat-section--flip">
        <div className="pfeat-visual pfeat-visual--blush" aria-hidden="true">
          <div className="pfeat-phone">
            <div className="pfeat-phone-screen">
              <div className="pfeat-status">
                <span className="pfeat-time">9:41</span>
                <span className="pfeat-icons">
                  <span className="pfeat-wifi" />
                  <span className="pfeat-battery" />
                </span>
              </div>
              <div className="pfeat-phone-header">
                <div className="pfeat-phone-title">Memories</div>
                <div className="pfeat-phone-sub">Your family story</div>
              </div>
              <div className="pfeat-phone-body">
                <div className="pfeat-section-label">Capture</div>
                <div className="pfeat-imgstrip">
                  <div className="pfeat-img"><CameraIcon /></div>
                  <div className="pfeat-img"><MicIcon /></div>
                </div>
                <div className="pfeat-section-label">Preserve</div>
                <div className="pfeat-grid" style={{ marginBottom: 10 }}>
                  <PhoneTile label="Baby Book" />
                  <PhoneTile label="Yearly Books" />
                </div>
                <div className="pfeat-section-label">Write</div>
                <div className="pfeat-letter">
                  <div className="pfeat-letter-date">14 June 2026</div>
                  <div className="pfeat-letter-title">A letter to Olivia</div>
                  <div className="pfeat-letter-preview">
                    Today you smiled for the first time. I wasn&apos;t sure if it was real, but your dad saw it too…
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pfeat-copy">
          <p className="eyebrow">Capture the moments</p>
          <h3>
            The story of your growing <em>family.</em>
          </h3>
          <p className="pfeat-subhead">
            They grow so fast. PAM gives you a beautiful place to save, treasure and revisit every chapter.
          </p>
          <ul className="pfeat-list">
            <li>Photos and videos saved alongside milestones — not lost in a camera roll</li>
            <li>Voice notes to capture the sounds and moments you never want to forget</li>
            <li>Baby Book for first smiles, first words, first steps — and everything in between</li>
            <li>Yearly Books to look back on each year as a whole family chapter</li>
            <li>Letters to your child — words written today that they&apos;ll treasure one day</li>
          </ul>
        </div>
      </section>
    </>
  )
}

function PhoneRow({ text, badge, badgeMuted }: { text: string; badge: string; badgeMuted?: boolean }) {
  return (
    <div className="pfeat-row">
      <span className="pfeat-row-dot" aria-hidden="true" />
      <span className="pfeat-row-text">{text}</span>
      <span className={`pfeat-row-badge${badgeMuted ? ' pfeat-row-badge--muted' : ''}`}>{badge}</span>
    </div>
  )
}

function PhoneTile({ label }: { label: string }) {
  return (
    <div className="pfeat-tile">
      <span className="pfeat-tile-icon" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  )
}
