import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MessageSquare, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";

export function AboutGauravSection() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Photograph (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="relative aspect-[4/5] w-full bg-slate-100">
                  <Image
                    src="https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp"
                    alt="Gaurav Raghuvanshi - German Language Teacher with 19+ Years of Experience"
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 450px"
                    className="object-cover object-top"
                  />
                </div>

                {/* Clean Integrated Credential Bar */}
                <div className="p-4 bg-[#08175e] text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-amber-300">Teaching German Since 2005</p>
                    <p className="text-sm font-bold text-white">19+ Years of Classroom Mentorship</p>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm shrink-0">
                    19+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Teaching Philosophy & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold tracking-wide">
                <span>About Your Lead Educator</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Meet Gaurav Raghuvanshi <br />
                <span className="text-amber-600">Your German Language Mentor</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I know firsthand how frustrating it can be to study for months and still freeze the moment someone greets you with <em>&ldquo;Wie geht es Ihnen?&rdquo;</em>
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Fluency doesn&apos;t come from memorizing dry grammar lists or swiping endlessly on apps. It comes from a supportive, structured environment where you speak actively in small batches of 5–7 students and receive daily individual feedback.
            </p>

            {/* Philosophy Pillars - Clean, quiet academic grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-left">
              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <MessageSquare className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Practical German</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Real-life conversations and practical vocabulary for daily situations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <Compass className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Intuitive Grammar Logic</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Complex German sentence rules deconstructed into simple patterns.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Speaking Confidence</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Small batches (5–7 students) ensuring high personal talk-time every day.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                <HeartHandshake className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Personalized Guidance</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Line-by-line feedback on your pronunciation, writing, and homework.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                href="/about-gaurav-raghuvanshi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#08175e] text-white hover:bg-[#050f42] transition-all shadow-sm"
              >
                <span>Read Gaurav&apos;s Full Story</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
              <Link
                href="/book-a-free-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Book a Free Demo Session</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
