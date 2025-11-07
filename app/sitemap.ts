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

  // Filter only published articles and generate sitemap entries
  const blogPosts: MetadataRoute.Sitemap = articles
    .filter((article: any) => article.published)
    .map((article: any) => ({
      url: `${baseUrl}/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "weekly",
      priority: article.featured ? 0.9 : 0.8,
    }));

  return [...homepage, ...blogPosts];
}
