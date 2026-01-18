"use client";

import { useRef } from "react";
import { ArrowRight, Sparkles, ShieldCheck, Globe } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const BlogHeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  // 2026 Parallax and Scroll Effects
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center bg-[#020617] overflow-hidden mt-24 px-4 pt-12 pb-24"
    >
      {/* 2026 Kinetic Background: Mesh Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/30 blur-[140px] rounded-full animate-bounce duration-[10s]" />
        {/* Grain Overlay for premium texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT: Kinetic Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Animated Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="text-blue-400 h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                Run Alpha Intelligence
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              Continuity, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 animate-gradient-x">
                Prosperity, Legacy.
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed font-medium">
              Architects of wealth preservation. We provide the
              <span className="text-white"> analytical engine </span>
              to navigate global volatility and secure your family&apos;s future
              across generations.
            </p>

            {/* Hyper-Interaction Buttons */}
            <div className="flex flex-wrap gap-5">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                Explore Articles
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </motion.button>

              <button className="px-8 py-4 rounded-2xl font-bold text-white border border-white/10 hover:bg-white/5 transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL: The "Alpha Dashboard" Card */}
          <motion.div
            style={{ y: y1, rotateX: rotate }}
            className="relative perspective-1000"
          >
            {/* Main Interactive Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-8 rounded-[40px] shadow-2xl"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400 animate-pulse">
                  LIVE MARKET DATA
                </div>
              </div>

              {/* Neo-Graph Animation */}
              <div className="space-y-8">
                <div className="h-40 relative">
                  <svg className="w-full h-full overflow-visible">
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                      transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: "easeInOut",
                      }}
                      d="M0 80 Q 40 10, 80 60 T 160 30 T 240 70 T 320 10"
                      fill="none"
                      stroke="url(#chartGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Floating Indicator */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-4 right-10 bg-white text-slate-950 text-[10px] font-black px-2 py-1 rounded shadow-lg"
                  >
                    +24.8% ALPHA
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">
                      Global Hedging
                    </p>
                    <p className="text-xl font-black text-white">Active</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-slate-500 text-[10px] font-bold uppercase mb-1">
                      Risk Score
                    </p>
                    <p className="text-xl font-black text-emerald-400">Low</p>
                  </div>
                </div>
              </div>

              {/* Orbital Elements */}
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-12 -right-12 bg-indigo-600 p-6 rounded-3xl shadow-xl border border-white/20"
              >
                <Globe className="text-white h-8 w-8 mb-2" />
                <p className="text-[10px] font-bold text-indigo-200">
                  EXPOSURE
                </p>
                <p className="font-black text-white">GLOBAL</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-8 -left-12 bg-white p-5 rounded-3xl shadow-xl"
              >
                <ShieldCheck className="text-blue-600 h-6 w-6 mb-1" />
                <p className="text-[9px] font-bold text-slate-400">STATUS</p>
                <p className="font-black text-slate-900 text-xs tracking-tighter">
                  SECURED ASSETS
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
