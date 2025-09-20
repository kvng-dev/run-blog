"use client";
import { Search, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function BlogHeader() {
  const [mobileNav, setMobileNav] = useState(false);
  console.log("mobileNav", mobileNav);
  return (
    <header className="top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-sm bg-[#00B4D8] flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  RA
                </span>
              </div>
              <span className="font-bold lg:text-xl text-foreground">Blog</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="w-64 bg-muted border-border"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              onClick={() => setMobileNav(!mobileNav)}
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              {mobileNav ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {mobileNav && (
        <div className="absolute h-full left-0 z-40 w-full bg-white border-t shadow-md overflow-hidden transition-all duration-300 ease-in-out">
          <>Hi</>
        </div>
      )}
    </header>
  );
}
