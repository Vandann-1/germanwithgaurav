import React from "react";
import { BookX, Brain, MicOff, RefreshCcw, TrendingDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const struggles = [
  {
    icon: BookX,
    title: "Grammar Overload",
    description: "Four cases (der, die, das, den, dem), adjective endings, and rigid word order that leave you freezing before uttering a single sentence.",
  },
  {
    icon: Brain,
    title: "Vocabulary Decay",
    description: "Memorising endless isolated word lists only to forget them the instant you attempt to hold a real conversation with a native speaker.",
  },
  {
    icon: MicOff,
    title: "Speaking Hesitation",
    description: "Reading German passages easily on paper, but experiencing sudden paralysis when asked to formulate a spontaneous spoken thought.",
  },
  {
    icon: RefreshCcw,
    title: "App-Switching Fatigue",
    description: "Bouncing between gamified apps, YouTube shorts, and disjointed grammar exercises without ever building connected conversational fluency.",
  },
  {
    icon: TrendingDown,
    title: "Loss of Momentum",
    description: "Starting enthusiastically for two weeks, but losing motivation as soon as sentence structures become complex and guidance is missing.",
  },
  {
    icon: HelpCircle,
    title: "Zero Spoken Feedback",
    description: "Sitting silently in large 25-student classes where the teacher lectures continuously and nobody ever corrects your individual pronunciation.",
  },
];

export function LearningProblem() {
  return (
    <section className="py-16 sm:py-24 bg-[#f7f5f0] border-b border-[#e5e2da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c]">
            THE LEARNER&apos;S DILEMMA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight">
            Remember when you started learning German?
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            At first, picking up greetings felt exciting. But soon, grammar rules piled up, sentences became complicated, and apps failed to give you real speaking ability.
          </p>
        </div>

        {/* Struggle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {struggles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e5e2da] shadow-xs hover:border-[#b91c1c]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#fef2f2] text-[#b91c1c] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#121826] mb-2">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* The Transition Callout Card */}
        <div className="mt-12 max-w-3xl mx-auto bg-white border border-[#e5e2da] rounded-2xl p-8 sm:p-10 shadow-sm text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#b91c1c] mb-2">
            The Missing Element
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#121826] tracking-tight">
            You don&apos;t need more disconnected lessons.
          </h3>
          <p className="text-base sm:text-lg text-[#475569] mt-3 leading-relaxed max-w-xl mx-auto">
            Fluency requires an intentional, structured system: intuitive grammar blueprints, in-class verbal repetition, and personal feedback in batches of 5 to 7 learners.
          </p>
          <div className="mt-6">
            <Link
              href="/method"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121826] text-white font-bold text-xs tracking-wide uppercase hover:bg-[#b91c1c] transition-colors shadow-xs"
            >
              <span>Explore The GWG Method</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
