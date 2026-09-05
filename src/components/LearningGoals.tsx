import React from "react";
import Link from "next/link";
import { MessageCircle, Briefcase, GraduationCap, Award, ArrowRight } from "lucide-react";

const goals = [
  {
    icon: MessageCircle,
    title: "Everyday German",
    description:
      "Feel completely natural in everyday conversations, supermarket trips, ordering at restaurants, talking with neighbours, and handling daily life in Germany, Austria, or Switzerland.",
    cta: "Explore Everyday German",
    href: "/courses/a1-german",
    tag: "A1–A2 General",
  },
  {
    icon: Briefcase,
    title: "Professional German",
    description:
      "Accelerate your career in Europe's strongest economy. Communicate effectively with German colleagues, master workplace correspondence, pass corporate interviews, and unlock higher salaries.",
    cta: "Explore Career German",
    href: "/courses/b1-german",
    tag: "B1 Business Focus",
  },
  {
    icon: GraduationCap,
    title: "Study in Germany",
    description:
      "Access tuition-free degrees at world-class German public universities. Master the linguistic prerequisites for student visas, Studienkolleg, university applications, and working student roles.",
    cta: "Explore Academic Pathway",
    href: "/learn-german",
    tag: "University Roadmap",
  },
  {
    icon: Award,
    title: "Goethe Exam Preparation",
    description:
      "Targeted training for the Goethe-Zertifikat (A1, A2, B1) and official visa requirements. Learn test blueprints, time-management strategies, letter templates, and oral presentation tactics.",
    cta: "Explore Exam Training",
    href: "/courses",
    tag: "100% Goethe Aligned",
  },
];

export function LearningGoals() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
            Tailored Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What are you learning German for?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Select your primary goal to discover the exact course curriculum and milestones built for your journey.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {goals.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
