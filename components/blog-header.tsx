"use client";
import {
  Search,
  Menu,
  X,
  Home,
  BookOpen,
  Tag,
  TrendingUp,
  Link2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, FormEvent, KeyboardEvent } from "react";
import Link from "next/link";

export function BlogHeader() {
  const [mobileNav, setMobileNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") setMobileNav(false);
    };

    const handleClickOutside = (e: FormEvent) => {
      if (
        mobileNav &&
        !(e.target as HTMLElement).closest(".mobile-nav-container")
      ) {
        setMobileNav(false);
      }
    };

    if (mobileNav) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [mobileNav]);

  const handleSearch = (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality
      console.log("Searching for:", searchQuery);
    }
  };

  const navigationItems = [
    { href: "/blog", label: "All Articles", icon: BookOpen },
    { href: "/blog/categories", label: "Categories", icon: Tag },
    { href: "/blog/trending", label: "Trending", icon: TrendingUp },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-gray-200"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center space-x-2">
                <img src="/logo.png" className="h-8 w-8" alt="Run Alpha Logo" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-foreground leading-tight">
                    Run Alpha
                  </span>
                  <span className="text-xs text-muted-foreground -mt-1">
                    Insights
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Search & Actions */}
            <div className="flex items-center space-x-4">
              {/* Desktop Search */}
              <div className="hidden lg:flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch(e);
                      }
                    }}
                    className="w-64 pl-10 bg-muted/50 border-border focus:bg-background transition-colors"
                  />
                </div>
              </div>

              {/* Homepage Link */}
              <Link
                href="https://runalpha.co"
                className="hidden sm:flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors"
              >
                <Link2 size={16} />
                <span>Run Alpha</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <Button
                onClick={() => setMobileNav(!mobileNav)}
                variant="ghost"
                size="icon"
                className="md:hidden relative z-50"
                aria-label={mobileNav ? "Close menu" : "Open menu"}
              >
                <div className="relative w-4 h-4">
                  <Menu
                    className={`h-4 w-4 absolute transition-all duration-200 ${
                      mobileNav
                        ? "rotate-180 opacity-0"
                        : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    className={`h-4 w-4 absolute transition-all duration-200 ${
                      mobileNav
                        ? "rotate-0 opacity-100"
                        : "rotate-180 opacity-0"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          mobileNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileNav(false)}
        />

        <div
          className={`mobile-nav-container absolute right-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background border-l shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Search */}
            <div className="p-6 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch(e);
                    }
                  }}
                  className="w-full pl-10 bg-muted/50 border-border"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-6">
              <div className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileNav(false)}
                      className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Categories */}
              <div className="mt-8">
                <h3 className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Popular Categories
                </h3>
                <div className="space-y-1">
                  {[
                    "Investment Management",
                    "FX Risk Management",
                    "Hedging Strategies",
                    "Portfolio Protection",
                  ].map((category) => (
                    <Link
                      key={category}
                      href={`/blog/category/${category
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      onClick={() => setMobileNav(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t">
              <Link
                href="https://runalpha.co"
                onClick={() => setMobileNav(false)}
                className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Home size={18} />
                <span>Go to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
