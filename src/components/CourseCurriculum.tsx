"use client";

import React, { useState } from "react";
import { CurriculumModule } from "@/data/coursesData";
import { ChevronDown, BookOpen, Volume2, Mic, FileText, PenTool, Sparkles } from "lucide-react";

interface CourseCurriculumProps {
  curriculum: CurriculumModule[];
  courseTitle: string;
}

export function CourseCurriculum({ curriculum, courseTitle }: CourseCurriculumProps) {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    "01": true, // Open module 1 by default
  });

  const toggleModule = (number: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [number]: !prev[number],
    }));
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100" id="curriculum" aria-labelledby="curriculum-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
            Detailed Syllabus
          </span>
          <h2 id="curriculum-heading" className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Complete {courseTitle} Curriculum
          </h2>
          <p className="text-base text-slate-600">
            A comprehensive, module-by-module breakdown covering grammar rules, spoken drills, vocabulary lists, and exam questions.
          </p>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-5">
          {curriculum.map((mod) => {
            const isOpen = !!openModules[mod.number];
            return (
              <div
                key={mod.number}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
              >
                {/* Module Trigger */}
                <button
                  type="button"
                  onClick={() => toggleModule(mod.number)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/80 transition-colors focus-visible:outline-2 focus-visible:outline-amber-500"
                  aria-expanded={isOpen}
                  aria-controls={`module-panel-${mod.number}`}
                  id={`module-btn-${mod.number}`}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                      {mod.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                        Module {mod.number}: {mod.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {mod.summary}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-amber-100 text-amber-800" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Module Content - Crawlable HTML */}
                <div
                  id={`module-panel-${mod.number}`}
                  role="region"
                  aria-labelledby={`module-btn-${mod.number}`}
                  className={`${isOpen ? "block" : "hidden"} px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/40`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    
                    {/* Grammar */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
                        <BookOpen className="w-4 h-4" />
                        <span>Grammar Topics</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {mod.grammar.map((g, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Vocabulary */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        <span>Vocabulary Themes</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {mod.vocabulary.map((v, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span>{v}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Speaking & Pronunciation */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                        <Mic className="w-4 h-4" />
                        <span>Speaking & Oral Drills</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {mod.speaking.map((s, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Listening Comprehension */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2 text-purple-700 font-bold text-xs uppercase tracking-wider">
                        <Volume2 className="w-4 h-4" />
                        <span>Listening Practice</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {mod.listening.map((l, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                            <span>{l}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Reading Comprehension */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                        <FileText className="w-4 h-4" />
                        <span>Reading Materials</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {mod.reading.map((r, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Writing & Practice */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
                        <PenTool className="w-4 h-4" />
                        <span>Writing & Exam Practice</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {mod.writing.concat(mod.practice).map((w, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

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
