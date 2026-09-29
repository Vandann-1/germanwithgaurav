import React from "react";
import Link from "next/link";
import { blogArticles } from "@/data/blogData";
import { BlogCard } from "./BlogCard";
import { ArrowRight, BookOpen } from "lucide-react";

export function LatestBlogSection() {
  const latestArticles = blogArticles.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#e5e2da]" aria-labelledby="resources-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c]">
              EDUCATIONAL GUIDES
            </span>
            <h2 id="resources-heading" className="text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight mt-1">
              Latest German Learning Resources
            </h2>
            <p className="text-base text-[#475569] mt-2 max-w-2xl">
              Practical guides on CEFR levels, Goethe examination strategy, case mastery, and working in Germany.
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121826] hover:text-[#b91c1c] transition-colors shrink-0"
          >
            <BookOpen className="w-4 h-4 text-[#b91c1c]" />
            <span>View All Guides &amp; Resources</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
}
