"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Rss,
  Search,
  Twitter,
  TrendingUp,
  Clock,
  Tag,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { KeyboardEvent, useState } from "react";

const sidebarItems = [
  {
    name: "Investment Management",
    href: "/blog/category/investment-management",
    count: 12,
    icon: TrendingUp,
  },
  {
    name: "FX Risk Management",
    href: "/blog/category/fx-risk-management",
    count: 8,
  },
  {
    name: "Hedging Strategies",
    href: "/blog/category/hedging-strategies",
    count: 6,
  },
  {
    name: "Portfolio Protection",
    href: "/blog/category/portfolio-protection",
    count: 9,
  },
  {
    name: "Market Analysis",
    href: "/blog/category/market-analysis",
    count: 15,
  },
  {
    name: "Wealth Management",
    href: "/blog/category/wealth-management",
    count: 7,
  },
];

const popularPosts = [
  {
    title: "The Silent Wealth Killer: How FX Fluctuations Erode Your Portfolio",
    href: "/fx-fluctuations-portfolio-risks",
    readTime: "10 min read",
    date: "2024-03-12",
  },
  {
    title: "Hedging Strategies for Nigerian Investors",
    href: "/hedging-strategies-fx-fluctuations",
    readTime: "12 min read",
    date: "2024-03-10",
  },
  {
    title: "Investment Management for the Digital Age",
    href: "/investment-management-digital-age",
    readTime: "8 min read",
    date: "2024-03-15",
  },
];

const BlogSidebar = () => {
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleNewsletterSubmit = () => {
    if (email.trim()) {
      console.log("Newsletter signup:", email);
      setEmail("");
      // Handle newsletter subscription
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Search query:", searchQuery);
      // Handle search functionality
    }
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    action: () => void
  ) => {
    if (e.key === "Enter") {
      action();
    }
  };

  return (
    <aside className="hidden lg:block lg:w-64 xl:w-96 border-l border-gray-100">
      <div className="sticky top-20 p-6 space-y-8 max-h-[calc(100vh-5rem)] overflow-y-auto">
        {/* Search Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-gray-600" />
            <h3 className="font-semibold text-sm text-gray-900">
              Search Articles
            </h3>
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, handleSearch)}
              className="w-full pr-12 text-sm"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-md transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4 text-gray-600" />
            <h3 className="font-semibold text-sm text-gray-900">Categories</h3>
          </div>
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex items-center justify-between py-2.5 px-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {item.name}
                  </span>
                </div>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  {item.count}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Posts Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-gray-600" />
            <h3 className="font-semibold text-sm text-gray-900">
              Popular Articles
            </h3>
          </div>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <Link
                key={index}
                href={post.href}
                className="group block p-3 border border-gray-100 rounded-lg hover:border-blue-200 hover:shadow-sm transition-all duration-200"
              >
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 mb-2 transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <h3 className="font-semibold text-sm text-gray-900">
                Stay Updated
              </h3>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Get the latest insights on investment strategies, FX risk
              management, and market analysis delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, handleNewsletterSubmit)}
                className="text-sm"
              />
              <Button
                onClick={handleNewsletterSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-600" />
            <h3 className="font-semibold text-sm text-gray-900">Follow Us</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all"
            >
              <Twitter className="h-3 w-3" />
              <span className="text-xs">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 text-cyan-600 border-cyan-200 hover:bg-cyan-50 hover:border-blue-300 transition-all"
            >
              <Linkedin className="h-3 w-3" />
              <span className="text-xs">LinkedIn</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all"
            >
              <Facebook className="h-3 w-3" />
              <span className="text-xs">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 text-orange-600 border-orange-200 hover:bg-orange-50 hover:border-orange-300 transition-all"
            >
              <Instagram className="h-3 w-3" />
              <span className="text-xs">Instagram</span>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-gray-900">50+</div>
              <div className="text-xs text-gray-500">Articles</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">10K+</div>
              <div className="text-xs text-gray-500">Readers</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;
