import Image from 'next/image'

export default function PricingFeatures() {
  return (
    <>
      {/* SECTION 1 - Smart Checklist */}
      <section className="pfeat-section">
        <div className="pfeat-visual pfeat-visual--warm" aria-hidden="true">
          <div className="pfeat-phone">
            <Image
              src="/phone-checklist.jpg"
              alt=""
              width={222}
              height={480}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
        <div className="pfeat-copy">
          <p className="eyebrow">Stay organised</p>
          <h3>
            Nothing falls through the <em>cracks.</em>
          </h3>
          <p className="pfeat-subhead">
            Every important date, appointment and reminder - already there when you need it.
          </p>
          <ul className="pfeat-list">
            <li>Pre-populated immunisation schedule aligned to the Australian childhood program</li>
            <li>MCH appointments and postnatal check reminders built in from day one</li>
            <li>Mum&apos;s health reminders too - 6-week check, dentist, eye health and more</li>
            <li>Add your own tasks and set custom reminders alongside the pre-populated ones</li>
            <li>Tick things off as you go - because you deserve to see how much you&apos;re actually doing</li>
          </ul>
        </div>
      </section>

      {/* SECTION 2 - Tracker (flipped) */}
      <section className="pfeat-section pfeat-section--flip">
        <div className="pfeat-visual pfeat-visual--rose" aria-hidden="true">
          <div className="pfeat-phone">
            <Image
              src="/phone-tracker.jpg"
              alt=""
              width={222}
              height={480}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
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
            <li>Feeding tracker for breast, bottle and solids - times, amounts and which side</li>
            <li>Sleep tracking with nap and overnight logs so you can start to spot patterns</li>
            <li>Nappy logs - wet, dirty and mixed, with notes for the doctor if needed</li>
            <li>Medicine tracker with dose, time and next-due reminder so nothing is doubled up</li>
            <li>Growth measurements and activity logs - all in one place, ready for any appointment</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 - Family Info */}
      <section className="pfeat-section">
        <div className="pfeat-visual pfeat-visual--sage" aria-hidden="true">
          <div className="pfeat-phone">
            <Image
              src="/phone-family.jpg"
              alt=""
              width={222}
              height={480}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
        <div className="pfeat-copy">
          <p className="eyebrow">Know your family</p>
          <h3>
            Everything you need, <em>right when</em> you need it.
          </h3>
          <p className="pfeat-subhead">
            From your GP&apos;s number to your baby&apos;s birth weight - it&apos;s all here, organised and easy to find.
          </p>
          <ul className="pfeat-list">
            <li>Curated local guides - hospitals, maternal health services, support lines and helplines</li>
            <li>Kids profiles with health history, allergies, Medicare details and key contacts</li>
            <li>Document storage for birth certificates, immunisation records and hospital summaries</li>
            <li>Age and stage guides so you always know what to expect - and when</li>
            <li>A dedicated postpartum section with resources for mum&apos;s physical and mental recovery</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 - Memories (flipped) */}
      <section className="pfeat-section pfeat-section--flip">
        <div className="pfeat-visual pfeat-visual--blush" aria-hidden="true">
          <div className="pfeat-phone">
            <Image
              src="/phone-memories.jpg"
              alt=""
              width={222}
              height={480}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
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
            <li>Photos and videos saved alongside milestones - not lost in a camera roll</li>
            <li>Voice notes to capture the sounds and moments you never want to forget</li>
            <li>Baby Book for first smiles, first words, first steps - and everything in between</li>
            <li>Yearly Books to look back on each year as a whole family chapter</li>
            <li>Letters to your child - words written today that they&apos;ll treasure one day</li>
          </ul>
        </div>
      </section>
    </>
  )
}
