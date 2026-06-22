import { stories } from '../stories/stories-data'

export const dynamic = 'force-static'

export function GET() {
  const baseUrl = 'https://parentaladminmanager.com'
  const published = stories.filter((s) => s.published)

  const items = published
    .map(
      (story) => `
    <item>
      <title><![CDATA[${story.title}]]></title>
      <link>${baseUrl}/stories/${story.slug}</link>
      <guid isPermaLink="true">${baseUrl}/stories/${story.slug}</guid>
      <description><![CDATA[${story.body}]]></description>
      <category><![CDATA[${story.tag}]]></category>${
        story.heroImage
          ? `\n      <enclosure url="${baseUrl}${story.heroImage}" type="image/jpeg" length="0" />`
          : ''
      }
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>PAM — Parental Admin Manager</title>
    <link>${baseUrl}</link>
    <description>Stories, guides and honest parenting content from the PAM team. Reducing the mental load of family life, one family at a time.</description>
    <language>en-AU</language>
    <copyright>© ${new Date().getFullYear()} PAM — Parental Admin Manager</copyright>
    <managingEditor>hello@parentaladminmanager.com (PAM Team)</managingEditor>
    <webMaster>hello@parentaladminmanager.com (PAM Team)</webMaster>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>PAM — Parental Admin Manager</title>
      <link>${baseUrl}</link>
    </image>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
