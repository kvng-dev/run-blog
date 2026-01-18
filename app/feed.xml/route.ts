import { getPublishedArticles } from "@/data";
import { NextResponse } from "next/server";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getPublishedArticles();
  const buildDate = new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Run Alpha Blog</title>
    <link>https://blog.runalpha.com</link>
    <description>Expert insights on hedge funds, investment strategies, and quantitative finance.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="https://blog.runalpha.com/feed.xml" rel="self" type="application/rss+xml"/>
    <copyright>Copyright ${new Date().getFullYear()} Run Alpha</copyright>
    <managingEditor>contact@runalpha.com (Run Alpha)</managingEditor>
    <webMaster>contact@runalpha.com (Run Alpha)</webMaster>
    <image>
      <url>https://blog.runalpha.com/logo.png</url>
      <title>Run Alpha Blog</title>
      <link>https://blog.runalpha.com</link>
    </image>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://blog.runalpha.com/blog/${post.slug}</link>
      <guid isPermaLink="true">https://blog.runalpha.com/blog/${
        post.slug
      }</guid>
      <description>${escapeXml(post.excerpt || "")}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator>${escapeXml(post.author || "Run Alpha")}</dc:creator>
      ${post.category ? `<category>${escapeXml(post.category)}</category>` : ""}
      ${
        post.tags
          ? post.tags
              .map((tag) => `<category>${escapeXml(tag)}</category>`)
              .join("\n      ")
          : ""
      }
      ${post.image ? `<enclosure url="${post.image}" type="image/jpeg"/>` : ""}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
