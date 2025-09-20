import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const featuredPosts = [
  {
    id: 1,
    title: "The Rise of AI-Powered Development Tools",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we write, test, and deploy code in 2024.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "AI & Development",
    image: "/placeholder-8eq9i.png",
  },
  {
    id: 2,
    title: "Building Scalable Microservices Architecture",
    excerpt:
      "A comprehensive guide to designing and implementing microservices that can handle millions of requests.",
    author: "Michael Rodriguez",
    date: "Dec 12, 2024",
    readTime: "12 min read",
    category: "Architecture",
    image: "/placeholder-u7d36.png",
  },
  {
    id: 3,
    title: "The Future of Web Performance Optimization",
    excerpt:
      "Discover the latest techniques and tools for creating lightning-fast web applications.",
    author: "Emily Johnson",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Performance",
    image: "/web-performance-optimization-speed.jpg",
  },
];

export function FeaturedPosts() {
  return (
    <section className="lg:py-16 md:py-12 sm:py-8 py-4 px-4 md:px-16 lg:px-24  w-full  grid md:grid-cols-3 place-items-center justify-center gap-6">
      <div className="flex flex-col order-2">
        <Badge
          variant="secondary"
          className="text-[10px] font-medium hidden md:block"
        >
          Featured
        </Badge>
        <h2 className="text-lg lg:text-3xl font-bold lg:w-[300px] lg:my-8 my-4">
          New Standards for Econimic Data Aim to Sharpen View of Global Economy
        </h2>
        <p className="font-light text-xs">
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <p className="uppercase text-xs md:text-sm my-2 font-medium">
          Jennifer Cruz, Myles Tyler
        </p>
        <p className="font-light text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a
          dolorem beatae perspiciatis. Omnis perferendis officia, tempore
          doloremque dolores fuga quaerat vel voluptatem ipsa a eum temporibus
          magni maiores commodi!
        </p>
        <Button
          variant="ghost"
          className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-6"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Button>{" "}
      </div>
      <div className="w-full bg-gray-300 overflow-hidden col-span-2 order-1 md:order-2">
        <img
          src="/keke.jpg"
          alt=""
          className="object-cover h-[300px] md:h-[400px]  lg:h-[550px] w-full"
        />
      </div>
    </section>
  );
}
