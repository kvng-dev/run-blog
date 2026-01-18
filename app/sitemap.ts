// app/sitemap.ts
import { getPublishedArticles } from "@/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blog.runalpha.co";
  const currentDate = new Date();

  try {
    // Homepage and main routes
    const routes: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: "daily",
        priority: 1.0,
      },
    ];

    // Get all published articles
    let articles: {
      id: number;
      title: string;
      excerpt: string;
      metaDescription: string;
      author: string;
      date: string;
      readTime: string;
      category: string;
      tags: string[];
      image: string;
      slug: string;
      featured: boolean;
      published: boolean;
      content: string;
      faqs?: { question: string; answer: string }[] | undefined;
    }[] = [];
    try {
      articles = getPublishedArticles();
    } catch (error) {
      console.error("Error fetching articles:", error);
      return routes;
    }

    // Filter out invalid articles
    const validArticles = articles.filter(
      (article) =>
        article &&
        article.slug &&
        typeof article.slug === "string" &&
        article.slug.trim() !== ""
    );

    // Generate sitemap entries for published articles
    const blogPosts: MetadataRoute.Sitemap = validArticles.map((article) => {
      let lastModified = currentDate;

      if (article.date) {
        try {
          const parsedDate = new Date(article.date);
          if (!isNaN(parsedDate.getTime())) {
            lastModified = parsedDate;
          }
        } catch (e) {
          console.error(`Invalid date for article ${article.slug}:`, e);
        }
      }

      return {
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: article.featured ? 0.9 : 0.7,
      };
    });

    return [...routes, ...blogPosts];
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: "daily",
        priority: 1.0,
      },
    ];
  }
}
