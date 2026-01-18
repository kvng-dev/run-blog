"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Mail,
  Search,
  Twitter,
  TrendingUp,
  Clock,
  Tag,
  Sparkles,
  ArrowRight,
  Send,
  Globe,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const sidebarItems = [
  {
    name: "Investment Management",
    href: "#",
    count: 12,
    icon: TrendingUp,
    color: "text-emerald-500",
  },
  {
    name: "FX Risk Management",
    href: "#",
    count: 8,
    icon: Globe,
    color: "text-blue-500",
  },
  {
    name: "Hedging Strategies",
    href: "#",
    count: 6,
    icon: ShieldCheck,
    color: "text-indigo-500",
  },
  {
    name: "Portfolio Protection",
    href: "#",
    count: 9,
    icon: Zap,
    color: "text-amber-500",
  },
  {
    name: "Market Analysis",
    href: "#",
    count: 15,
    icon: Search,
    color: "text-rose-500",
  },
];

const popularPosts = [
  {
    title: "The Silent Wealth Killer: How FX Fluctuations Erode Your Portfolio",
    href: "#",
    readTime: "10 min",
    date: "2024-03-12",
  },
  {
    title: "Hedging Strategies for Nigerian Investors",
    href: "#",
    readTime: "12 min",
    date: "2024-03-10",
  },
];

const BlogSidebar = () => {
  // const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <aside className="hidden lg:block lg:w-80 xl:w-[400px] relative">
      <div className="sticky top-24 p-1 space-y-8 h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar">
        {/* Modern Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-focus-within:opacity-25 transition duration-1000"></div>
          <div className="relative flex items-center bg-white border border-slate-100 rounded-2xl p-1 shadow-sm">
            <Search className="ml-3 h-4 w-4 text-slate-400" />
            <Input
              type="text"
              placeholder="AI-powered search..."
              className="border-none focus-visible:ring-0 text-sm bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <kbd className="hidden xl:inline-flex h-6 select-none items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-slate-500 mr-2">
              ⌘K
            </kbd>
          </div>
        </motion.div>

        {/* Categories Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Tag className="h-4 w-4 text-blue-600" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 tracking-tight">
                Intelligence Categories
              </h3>
            </div>
          </div>
          <div className="grid gap-2">
            {sidebarItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-white hover:shadow-md hover:shadow-slate-200/50 border border-transparent hover:border-slate-100 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className={`h-4 w-4 ${item.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-500 w-6 h-6 flex items-center justify-center rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.count}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trending Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-2">
            <div className="p-2 bg-rose-50 rounded-lg">
              <Sparkles className="h-4 w-4 text-rose-600" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 tracking-tight">
              Trending Now
            </h3>
          </div>
          <div className="space-y-3">
            {popularPosts.map((post, index) => (
              <Link key={index} href={post.href} className="block group">
                <div className="relative p-4 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-blue-100 group-hover:shadow-lg group-hover:shadow-blue-500/5 transition-all duration-300">
                  <h4 className="text-sm font-semibold text-slate-800 leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="h-3 w-3 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Futuristic Newsletter */}
        <motion.div
          whileHover={{ y: -5 }}
          className="relative overflow-hidden bg-slate-900 rounded-3xl p-6 text-white shadow-2xl shadow-blue-900/20"
        >
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <h3 className="font-bold text-base">The Weekly Edge</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Join 10k+ professionals getting curated FX insights every Tuesday.
            </p>
            <div className="space-y-2">
              <Input
                placeholder="Email address"
                className="bg-white/10 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:ring-blue-500"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all active:scale-95">
                <Send className="mr-2 h-3 w-3" /> Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Social Ecosystem */}
        <div className="pt-4 border-t border-slate-100">
          <div className="flex justify-between items-center mb-4 px-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              Connect
            </span>
            <div className="h-[1px] flex-1 bg-slate-100 ml-4"></div>
          </div>
          <div className="flex gap-2">
            {[
              { icon: Twitter, color: "hover:bg-sky-500", text: "sky" },
              { icon: Linkedin, color: "hover:bg-blue-700", text: "blue" },
              { icon: Instagram, color: "hover:bg-pink-600", text: "pink" },
            ].map((social, i) => (
              <Button
                key={i}
                variant="outline"
                size="icon"
                className={`rounded-xl border-slate-100 hover:text-white ${social.color} transition-all duration-300`}
              >
                <social.icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>

        {/* Dynamic Trust Badge */}
        <div className="flex items-center gap-4 px-4 py-3 bg-white border border-slate-100 rounded-2xl">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"
              ></div>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-900 italic">
              500+ ARTICLES
            </span>
            <span className="text-[10px] text-slate-400 font-medium">
              Curated by global experts
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
