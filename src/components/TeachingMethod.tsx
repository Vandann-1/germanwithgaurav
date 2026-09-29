import React from "react";
import { Lightbulb, Layers, MessageSquare, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Intuitive Grammar Logic",
    icon: Lightbulb,
    description:
      "We deconstruct complex German grammar rules into straightforward, logical patterns using real-world analogies rather than confusing linguistic theory.",
  },
  {
    step: "02",
    title: "Practice",
    subtitle: "In-Class Repetition",
    icon: Layers,
    description:
      "Grammar cases, articles, and sentence structures are solved live in class through active repetition drills until they become spontaneous reflexes.",
  },
  {
    step: "03",
    title: "Speak",
    subtitle: "High Student Talk-Time",
    icon: MessageSquare,
    description:
      "With strictly 5 to 7 students per batch, every learner speaks in German every single day through pair dialogues, situational roleplays, and guided debates.",
  },
  {
    step: "04",
    title: "Master",
    subtitle: "Goethe Exam Preparation",
    icon: Award,
    description:
      "Sessions are recorded in HD for revision. Gaurav provides line-by-line feedback on pronunciation, homework, and simulated Goethe mock exams.",
  },
];

export function TeachingMethod() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#e5e2da]" aria-labelledby="method-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c]">
            PEDAGOGICAL FRAMEWORK
          </span>
          <h2 id="method-heading" className="text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight">
            THE GWG METHOD
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            A proven 4-stage instructional system refined over 19+ years to guide beginners from grammar confusion to natural spoken fluency.
          </p>
        </div>

        {/* Desktop 4-Step Linear Flow & Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#faf9f6] rounded-2xl p-6 sm:p-7 border border-[#e5e2da] hover:border-[#b91c1c]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-2xl font-black text-[#121826]/30 group-hover:text-[#b91c1c] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e2da] text-[#b91c1c] flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-[#b91c1c] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#121826] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#b91c1c] mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 mt-6 border-t border-[#e5e2da] flex items-center justify-between text-[11px] font-semibold text-[#64748b]">
                  <span>Stage {item.step} of 04</span>
                  {idx < 3 ? (
                    <span className="hidden lg:inline text-[#b91c1c] font-bold">→ Next</span>
                  ) : (
                    <span className="text-[#15803d] font-bold">✓ Fluency</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Callout Link to /method */}
        <div className="mt-12 text-center">
          <Link
            href="/method"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121826] hover:text-[#b91c1c] transition-colors"
          >
            <span>Read The Complete GWG Methodology Guide</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
