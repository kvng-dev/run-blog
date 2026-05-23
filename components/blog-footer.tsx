"use client";
import {
  Linkedin,
  Mail,
  MapPin,
  Globe,
  Shield,
  Users,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function BlogFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = () => {
    if (email.trim() && email.includes("@")) {
      console.log("Newsletter signup:", email);
      setEmail("");
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-2.5 gap-2">
                  <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center p-1">
                    <Image src="/white.png" alt="" height={24} width={80} />
                  </div>
                  <div>
                    <span className="font-bold text-base text-white">
                      Run Alpha
                    </span>
                    <div className="text-xs text-gray-400 -mt-0.5">Insights</div>
                  </div>
                </Link>
                <p className="text-gray-400 leading-relaxed text-xs mt-2">
                  Run Alpha delivers sustainable, risk-adjusted returns through
                  data-driven strategies and disciplined portfolio management
                  with the highest level of transparency.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2.5 text-gray-400 gap-2">
                  <Globe className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <a href="https://runalpha.co">
                    <span className="text-xs">www.runalpha.co</span>
                  </a>
                </div>
                <div className="flex items-center gap-2 space-x-2.5 text-gray-400">
                  <Mail className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <span className="text-xs">hello@runalpha.co</span>
                </div>
                <div className="flex items-center space-x-2.5 gap-2 text-gray-400">
                  <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <span className="text-xs">
                    1 Uwa Close, Off Billings Way, Lagos, Nigeria
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/runalpha.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-slate-700 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/runalpha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-slate-700 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581323386413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-slate-700 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-5">
              <h3 className="font-semibold text-sm text-white flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-blue-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "All Articles", href: "/blog" },
                  {
                    label: "Contact Us",
                    href: "https://runalpha.co/contact",
                  },
                  {
                    label: "What we Offer",
                    href: "https://runalpha.co/services",
                  },
                  {
                    label: "About Us",
                    href: "https://runalpha.co/about",
                  },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-xs flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-5">
              <h3 className="font-semibold text-sm text-white flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 text-blue-400" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    label: "Private Wealth",
                    href: "https://runalpha.co/services/#private-wealth",
                  },
                  {
                    label: "Currency Solutions",
                    href: "https://runalpha.co/services/#currency-solutions",
                  },
                  {
                    label: "Hedge Fund",
                    href: "https://runalpha.co/hedge-fund",
                  },
                  {
                    label: "Family Office ",
                    href: "https://runalpha.co/services/#family-office",
                  },
                ].map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-xs flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-5">
              <h3 className="font-semibold text-sm text-white flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-blue-400" />
                Stay Informed
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Get insights on market trends and investment strategies
                delivered to your inbox.
              </p>

              <div className="space-y-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleNewsletterSubmit();
                      }
                    }}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500 transition-colors text-xs h-9"
                  />
                </div>

                <Button
                  onClick={handleNewsletterSubmit}
                  className="w-full bg-gradient-to-tr from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-xs h-9"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <Mail className="mr-1.5 h-3 w-3" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Mail className="mr-1.5 h-3 w-3" />
                      Subscribe Now
                    </>
                  )}
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-[11px] text-gray-500 space-y-2 pt-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-3 w-3 text-green-400" />
                  <span>No spam, unsubscribe anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-3 w-3 text-blue-400" />
                  <span>Join 10,000+ professional investors</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-[11px] text-gray-500 text-center">
              <p>© {currentYear} Run Alpha. All rights reserved.</p>
              <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-center">
                <Link
                  href="https://runalpha.co/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link
                  href="https://runalpha.co/disclaimer"
                  className="hover:text-white transition-colors"
                >
                  Investment Disclaimer
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-gray-500">
              <span className="text-[#6CB4B8] font-medium">RC 8535781</span>
            </div>
          </div>
        </div>

        {/* Investment Disclaimer */}
        <div className="border-t border-gray-700/20 py-5">
          <p className="text-[11px] text-gray-500 text-center leading-relaxed max-w-4xl mx-auto">
            <strong className="text-gray-400">Disclaimer:</strong>{" "}
            Content is for educational purposes only and does not constitute
            investment advice. Past performance does not guarantee future
            results. Consult a qualified financial advisor before making
            investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
