import { getPublishedArticles } from "@/data";
import { NextResponse } from "next/server";

function generateSitemapXML(
  urls: Array<{
    url: string;
    lastModified: Date;
    changeFrequency: string;
    priority: number;
  }>
): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return xml;
}

export async function GET() {
  try {
    const baseUrl = "https://blog.runalpha.co";
    const currentDate = new Date();

    // Homepage
    const urls = [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: "daily",
        priority: 1.0,
      },
    ];

    // Get articles
    try {
      const articles = getPublishedArticles();

      articles
        .filter((article) => article?.slug?.trim())
        .forEach((article) => {
          let lastModified = currentDate;

          if (article.date) {
            try {
              const parsedDate = new Date(article.date);
              if (!isNaN(parsedDate.getTime())) {
                lastModified = parsedDate;
              }
            } catch (e) {
              console.error(`Invalid date for ${article.slug}`);
            }
          }

          urls.push({
            url: `${baseUrl}/blog/${article.slug}`,
            lastModified,
            changeFrequency: "monthly",
            priority: article.featured ? 0.9 : 0.7,
          });
        });
    } catch (error) {
      console.error("Error loading articles:", error);
    }

    const sitemap = generateSitemapXML(urls);

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Sitemap generation failed:", error);

    // Return minimal sitemap on error
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://blog.runalpha.co</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new NextResponse(fallbackSitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
}
