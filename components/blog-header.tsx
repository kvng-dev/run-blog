"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navItems = [
  { href: "/blog", label: "Articles" },
];

export function BlogHeader() {
  const [mobileNav, setMobileNav] = useState(false);
  const { scrollY } = useScroll();

  const headerPadding = useTransform(scrollY, [0, 50], ["1.5rem", "0.75rem"]);
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.85)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.06)"]
  );

  useEffect(() => {
    document.body.style.overflow = mobileNav ? "hidden" : "unset";
  }, [mobileNav]);

  return (
    <>
      <motion.header
        style={{
          paddingTop: headerPadding,
          paddingBottom: headerPadding,
          backgroundColor: headerBg,
          borderBottomColor: headerBorder,
        }}
        className="fixed top-0 z-[100] w-full border-b backdrop-blur-xl"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Run Alpha"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="font-black text-xl tracking-tighter text-slate-900">
              RUN ALPHA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1 rounded-full border border-slate-200/60">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-full hover:bg-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-4 w-px bg-slate-200 mx-1" />
            <Link
              href="https://runalpha.co"
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-slate-900 rounded-full hover:bg-white transition-colors"
            >
              Platform
              <ArrowUpRight size={14} />
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileNav(!mobileNav)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label={mobileNav ? "Close menu" : "Open menu"}
          >
            {mobileNav ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] md:hidden bg-white"
          >
            <div className="pt-32 px-8 flex flex-col h-full">
              <div className="space-y-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileNav(false)}
                      className="text-4xl font-black tracking-tight text-slate-900 flex items-center justify-between group"
                    >
                      {item.label}
                      <ChevronRight
                        className="text-slate-300 group-hover:text-slate-900 transition-colors"
                        size={32}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pb-12">
                <Link
                  href="https://runalpha.co"
                  onClick={() => setMobileNav(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-colors"
                >
                  Enter Platform
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
