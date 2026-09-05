import React from "react";
import { Metadata } from "next";
import { CourseGrid } from "@/components/CourseGrid";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Stats } from "@/components/Stats";
import { FinalCTA } from "@/components/FinalCTA";
import { TeachingMethod } from "@/components/TeachingMethod";
import { CheckCircle2, Award, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "German Language Courses (A1, A2, B1) | German With Gaurav",
  description:
    "Explore structured online German courses from A1 beginner to B1 intermediate. Small batches of 5–7 students, licensed Netzwerk materials, and Goethe-Zertifikat exam preparation.",
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesCatalogPage() {
  const breadcrumbs = [{ label: "Courses" }];

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Catalog Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3.5 py-1 rounded-full">
            OFFICIAL CEFR CURRICULUM
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Online German Courses: A1, A2 &amp; B1
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Interactive, live group classes strictly capped at 5–7 learners. Build spoken fluency, master practical German grammar, and prepare thoroughly for Goethe examinations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100+ Hours per Level
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-amber-600" />
              5–7 Students per Batch
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600" />
              Goethe Exam Focused
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-purple-600" />
              Netzwerk Licensed Books
            </span>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <CourseGrid
        showHeading={false}
      />

      {/* Stats Bar */}
      <Stats variant="light" />

      {/* Teaching Method Summary */}
      <TeachingMethod />

      {/* Level Comparison Guide Banner */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Not sure which level is right for you?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Read our comprehensive guide on CEFR language levels, or schedule a free 10-minute level diagnostic call with Gaurav.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/learn-german"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
            >
              Explore German Levels Guide
            </Link>
            <Link
              href="/book-a-free-demo"
              className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-500 transition-colors shadow"
            >
              Book Free Level Assessment
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
