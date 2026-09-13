"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Lightbulb,
  Layers,
  MessageSquare,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Intuitive Grammar Logic",
    icon: Lightbulb,
    description:
      "We deconstruct intricate German grammar into clear, digestible principles using real-life analogies and patterns rather than confusing linguistic jargon.",
  },
  {
    step: "02",
    title: "Practice",
    subtitle: "In-Class Repetitive Drills",
    icon: Layers,
    description:
      "Exercises and conversational patterns are solved live in class through active repetition, ensuring cases, declensions, and sentence structures become second nature.",
  },
  {
    step: "03",
    title: "Speak",
    subtitle: "High Student Talk-Time",
    icon: MessageSquare,
    description:
      "With strictly 5 to 7 learners per batch, you speak in German from Day 1 through structured partner dialogues, situational roleplays, and daily conversational drills.",
  },
  {
    step: "04",
    title: "Master",
    subtitle: "Feedback & Goethe Exam Success",
    icon: Award,
    description:
      "Every session is recorded for review. Gaurav provides line-by-line personal feedback on homework, pronunciation, and simulated Goethe mock exams for proven results.",
  },
];

export function TeachingMethod() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSteps = steps.length;

  const nextStep = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSteps);
  }, [totalSteps]);

  const prevStep = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
  }, [totalSteps]);

  // Autoplay for laptop carousel (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextStep]);

  // Slides for laptop carousel (shows active card and preview of next card)
  const slides = steps.map((item, idx) => ({
    current: item,
    next: steps[(idx + 1) % totalSteps],
    nextIdx: (idx + 1) % totalSteps,
  }));

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
            The Proven 4-Step Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            THE GWG METHOD
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600">
            A battle-tested instructional methodology designed over 19+ years to transform shy beginners into articulate German speakers.
          </p>
        </div>

        {/* ============================================================ */}
        {/* MOBILE VIEW: 2x2 Proper Grid (Phones: < md) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50/90 rounded-2xl p-3.5 sm:p-5 border-2 border-slate-200/80 hover:bg-white hover:border-[#08175e] hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs group h-full"
              >
                {/* Decorative step watermark */}
                <span className="absolute -right-2 -bottom-3 text-5xl sm:text-6xl font-black text-slate-200/30 select-none pointer-events-none font-mono">
                  {item.step}
                </span>

                {/* Top: Step number & Icon */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-xl sm:text-2xl font-black text-[#08175e] font-mono tracking-tight">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#08175e]/10 text-[#08175e] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#08175e] group-hover:text-white transition-all shadow-2xs">
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                </div>

                {/* Content */}
                <div className="my-auto z-10 py-2.5 space-y-1">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-600 line-clamp-1">
                    {item.subtitle}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-snug pt-0.5 line-clamp-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Phase tracker */}
                <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Phase {item.step}/04
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((stepNum) => (
                      <span
                        key={stepNum}
                        className={`h-1 rounded-full transition-all ${
                          stepNum === idx + 1
                            ? "w-3.5 sm:w-4 bg-[#08175e]"
                            : "w-1 sm:w-1.5 bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* LAPTOP / DESKTOP VIEW: Interactive Carousel Mode (>= md) */}
        {/* ============================================================ */}
        <div
          className="hidden md:block max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Top Navigation Tabs & Arrow Controls */}
          <div className="flex items-center justify-between gap-4 mb-6">
            {/* Step Selection Tabs */}
            <div className="flex items-center gap-2 lg:gap-3 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80">
              {steps.map((item, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs lg:text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#08175e] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] lg:text-xs ${
                        isActive ? "text-amber-300 font-bold" : "text-slate-400"
                      }`}
                    >
                      {item.step}
                    </span>
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevStep}
                aria-label="Previous methodology step"
                className="w-10 h-10 rounded-xl border-2 border-slate-200 bg-white hover:bg-[#08175e] hover:text-white hover:border-[#08175e] text-slate-700 transition-all flex items-center justify-center shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextStep}
                aria-label="Next methodology step"
                className="w-10 h-10 rounded-xl border-2 border-slate-200 bg-white hover:bg-[#08175e] hover:text-white hover:border-[#08175e] text-slate-700 transition-all flex items-center justify-center shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-3xl p-1">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide, sIdx) => {
                const CurrentIcon = slide.current.icon;
                const NextIcon = slide.next.icon;

                return (
                  <div
                    key={sIdx}
                    aria-hidden={activeIndex !== sIdx}
                    className="w-full min-w-full flex-shrink-0 grid grid-cols-2 gap-6 lg:gap-8"
                  >
                    {/* Active Step Card */}
                    <div className="relative min-h-[340px] bg-white rounded-3xl p-7 lg:p-9 border-2 border-[#08175e] shadow-xl flex flex-col justify-between overflow-hidden group">
                      {/* Decorative step watermark */}
                      <span className="absolute -right-3 -bottom-5 text-8xl lg:text-9xl font-black text-[#08175e]/5 select-none pointer-events-none font-mono">
                        {slide.current.step}
                      </span>

                      {/* Top: Step & Icon */}
                      <div className="flex items-center justify-between z-10">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl lg:text-4xl font-black text-[#08175e] font-mono tracking-tight">
                            {slide.current.step}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#08175e]/10 text-[#08175e]">
                            Active Focus
                          </span>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-[#08175e] text-white flex items-center justify-center shadow-sm">
                          <CurrentIcon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="my-auto z-10 space-y-2 py-4">
                        <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                          {slide.current.title}
                        </h3>
                        <p className="text-xs lg:text-sm font-bold uppercase tracking-wider text-amber-600">
                          {slide.current.subtitle}
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed pt-1">
                          {slide.current.description}
                        </p>
                      </div>

                      {/* Bottom Tracker */}
                      <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between z-10">
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                          Phase {slide.current.step} of 04
                        </span>
                        <div className="flex items-center gap-1.5">
                          {[1, 2, 3, 4].map((stepNum) => (
                            <span
                              key={stepNum}
                              className={`h-1.5 rounded-full transition-all ${
                                stepNum === sIdx + 1
                                  ? "w-7 bg-[#08175e]"
                                  : "w-2 bg-slate-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Next Step Preview Card (Clickable to advance) */}
                    <div
                      onClick={() => setActiveIndex(slide.nextIdx)}
                      aria-hidden="true"
                      className="relative min-h-[340px] bg-slate-50/80 rounded-3xl p-7 lg:p-9 border-2 border-slate-200/80 hover:bg-amber-50/25 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer group"
                    >
                      {/* Decorative step watermark */}
                      <span className="absolute -right-3 -bottom-5 text-8xl lg:text-9xl font-black text-slate-200/40 select-none pointer-events-none group-hover:text-amber-500/5 transition-colors font-mono">
                        {slide.next.step}
                      </span>

                      {/* Top: Step & Icon */}
                      <div className="flex items-center justify-between z-10">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl lg:text-4xl font-black text-slate-400 font-mono tracking-tight group-hover:text-[#08175e] transition-colors">
                            {slide.next.step}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-200/80 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-800 transition-colors">
                            Next Step <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-slate-200/80 text-slate-600 group-hover:scale-105 group-hover:bg-[#08175e] group-hover:text-white transition-all shadow-2xs">
                          <NextIcon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="my-auto z-10 space-y-2 py-4">
                        <h3 className="text-2xl lg:text-3xl font-black text-slate-700 group-hover:text-slate-900 tracking-tight transition-colors">
                          {slide.next.title}
                        </h3>
                        <p className="text-xs lg:text-sm font-bold uppercase tracking-wider text-amber-600/80">
                          {slide.next.subtitle}
                        </p>
                        <p className="text-sm text-slate-500 leading-relaxed pt-1 line-clamp-3">
                          {slide.next.description}
                        </p>
                      </div>

                      {/* Bottom Action Prompt */}
                      <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between z-10">
                        <span className="text-xs font-bold text-amber-700 group-hover:text-[#08175e] transition-colors flex items-center gap-1.5">
                          <span>Click to jump to Phase {slide.next.step}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          Phase {slide.next.step} of 04
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Bottom Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {steps.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setActiveIndex(dotIdx)}
                aria-label={`Go to step ${dotIdx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === dotIdx
                    ? "w-8 bg-[#08175e]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
