import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogArticle } from "@/data/blogData";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  article: BlogArticle;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-200 overflow-hidden group">
      <div>
        {/* Featured Image */}
        <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt || article.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-xs text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-amber-700 transition-colors line-clamp-2">
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="px-5 sm:px-6 pb-5 pt-0">
        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors"
        >
          <span>Read Full Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
