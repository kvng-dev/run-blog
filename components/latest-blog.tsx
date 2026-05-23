"use client";

import { Clock, User, ArrowRight } from "lucide-react";
import { getRelatedArticles } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

export function LatestBlog() {
  const recentPosts = getRelatedArticles();

  return (
    <section className="py-8 sm:py-12 md:py-24 px-4 sm:px-5 md:px-16 2xl:px-32 w-full bg-[#fcfcfd]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-6 sm:mb-8 md:mb-12 border-b border-gray-100 pb-4 sm:pb-6 md:pb-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
              Latest from the Lab
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors group"
          >
            Explore Library
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
        >
          {recentPosts.slice(0, 3).map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link
                href={`/blog/${post.slug}`}
                className="group relative block h-full cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Content card */}
                <div className="relative -mt-10 sm:-mt-12 md:-mt-16 mx-2 sm:mx-3 md:mx-4 p-3 sm:p-4 md:p-5 rounded-xl bg-white border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                      Article
                    </span>
                    <span className="flex items-center text-[10px] text-slate-400">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight mb-2 md:mb-3 text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-500 text-sm line-clamp-2 mb-4 md:mb-5 leading-relaxed hidden sm:block">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                        <User className="h-3 w-3 text-slate-500" />
                      </div>
                      <span className="text-xs font-medium text-slate-600">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {post.date}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All */}
        <div className="mt-8 sm:mt-12 md:hidden">
          <Link
            href="/blog"
            className="flex items-center justify-center gap-2 w-full h-11 sm:h-12 rounded-xl text-base sm:text-lg font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
