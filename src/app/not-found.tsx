import React from "react";
import Link from "next/link";
import { Home, BookOpen, Sparkles, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col justify-center bg-white text-slate-800 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* German Tricolor Precision Accent (Schwarz • Rot • Gold) */}
        <div className="flex items-center justify-center gap-1.5">
          <span className="h-1 w-8 rounded-full bg-slate-950 shadow-2xs" />
          <span className="h-1 w-8 rounded-full bg-red-600 shadow-2xs" />
          <span className="h-1 w-8 rounded-full bg-amber-400 shadow-2xs" />
        </div>

        {/* 404 Badge & Heading */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-4 py-1.5 rounded-full inline-block">
            ERROR 404 • SEITE NICHT GEFUNDEN
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#08175e]">
            Page Not Found
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            The page you are looking for might have been moved, renamed, or updated. Let&apos;s get you back on track to learning German!
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#08175e] text-white hover:bg-[#050f42] shadow-md hover:shadow-lg transition-all active:scale-98"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home Page</span>
          </Link>

          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50 transition-all shadow-xs active:scale-98"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore German Courses</span>
          </Link>

          <Link
            href="/book-a-free-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-amber-400 text-slate-950 hover:bg-amber-500 transition-all shadow-xs active:scale-98"
          >
            <Sparkles className="w-4 h-4" />
            <span>Book Free Demo</span>
          </Link>
        </div>

        {/* Helpful Direct Link Cards */}
        <div className="pt-10 border-t border-slate-100 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Popular Learning Pathways
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/courses/a1-german"
              className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200 hover:border-amber-300 transition-all group"
            >
              <p className="text-xs font-bold text-slate-900 group-hover:text-[#08175e]">A1 Beginner German</p>
              <p className="text-[11px] text-slate-500 mt-1">Foundation course &amp; Goethe A1 prep</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#08175e] mt-2 group-hover:underline">
                View Syllabus <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/about-gaurav-raghuvanshi"
              className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200 hover:border-amber-300 transition-all group"
            >
              <p className="text-xs font-bold text-slate-900 group-hover:text-[#08175e]">About Gaurav</p>
              <p className="text-[11px] text-slate-500 mt-1">Meet your lead German educator</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#08175e] mt-2 group-hover:underline">
                Read Profile <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/faq"
              className="p-4 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200 hover:border-amber-300 transition-all group"
            >
              <p className="text-xs font-bold text-slate-900 group-hover:text-[#08175e]">Help &amp; FAQs</p>
              <p className="text-[11px] text-slate-500 mt-1">Class timings, fees &amp; Goethe exams</p>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#08175e] mt-2 group-hover:underline">
                Browse Answers <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
