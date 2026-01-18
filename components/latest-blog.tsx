"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight } from "lucide-react";
import { getRelatedArticles } from "@/data";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function LatestBlog() {
  const recentPosts = getRelatedArticles();
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="py-24 px-6 md:px-16 2xl:px-32 w-full bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-8">
          <div>
            <Badge
              variant="outline"
              className="mb-4 bg-primary/5 text-primary border-primary/20 px-3 py-1"
            >
              Fresh Perspectives
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              Latest from the Lab
            </h2>
          </div>
          <Button
            variant="link"
            className="hidden md:flex group text-primary font-semibold"
            onClick={() => router.push("/blog")}
          >
            Explore Library
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recentPosts.slice(0, 3).map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card
                onClick={() => router.push(`/blog/${post.slug}`)}
                className="group relative h-full border-none bg-transparent shadow-none cursor-pointer overflow-visible"
              >
                {/* Image Container with 3D-ish lift */}
                <div className="relative z-0 overflow-hidden rounded-2xl aspect-[4/3] shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Floating Glassmorphism Content Card */}
                <CardContent className="relative z-10 -mt-20 mx-4 p-6 rounded-xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg group-hover:bg-white transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                      Article
                    </span>
                    <div className="flex items-center text-[10px] text-slate-400">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold leading-tight mb-3 text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-sm line-clamp-2 mb-6 font-light leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                        <User className="h-3 w-3 text-slate-500" />
                      </div>
                      <span className="text-xs font-medium text-slate-600">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium uppercase tracking-tighter">
                      {post.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden">
          <Button
            className="w-full h-12 rounded-xl text-lg font-medium"
            onClick={() => router.push("/blog")}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
