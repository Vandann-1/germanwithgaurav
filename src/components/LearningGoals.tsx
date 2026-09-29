import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Target } from "lucide-react";
import { learningPathsData } from "@/data/learningPathsData";

export function LearningGoals() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#e5e2da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c]">
            TAILORED ROADMAPS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight">
            Learning Paths Designed for Your Goal
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Whether preparing for a career in Germany, pursuing higher studies, or passing official Goethe examinations, select your focused pathway.
          </p>
        </div>

        {/* 4 Cards Grid with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {learningPathsData.map((path) => {
            return (
              <div
                key={path.slug}
                className="flex flex-col justify-between bg-[#faf9f6] rounded-2xl overflow-hidden border border-[#e5e2da] hover:border-[#b91c1c]/50 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div>
                  {/* Real Atmospheric Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
                    <Image
                      src={path.image}
                      alt={path.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-[#121826]/85 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                      {path.badge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors leading-snug">
                      {path.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                      {path.subtitle}
                    </p>

                    <div className="pt-3 border-t border-[#e5e2da] text-xs text-[#64748b] space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span><strong className="text-[#121826]">Target:</strong> {path.targetLevel}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span><strong className="text-[#121826]">Duration:</strong> {path.duration.split("(")[0].trim()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-4 border-t border-[#e5e2da]">
                    <Link
                      href={`/learning-paths/${path.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-bold text-[#121826] group-hover:text-[#b91c1c] transition-colors uppercase tracking-wider"
                    >
                      <span>Explore Roadmap</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
