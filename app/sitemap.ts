import { getPublishedArticles } from "@/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blog.runalpha.com";
  const currentDate = new Date();

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Get all published articles
  const articles = getPublishedArticles();

  // Generate sitemap entries for published articles
  const blogPosts: MetadataRoute.Sitemap = articles
    .filter((article) => article.slug && article.slug.trim() !== "")
    .map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : currentDate,
      changeFrequency: "monthly" as const,
      priority: article.featured ? 0.9 : 0.7,
    }));

  return [...routes, ...blogPosts];
}
