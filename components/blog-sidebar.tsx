"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  getAllCategories,
  getRecentArticles,
  getArticlesByCategory,
} from "@/data";
import Image from "next/image";

const dateFormat: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
};

const BlogSidebar = () => {
  const categories = getAllCategories();
  const recentPosts = getRecentArticles(5);

  return (
    <aside className="hidden lg:block lg:w-80 xl:w-96 relative">
      <div className="sticky top-24 px-6 xl:px-8 py-8 space-y-8 h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar">
        {/* Topics */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const count = getArticlesByCategory(category).length;
              return (
                <Link
                  key={category}
                  href={`/blog?category=${encodeURIComponent(category)}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13px] font-medium bg-slate-50 text-slate-600 border border-slate-200/60 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all duration-200"
                >
                  {category}
                  <span className="text-[11px] text-slate-400 font-normal">
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Recent
          </h3>
          <div className="space-y-5">
            {recentPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-4 items-start"
              >
                <span className="text-2xl font-bold leading-none text-slate-200 group-hover:text-slate-900 transition-colors tabular-nums shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[13px] font-semibold text-slate-700 leading-snug group-hover:text-slate-900 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1.5 flex items-center gap-1.5">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", dateFormat)}
                    </span>
                    <span className="inline-block w-0.5 h-0.5 rounded-full bg-slate-300" />
                    <span>{post.readTime}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Platform CTA */}
        <a
          href="https://runalpha.co"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white hover:shadow-lg hover:shadow-slate-900/10 transition-shadow"
        >
          <div className="flex items-start justify-between mb-3">
            <Image
              src="/logo.png"
              alt="Run Alpha"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors" />
          </div>
          <p className="text-sm font-semibold mb-1">Explore Run Alpha</p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Wealth management, FX hedging, and investment solutions.
          </p>
        </a>

        {/* Social row */}
        <div className="flex items-center gap-3 pt-2">
          {[
            {
              href: "https://www.instagram.com/runalpha.co/",
              label: "Instagram",
              svg: (
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              ),
            },
            {
              href: "https://www.linkedin.com/company/runalpha",
              label: "LinkedIn",
              svg: (
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              ),
            },
            {
              href: "https://www.facebook.com/profile.php?id=61581323386413",
              label: "Facebook",
              svg: (
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              ),
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-700 transition-colors"
              aria-label={social.label}
            >
              {social.svg}
            </a>
          ))}
          <span className="flex-1" />
          <a
            href="https://runalpha.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-medium text-slate-400 hover:text-slate-600 transition-colors"
          >
            runalpha.co
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
