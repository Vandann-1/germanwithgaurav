import React from "react";
import Link from "next/link";
import { blogArticles } from "@/data/blogData";
import { BlogCard } from "./BlogCard";
import { ArrowRight, BookOpen } from "lucide-react";

export function LatestBlogSection() {
  const latestArticles = blogArticles.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              Educational Resources
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
              Latest German Guides & Articles
            </h2>
            <p className="text-base text-slate-600 mt-1 max-w-2xl">
              Practical guides on CEFR levels, Goethe examination strategies, and career pathways in Germany.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors shrink-0"
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
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
