import { getArticleBySlug } from "@/data";
import SingleArticleCard from "@/components/SingleArticleCard";
import { Metadata } from "next";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getArticleBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "This article could not be found.",
    };
  }

  const canonicalUrl = `https://blog.runalpha.com/blog/${slug}`;
  const imageUrl = post.image || "https://blog.runalpha.com/og-image.jpg";

  return {
    title: post.title,
    description: post.excerpt || post.metaDescription,
    keywords: [
      ...(post.tags || []),
      "hedge funds",
      "investment strategies",
      "Run Alpha",
      post.category,
    ].filter(Boolean),
    authors: [{ name: post.author || "Run Alpha" }],
    creator: post.author || "Run Alpha",
    publisher: "Run Alpha",
    openGraph: {
      title: post.title,
      description: post.excerpt || post.metaDescription,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author || "Run Alpha"],
      url: canonicalUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
          type: "image/jpeg",
        },
      ],
      siteName: "Run Alpha Blog",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.metaDescription,
      images: [imageUrl],
      creator: "@RunAlpha",
      site: "@RunAlpha",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: post.category,
  };
}

const SingleArticle = async ({ params }: PageProps) => {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            The article you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#01386e] text-white px-8 py-3 rounded-lg hover:bg-[#024a8f] transition-colors font-medium"
          >
            Return to Blog Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt || article.metaDescription,
            image: article.image || "https://blog.runalpha.com/og-image.jpg",
            author: {
              "@type": "Person",
              name: article.author || "Run Alpha",
            },
            publisher: {
              "@type": "Organization",
              name: "Run Alpha",
              logo: {
                "@type": "ImageObject",
                url: "https://blog.runalpha.com/logo.png",
              },
            },
            datePublished: article.date,
            dateModified: article.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://blog.runalpha.com/blog/${slug}`,
            },
            keywords: article.tags?.join(", ") || "",
            articleSection: article.category,
          }),
        }}
      />
      <SingleArticleCard article={article} />
    </>
  );
};

export default SingleArticle;
