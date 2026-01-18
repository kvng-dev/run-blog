"use client";
import React, { useRef } from "react";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { getRelatedArticles } from "@/data";
import Image from "next/image";

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
  const containerRef = useRef(null);
  const currentSlug = article?.slug;

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax Effect for Hero
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const relatedArticle = getRelatedArticles().filter(
    (article) => article.slug !== currentSlug
  );

  const addSlugToParams = (slug: string) => {
    router.push(`/blog/${slug}`);
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

  if (!article) return null;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#fcfcf9] text-slate-900 selection:bg-blue-100"
    >
      {/* 2026 Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Floating Modern Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-full px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="hidden sm:block text-sm font-medium truncate max-w-[200px]">
            {article.title}
          </div>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all active:scale-95"
          >
            <Share2 size={16} />
            <span>Share</span>
          </button>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <header className="relative h-[80vh] md:h-screen w-full overflow-hidden flex items-end">
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcf9] via-transparent to-black/20" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-widest mb-6">
              {article.category}
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-amber-600">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </header>

      {/* Content Grid (Bento Style Meta) */}
      <main className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          {/* Article Info Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-gray-100 mb-12">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                Written By
              </p>
              <p className="font-semibold flex items-center gap-2">
                <User size={14} /> {article.author}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                Published
              </p>
              <p className="font-semibold flex items-center gap-2">
                <Calendar size={14} />{" "}
                {new Date(article.date).toLocaleDateString()}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                Reading Time
              </p>
              <p className="font-semibold flex items-center gap-2">
                <Clock size={14} /> {article.readTime}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                Interaction
              </p>
              <p className="font-semibold flex items-center gap-2">
                <MessageCircle size={14} /> Discuss
              </p>
            </div>
          </div>

          {/* Main Copy */}
          <div
            className="prose prose-stone prose-lg max-w-none
              prose-headings:font-black prose-headings:tracking-tight
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:rounded-r-xl
              drop-cap:text-6xl drop-cap:font-black drop-cap:mr-3 drop-cap:float-left"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* FAQ Section with Modern Styling */}
          {article.faqs && (
            <div className="mt-20">
              <h3 className="text-3xl font-black mb-8 italic">
                Common Inquiries
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                {article.faqs.map(
                  (faq: { question: string; answer: string }, idx: number) => (
                    <AccordionItem
                      key={idx}
                      value={`item-${idx}`}
                      className="border rounded-2xl px-6 bg-gray-50/50"
                    >
                      <AccordionTrigger className="hover:no-underline font-bold text-lg text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </div>
          )}
        </div>

        {/* Dynamic Tags */}
        <div className="flex flex-wrap gap-2 mt-12 mb-20 justify-center">
          {article.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium hover:border-blue-600 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </main>

      {/* Footer / Related (Horizontal Scroll 2026 Style) */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Keep Reading
            </h2>
            <button className="flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
              View Blog <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Map through relatedArticles here with a hover-scale animation */}
            {relatedArticle.slice(0, 3).map((article) => (
              <motion.div
                key={article.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
                onClick={() => addSlugToParams(article.slug)}
              >
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gray-800">
                  <Image
                    src={article.image}
                    className="h-full w-full object-cover"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleArticleCard;
