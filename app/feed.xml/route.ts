import { getPublishedArticles } from "@/data";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getPublishedArticles();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Run Alpha Blog</title>
        <link>https://blog.runalpha.com</link>
        <description>Insights and strategies from the forefront of hedge fund innovation.</description>
        <language>en-us</language>
        <atom:link href="https://blog.runalpha.com/feed.xml" rel="self" type="application/rss+xml"/>
        ${posts
          .map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (post: any) => `
          <item>
            <title>${post.title}</title>
            <link>https://blog.runalpha.com/${post.slug}</link>
            <description>${post.excerpt}</description>
            <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
            <guid>https://blog.runalpha.com/${post.slug}</guid>
          </item>
        `
          )
          .join("")}
      </channel>
    </rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
