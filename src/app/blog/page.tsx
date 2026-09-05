import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { blogArticles } from "@/data/blogData";
import { BlogHubClient } from "@/components/BlogHubClient";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Blog - Master German with Expert Tips, Exam Guides & Language Insights | German With Gaurav",
  description:
    "Explore comprehensive guides on CEFR levels (A1 to C2), Goethe exam preparation strategies, German grammar tips, and careers in Germany.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogHubPage() {
  return (
    <>
      {/* Top Banner Hero (Exact Match with Live Reference) */}
      <section className="bg-white pt-4 sm:pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[190px] sm:min-h-[240px] md:min-h-[270px] flex items-center justify-center text-center shadow-xs border border-slate-200/60 bg-slate-100">
            {/* Panoramic Study Desk Background Image */}
            <Image
              src="/images/blog/blog-banner.png"
              alt="German Learning Blog Desk Banner"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />

            {/* Subtle Overlay to ensure crisp typography while preserving desk scenery */}
            <div className="absolute inset-0 bg-white/20"></div>

            {/* Banner Text Content */}
            <div className="relative z-10 max-w-3xl mx-auto px-4 py-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08175e] tracking-tight">
                Blog
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-bold text-[#08175e] mt-2 sm:mt-3 leading-snug">
                Master German with Expert Tips, Exam Guides &amp; Language Insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Hub: Category Filter, 2-Column Cards Grid & Sidebar */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogHubClient articles={blogArticles} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
