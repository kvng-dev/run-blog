"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock10, Calendar } from "lucide-react";
import { getFeaturedArticles } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const dateFormat: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
};

export function FeaturedPosts() {
  const articles = getFeaturedArticles();

  return (
    <div className="bg-white">
      {articles.map((art) => (
        <motion.section
          key={art.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative lg:py-24 md:py-16 py-8 px-5 md:px-16 xl:px-32 w-full grid md:grid-cols-12 gap-6 md:gap-10 items-center overflow-hidden border-b border-gray-100 last:border-0"
        >
          {/* Text Content Area */}
          <div className="md:col-span-5 flex flex-col order-2 md:order-1 z-10">

            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4 md:mb-6 group-hover:text-primary transition-colors">
              {art.title}
            </h2>

            <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8 text-slate-500 font-medium text-xs uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-primary" />
                {new Date(art.date).toLocaleDateString("en-US", dateFormat)}
              </span>
              <span className="flex items-center gap-2">
                <Clock10 size={14} className="text-primary" />
                {art.readTime}
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4 md:mb-8 text-base md:text-lg font-light italic">
              By {art.author}
            </p>

            <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 line-clamp-2 md:line-clamp-3 text-sm md:text-base">
              {art.excerpt}
            </p>

            <Link
              href={`/blog/${art.slug}`}
              className="w-full sm:w-fit inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 bg-slate-900 hover:bg-primary text-white text-sm font-medium transition-all duration-300 group/btn shadow-xl shadow-slate-200"
            >
              Read Full Article
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image Area */}
          <div className="md:col-span-7 order-1 md:order-2 relative h-full min-h-[240px] md:min-h-[400px]">
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={art.image}
                alt={art.title}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0,0.55,0.45,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors" />
          </div>
        </motion.section>
      ))}
    </div>
  );
}
