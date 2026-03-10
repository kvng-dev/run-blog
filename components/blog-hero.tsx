"use client";

import { useRef } from "react";
import { ArrowRight, Globe, ShieldCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const BlogHeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[90vh] flex items-center bg-[#020617] overflow-x-clip mt-24 px-5 md:px-12 lg:px-16 pt-10 md:pt-12 pb-16 md:pb-24"
    >
      {/* Background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
              Run Alpha Blog
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-8">
              Continuity, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                Prosperity, Legacy.
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 mb-8 md:mb-10 max-w-xl leading-relaxed">
              Architects of wealth preservation. We provide the
              <span className="text-white font-medium"> analytical edge </span>
              to navigate global volatility and secure your family&apos;s future
              across generations.
            </p>

            <Link
              href="/blog"
              className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white w-full sm:w-auto px-8 py-4 rounded-2xl font-bold transition-colors text-sm md:text-base"
            >
              Explore Articles
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
          </motion.div>

          {/* Right — dashboard card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="relative hidden lg:block"
          >
            {/* Floating card — Global Exposure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-10 -right-10 z-20"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3.5 shadow-xl"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center">
                  <Globe className="w-[18px] h-[18px] text-blue-400" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Exposure</p>
                  <p className="text-sm font-bold text-white">Global</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating card — Secured Assets */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute -bottom-8 -left-10 z-20"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3.5 shadow-xl"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                  <ShieldCheck className="w-[18px] h-[18px] text-emerald-400" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Assets</p>
                  <p className="text-sm font-bold text-white">Secured</p>
                </div>
              </motion.div>
            </motion.div>

            <div className="relative bg-slate-900/50 backdrop-blur-2xl border border-white/10 p-8 rounded-[32px] shadow-2xl">
              {/* Window dots + label */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Market Overview
                </span>
              </div>

              {/* Chart */}
              <div className="h-40 mb-8 relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 320 100" preserveAspectRatio="none">
                  <line x1="0" y1="25" x2="320" y2="25" stroke="rgba(255,255,255,0.04)" />
                  <line x1="0" y1="50" x2="320" y2="50" stroke="rgba(255,255,255,0.04)" />
                  <line x1="0" y1="75" x2="320" y2="75" stroke="rgba(255,255,255,0.04)" />

                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    d="M0 80 Q 40 10, 80 60 T 160 30 T 240 70 T 320 20 L 320 100 L 0 100 Z"
                    fill="url(#areaGradient)"
                  />

                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
                    d="M0 80 Q 40 10, 80 60 T 160 30 T 240 70 T 320 20"
                    fill="none"
                    stroke="url(#chartGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59,130,246,0.12)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 bg-white/[0.04] rounded-2xl border border-white/[0.06]">
                  <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wide mb-1.5">
                    Strategy
                  </p>
                  <p className="text-lg font-bold text-white">Multi-Asset</p>
                </div>
                <div className="p-4 bg-white/[0.04] rounded-2xl border border-white/[0.06]">
                  <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wide mb-1.5">
                    Exposure
                  </p>
                  <p className="text-lg font-bold text-white">Global</p>
                </div>
                <div className="p-4 bg-white/[0.04] rounded-2xl border border-white/[0.06]">
                  <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-wide mb-1.5">
                    Risk
                  </p>
                  <p className="text-lg font-bold text-emerald-400">Low</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
