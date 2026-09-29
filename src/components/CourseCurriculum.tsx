"use client";

import React, { useState } from "react";
import { CurriculumModule } from "@/data/coursesData";
import { ChevronDown, BookOpen, Volume2, Mic, PenTool, Sparkles } from "lucide-react";

interface CourseCurriculumProps {
  curriculum: CurriculumModule[];
  courseTitle: string;
}

export function CourseCurriculum({ curriculum, courseTitle }: CourseCurriculumProps) {
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({
    "01": true,
  });

  const toggleModule = (number: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [number]: !prev[number],
    }));
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#e5e2da]" id="curriculum" aria-labelledby="curriculum-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c]">
            STRUCTURED SYLLABUS
          </span>
          <h2 id="curriculum-heading" className="text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight">
            Complete {courseTitle} Curriculum
          </h2>
          <p className="text-base text-[#475569]">
            A thorough module-by-module syllabus covering grammar rules, spoken drills, listening comprehension, writing rubrics, and exam simulation.
          </p>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-4">
          {curriculum.map((mod) => {
            const isOpen = !!openModules[mod.number];
            return (
              <div
                key={mod.number}
                className="bg-[#faf9f6] rounded-2xl border border-[#e5e2da] shadow-2xs overflow-hidden transition-all"
              >
                {/* Module Trigger */}
                <button
                  type="button"
                  onClick={() => toggleModule(mod.number)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#ede8df]/50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b91c1c] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`module-panel-${mod.number}`}
                  id={`module-btn-${mod.number}`}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-[#121826] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {mod.number}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#121826] tracking-tight">
                        Module {mod.number}: {mod.title}
                      </h3>
                      <p className="text-xs text-[#64748b] mt-0.5">
                        {mod.summary}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg bg-white border border-[#e5e2da] flex items-center justify-center shrink-0 text-[#121826] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#ede8df]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Module Content */}
                {isOpen && (
                  <div
                    id={`module-panel-${mod.number}`}
                    role="region"
                    aria-labelledby={`module-btn-${mod.number}`}
                    className="px-6 pb-6 pt-2 border-t border-[#e5e2da] bg-white"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                      
                      {/* Grammar */}
                      <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e5e2da]">
                        <div className="flex items-center gap-2 mb-2 text-[#b91c1c] font-bold text-xs uppercase tracking-wider">
                          <BookOpen className="w-4 h-4" />
                          <span>Grammar Focus</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#334155]">
                          {mod.grammar.map((g, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c] mt-1.5 shrink-0" />
                              <span>{g}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Vocabulary */}
                      <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e5e2da]">
                        <div className="flex items-center gap-2 mb-2 text-[#121826] font-bold text-xs uppercase tracking-wider">
                          <Sparkles className="w-4 h-4 text-[#d97706]" />
                          <span>Vocabulary Topics</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#334155]">
                          {mod.vocabulary.map((v, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#d97706] mt-1.5 shrink-0" />
                              <span>{v}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Speaking */}
                      <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e5e2da]">
                        <div className="flex items-center gap-2 mb-2 text-[#15803d] font-bold text-xs uppercase tracking-wider">
                          <Mic className="w-4 h-4" />
                          <span>Speaking &amp; Roleplays</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#334155]">
                          {mod.speaking.map((s, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#15803d] mt-1.5 shrink-0" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Listening & Reading */}
                      <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e5e2da]">
                        <div className="flex items-center gap-2 mb-2 text-[#475569] font-bold text-xs uppercase tracking-wider">
                          <Volume2 className="w-4 h-4" />
                          <span>Listening &amp; Reading Tasks</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-[#334155]">
                          {mod.listening.map((l, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#475569] mt-1.5 shrink-0" />
                              <span>[Audio] {l}</span>
                            </li>
                          ))}
                          {mod.reading.map((r, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#475569] mt-1.5 shrink-0" />
                              <span>[Text] {r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Writing & Drills */}
                      <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e5e2da] md:col-span-2">
                        <div className="flex items-center gap-2 mb-2 text-[#b91c1c] font-bold text-xs uppercase tracking-wider">
                          <PenTool className="w-4 h-4" />
                          <span>Writing &amp; Goethe Practice Drills</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#334155]">
                          <div>
                            <p className="font-bold text-[#121826] mb-1">Writing Assignments:</p>
                            <ul className="space-y-1">
                              {mod.writing.map((w, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span>•</span>
                                  <span>{w}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-bold text-[#121826] mb-1">Interactive Class Drills:</p>
                            <ul className="space-y-1">
                              {mod.practice.map((p, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <span>•</span>
                                  <span>{p}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
