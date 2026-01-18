"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Calendar,
  Clock,
  Grid,
  List,
  ArrowRight,
  FilterX,
} from "lucide-react";
import Link from "next/link";
import { getPublishedArticles } from "@/data";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AllArticlesPage = () => {
  const articles = getPublishedArticles();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 6;

  const categories = useMemo(() => {
    return ["All", ...new Set(articles.map((article) => article.category))];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (art) =>
          art.title.toLowerCase().includes(query) ||
          art.excerpt.toLowerCase().includes(query) ||
          art.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter((art) => art.category === selectedCategory);
    }

    filtered.sort((a, b) => {
      if (sortBy === "newest")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === "oldest")
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === "popular")
        return b.featured === a.featured ? 0 : b.featured ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, articles]);

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Editorial Header */}
      <header className="relative pt-32 pb-16 px-6 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#01386e,transparent)]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Insights & <span className="text-primary italic">Strategy</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto font-light">
              Deep dives into market dynamics, wealth preservation, and the
              future of global investment.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Persistence Bar: Search & Controls */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-y border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:max-w-sm group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search the archive..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-full focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <select
                className="bg-transparent border-none text-sm font-semibold text-slate-600 focus:ring-0 cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <div className="h-4 w-[1px] bg-slate-200 hidden md:block" />

              <div className="flex bg-slate-100 p-1 rounded-full">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-full transition-all ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm text-primary"
                      : "text-slate-400"
                  }`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-full transition-all ${
                    viewMode === "list"
                      ? "bg-white shadow-sm text-primary"
                      : "text-slate-400"
                  }`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {paginatedArticles.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                <FilterX className="text-slate-300 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                No matches found
              </h3>
              <p className="text-slate-500 mb-8">
                Refine your search or clear filters to see more.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset All Filters
              </Button>
            </motion.div>
          ) : (
            <LayoutGroup>
              <motion.div
                layout
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "flex flex-col gap-6"
                }
              >
                {paginatedArticles.map((article, idx) => (
                  <motion.article
                    layout
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`group bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${
                      viewMode === "list" ? "md:flex md:h-64" : ""
                    }`}
                  >
                    <Link href={`/blog/${article.slug}`} className="contents">
                      {/* Image container */}
                      <div
                        className={`${
                          viewMode === "list" ? "md:w-1/3" : "w-full h-56"
                        } overflow-hidden relative`}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 hover:bg-white border-none shadow-sm">
                          {article.category}
                        </Badge>
                      </div>

                      {/* Content container */}
                      <div
                        className={`p-6 flex flex-col justify-between ${
                          viewMode === "list" ? "md:w-2/3" : ""
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-tighter text-slate-400 mb-3">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={12} className="text-primary" />
                              {new Date(article.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={12} className="text-primary" />
                              {article.readTime}
                            </span>
                          </div>
                          <h2 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-3 line-clamp-2">
                            {article.title}
                          </h2>
                          <p className="text-slate-500 text-sm font-light line-clamp-2 leading-relaxed mb-4">
                            {article.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold text-xs">
                              {article.author.charAt(0)}
                            </div>
                            <span className="text-xs font-semibold text-slate-600">
                              {article.author}
                            </span>
                          </div>
                          <ArrowRight
                            size={18}
                            className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all"
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </LayoutGroup>
          )}
        </AnimatePresence>

        {/* Modern Pagination */}
        {totalPages > 1 && (
          <div className="mt-20 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                  currentPage === page
                    ? "bg-slate-900 text-white scale-110 shadow-lg"
                    : "bg-white text-slate-400 hover:bg-slate-50 border border-slate-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AllArticlesPage;
