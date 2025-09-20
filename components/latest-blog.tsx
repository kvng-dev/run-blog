import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const recentPosts = [
  {
    id: 4,
    title: "Understanding React Server Components",
    excerpt:
      "A deep dive into React's newest feature and how it changes the way we think about server-side rendering.",
    author: "David Kim",
    date: "Dec 8, 2024",
    readTime: "10 min read",
    category: "React",
    image: "/keke.jpg",
  },
  {
    id: 5,
    title: "Database Optimization Strategies",
    excerpt:
      "Learn proven techniques to improve your database performance and reduce query execution time.",
    author: "Lisa Wang",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "Database",
    image: "/placeholder-vdjb4.png",
  },
  {
    id: 6,
    title: "Cybersecurity Best Practices for Developers",
    excerpt:
      "Essential security measures every developer should implement to protect their applications.",
    author: "James Thompson",
    date: "Dec 3, 2024",
    readTime: "9 min read",
    category: "Security",
    image: "/placeholder-0lzmn.png",
  },
  {
    id: 7,
    title: "The Evolution of CSS: What's New in 2024",
    excerpt:
      "Explore the latest CSS features and how they're changing the landscape of web design.",
    author: "Anna Martinez",
    date: "Dec 1, 2024",
    readTime: "5 min read",
    category: "CSS",
    image: "/placeholder-lakky.png",
  },
  {
    id: 8,
    title: "Building APIs with GraphQL",
    excerpt:
      "A comprehensive guide to creating efficient and flexible APIs using GraphQL.",
    author: "Robert Brown",
    date: "Nov 28, 2024",
    readTime: "11 min read",
    category: "API",
    image: "/placeholder-5f0of.png",
  },
  {
    id: 9,
    title: "Mobile-First Design Principles",
    excerpt:
      "Learn how to create responsive designs that work beautifully across all devices.",
    author: "Sophie Davis",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    category: "Design",
    image: "/placeholder-e2nnx.png",
  },
];

export function LatestBlog() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-16 lg:px-32 w-full ">
      <div className="lg:container lg:mx-auto w-full ">
        <div className="text-start md:mb-12">
          <Badge variant="secondary" className="text-[10px]">
            Latest
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.slice(0, 3).map((post) => (
            <Card
              key={post.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 p-0 pb-6 rounded-none"
            >
              <div className="relative overflow-hidden ">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="">
                <h3 className="md:text-xl font-medium text-card-foreground group-hover:text-[#00B4D8] transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground mb-4">
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
                  className="w-full justify-between group-hover:bg-[#00B4D8] group-hover:text-primary-foreground transition-colors"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="sm" variant="outline" className="text-sm">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
