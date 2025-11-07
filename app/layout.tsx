import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { BlogHeader } from "@/components/blog-header";
import { BlogFooter } from "@/components/blog-footer";

const geistSans = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.runalpha.com"),
  title: {
    default: "Blog | Run Alpha",
    template: "%s | Run Alpha Blog",
  },
  description:
    "Insights and strategies from the forefront of hedge fund innovation.",
  keywords: [
    "hedge funds",
    "investment strategies",
    "quantitative finance",
    "Run Alpha",
    "financial markets",
    "asset management",
    "AI in finance",
    "economic trends",
    "portfolio management",
  ],
  authors: [{ name: "Run Alpha" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.runalpha.com",
    siteName: "Run Alpha Blog",
    title: "Blog | Run Alpha",
    description:
      "Insights and strategies from the forefront of hedge fund innovation.",
    images: [
      {
        url: "/og-image.jpg", // Place in public folder
        width: 1200,
        height: 630,
        alt: "Run Alpha Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Run Alpha",
    description:
      "Insights and strategies from the forefront of hedge fund innovation.",
    images: ["/twitter-image.jpg"],
    creator: "@RunAlpha", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://blog.runalpha.com",
  },
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
