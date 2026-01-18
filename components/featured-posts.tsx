"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock10, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { getFeaturedArticles } from "@/data";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function FeaturedPosts() {
  const articles = getFeaturedArticles();
  const router = useRouter();

  const handleNavigation = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div className="bg-white">
      {articles.map((art, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative lg:py-24 md:py-16 py-10 px-6 md:px-16 xl:px-32 w-full grid md:grid-cols-12 gap-10 items-center overflow-hidden border-b border-gray-100 last:border-0"
        >
          {/* Text Content Area */}
          <div className="md:col-span-5 flex flex-col order-2 md:order-1 z-10">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {art.featured && (
                <Badge
                  variant="outline"
                  className="mb-6 uppercase tracking-widest text-[10px] px-3 py-1 border-primary/20 text-primary bg-primary/5"
                >
                  Featured Story
                </Badge>
              )}
            </motion.div>

            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 group-hover:text-primary transition-colors">
              {art.title}
            </h2>

            <div className="flex items-center gap-6 mb-8 text-slate-500 font-medium text-xs uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-primary" />
                {new Date(art.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock10 size={14} className="text-primary" />
                {art.readTime}
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 text-lg font-light italic">
              By {art.author}
            </p>

            <div
              className="prose prose-slate prose-p:leading-relaxed prose-p:text-slate-600 mb-8 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: art.content }}
            />

            <Button
              variant="default"
              size="lg"
              className="w-fit gap-3 rounded-full px-8 bg-slate-900 hover:bg-primary transition-all duration-300 group/btn shadow-xl shadow-slate-200"
              onClick={() => handleNavigation(art.slug)}
            >
              Read Full Article
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image Area with Interactive Hover */}
          <div className="md:col-span-7 order-1 md:order-2 relative h-full min-h-[400px]">
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={art.image}
                alt={art.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: "circOut" }}
                className="object-cover h-[400px] md:h-full w-full"
              />
              {/* Glassmorphism Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Abstract Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors" />
          </div>
        </motion.section>
      ))}
    </div>
  );
}
