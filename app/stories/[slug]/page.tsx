import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { stories, getStoryBySlug } from '../stories-data'

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) return { title: 'Story not found' }
  return {
    title: `${story.title} | PAM`,
    description: story.body,
    openGraph: {
      title: story.title,
      description: story.body,
      type: 'article',
    },
  }
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) notFound()

  return (
    <main>
      <section className="hero" style={{ paddingTop: 40, paddingBottom: 20 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Link href="/stories" className="story-back">← All stories</Link>
          <div className={`story-cover ${story.cover}`}>
            <b>{story.label}</b>
          </div>
          <div className="story-meta">
            <span className="tag">{story.tag}</span>
            <span className="dot">·</span>
            <span>Est. read: {story.readMinutes} min</span>
          </div>
          <h1 className="story-title">{story.title}</h1>
        </div>
      </section>

      <section style={{ paddingTop: 10, paddingBottom: 60 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          {story.content ? (
            <article className="story-article">
              {story.content.hook.map((para, i) => (
                <p key={`hook-${i}`} className="lede">{para}</p>
              ))}

              {story.content.sections.map((sec, i) => (
                <div key={`sec-${i}`} className="story-section">
                  <h2>{sec.heading}</h2>
                  {sec.subheading && <p className="subhead">{sec.subheading}</p>}
                  {sec.paragraphs?.map((p, j) => (
                    <p key={`p-${i}-${j}`}>{p}</p>
                  ))}
                  {sec.bullets && (
                    <ul>
                      {sec.bullets.map((b, j) => (
                        <li key={`b-${i}-${j}`}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="story-closing">
                {story.content.closing.heading && (
                  <h2>{story.content.closing.heading}</h2>
                )}
                {story.content.closing.paragraphs.map((p, i) => (
                  <p key={`close-${i}`}>{p}</p>
                ))}
              </div>
            </article>
          ) : (
            <div className="story-coming-soon">
              <p className="lede">{story.body}</p>
              <p><em>This story is being written. Check back soon.</em></p>
              <Link href="/stories" className="cta-link">← Back to all stories</Link>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
