"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, GraduationCap, Briefcase, HeartHandshake, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function EducatorVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
            EDUCATOR INSIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Learning German Matters
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Insights from Frau Caprice, German native educator who works closely with the Indian education ecosystem to illuminate career, university, and cultural opportunities.
          </p>
        </div>

        {/* Video & Supporting Topics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Video Embed Player (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-950 aspect-video group">
              {!isPlaying ? (
                <div className="relative w-full h-full">
                  <Image
                    src="https://i.ytimg.com/vi/hugcHFlyBis/hqdefault.jpg"
                    alt="Why Learning German Matters - German Educator Insights"
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/30" />

                  {/* Play Button Overlay */}
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex flex-col items-center justify-center text-white focus:outline-none focus:ring-4 focus:ring-amber-400 rounded-3xl"
                    aria-label="Play Educator Insights Video"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl group-hover:bg-amber-500 group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 ml-1" />
                    </div>
                    <span className="mt-3 text-xs sm:text-sm font-bold tracking-wide uppercase bg-slate-950/80 px-4 py-1.5 rounded-full border border-white/20">
                      Watch Video
                    </span>
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-amber-300">Frau Caprice • Educator from Germany</p>
                    <p className="text-sm font-bold">Key Differences: Education Costs, Employment & Work Culture</p>
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/hugcHFlyBis?autoplay=1"
                  title="Why Learning German Matters"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* Supporting Topics (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              
              {/* Topic 1: Education */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-amber-400 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Education Costs
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Key differences that impact your future: public universities across Germany offer world-class tuition-free degrees, making higher education remarkably affordable.
                </p>
              </div>

              {/* Topic 2: Employment */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-amber-400 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Employment Opportunities
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Better career scope in Germany: unprecedented demand for skilled international engineers, healthcare professionals, and technical specialists who speak German.
                </p>
              </div>

              {/* Topic 3: Work Culture */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-amber-400 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Work Culture
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A balanced and professional environment: 30 days mandatory annual leave, regulated working hours, respect for personal boundaries, and long-term stability.
                </p>
              </div>

            </div>

            {/* Quick Registration CTA */}
            <div className="pt-2">
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Register Interest via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
