import { getPublishedArticles } from "@/data";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://blog.runalpha.com";

  // Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // Get all published articles
  const articles = getPublishedArticles();

  // Generate sitemap entries for published articles
  const blogPosts: MetadataRoute.Sitemap = articles
    .filter((article) => article.slug && article.slug.trim() !== "")
    .map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "weekly" as const,
      priority: article.featured ? 0.9 : 0.8,
    }));

  return [...homepage, ...blogPosts];
}
