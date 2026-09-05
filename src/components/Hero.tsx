import React from "react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden blueprint-grid bg-white py-14 sm:py-16 lg:py-0 lg:min-h-[calc(100vh-80px)] lg:flex lg:flex-col lg:justify-center border-b border-slate-200/80">
      {/* Soft gradient mask preserving the large architectural grid lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/35 to-white/75 pointer-events-none" />

      {/* Subtle German national identity watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-0 overflow-hidden">
        <span className="text-[13vw] font-black tracking-[0.2em] text-slate-200/40 uppercase font-sans">
          DEUTSCH
        </span>
      </div>

      {/* German Blueprint Engineering Precision Top Marks */}
      <span className="absolute top-6 left-6 text-slate-400/80 font-mono text-sm pointer-events-none select-none hidden sm:block">
        +
      </span>
      <span className="absolute top-6 right-6 text-slate-400/80 font-mono text-sm pointer-events-none select-none hidden sm:block">
        +
      </span>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        {/* Sleek German Tricolor Precision Accent (Schwarz • Rot • Gold) */}
        <div className="flex items-center justify-center gap-1.5">
          <span className="h-1 w-8 rounded-full bg-slate-950 shadow-2xs" />
          <span className="h-1 w-8 rounded-full bg-red-600 shadow-2xs" />
          <span className="h-1 w-8 rounded-full bg-amber-400 shadow-2xs" />
        </div>

        {/* Headline in Deep Oxford Navy & Serif Font */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#08175e] leading-[1.15]">
          Go from intermediate <br className="hidden sm:inline" />
          German Learner to <br className="hidden sm:inline" />
          Advance German Speaker.
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Online German courses that help you reach your goals faster than you ever thought possible.
        </p>

        {/* Dual CTAs - Deep Navy Primary + Framed Light Secondary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#08175e] text-white hover:bg-[#050f42] shadow-md hover:shadow-lg transition-all active:scale-98"
          >
            <span>Explore Courses!</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-50 transition-all shadow-xs active:scale-98"
          >
            <span>Contact Us!</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
