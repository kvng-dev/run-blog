import React from "react";
import { TrendingUp, Globe, Shield, ArrowRight } from "lucide-react";

const BlogHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden mt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full text-xs font-medium mb-6 border border-blue-500/30">
              <TrendingUp size={16} />
              <span>Financial Insights & Market Analysis</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              Master Global
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Investment Strategies
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base  text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Navigate volatile markets with expert insights on FX risk
              management, portfolio protection, and wealth preservation
              strategies from Run Alpha&apos;s seasoned investment
              professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium  hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 items-center flex justify-center">
                <span className="flex items-center gap-2">
                  Explore Articles
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-2 rounded-full font-semibold  hover:bg-white/20 transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">
                    Latest Market Insights
                  </h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Mock Chart */}
                <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                  <svg className="w-full h-full" viewBox="0 0 200 80">
                    <polyline
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      points="0,60 20,45 40,50 60,30 80,35 100,20 120,25 140,15 160,20 180,10 200,5"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">FX Risk Exposure</span>
                    <span className="text-green-400 font-medium">-12.5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Portfolio Growth</span>
                    <span className="text-blue-400 font-medium">+24.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Global Exposure</span>
                    <span className="text-purple-400 font-medium">67%</span>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-xs text-blue-200 mb-1">Latest Article</div>
                <div className="font-semibold text-sm">
                  FX Hedging Strategies
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-600 to-purple-700 text-white p-4 rounded-xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-xs text-purple-200 mb-1">
                  Trending Topic
                </div>
                <div className="font-semibold text-sm">Naira Volatility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;
