import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { BlogHeader } from "@/components/blog-header";
import { BlogFooter } from "@/components/blog-footer";
import Script from "next/script";

const geistSans = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.runalpha.co"),
  title: {
    default: "Run Alpha Blog - Hedge Fund Insights & Investment Strategies",
    template: "%s | Run Alpha Blog",
  },
  description:
    "Expert insights on hedge funds, investment strategies, and quantitative finance. Stay ahead with Run Alpha's analysis of financial markets and asset management trends.",
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
  authors: [{ name: "Run Alpha", url: "https://blog.runalpha.co" }],
  creator: "Run Alpha",
  publisher: "Run Alpha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.runalpha.co",
    siteName: "Run Alpha Blog",
    title: "Run Alpha Blog - Hedge Fund Insights & Investment Strategies",
    description:
      "Expert insights on hedge funds, investment strategies, and quantitative finance. Stay ahead with Run Alpha's analysis of financial markets and asset management trends.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Run Alpha Blog - Hedge Fund Insights",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Run Alpha Blog - Hedge Fund Insights & Investment Strategies",
    description:
      "Expert insights on hedge funds, investment strategies, and quantitative finance.",
    images: ["/twitter-image.jpg"],
    creator: "@RunAlpha",
    site: "@RunAlpha",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://blog.runalpha.co",
    types: {
      "application/rss+xml": "https://blog.runalpha.co/feed.xml",
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <BlogHeader />
        <main>{children}</main>
        <BlogFooter />
      </body>
    </html>
  );
}
