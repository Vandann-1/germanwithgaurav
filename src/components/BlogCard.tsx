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
    <article className="flex flex-col justify-between bg-white rounded-2xl border border-[#e5e2da] shadow-xs hover:shadow-md hover:border-[#b91c1c]/50 transition-all duration-200 overflow-hidden group">
      <div>
        {/* Featured Image */}
        <div className="relative aspect-[16/10] w-full bg-[#ede8df] overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt || article.title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover group-hover:scale-103 transition-transform duration-300"
            loading="lazy"
          />
          <span className="absolute top-3 left-3 bg-[#121826]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            {article.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-[#64748b] mb-2.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#b91c1c]" />
              <span>{article.publishedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#64748b]" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#121826] tracking-tight leading-snug group-hover:text-[#b91c1c] transition-colors line-clamp-2">
            <Link href={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#475569] mt-2.5 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Footer link */}
      <div className="px-6 pb-6 pt-0">
        <Link
          href={`/blog/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#121826] group-hover:text-[#b91c1c] transition-colors"
        >
          <span>Read Full Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
