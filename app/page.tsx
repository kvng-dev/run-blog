import BlogHeroSection from "@/components/blog-hero";
import { FeaturedPosts } from "@/components/featured-posts";
// import { RecentPosts } from "@/components/recent-posts";
import { BlogFooter } from "@/components/blog-footer";
import BlogSidebar from "@/components/blog-sidebar";
import { LatestBlog } from "@/components/latest-blog";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background ">
      <div className="flex flex-row h-full">
        <BlogSidebar />
        <main className="flex-1">
          <BlogHeroSection />
          <FeaturedPosts />
          <LatestBlog />
        </main>
      </div>
    </div>
  );
}
