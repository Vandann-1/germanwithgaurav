import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { learningPathsData } from "@/data/learningPathsData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Stats } from "@/components/Stats";
import { FinalCTA } from "@/components/FinalCTA";
import {
  Compass,
  ArrowRight,
  Clock,
  Target,
  CheckCircle2,
} from "lucide-react";
export const metadata: Metadata = {
  title: "German Learning Paths & Goal-Oriented Roadmaps | German With Gaurav",
  description:
    "Tailored German language tracks for working professionals, university aspirants, everyday life, and Goethe examination preparation. Small batches with 19+ years mentor Gaurav Raghuvanshi.",
  alternates: {
    canonical: "/learning-paths",
  },
  openGraph: {
    title: "German Learning Paths & Goal-Oriented Roadmaps | German With Gaurav",
    description:
      "Tailored German language tracks for working professionals, university aspirants, everyday life, and Goethe examination preparation.",
    url: "https://germanwithgaurav.com/learning-paths",
    type: "website",
  },
};


export default function LearningPathsPage() {
  const breadcrumbs = [{ label: "Learning Paths" }];

  return (
    <>
      <div className="bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--sand-100)] via-white to-white border-b border-[var(--sand-200)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold tracking-wide uppercase shadow-xs">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>PURPOSE-BUILT STUDY TRACKS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-charcoal-900 tracking-tight leading-tight">
            Choose the Path Built for <span className="text-german-red">Your Specific Goal</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
            Learning German is not one-size-fits-all. Whether you need language for an EU Blue Card, university admission in Munich, a family reunion visa, or rapid Goethe certification, choose a curriculum tailored directly to your outcome.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/book-demo"
              className="px-7 py-3.5 rounded-xl bg-amber-400 text-charcoal-950 font-bold text-sm hover:bg-amber-500 transition-all shadow-sm"
            >
              Book Free Pathway Consultation
            </Link>
            <Link
              href="/courses"
              className="px-7 py-3.5 rounded-xl bg-charcoal-900 text-white font-bold text-sm hover:bg-charcoal-800 transition-all shadow-xs"
            >
              View All Courses (A1, A2, B1)
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Paths Cards Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-[var(--sand-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              TARGETED CURRICULA
            </span>
            <h2 className="text-3xl font-black text-charcoal-900 tracking-tight">
              Four Roadmaps to Real German Fluency
            </h2>
            <p className="text-sm text-charcoal-600">
              Each track combines official CEFR textbook rigor with real-world conversational drills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningPathsData.map((path) => (
              <div
                key={path.slug}
                className="bg-[var(--sand-50)] rounded-3xl overflow-hidden border border-[var(--sand-300)] shadow-xs flex flex-col justify-between hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all group"
              >
                {/* Real Photographic Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200">
                  <Image
                    src={path.image}
                    alt={path.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wider text-white bg-charcoal-900/85 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20">
                    {path.badge}
                  </span>
                </div>

                <div className="p-8 space-y-6">
                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-black text-charcoal-900 tracking-tight mb-2 group-hover:text-amber-800 transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {path.subtitle}
                    </p>
                  </div>

                  {/* Meta Specs */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[var(--sand-300)]">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-charcoal-500 font-semibold mb-0.5">
                        <Target className="w-3.5 h-3.5 text-amber-600" />
                        <span>Target Level</span>
                      </div>
                      <p className="text-xs font-bold text-charcoal-900">{path.targetLevel}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-charcoal-500 font-semibold mb-0.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Timeline</span>
                      </div>
                      <p className="text-xs font-bold text-charcoal-900">{path.duration}</p>
                    </div>
                  </div>

                  {/* Key Outcomes Teaser */}
                  <div className="space-y-2 border-t border-[var(--sand-300)] pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                      Core Outcomes:
                    </p>
                    <ul className="space-y-2 text-xs text-charcoal-700">
                      {path.keyOutcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-[var(--sand-300)]">
                  <Link
                    href={`/learning-paths/${path.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-charcoal-900 text-white hover:bg-amber-400 hover:text-charcoal-950 font-bold text-xs tracking-wide transition-all shadow-xs"
                  >
                    <span>Explore Full {path.title} Path</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Stats */}
      <Stats variant="light" />

      {/* Consultation Banner */}
      <section className="py-16 bg-[var(--sand-100)] border-b border-[var(--sand-300)]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900">
            Unsure which pathway fits your deadline?
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto">
            Discuss your visa intake, employment timeline, or exam targets directly with Gaurav in a 1-on-1 diagnostic call.
          </p>
          <div className="pt-2">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 text-charcoal-950 font-bold text-sm hover:bg-amber-500 transition-all shadow-sm"
            >
              <span>Schedule a Free 1-on-1 Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
