import type { Metadata } from 'next'
import Link from 'next/link'
import { storiesMetadata } from '../metadata'

export const metadata: Metadata = storiesMetadata

const stories = [
  { cover: 'c-newborn', label: 'The first six weeks', tag: 'Newborn', title: 'What I wish someone had told me about week one', body: 'The forms, the feelings, the feeds. A gentle, honest guide to surviving (and savouring) the fourth trimester.' },
  { cover: 'c-wellbeing', label: 'The mental load', tag: 'Wellbeing', title: 'How I finally put down the invisible to-do list', body: "One mum's story of sharing the load — and what changed when she stopped holding it all in her head." },
  { cover: 'c-memories', label: 'Memory keeping', tag: 'Memories', title: "The voice note I'll treasure forever", body: 'Why capturing the little sounds — first giggles, first words — matters more than the perfect photo.' },
  { cover: 'c-family', label: 'Two mums, one family', tag: 'Family', title: 'Building our family, our way', body: 'A heartfelt look at parenthood beyond the traditional mould — and why every family deserves to be seen.' },
  { cover: 'c-returning', label: 'Going back to work', tag: 'Returning', title: 'The return-to-work juggle, made gentler', body: 'Childcare, routines and the guilt nobody warns you about — plus the systems that actually helped.' },
  { cover: 'c-siblings', label: 'Second time around', tag: 'Siblings', title: 'Everything I forgot the second time', body: "Turns out you don't remember a thing. How PAM became the brain a tired mum-of-two desperately needed." },
]

export default function StoriesPage() {
  return (
    <main>
      <section className="hero" style={{ paddingTop: 40, paddingBottom: 30 }}>
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Real Mums, Real Stories</span>
            <h2>The honest, <span className="em">unfiltered</span> bits.</h2>
            <p>No highlight reels. Just real parents sharing what helped, what hurt, and what they wish they&apos;d known.</p>
          </div>
          <div className="blog-note">
            <p>&ldquo;We started PAM because the hardest parts of early parenthood are the ones no one talks about. This is the space for those conversations.&rdquo;</p>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 10 }}>
        <div className="container">
          <div className="blog-grid">
            {stories.map((s) => (
              <article key={s.title} className="story">
                <div className={`cover ${s.cover}`}>
                  <b>{s.label}</b>
                </div>
                <div className="body">
                  <span className="tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <span className="read">Read story →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="share-cta">
        <div className="container">
          <h2>Got a story <em>to share?</em></h2>
          <p>We&apos;d love to feature your real, honest, beautiful parenting journey. Big or small — every story matters here.</p>
          <Link href="/contact?topic=story" className="floating-cta" style={{ animation: 'none' }}>
            Share Your Story
            <span className="arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          </Link>
        </div>
      </div>
    </main>
  )
}
