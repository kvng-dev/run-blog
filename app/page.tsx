import { BlogHeader } from "@/components/blog-header";
import { BlogHero } from "@/components/blog-hero";
import { FeaturedPosts } from "@/components/featured-posts";
// import { RecentPosts } from "@/components/recent-posts";
import { BlogFooter } from "@/components/blog-footer";
import BlogSidebar from "@/components/blog-sidebar";
import { LatestBlog } from "@/components/latest-blog";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background ">
      <BlogHeader />
      <div className="flex flex-row h-full">
        <BlogSidebar />
        <main className="flex-1">
          <BlogHero />
          <FeaturedPosts />
          <LatestBlog />
        </main>
      </div>
      <BlogFooter />
    </div>
  );
}
