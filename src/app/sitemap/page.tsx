import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { blogArticles } from "@/data/blogData";
import {
  Map,
  GraduationCap,
  Compass,
  BookOpen,
  Building,
  Shield,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Site Map | German With Gaurav",
  description:
    "Comprehensive directory and site map of all German language courses, learning paths, educational guides, and academy resources at German With Gaurav.",
  alternates: {
    canonical: "/sitemap",
  },
};

export default function HumanSitemapPage() {
  const breadcrumbs = [{ label: "Site Map" }];

  const sections = [
    {
      title: "German Language Courses",
      icon: <GraduationCap className="w-5 h-5 text-amber-600" />,
      description: "Official CEFR-aligned live online group courses strictly capped at 5–7 students.",
      links: [
        { label: "All Courses Overview", href: "/courses", desc: "Catalog of A1, A2, and B1 batches" },
        { label: "A1 German Beginner Course", href: "/courses/a1", desc: "100+ Hours foundation & Goethe A1 prep" },
        { label: "A2 German Elementary Course", href: "/courses/a2", desc: "100+ Hours Dative case & spoken past tense" },
        { label: "B1 German Intermediate Course", href: "/courses/b1", desc: "100+ Hours passive voice & Goethe B1 mastery" },
      ],
    },
    {
      title: "Goal-Driven Learning Paths",
      icon: <Compass className="w-5 h-5 text-emerald-600" />,
      description: "Tailored roadmaps matching professional and academic relocation timelines.",
      links: [
        { label: "Learning Paths Directory", href: "/learning-paths", desc: "Overview of all 4 outcome-driven tracks" },
        { label: "Everyday German & Integration", href: "/learning-paths/everyday-german", desc: "Spouse visas, family reunion, daily living" },
        { label: "Professional German for Working", href: "/learning-paths/professional-german", desc: "IT, engineering, EU Blue Card & Chancenkarte" },
        { label: "Study in Germany Path", href: "/learning-paths/study-in-germany", desc: "APS certificates, university admission & student visas" },
        { label: "Fast-Track Goethe Exam Prep", href: "/learning-paths/goethe-exam-preparation", desc: "Lesen, Hören, Schreiben, Sprechen test mastery" },
      ],
    },
    {
      title: "The Academy & Instructor",
      icon: <Building className="w-5 h-5 text-blue-600" />,
      description: "Founder background, instructional philosophy, and consultation booking.",
      links: [
        { label: "About Gaurav Raghuvanshi", href: "/about", desc: "19+ Years teaching journey & Pune academy roots" },
        { label: "The GWG Teaching Method", href: "/method", desc: "Understand, Practice, Speak, Master 4-pillar system" },
        { label: "Book a Free Demo Session", href: "/book-demo", desc: "1-on-1 level diagnostic consultation" },
        { label: "Contact Academy", href: "/contact", desc: "Pune address, WhatsApp, phone & office hours" },
      ],
    },
    {
      title: "Educational Resources & Blog",
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
      description: "Free guides, CEFR explanations, frequently asked questions, and articles.",
      links: [
        { label: "Resources & Knowledge Hub", href: "/resources", desc: "Central hub for German learning guides" },
        { label: "CEFR Levels & Roadmap Guide", href: "/learn-german", desc: "Detailed breakdown of A1 through C2 levels" },
        { label: "Frequently Asked Questions (FAQ)", href: "/faq", desc: "Searchable directory of student questions" },
        { label: "German Learning Blog", href: "/blog", desc: "Articles on grammar, exams, and life in Germany" },
      ],
    },
    {
      title: "Policies & Legal",
      icon: <Shield className="w-5 h-5 text-slate-600" />,
      description: "Institutional terms, privacy disclosures, and refund guidelines.",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy", desc: "Data protection and privacy practices" },
        { label: "Terms and Conditions", href: "/terms", desc: "Course enrollment and attendance terms" },
        { label: "Refund & Batch Transfer Policy", href: "/refund-policy", desc: "Transparent refund and transfer options" },
        { label: "Search Engine Sitemap (XML)", href: "/sitemap.xml", desc: "Machine-readable search index" },
      ],
    },
  ];

  return (
    <>
      <div className="bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[var(--sand-100)] via-white to-white border-b border-[var(--sand-200)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold tracking-wide uppercase shadow-xs">
            <Map className="w-3.5 h-3.5 text-amber-600" />
            <span>DIRECTORY &amp; SITE INDEX</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-charcoal-900 tracking-tight">
            German With Gaurav Site Map
          </h1>

          <p className="text-base sm:text-lg text-charcoal-700 max-w-2xl mx-auto leading-relaxed">
            A comprehensive, human-readable directory of every page, course curriculum, learning pathway, and educational resource on our website.
          </p>
        </div>
      </section>

      {/* Directory Sections */}
      <section className="py-16 sm:py-20 bg-white border-b border-[var(--sand-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((sec, idx) => (
              <div
                key={idx}
                className="bg-[var(--sand-50)] rounded-3xl p-7 border border-[var(--sand-300)] shadow-xs space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 border-b border-[var(--sand-300)] pb-3">
                    <div className="p-2 rounded-xl bg-white border border-[var(--sand-300)]">
                      {sec.icon}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-charcoal-900">{sec.title}</h2>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-500 leading-relaxed">
                    {sec.description}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {sec.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={link.href}
                          className="group block p-2.5 rounded-xl bg-white border border-[var(--sand-200)] hover:border-amber-400 hover:shadow-2xs transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-charcoal-900 group-hover:text-amber-800 transition-colors">
                              {link.label}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-charcoal-400 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all" />
                          </div>
                          <span className="text-[11px] text-charcoal-500 block mt-0.5">
                            {link.desc}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Blog Articles Directory Subsection */}
          <div className="bg-[var(--sand-50)] rounded-3xl p-8 sm:p-10 border border-[var(--sand-300)] space-y-6">
            <div className="border-b border-[var(--sand-300)] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-charcoal-900">
                  All Educational Blog Articles &amp; Guides
                </h3>
                <p className="text-xs text-charcoal-500 mt-1">
                  Full list of in-depth articles published in our knowledge library.
                </p>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-amber-800 hover:underline inline-flex items-center gap-1"
              >
                <span>Browse with filters</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {blogArticles.map((art) => (
                <Link
                  key={art.slug}
                  href={`/blog/${art.slug}`}
                  className="p-3 bg-white rounded-xl border border-[var(--sand-200)] hover:border-amber-400 hover:shadow-2xs transition-all block group"
                >
                  <p className="text-xs font-bold text-charcoal-900 group-hover:text-amber-800 line-clamp-1 transition-colors">
                    {art.title}
                  </p>
                  <span className="text-[11px] text-charcoal-500 block mt-1">
                    {art.category} • {art.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
