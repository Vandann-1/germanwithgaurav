"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogArticle } from "@/data/blogData";

interface BlogHubClientProps {
  articles: BlogArticle[];
  initialCategory?: string;
}

const CATEGORY_TABS = [
  { label: "All Posts", value: "all" },
  { label: "Benefit for german", value: "benefit-for-german" },
  { label: "German for Beginners", value: "german-for-beginners" },
  { label: "Tips for Learning German", value: "tips-for-learning-german" },
];

const SIDEBAR_CATEGORIES = [
  { label: "Benefit for german", value: "benefit-for-german" },
  { label: "German for Beginners", value: "german-for-beginners" },
  { label: "Tips for Learning German", value: "tips-for-learning-german" },
  { label: "Uncategorized", value: "uncategorized" },
];

export function BlogHubClient({ articles, initialCategory = "all" }: BlogHubClientProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Filter articles based on selected category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "all") return articles;

    return articles.filter((article) => {
      if (selectedCategory === "benefit-for-german") {
        return (
          article.categorySlug === "benefit-for-german" ||
          article.categorySlug === "benefits-of-learning-german" ||
          article.categorySlug === "germany-careers" ||
          article.category.toLowerCase().includes("benefit")
        );
      }
      if (selectedCategory === "german-for-beginners") {
        return (
          article.categorySlug === "german-for-beginners" ||
          article.categorySlug === "german-exams" ||
          article.category.toLowerCase().includes("beginner")
        );
      }
      if (selectedCategory === "tips-for-learning-german") {
        return (
          article.categorySlug === "tips-for-learning-german" ||
          article.categorySlug === "german-learning-tips" ||
          article.category.toLowerCase().includes("tip")
        );
      }
      if (selectedCategory === "uncategorized") {
        return (
          article.categorySlug === "uncategorized" ||
          article.category.toLowerCase() === "uncategorized"
        );
      }
      return article.categorySlug === selectedCategory;
    });
  }, [articles, selectedCategory]);

  // Sidebar popular posts (take first 4 articles)
  const popularPosts = useMemo(() => {
    return articles.slice(0, 4);
  }, [articles]);

  const handleCategorySelect = (val: string) => {
    setSelectedCategory(val);
    const el = document.getElementById("blog-grid-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="blog-grid-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      
      {/* Main Content Area (Left Column: ~68% / 8 cols) */}
      <div className="lg:col-span-8 space-y-6 sm:space-y-8">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.value;
            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => handleCategorySelect(tab.value)}
                className={`text-xs sm:text-[13px] font-bold px-4 py-2 rounded transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#ffcc00] text-slate-950 shadow-xs"
                    : "bg-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Blog Post Grid (2 Columns) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {filteredArticles.map((article) => (
              <article key={article.slug} className="flex flex-col group">
                {/* Thumbnail */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-xs block group-hover:shadow-md transition-shadow"
                >
                  <Image
                    src={article.featuredImage}
                    alt={article.imageAlt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </Link>

                {/* Meta line */}
                <div className="text-xs text-slate-400 mt-4 mb-1">
                  <span>{article.category}</span>
                  <span className="mx-1.5">•</span>
                  <span>{article.publishedDate}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-[19px] font-bold text-[#08175e] leading-snug tracking-tight group-hover:text-amber-600 transition-colors line-clamp-2">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-[13px] text-slate-600 mt-2.5 leading-relaxed line-clamp-4">
                  {article.excerpt}
                </p>

                {/* Read More Button */}
                <div className="mt-4">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center justify-center px-4 py-1.5 rounded bg-[#ffcc00] hover:bg-[#f59e0b] text-slate-950 font-bold text-xs shadow-none transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
            <p className="text-base font-bold text-slate-800">
              No articles found in this category.
            </p>
            <p className="text-xs text-slate-500">
              Try switching back to all posts to see our complete collection of German guides.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="inline-flex items-center px-4 py-2 rounded bg-[#ffcc00] text-slate-950 font-bold text-xs hover:bg-[#f59e0b] transition-colors cursor-pointer"
            >
              View All Posts
            </button>
          </div>
        )}

      </div>

      {/* Sidebar Area (Right Column: ~32% / 4 cols) */}
      <aside className="lg:col-span-4 space-y-10 lg:pl-4">
        
        {/* Widget 1: Popular Posts */}
        <div>
          <div className="mb-5 pb-2 border-b border-slate-200 relative">
            <h2 className="text-base sm:text-lg font-bold text-[#08175e] tracking-tight relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[9px] after:w-full after:h-[2px] after:bg-[#ffcc00]">
              Popular Posts
            </h2>
          </div>

          <div className="space-y-4">
            {popularPosts.map((post) => (
              <article key={post.slug} className="flex items-center gap-3.5 group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200/70 block shadow-2xs"
                >
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </Link>

                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-[13px] font-bold text-[#08175e] leading-snug line-clamp-2 group-hover:text-amber-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {post.publishedDate}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Widget 2: Blog Category */}
        <div>
          <div className="mb-3 pb-2 border-b border-slate-200 relative">
            <h2 className="text-base sm:text-lg font-bold text-[#08175e] tracking-tight relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[9px] after:w-full after:h-[2px] after:bg-[#ffcc00]">
              Blog Category
            </h2>
          </div>

          <ul className="divide-y divide-slate-100 text-xs sm:text-sm">
            {SIDEBAR_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <li key={cat.value}>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect(cat.value)}
                    className={`w-full py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer ${
                      isSelected
                        ? "text-[#08175e] font-bold"
                        : "text-slate-600 hover:text-[#08175e] font-medium"
                    }`}
                  >
                    <span>{cat.label}</span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffcc00]"></span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

      </aside>

    </div>
  );
}
