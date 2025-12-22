import { getArticleBySlug } from "@/data";

import SingleArticleCard from "@/components/SingleArticleCard";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getArticleBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "This article could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || post.metaDescription,
    keywords: [
      ...(post.tags || []),
      "hedge funds",
      "investment strategies",
      "Run Alpha",
    ].filter(Boolean),
    authors: [{ name: post.author || "Run Alpha" }],
    openGraph: {
      title: post.title,
      description: post.excerpt || post.metaDescription,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author || "Run Alpha"],
      url: `https://blog.runalpha.com/blog/${slug}`,
      images: [
        {
          url: post.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "Run Alpha Blog",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.metaDescription,
      images: [post.image || "/twitter-image.jpg"],
      creator: "@RunAlpha",
    },
    alternates: {
      canonical: `https://blog.runalpha.com/${slug}`,
    },
  };
}

const SingleArticle = async ({ params }: PageProps) => {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  return <SingleArticleCard article={article} />;
};

export default SingleArticle;
