import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Users,
  Award,
  Star,
  CheckCircle2,
  BookOpen,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden academic-grid bg-[#faf9f6] py-16 sm:py-24 lg:py-28 border-b border-[#e5e2da]">
      {/* Subtle Ambient Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6]/40 via-[#faf9f6]/80 to-[#faf9f6] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 sm:space-y-10">
        
        {/* Academic Eyebrow with German Tricolor Accent */}
        <div className="inline-flex items-center gap-3 bg-[#ede8df]/90 border border-[#d5d0c5] px-4 py-1.5 rounded-full shadow-2xs">
          <div className="german-tricolor-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#121826]">
            ACADEMIC GERMAN LANGUAGE INSTITUTE • PUNE &amp; LIVE ONLINE • EST. 2005
          </span>
        </div>

        {/* Unique, Authoritative Executive Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#121826] tracking-tight leading-[1.12]">
            Learn German for Higher Education <br />
            <span className="text-[#b91c1c]">&amp; Global Career Opportunities.</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#475569] leading-relaxed max-w-3xl mx-auto font-normal pt-2">
            Live, mentor-led online cohorts strictly limited to <strong>5 to 7 learners</strong>. Guided personally by founder <strong>Gaurav Raghuvanshi</strong> with 19+ years of pedagogical expertise — combining official CEFR curriculum, intuitive grammar mechanics, and dedicated Goethe-Zertifikat preparation.
          </p>
        </div>

        {/* Dual Primary Call-to-Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1 max-w-md mx-auto">
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide bg-[#b91c1c] text-white hover:bg-[#991b1b] transition-all shadow-md active:scale-98"
          >
            <span>Explore Courses (A1 – B2)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/book-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-[#121826] bg-white hover:bg-[#faf9f6] border border-[#d5d0c5] transition-all shadow-xs active:scale-98"
          >
            <Calendar className="w-4 h-4 text-[#b91c1c]" />
            <span>Book Free 1-on-1 Consultation</span>
          </Link>
        </div>

        {/* Official CEFR Level Matrix - Inspired by German With Gaurav Brand Banner */}
        <div className="pt-2 max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-[#8b0000] via-[#991b1b] to-[#7f1d1d] p-5 sm:p-6 rounded-3xl shadow-xl border border-red-800 text-white relative overflow-hidden text-left">
            {/* Subtle radial ambient glow */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 border-b border-white/15">
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-bold tracking-widest uppercase text-amber-300">
                  OFFICIAL CEFR CURRICULUM
                </span>
                <p className="text-xs sm:text-sm font-medium text-white/90">
                  For Higher Education &amp; Global Career Opportunities
                </p>
              </div>

              {/* Floating Batch Button (Opens Official Poster Popup) */}
              <button
                type="button"
                data-open-batch-poster
                className="group inline-flex items-center gap-2 bg-white hover:bg-amber-300 text-[#991b1b] hover:text-[#7f1d1d] px-4 py-2 rounded-full text-xs font-black shadow-md shrink-0 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer font-montserrat"
                aria-label="View Official Batch Announcement Poster"
              >
                <GraduationCap className="w-4 h-4 text-[#991b1b] group-hover:rotate-12 transition-transform" />
                <span>New Batch Starting Soon</span>
                <span className="text-[10px] bg-red-100 text-[#991b1b] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  View Notice
                </span>
              </button>
            </div>

            {/* 4 Iconic Level Cards: A1, A2, B1, B2 */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 pt-4 text-center">
              <Link
                href="/courses/a1"
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border-2 border-white/80 bg-white/10 hover:bg-white hover:text-[#991b1b] transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-102 active:scale-98"
              >
                <span className="font-black text-xl sm:text-2xl tracking-tight transition-colors">A1</span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/80 group-hover:text-[#991b1b] mt-0.5">Beginner</span>
              </Link>

              <Link
                href="/courses/a2"
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border-2 border-white/80 bg-white/10 hover:bg-white hover:text-[#991b1b] transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-102 active:scale-98"
              >
                <span className="font-black text-xl sm:text-2xl tracking-tight transition-colors">A2</span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/80 group-hover:text-[#991b1b] mt-0.5">Elementary</span>
              </Link>

              <Link
                href="/courses/b1"
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border-2 border-white/80 bg-white/10 hover:bg-white hover:text-[#991b1b] transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-102 active:scale-98"
              >
                <span className="font-black text-xl sm:text-2xl tracking-tight transition-colors">B1</span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/80 group-hover:text-[#991b1b] mt-0.5">Intermediate</span>
              </Link>

              <Link
                href="/book-demo"
                className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border-2 border-white/80 bg-white/10 hover:bg-white hover:text-[#991b1b] transition-all duration-200 shadow-sm hover:shadow-lg hover:scale-102 active:scale-98"
              >
                <span className="font-black text-xl sm:text-2xl tracking-tight transition-colors">B2</span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/80 group-hover:text-[#991b1b] mt-0.5">Advanced</span>
              </Link>
            </div>

            <div className="pt-3.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/80 border-t border-white/10 mt-3">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                <span>Get Trained by Gaurav Raghuvanshi</span>
              </span>
              <span className="font-bold text-amber-300">Capped at 5–7 Students / Batch</span>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars: Professional Value Grid */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-5xl mx-auto">
          <div className="bg-white/85 backdrop-blur-xs p-5 rounded-2xl border border-[#e5e2da] shadow-2xs space-y-2 hover:border-[#b91c1c]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-[#ede8df] flex items-center justify-center text-[#b91c1c]">
                <Users className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-wider">Cohort Guarantee</span>
            </div>
            <h2 className="text-sm font-bold text-[#121826]">5–7 Students Strict Cap</h2>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Guaranteed 100% active speaking time in every 90-minute live session. Pronunciation and sentence structure corrected in real time.
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-xs p-5 rounded-2xl border border-[#e5e2da] shadow-2xs space-y-2 hover:border-[#b91c1c]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-[#ede8df] flex items-center justify-center text-[#b91c1c]">
                <Award className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-wider">Exam Readiness</span>
            </div>
            <h2 className="text-sm font-bold text-[#121826]">Goethe-Zertifikat Prep</h2>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Comprehensive modular training covering Lesen, Hören, Schreiben, and Sprechen with timed mock exam evaluations.
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-xs p-5 rounded-2xl border border-[#e5e2da] shadow-2xs space-y-2 hover:border-[#b91c1c]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-[#ede8df] flex items-center justify-center text-[#b91c1c]">
                <BookOpen className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-wider">CEFR Standard</span>
            </div>
            <h2 className="text-sm font-bold text-[#121826]">100+ Live Hours / Level</h2>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Licensed Klett Netzwerk Kursbuch &amp; Arbeitsbuch instruction with interactive digital exercises and full HD session archives.
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-xs p-5 rounded-2xl border border-[#e5e2da] shadow-2xs space-y-2 hover:border-[#b91c1c]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-lg bg-[#ede8df] flex items-center justify-center text-[#b91c1c]">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-wider">Founder Pedagogy</span>
            </div>
            <h2 className="text-sm font-bold text-[#121826]">19+ Years Master Mentorship</h2>
            <p className="text-xs text-[#64748b] leading-relaxed">
              Taught personally by Gaurav Raghuvanshi since 2005. Systematic grammar deconstruction without reliance on outsourced junior tutors.
            </p>
          </div>
        </div>

        {/* Institutional Trust Strip */}
        <div className="pt-4 border-t border-[#e5e2da]/80 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-semibold text-[#475569]">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-[#d97706] fill-[#d97706]" />
            <span>5.0 Google Rating (158 Verified Reviews)</span>
          </div>

          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
            <span>1,499+ Students Certified Since 2005</span>
          </div>

          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
            <span>100% Live Interactive Cohorts (Never Pre-Recorded)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
