import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { Stats } from "@/components/Stats";
import { JsonLd } from "@/components/JsonLd";
import {
  Brain,
  MessageCircle,
  Award,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Video,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The GWG Teaching Method | German With Gaurav",
  description:
    "Discover the GWG 4-pillar methodology: Understand, Practice, Speak, and Master. Learn why our 5–7 student small batches outperform traditional language institutes.",
  alternates: {
    canonical: "/method",
  },
  openGraph: {
    title: "The GWG Teaching Method | German With Gaurav",
    description:
      "Understand, Practice, Speak, and Master: The 4-pillar system developed over 19+ years of teaching German to Indian professionals and university students.",
    url: "https://germanwithgaurav.com/method",
    type: "website",
  },
};

export default function MethodPage() {
  const breadcrumbs = [{ label: "The GWG Method" }];

  const methodSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "The GWG Method - Conversational German Instruction",
    description:
      "A 4-pillar pedagogical framework for mastering German: Understand logic, structured practice, daily speaking in 5–7 student groups, and exam mastery.",
    provider: {
      "@type": "EducationalOrganization",
      name: "German With Gaurav",
      url: "https://germanwithgaurav.com",
    },
  };

  const pillars = [
    {
      number: "01",
      germanTitle: "Verstehen",
      englishTitle: "Understand",
      subtitle: "Grammar logic without rote memorization",
      description:
        "German grammar is notoriously structured, but it is not irrational. Instead of forcing you to memorize endless declension tables blindly, Gaurav breaks down sentence mechanics using intuitive linguistic bridges. You learn *why* an accusative article changes, *how* word order shifts in subordinate clauses, and the underlying symmetry behind German cases.",
      details: [
        "Case systems explained through clear English and Hindi grammatical analogies",
        "Visual sentence structure breakdowns (Verb-Klammer & word order rules)",
        "Zero memorization without understanding the core principle",
      ],
      icon: <Brain className="w-8 h-8 text-amber-600" />,
    },
    {
      number: "02",
      germanTitle: "Üben",
      englishTitle: "Practice",
      subtitle: "Structured drills & authentic listening",
      description:
        "Comprehension in class is only the first step. True retention requires immediate, scaffolded application. Using licensed Netzwerk exercises and custom situational worksheets, you drill conjugations, formulate questions, and train your ears to native German phonetic cadence through real audio tracks from day one.",
      details: [
        "Targeted grammar exercises from licensed Netzwerk Kursbuch & Arbeitsbuch",
        "Listening drills with varied German regional accents and speeds",
        "Regular writing correction with line-by-line teacher feedback",
      ],
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "03",
      germanTitle: "Sprechen",
      englishTitle: "Speak",
      subtitle: "Active speaking every single class",
      description:
        "Speaking fear is the number one barrier in language learning. Because our batches are strictly capped at 5 to 7 learners, you never sit passively. In every single 90-minute session, you speak German for a minimum of 15 to 20 minutes personally, debating prompts, roleplaying everyday situations, and building natural spoken muscle memory.",
      details: [
        "Strict 5–7 batch cap ensures 50%+ of class time is student speaking",
        "Safe, non-judgmental environment to make mistakes and get corrected in real time",
        "Practical role-play (ordering, interviews, flat hunting, doctor visits)",
      ],
      icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
    },
    {
      number: "04",
      germanTitle: "Beherrschen",
      englishTitle: "Master",
      subtitle: "Goethe exam precision & real-world reflex",
      description:
        "The ultimate test of fluency is twofold: passing the Goethe-Zertifikat with high marks, and speaking without hesitation when you land in Frankfurt or Munich. We conduct timed exam simulations across all four modules (Lesen, Hören, Schreiben, Sprechen) and train you on the exact grading rubrics examiners use.",
      details: [
        "Full-length Goethe-Zertifikat mock examinations with formal scoring",
        "Exam-specific time management strategies and trap detection",
        "Individual pronunciation and phonetics fine-tuning",
      ],
      icon: <Award className="w-8 h-8 text-purple-600" />,
    },
  ];

  return (
    <>
      <JsonLd data={methodSchema} />

      <div className="bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--sand-100)] via-white to-white border-b border-[var(--sand-200)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold tracking-wide uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>PEDAGOGICAL PHILOSOPHY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-charcoal-900 tracking-tight leading-tight">
            The GWG Teaching Method: <br />
            <span className="text-german-red">Understand. Practice. Speak. Master.</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl mx-auto">
            Developed over 19+ years and refined through 1,499+ successful students. A transparent, high-repetition framework designed specifically to make complex German grammar feel natural and build unshakeable spoken confidence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/book-demo"
              className="px-7 py-3.5 rounded-xl bg-amber-400 text-charcoal-950 font-bold text-sm hover:bg-amber-500 transition-all shadow-sm"
            >
              Experience the Method in a Free Demo
            </Link>
            <Link
              href="/courses"
              className="px-7 py-3.5 rounded-xl bg-charcoal-900 text-white font-bold text-sm hover:bg-charcoal-800 transition-all shadow-xs"
            >
              View Available Batches
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison: Traditional vs. GWG Method */}
      <section className="py-16 sm:py-20 bg-white border-b border-[var(--sand-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              WHY TRADITIONAL INSTITUTES FAIL
            </span>
            <h2 className="text-3xl font-black text-charcoal-900 tracking-tight">
              The Critical Difference in How You Learn
            </h2>
            <p className="text-sm text-charcoal-600">
              Why students who spend 6 months in 25-person classrooms still freeze when asked a simple question in German.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Traditional Institutes */}
            <div className="bg-red-50/50 rounded-3xl p-8 border-2 border-red-200/80 shadow-xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-charcoal-900">Traditional Language Institutes</h3>
                  <p className="text-xs text-red-800 font-semibold">Mass Classroom Factory Model</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-charcoal-700">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>20 to 30 students per batch:</strong> Instructor talks for 90% of the lesson. You remain a silent listener with zero pressure to speak.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>Mechanical rule-memorization:</strong> Taught from dry grammar formulas without understanding conversational context.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>No individual pronunciation correction:</strong> Phonetic errors solidify because the teacher cannot listen to 25 voices simultaneously.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span><strong>Rotating temporary tutors:</strong> Frequent teacher changes disrupt continuity and accountability.</span>
                </li>
              </ul>
            </div>

            {/* The GWG Method */}
            <div className="bg-emerald-50/40 rounded-3xl p-8 border-2 border-emerald-300 shadow-xs space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-charcoal-900">The German With Gaurav Method</h3>
                  <p className="text-xs text-emerald-800 font-semibold">Small-Batch Conversational Mastery</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-charcoal-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Strict 5–7 student cap:</strong> High individual speaking time. Every single student speaks, answers questions, and roleplays daily.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Intuitive grammar logic:</strong> Concepts explained in accessible terms so you grasp the structural symmetry effortlessly.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Active pronunciation coaching:</strong> Live correction of vowels, umlauts (ä, ö, ü), and word stress in every session.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Consistent mentorship by Gaurav:</strong> 19+ years experience guiding your entire journey from A1 to exam day.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* The 4 Pillars Deep Dive */}
      <section className="py-16 sm:py-24 bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              THE CORE FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-900 tracking-tight">
              The Four Pillars of the GWG Method
            </h2>
            <p className="text-base text-charcoal-600">
              Each stage builds logically upon the previous, turning abstract grammatical rules into second-nature conversational habits.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[var(--sand-300)] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-amber-300 transition-all"
              >
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-amber-500 font-mono">
                      {pillar.number}
                    </span>
                    <div className="p-2 bg-[var(--sand-100)] rounded-xl border border-[var(--sand-300)]">
                      {pillar.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-charcoal-900">
                      {pillar.englishTitle}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      German: {pillar.germanTitle}
                    </p>
                  </div>
                  <p className="text-xs font-semibold text-charcoal-500">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="bg-[var(--sand-50)] rounded-2xl p-4 border border-[var(--sand-300)] space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-charcoal-500">Key Focus Points:</p>
                    <ul className="space-y-1.5 text-xs text-charcoal-700">
                      {pillar.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials, Tech & Tools */}
      <section className="py-16 sm:py-20 bg-white border-b border-[var(--sand-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              LEARNING ENVIRONMENT
            </span>
            <h2 className="text-3xl font-black text-charcoal-900 tracking-tight">
              Materials, Technology &amp; Student Support
            </h2>
            <p className="text-sm text-charcoal-600">
              High-end pedagogical resources combined with interactive online infrastructure.
            </p>
          </div>

          {/* Authentic Classroom Image Banner */}
          <div className="mb-12 rounded-3xl overflow-hidden border border-[var(--sand-300)] shadow-md bg-[var(--sand-50)] grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-200">
              <Image
                src="/images/german-students-classroom.jpg"
                alt="German language students in active conversational class with Netzwerk books"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                ACTIVE SEMINAR METHOD
              </span>
              <h3 className="text-2xl font-black text-charcoal-900 leading-snug">
                Interactive Learning That Mirrors Real German Life
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Our classes emphasize real interaction over passive lectures. With authentic Netzwerk textbooks and Gaurav&apos;s personal coaching, learners develop active spoken reflexes, master German sentence order, and gain the exact skills evaluated in Goethe examinations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--sand-50)] p-7 rounded-3xl border border-[var(--sand-300)] shadow-xs space-y-4">
              <BookOpen className="w-8 h-8 text-amber-600" />
              <h3 className="text-xl font-bold text-charcoal-900">
                Official Netzwerk Series
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                We work directly with authentic, licensed Netzwerk Kursbuch and Arbeitsbuch editions, ensuring your training matches international European school standards.
              </p>
            </div>

            <div className="bg-[var(--sand-50)] p-7 rounded-3xl border border-[var(--sand-300)] shadow-xs space-y-4">
              <Video className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-bold text-charcoal-900">
                HD Session Recordings
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Missed a live session due to urgent workplace demands? Full HD video recordings are available for every class so you never fall behind.
              </p>
            </div>

            <div className="bg-[var(--sand-50)] p-7 rounded-3xl border border-[var(--sand-300)] shadow-xs space-y-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-charcoal-900">
                Direct WhatsApp Doubt Solving
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Ask grammar questions between sessions in our dedicated cohort group. Gaurav answers directly, providing audio notes on pronunciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Proof */}
      <Stats variant="light" />

      {/* Free Demo Callout */}
      <section className="py-16 bg-[var(--sand-100)] border-b border-[var(--sand-300)]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900">
            Experience the GWG Method in Action
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto">
            Book a free 20-minute consultation. Gaurav will assess your starting level, diagnose your pronunciation, and walk you through the curriculum.
          </p>
          <div className="pt-2">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 text-charcoal-950 font-bold text-sm hover:bg-amber-500 transition-all shadow-sm"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Book Your Free Diagnostic Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
