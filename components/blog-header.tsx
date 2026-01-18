"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Search,
  Menu,
  X,
  BookOpen,
  Link2,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function BlogHeader() {
  const [mobileNav, setMobileNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { scrollY } = useScroll();

  // 2026 Dynamic Styling: Header shrinks and gains blur as you scroll
  const headerPadding = useTransform(scrollY, [0, 50], ["1.5rem", "0.75rem"]);
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.05)"]
  );

  useEffect(() => {
    if (mobileNav) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [mobileNav]);

  const navigationItems = [{ href: "/blog", label: "Article", icon: BookOpen }];

  return (
    <>
      <motion.header
        style={{
          paddingTop: headerPadding,
          paddingBottom: headerPadding,
          backgroundColor: headerBg,
          borderBottomColor: headerBorder,
        }}
        className="fixed top-0 z-[100] w-full border-b backdrop-blur-xl transition-colors duration-500"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand Engine */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="/logo.png"
                className="relative h-9 w-9"
                alt="Logo"
                width={20}
                height={20}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-slate-900 leading-none">
                RUN ALPHA
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                Insights 2026
              </span>
            </div>
          </Link>

          {/* Core Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-6 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-4 w-[1px] bg-slate-300 mx-2" />
            <Link
              href="https://runalpha.co"
              className="flex items-center space-x-1 px-6 py-2 text-sm font-bold text-blue-600"
            >
              <span>Platform</span>
              <ArrowUpRight size={14} />
            </Link>
          </nav>

          {/* Action Hub */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:relative lg:flex items-center">
              <Search className="absolute left-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search the alpha..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 xl:w-64 pl-10 h-10 bg-slate-50 border-none rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500/20 transition-all"
              />
            </div>

            <Button
              onClick={() => setMobileNav(!mobileNav)}
              variant="ghost"
              size="icon"
              className="md:hidden bg-slate-100 rounded-xl"
            >
              {mobileNav ? <X size={20} /> : <Menu size={20} />}
            </Button>

            <Button className="hidden sm:flex bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-6 font-bold shadow-xl shadow-slate-900/10 active:scale-95 transition-all">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Ultra-Overlay */}
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] md:hidden bg-white"
          >
            <div className="pt-32 px-8 flex flex-col h-full">
              <div className="space-y-8">
                {navigationItems.map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.href}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileNav(false)}
                      className="text-5xl font-black tracking-tighter text-slate-900 flex items-center justify-between group"
                    >
                      {item.label}
                      <ChevronRight
                        className="text-slate-200 group-hover:text-blue-600 transition-colors"
                        size={40}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pb-12 space-y-6">
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Search Knowledge Base
                  </p>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      className="h-14 pl-12 bg-white border-none rounded-2xl shadow-inner text-lg"
                      placeholder="Keywords..."
                    />
                  </div>
                </div>

                <Link
                  href="https://runalpha.co"
                  className="flex items-center justify-center space-x-3 w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg"
                >
                  <Link2 size={20} />
                  <span>Enter Platform</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
