import React from "react";
import { BookX, Brain, MicOff, RefreshCcw, TrendingDown, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const struggles = [
  {
    icon: BookX,
    title: "Overwhelming Grammar",
    description: "Four cases (der, die, das, den, dem), adjective endings, and confusing sentence structures that make you freeze before speaking.",
  },
  {
    icon: Brain,
    title: "Forgetting Vocabulary",
    description: "Memorising lengthy vocabulary word lists only to forget them the minute you actually try to communicate with a native speaker.",
  },
  {
    icon: MicOff,
    title: "Hesitation in Speaking",
    description: "Reading German easily in textbooks, but feeling anxious and tongue-tied the second you have to speak out loud in real time.",
  },
  {
    icon: RefreshCcw,
    title: "App Switching Fatigue",
    description: "Bouncing between Duolingo, grammar apps, and YouTube videos without ever building coherent conversational fluency.",
  },
  {
    icon: TrendingDown,
    title: "Inconsistency & Motivation Loss",
    description: "Starting enthusiastically for the first two weeks, but losing steam as soon as lessons become complex and self-study lacks guidance.",
  },
  {
    icon: HelpCircle,
    title: "Zero Spoken Feedback",
    description: "Sitting silently in 25-student lecture batches where the teacher talks the entire time and nobody ever corrects your pronunciation.",
  },
];

export function LearningProblem() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
            The Beginner Dilemma
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Remember when you started learning German?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At first, learning new words was exciting. But then you hit a wall, right? Progress slowed, sentences became complicated, and no app or random video seemed to help...
          </p>
        </div>

        {/* Struggle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {struggles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Transition Callout Box */}
        <div className="mt-14 max-w-3xl mx-auto bg-white border-2 border-amber-400 rounded-2xl p-8 sm:p-10 shadow-lg text-center relative">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto mb-4 font-black text-xl shadow">
            !
          </div>
          <p className="text-xl sm:text-2xl font-bold text-slate-900">
            You don’t need more random German lessons.
          </p>
          <p className="text-2xl sm:text-3xl font-extrabold text-amber-600 mt-1">
            You need a structured learning system.
          </p>
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Fluency doesn’t come from memorising isolated word lists. It comes from clear grammar explanations, active speaking practice, and daily guided feedback.
          </p>
          <div className="mt-6">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow"
            >
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>See How the GWG System Works</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
