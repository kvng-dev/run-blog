"use client";
import {
  Twitter,
  Linkedin,
  Mail,
  Rss,
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
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center p-1.5">
                    <Image src="/white.png" alt="" height={30} width={100} />
                  </div>
                  <div>
                    <span className="font-bold text-xl text-white">
                      Run Alpha
                    </span>
                    <div className="text-sm text-gray-400 -mt-1">Insights</div>
                  </div>
                </Link>
                <p className="text-gray-300 leading-relaxed">
                  Run Alpha investment policy focuses on delivering sustainable,
                  risk-adjusted returns through data-driven strategies and
                  disciplined portfolio management. We are committed to
                  delivering financial advisory and investment management
                  services with the highest level of service and transparency.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="h-4 w-4 text-blue-400" />
                  <a href="https://runalpha.co">
                    <span className="text-sm">www.runalpha.co</span>
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">hello@runalpha.co</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">
                    1 Uwa Close, Off Billings Way, <br /> Lagos, Nigeria
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <Button
                  variant="secondary"
                  size="icon"
                  className="border-gray-600 hover:bg-blue-600 hover:border-blue-600 transition-all"
                >
                  <a href="https://www.instagram.com/runalpha.co/">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="border-gray-600 hover:bg-cyan-600 hover:border-cyan-600 transition-all"
                >
                  <a href="https://www.linkedin.com/company/runalpha">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="border-gray-600 hover:bg-orange-600 hover:border-orange-600 transition-all"
                >
                  <a href=" https://www.facebook.com/profile.php?id=61581323386413">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-white flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-400" />
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
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
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
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-white flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
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
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
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
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-white flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                Stay Informed
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Get exclusive insights on market trends, investment strategies,
                and risk management delivered to your inbox weekly.
              </p>

              <div className="space-y-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleNewsletterSubmit();
                      }
                    }}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 transition-colors"
                  />
                </div>

                <Button
                  onClick={handleNewsletterSubmit}
                  className="w-full bg-gradient-to-tr from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Subscribe Now
                    </>
                  )}
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-xs text-gray-400 space-y-1">
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
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>© {currentYear} Run Alpha. All rights reserved.</p>
              <div className="flex items-center gap-4">
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

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-[#6CB4B8] font-medium">RC 8535781</span>
            </div>
          </div>
        </div>

        {/* Investment Disclaimer */}
        <div className="border-t border-gray-700 py-6">
          <p className="text-xs text-gray-500 text-center leading-relaxed max-w-4xl mx-auto">
            <strong className="text-gray-400">Investment Disclaimer:</strong>{" "}
            The content provided is for educational and informational purposes
            only. It does not constitute investment advice, and should not be
            relied upon as such. Past performance does not guarantee future
            results. All investments carry risk of loss. Please consult with a
            qualified financial advisor before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
