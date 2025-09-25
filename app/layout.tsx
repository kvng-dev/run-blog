import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { BlogHeader } from "@/components/blog-header";
import { BlogFooter } from "@/components/blog-footer";

const geistSans = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blog | Run Alpha",
  description:
    "Insights and strategies from the forefront of hedge fund innovation.",
  keywords: [
    "hedge funds",
    "investment strategies",
    "quantitative finance",
    "Run Alpha",
    "financial markets",
    "alpha generation",
    "asset management",
    "AI in finance",
    "economic trends",
    "portfolio management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${geistSans.className} antialiased`}>
        <BlogHeader />
        {children}
        <BlogFooter />
      </body>
    </html>
  );
}
