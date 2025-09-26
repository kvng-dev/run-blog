"use client";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import { getRelatedArticles } from "@/data";

interface Props {
  article:
    | {
        id: number;
        title: string;
        excerpt: string;
        metaDescription: string;
        author: string;
        date: string;
        readTime: string;
        category: string;
        tags: string[];
        image: string;
        slug: string;
        featured: boolean;
        published: boolean;
        content: string;
        faqs?: { question: string; answer: string }[] | undefined;
      }
    | undefined;
}

const SingleArticleCard = ({ article }: Props) => {
  const router = useRouter();
  const currentSlug = article?.slug;

  const relatedArticle = getRelatedArticles().filter(
    (article) => article.slug !== currentSlug
  );

  const addSlugToParams = (slug: string) => {
    router.push(`/${slug}`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article?.title,
        text: article?.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (!article) {
    return null;
  }

  return (
    <article className="min-h-screen bg-white relative mt-8">
      {/* Header Navigation */}
      <div className="border-b border-gray-100 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            className="flex items-center gap-2 text-gray-600 bg-white hover:text-gray-900 transition-colors cursor-pointer absolute top-16 left-32 z-30 px-6 py-1.5 rounded-3xl"
            onClick={() => router.back()}
          >
            <ArrowLeft size={18} />
            <span className="font-mono text-xs">Back</span>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative md:h-[700px] bg-gray-900 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-6 right-6">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold">
            {article.category}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Article Header */}
        <header className="py-8 border-b border-gray-100">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="md:text-xl text-gray-600 mb-8 leading-relaxed italic">
            {article.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-xs md:text-base">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span className="font-medium">{article.author}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{article.readTime}</span>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors ml-auto"
            >
              <Share2 size={18} />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Article Body */}
        <div className="py-12">
          <div
            className="prose prose-lg max-w-none
                       prose-headings:text-gray-900 prose-headings:font-bold
                       prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                       prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                       prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                       prose-strong:text-gray-900 prose-strong:font-semibold
                       prose-ul:text-gray-700 prose-li:mb-2
                       prose-ol:text-gray-700
                       prose-blockquote:border-l-4 prose-blockquote:border-blue-600
                       prose-blockquote:bg-blue-50 prose-blockquote:p-6 prose-blockquote:my-8
                       prose-blockquote:text-gray-800 prose-blockquote:italic
                       prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          {article.faqs && article.faqs?.length > 0 && (
            <Accordion type="single" collapsible>
              {article.faqs.map(
                (faq: { question: string; answer: string }, index: number) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>
                      {index + 1}. {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
          )}
        </div>

        {/* Article Footer */}
        <footer className="py-8 border-t border-gray-100">
          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Tag size={20} />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </div>

      {/* Related Articles Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticle.map((article) => (
              <div
                onClick={() => addSlugToParams(article.slug)}
                className="cursor-pointer"
                // href={`/${article.slug}`}
                key={article.id}
              >
                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-48 bg-gray-200">
                    <img
                      src={article.image}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-blue-600 text-sm font-semibold">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{article.excerpt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};
export default SingleArticleCard;
