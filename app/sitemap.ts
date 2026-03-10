// app/sitemap.ts
import { getPublishedArticles, type ArticleMeta } from "@/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blog.runalpha.co";
  const currentDate = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  let articles: ArticleMeta[] = [];
  try {
    articles = getPublishedArticles();
  } catch (error) {
    console.error("Error fetching articles:", error);
    return routes;
  }

  const blogPosts: MetadataRoute.Sitemap = articles
    .filter((a) => a.slug?.trim())
    .map((article) => {
      const parsedDate = new Date(article.date);
      return {
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: isNaN(parsedDate.getTime()) ? currentDate : parsedDate,
        changeFrequency: "monthly" as const,
        priority: article.featured ? 0.9 : 0.7,
      };
    });

  return [...routes, ...blogPosts];
}
