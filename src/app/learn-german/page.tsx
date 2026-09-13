import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "German Learning Pathway & CEFR Levels Roadmap | German With Gaurav",
  description:
    "Complete CEFR German language roadmap for Indian students and professionals. Understand A1, A2, and B1 course milestones, Goethe exam requirements, and study hours with German With Gaurav.",
  alternates: {
    canonical: "/learn-german",
  },
};

export default function LearnGermanPage() {
  const breadcrumbs = [{ label: "Learn German Guide" }];

  const cefrLevels = [
    {
      level: "A1",
      title: "Beginner German",
      hours: "80–100 Hours",
      target: "Spouse Visas, Foundation, Everyday Phrases",
      slug: "a1-german",
      description:
        "Understand and use familiar everyday expressions and very basic phrases. Introduce yourself, ask where someone lives, and order food in a café.",
      topics: ["Alphabet & phonetics", "Present tense verbs", "Definite/indefinite articles", "Accusative case basics", "Numbers & time"],
    },
    {
      level: "A2",
      title: "Elementary German",
      hours: "100–120 Hours",
      target: "Daily Life in Germany, Internships, Simple Work",
      slug: "a2-german",
      description:
        "Understand sentences related to areas of immediate relevance (family, shopping, employment). Describe past events and participate in everyday work conversations.",
      topics: ["Dative case & Wechselpräpositionen", "Perfekt & Präteritum past tenses", "Reflexive verbs", "Adjective declensions", "Subordinate clauses (weil, dass)"],
    },
    {
      level: "B1",
      title: "Intermediate German",
      hours: "120–150 Hours",
      target: "Studienkolleg, Blue Card, Chancenkarte, PR",
      slug: "b1-german",
      description:
        "Deal with most travel and living situations in DACH nations. Express opinions on abstract topics, write connected texts, and converse independently.",
      topics: ["Passive voice (Passiv)", "Konjunktiv II (diplomacy, wishes)", "Relative clauses in all cases", "Genitive prepositions", "Goethe B1 4-module test mastery"],
    },
    {
      level: "B2",
      title: "Vantage / Upper Intermediate",
      hours: "150–200 Hours",
      target: "Direct University Degrees, Corporate Engineering, Nursing",
      description:
        "Understand the main ideas of complex technical texts. Interact with native speakers with a high degree of spontaneity without strain for either party.",
      topics: ["Idiomatic expressions", "Advanced participle attributes", "Subjunctive I (reported speech)", "Nuanced debate strategies"],
    },
    {
      level: "C1 & C2",
      title: "Effective Operational & Mastery",
      hours: "300+ Hours",
      target: "Medicine (Fachsprachprüfung), Law, Academic Research",
      description:
        "Express ideas fluently and spontaneously for academic and professional purposes. Effortless native-like comprehension of virtually everything heard or read.",
      topics: ["High register rhetoric", "Technical scientific dissertations", "Total structural flexibility"],
    },
  ];

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Guide Hero */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3.5 py-1 rounded-full">
            COMPLETE CEFR ROADMAP
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How to Learn German: Complete Levels &amp; Pathway Guide
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the Common European Framework of Reference for Languages (CEFR), Goethe examinations, required study hours, and career thresholds.
          </p>
        </div>
      </section>

      {/* CEFR Level Breakdown Cards */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-black text-slate-900">
              The 6 CEFR German Language Levels
            </h2>
            <p className="text-sm text-slate-500">
              From foundational beginner (A1) to near-native fluency (C2).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cefrLevels.map((lvl) => (
              <div
                key={lvl.level}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-amber-400 hover:bg-white hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-950 font-mono bg-amber-400 px-3 py-1 rounded-xl">
                      {lvl.level}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      {lvl.hours}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {lvl.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-700 mb-3">
                    Target: {lvl.target}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {lvl.description}
                  </p>

                  <div className="space-y-1.5 border-t border-slate-200/80 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Core Grammar Focus</p>
                    {lvl.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80">
                  {lvl.slug ? (
                    <Link
                      href={`/courses/${lvl.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 text-white hover:bg-amber-400 hover:text-slate-950 font-bold text-xs transition-colors"
                    >
                      <span>Explore {lvl.level} Course</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="text-xs text-slate-400 italic block text-center">
                      Advanced self-study / specialized coaching
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO Direct Answer Section: Common High-Value Questions */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              DIRECT ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Essential Answers for German Learners
            </h2>
            <p className="text-sm text-slate-600">
              Clear, factual answers to frequently searched questions about German learning and immigration.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Q1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                What German level is needed to work in Germany?
              </h2>
              <div className="p-3.5 bg-amber-50/60 border border-amber-200/60 rounded-xl text-slate-900 font-medium text-sm leading-relaxed">
                A minimum of B1 to B2 proficiency is generally expected for professional roles in Germany. Software developers and IT engineers in international hubs can often begin with A2/B1, whereas mechanical engineers, corporate consultants, and healthcare workers require B2 or C1 certification.
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Holding a verified B1 or B2 Goethe certificate also provides points under Germany&apos;s Opportunity Card (Chancenkarte) and dramatically accelerates permanent residency eligibility under the EU Blue Card from 27 months down to 21 months.
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                What German level is needed to study in Germany?
              </h2>
              <div className="p-3.5 bg-amber-50/60 border border-amber-200/60 rounded-xl text-slate-900 font-medium text-sm leading-relaxed">
                For English-taught programs, German universities usually require A1 to B1 for student visas and everyday integration. For German-taught Bachelor&apos;s and Master&apos;s degree programs, C1 proficiency (TestDaF 4x4 or DSH-2) is mandatory.
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Even if your curriculum is in English, university career offices emphasize that B1 German is crucial for securing competitive working student (*Werkstudent*) jobs and internships that cover your living expenses in Germany.
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                How long does it take to reach B1 German from scratch?
              </h2>
              <div className="p-3.5 bg-amber-50/60 border border-amber-200/60 rounded-xl text-slate-900 font-medium text-sm leading-relaxed">
                Reaching B1 German takes approximately 6 to 8 months of consistent part-time study, requiring around 300 to 340 guided classroom hours plus 120 hours of personal revision and audio practice.
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Each progressive stage (A1, A2, B1) takes roughly 8 to 10 weeks when guided by a structured system with active in-class spoken repetition.
              </p>
            </div>

            {/* Q4 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h2 className="text-xl font-bold text-slate-900">
                Can someone take A2 German directly without taking A1?
              </h2>
              <div className="p-3.5 bg-amber-50/60 border border-amber-200/60 rounded-xl text-slate-900 font-medium text-sm leading-relaxed">
                Yes, you can enroll directly in A2 German if you have studied basic A1 grammar fundamentals elsewhere and feel comfortable introducing yourself, conjugating regular verbs, and using the accusative case.
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At German With Gaurav, Gaurav conducts a free 10-minute diagnostic session to verify your spoken reflexes before placing you into an A2 batch.
              </p>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
