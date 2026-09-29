import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { blogArticles } from "@/data/blogData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/BlogCard";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import {
  BookOpen,
  Compass,
  Briefcase,
  HelpCircle,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "German Learning Resources, Exam Guides & Blog | German With Gaurav",
  description:
    "Free German language resources, CEFR roadmaps, Goethe-Zertifikat exam preparation guides, grammar tips, and immigration insights curated by Gaurav Raghuvanshi.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "German Learning Resources, Exam Guides & Blog | German With Gaurav",
    description:
      "Free German language resources, CEFR roadmaps, Goethe exam prep guides, and career insights.",
    url: "https://germanwithgaurav.com/resources",
    type: "website",
  },
};

export default function ResourcesHubPage() {
  const breadcrumbs = [{ label: "Resources Hub" }];

  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "German With Gaurav Learning Resources",
    description:
      "Comprehensive educational resources, exam guides, CEFR level overviews, and articles for German language learners.",
    url: "https://germanwithgaurav.com/resources",
    provider: {
      "@type": "EducationalOrganization",
      name: "German With Gaurav",
      url: "https://germanwithgaurav.com",
    },
  };

  const resourceCategories = [
    {
      title: "CEFR Language Roadmap",
      description: "Understand the 6 CEFR levels (A1 to C2), study hour requirements, and milestones.",
      href: "/learn-german",
      icon: <Compass className="w-6 h-6 text-amber-600" />,
      tag: "Roadmap Guide",
    },
    {
      title: "The GWG Teaching Method",
      description: "Explore our 4-pillar methodology: Understand, Practice, Speak, and Master.",
      href: "/method",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      tag: "Pedagogy",
    },
    {
      title: "Goal-Driven Learning Paths",
      description: "Custom tracks for Career in Germany, University Studies, Integration, and Exam Prep.",
      href: "/learning-paths",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      tag: "Pathways",
    },
    {
      title: "Frequently Asked Questions",
      description: "Direct, searchable answers to common questions about courses, exams, and batch schedules.",
      href: "/faq",
      icon: <HelpCircle className="w-6 h-6 text-purple-600" />,
      tag: "Q&A Directory",
    },
  ];

  return (
    <>
      <JsonLd data={hubSchema} />

      <div className="bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hub Hero */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--sand-100)] via-white to-white border-b border-[var(--sand-200)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold tracking-wide uppercase shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>KNOWLEDGE &amp; STUDY HUB</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-charcoal-900 tracking-tight leading-tight">
            Free German Learning Resources &amp; Guides
          </h1>

          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
            Everything you need to navigate your German learning journey with clarity. From official CEFR roadmaps and exam strategies to practical grammar logic and career insights.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/blog"
              className="px-6 py-3 rounded-xl bg-charcoal-900 text-white font-bold text-sm hover:bg-charcoal-800 transition-all shadow-xs"
            >
              Browse All Blog Articles
            </Link>
            <Link
              href="/book-demo"
              className="px-6 py-3 rounded-xl bg-amber-400 text-charcoal-950 font-bold text-sm hover:bg-amber-500 transition-all shadow-sm"
            >
              Book Free Diagnostic Call
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Core Educational Hubs Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-[var(--sand-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              ESSENTIAL DIRECTORIES
            </span>
            <h2 className="text-3xl font-black text-charcoal-900 tracking-tight">
              Curated Guides &amp; Frameworks
            </h2>
            <p className="text-sm text-charcoal-600">
              In-depth references designed to answer critical questions about learning German.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="bg-[var(--sand-50)] p-7 rounded-3xl border border-[var(--sand-300)] shadow-xs flex flex-col justify-between hover:border-amber-400 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[var(--sand-300)] flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      {cat.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-600 bg-white px-2.5 py-1 rounded-full border border-[var(--sand-300)]">
                      {cat.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-amber-800 transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--sand-300)] flex items-center text-xs font-bold text-charcoal-900 group-hover:text-amber-800">
                  <span>Explore Guide</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16 sm:py-24 bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
                LATEST INSIGHTS
              </span>
              <h2 className="text-3xl font-black text-charcoal-900 tracking-tight mt-2">
                Featured Articles &amp; Exam Guides
              </h2>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal-900 hover:text-amber-800 transition-colors border-b border-charcoal-900 pb-0.5"
            >
              <span>View All Blog Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.slice(0, 6).map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-white border-b border-[var(--sand-200)]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900">
            Have a Specific Question About German?
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto">
            Book a free 1-on-1 consultation session with Gaurav to receive a personalized study roadmap and level diagnostic.
          </p>
          <div className="pt-2">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 text-charcoal-950 font-bold text-sm hover:bg-amber-500 transition-all shadow-sm"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Book Your Free Diagnostic Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
