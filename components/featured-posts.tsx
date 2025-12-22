"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock10 } from "lucide-react";
import { Button } from "./ui/button";
import { getFeaturedArticles } from "@/data";
import { useRouter } from "next/navigation";

export function FeaturedPosts() {
  const article = getFeaturedArticles();

  const router = useRouter();

  const addSlugToParams = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <>
      {article.map((art, index) => (
        <section
          className="lg:py-16 md:py-12 sm:py-8 py-4 px-4 md:px-16 xl:px-24  w-full  grid md:grid-cols-3 place-items-center justify-center gap-6 bg-gray-50"
          key={index}
        >
          <div className="flex flex-col order-2 w-full" key={index}>
            <Badge
              variant="secondary"
              className="text-[10px] font-medium hidden md:block"
            >
              {art.featured ? "Featured" : ""}
            </Badge>
            <h2 className="text-lg lg:text-3xl font-bold lg:my-8 my-4">
              {art.title}
            </h2>
            <div className="flex gap-16">
              <p className="font-light text-xs">
                {new Date(art.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-xs text-gray-500 flex gap-2 items-center">
                <Clock10 size={14} />
                {art.readTime}
              </p>
            </div>
            <p className="uppercase text-xs md:text-sm my-2 font-medium">
              {art.author}
            </p>
            {/* <p className="font-light text-sm lg:text-base">
              {art.content.slice(0, 150)}...
            </p> */}
            <div className="font-light text-sm lg:text-base prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700">
              <div
                dangerouslySetInnerHTML={{ __html: art.content.slice(0, 300) }}
              />
            </div>
            <Button
              variant="ghost"
              className="w-full justify-between hover:bg-[#01386e] hover:text-primary-foreground transition-colors mt-6 cursor-pointer"
              onClick={() => addSlugToParams(art.slug)}
            >
              Read More
              <ArrowRight className="h-4 w-4" />
            </Button>{" "}
          </div>
          <div className="w-full bg-gray-300 overflow-hidden col-span-2 order-1 md:order-2">
            <img
              src={art.image}
              alt=""
              className="object-cover h-[300px] md:h-[400px]  lg:h-[650px] w-full"
            />
          </div>
        </section>
      ))}
    </>
  );
}
