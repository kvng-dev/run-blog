import BlogHeroSection from "@/components/blog-hero";
import { FeaturedPosts } from "@/components/featured-posts";
import BlogSidebar from "@/components/blog-sidebar";
import { LatestBlog } from "@/components/latest-blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Run Alpha",
  description:
    "Insights and strategies from the forefront of hedge fund innovation.",
  alternates: {
    canonical: "https://blog.runalpha.co",
  },
};

// JSON-LD for the blog homepage
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Run Alpha Blog",
  description:
    "Insights and strategies from the forefront of hedge fund innovation.",
  url: "https://blog.runalpha.co",
  publisher: {
    "@type": "Organization",
    name: "Run Alpha",
    url: "https://runalpha.co",
    logo: {
      "@type": "ImageObject",
      url: "https://blog.runalpha.co/logo.png",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero — full width, above everything */}
        <BlogHeroSection />

        {/* Content area — sidebar + main */}
        <div className="flex flex-row">
          <BlogSidebar />
          <main className="flex-1 min-w-0">
            <FeaturedPosts />
            <LatestBlog />
          </main>
        </div>
      </div>
    </>
  );
}
