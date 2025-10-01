"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { getRelatedArticles } from "@/data";
import { useRouter } from "next/navigation";

export function LatestBlog() {
  const recentPosts = getRelatedArticles();

  const router = useRouter();
  const addSlugToParams = (slug: string) => {
    router.push(`/${slug}`);
  };
  return (
    <section className="py-16 px-4 sm:px-6 md:px-16 2xl:px-32 w-full ">
      <div className="lg:container lg:mx-auto w-full ">
        <div className="text-start md:mb-12 mb-4">
          <Badge variant="secondary" className="text-[10px]">
            Latest
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {recentPosts.slice(0, 3).map((post) => (
            <Card
              onClick={() => addSlugToParams(post.slug)}
              key={post.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-0 pb-6 overflow-hidden "
            >
              <div className="relative overflow-hidden ">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="">
                <h3 className="md:text-xl font-medium text-card-foreground group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground mb-4 flex-wrap">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-blue-700 group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="sm"
            variant="outline"
            className="text-sm"
            onClick={() => router.push("/blog")}
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
