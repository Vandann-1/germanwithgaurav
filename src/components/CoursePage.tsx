import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CourseDetail, coursesData } from "@/data/coursesData";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "./Breadcrumbs";
import { FinalCTA } from "./FinalCTA";
import { JsonLd } from "./JsonLd";
import {
  Clock,
  Users,
  Calendar,
  BookCheck,
  Video,
  Award,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  GraduationCap,
  FileText,
  ExternalLink,
  Download,
  BookOpen,
} from "lucide-react";

interface CoursePageProps {
  course: CourseDetail;
}

export function CoursePage({ course }: CoursePageProps) {
  // Find next course if applicable
  const nextCourse = course.nextCourseSlug
    ? coursesData.find((c) => c.slug === course.nextCourseSlug)
    : null;

  // JSON-LD Course Schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `https://germanwithgaurav.com/courses/${course.slug}#course`,
        name: course.title,
        description: course.shortDescription,
        provider: {
          "@type": "EducationalOrganization",
          "@id": "https://germanwithgaurav.com/#organization",
          name: "German With Gaurav",
          url: "https://germanwithgaurav.com",
        },
        instructor: {
          "@type": "Person",
          "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
          name: "Gaurav Raghuvanshi",
          jobTitle: "German Language Teacher & Founder",
          url: "https://germanwithgaurav.com/about",
        },
        educationalCredentialAwarded: `German ${course.level} Proficiency & Goethe-Zertifikat ${course.level} Preparation`,
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "online",
          courseWorkload: course.duration,
          instructor: {
            "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: course.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  const breadcrumbs = [
    { label: "Courses", href: "/courses" },
    { label: course.title },
  ];

  return (
    <>
      <JsonLd data={courseSchema} />

      {/* Top Breadcrumb Bar */}
      <div className="bg-[var(--sand-50)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* 1. Course Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--sand-100)] via-white to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Info & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/70 text-amber-900 text-xs font-bold tracking-wide uppercase shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{course.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-charcoal-900 tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-lg sm:text-xl font-bold text-amber-700">
                {course.subheading}
              </p>

              <p className="text-base text-charcoal-700 leading-relaxed max-w-2xl">
                {course.shortDescription}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2 text-charcoal-500 text-xs font-semibold mb-1">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Duration</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-900">{course.duration}</p>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2 text-charcoal-500 text-xs font-semibold mb-1">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span>Batch Size</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-900">{course.batchSize.split("Maximum")[0].trim()}</p>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-charcoal-500 text-xs font-semibold mb-1">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Exam Prep</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-900">Goethe {course.level}</p>
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <Link
                  href="/book-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base bg-amber-400 text-charcoal-950 hover:bg-amber-500 shadow-md transition-all active:scale-98"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Book Free Demo Session</span>
                </Link>

                {course.slug === "a1" ? (
                  <a
                    href="/syllabus/a1-german-course-syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base bg-charcoal-900 text-white hover:bg-[#b91c1c] transition-all shadow-xs group"
                  >
                    <FileText className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span>Explore Syllabus (PDF)</span>
                    <ExternalLink className="w-4 h-4 text-white/70" />
                  </a>
                ) : (
                  <a
                    href="#syllabus"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base bg-charcoal-900 text-white hover:bg-[#b91c1c] transition-all shadow-xs"
                  >
                    <span>Explore Syllabus</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {course.slug === "a1" && (
                <div className="pt-0.5">
                  <a
                    href="#syllabus"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-600 hover:text-[#b91c1c] transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                    <span>Or view on-page 15-chapter curriculum overview below</span>
                    <span>↓</span>
                  </a>
                </div>
              )}

              {/* Trust Callout */}
              <div className="flex items-center gap-2 text-xs text-charcoal-600 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero registration fee for consultation. Free level diagnostic included.</span>
              </div>
            </div>

            {/* Right Col: Course Card Feature Box (5 cols) - Picture-free Hero */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-5">
                {/* Academic Cohort Header with Brand Styling */}
                <div className="bg-gradient-to-br from-[#8b0000] via-[#991b1b] to-[#7f1d1d] text-white p-5 rounded-2xl space-y-2 shadow-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-amber-300 font-bold uppercase tracking-wider">
                      Level {course.level} Specialization
                    </span>
                    <span className="bg-white/20 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                      Live Cohort
                    </span>
                  </div>
                  <div className="text-xl font-black tracking-tight text-white">{course.title}</div>
                  <p className="text-xs text-red-100 leading-relaxed">{course.subheading}</p>
                </div>

                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Course Snapshot</span>
                  <span className="text-xs font-bold text-amber-900 bg-amber-100/70 px-3 py-1 rounded-full">
                    5–7 Students / Batch
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-charcoal-900 font-bold">Schedule</strong>
                      <span className="text-charcoal-600">{course.classesPerWeek} ({course.sessionDuration})</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-charcoal-900 font-bold">Licensed Books &amp; PDFs</strong>
                      <span className="text-charcoal-600">{course.studyMaterial}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-charcoal-900 font-bold">Session Recordings</strong>
                      <span className="text-charcoal-600">{course.recordedSessions}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-charcoal-900 font-bold">Examination Training</strong>
                      <span className="text-charcoal-600">{course.examPreparation}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-emerald-900 bg-emerald-50 hover:bg-emerald-100 font-bold text-xs sm:text-sm text-center transition-colors shadow-2xs"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Inquire via WhatsApp: +91 99608 86075</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Course Overview & Rationale */}
      <section className="py-16 bg-[var(--sand-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/80 px-3.5 py-1 rounded-full shadow-2xs">
              In-Depth Overview
            </span>
            <h2 className="text-3xl font-black text-charcoal-900 tracking-tight">
              About the {course.title}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
            {course.fullOverview}
          </p>
        </div>
      </section>

      {/* 3 & 4. Who It's For & Learning Outcomes */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Who It's For */}
            <div className="bg-[var(--sand-50)] rounded-3xl p-8 shadow-sm space-y-6">
              <h2 className="text-2xl font-black text-charcoal-900 tracking-tight flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-amber-400 text-charcoal-950 flex items-center justify-center font-bold text-sm shadow-2xs">?</span>
                Who This Course Is For
              </h2>
              <ul className="space-y-3 text-sm text-charcoal-700">
                {course.targetAudience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-[var(--sand-50)] rounded-3xl p-8 shadow-sm space-y-6">
              <h2 className="text-2xl font-black text-charcoal-900 tracking-tight flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-2xs">✓</span>
                Learning Outcomes
              </h2>
              <ul className="space-y-3 text-sm text-charcoal-700">
                {course.learningOutcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Official Syllabus & Curriculum PDF Section */}
      <section className="py-16 sm:py-24 bg-[var(--sand-50)]" id="syllabus" aria-labelledby="syllabus-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c] bg-red-100/70 px-4 py-1.5 rounded-full shadow-2xs">
              OFFICIAL CEFR {course.level} CURRICULUM
            </span>
            <h2 id="syllabus-heading" className="text-3xl sm:text-4xl font-black text-[#121826] tracking-tight">
              {course.title} Syllabus &amp; Study Guide
            </h2>
            <p className="text-base text-[#475569] max-w-2xl mx-auto">
              {course.slug === "a1"
                ? "Build your German foundation from the beginning. Learn practical German through vocabulary, grammar, listening, reading, writing and speaking practice."
                : "Our comprehensive course syllabus is aligned with the official Goethe-Institut examination blueprint and Common European Framework of Reference for Languages (CEFR)."}
            </p>
          </div>

          {course.slug === "a1" ? (
            /* Dedicated A1 15-Chapter Overview + PDF Action Hub */
            <div className="space-y-8">
              
              {/* Lil Bit Information: 5 Core Curriculum Pillars covering all 15 Chapters */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
                {/* Pillar 1 */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#b91c1c] uppercase tracking-wider bg-red-100/70 px-3 py-1 rounded-full">
                      Chapters 1–2
                    </span>
                    <span className="text-xs font-semibold text-charcoal-400">Week 1–2</span>
                  </div>
                  <h3 className="text-base font-bold text-[#121826]">
                    Foundations &amp; Introductions
                  </h3>
                  <ul className="text-xs text-[#475569] space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Alphabet, special umlauts (ä, ö, ü, ß) &amp; phonetics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Everyday greetings, farewells &amp; numbers 0–100</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Introducing name, age, nationality &amp; family</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Asking essential W-questions (Wer, Wie, Woher, Was)</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#b91c1c] uppercase tracking-wider bg-red-100/70 px-3 py-1 rounded-full">
                      Chapters 3–4 &amp; 12
                    </span>
                    <span className="text-xs font-semibold text-charcoal-400">Week 3–4</span>
                  </div>
                  <h3 className="text-base font-bold text-[#121826]">
                    Core Grammar &amp; Cases
                  </h3>
                  <ul className="text-xs text-[#475569] space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Verbs <em>sein</em> &amp; <em>haben</em> + regular verb conjugation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Articles (<em>der, die, das</em> / <em>ein, eine</em>) &amp; plurals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Negation with <em>nicht</em> and <em>kein</em></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Accusative case (<em>den, die, das</em>) &amp; separable verbs</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3 */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#b91c1c] uppercase tracking-wider bg-red-100/70 px-3 py-1 rounded-full">
                      Chapters 5–8
                    </span>
                    <span className="text-xs font-semibold text-charcoal-400">Week 5–6</span>
                  </div>
                  <h3 className="text-base font-bold text-[#121826]">
                    Daily Life, Food &amp; Shopping
                  </h3>
                  <ul className="text-xs text-[#475569] space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Daily routine, telling time (<em>Uhrzeit</em>), days &amp; months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Family relationships &amp; describing people</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Ordering food &amp; drinks in restaurants with <em>möchten</em></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Supermarket grocery shopping &amp; asking prices</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 4 */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#b91c1c] uppercase tracking-wider bg-red-100/70 px-3 py-1 rounded-full">
                      Chapters 9–11 &amp; 13
                    </span>
                    <span className="text-xs font-semibold text-charcoal-400">Week 7–8</span>
                  </div>
                  <h3 className="text-base font-bold text-[#121826]">
                    City, Work &amp; Travel
                  </h3>
                  <ul className="text-xs text-[#475569] space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Apartments, rooms, furniture &amp; describing homes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>City navigation, public transport &amp; directions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Occupations, working hours &amp; workplace messages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>Modal verbs (<em>können, müssen, wollen</em>) &amp; travel culture</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 5 */}
                <div className="bg-white p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow space-y-3.5 md:col-span-2 lg:col-span-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#b91c1c] uppercase tracking-wider bg-red-100/70 px-3 py-1 rounded-full">
                      Chapters 14–15
                    </span>
                    <span className="text-xs font-semibold text-emerald-600">Exam Ready</span>
                  </div>
                  <h3 className="text-base font-bold text-[#121826]">
                    Real-Life Conversation &amp; Goethe A1 Exam Preparation
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#475569]">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Self-introductions, dialogues &amp; situational role plays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Complete Goethe-Zertifikat A1 exam pattern breakdown</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Mock drills across Hören, Lesen, Schreiben, Sprechen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>Time management, scoring rubrics &amp; model answers</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* Course Outcome Callout */}
              <div className="bg-gradient-to-r from-amber-100/70 via-amber-50 to-amber-100/50 rounded-3xl p-6 sm:p-7 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-charcoal-950 flex items-center justify-center shrink-0 font-bold shadow-2xs">
                  ★
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    Official Course Outcome (A1 Proficiency)
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed italic font-medium">
                    &ldquo;By the end of A1, students should be able to understand and use basic German in familiar everyday situations, introduce themselves, ask and answer simple questions, handle common conversations, write short messages, and build a strong foundation for A2.&rdquo;
                  </p>
                </div>
              </div>
              {/* Prominent Explore Syllabus PDF Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-2">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#991b1b] text-white flex items-center justify-center shrink-0 shadow-md">
                      <FileText className="w-8 h-8 text-amber-300" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-[#b91c1c] uppercase tracking-wider mb-1">
                        <span>Official 5-Page PDF Document</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                        <span>German With Gaurav</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#121826]">
                        Explore the Full A1 German Course Syllabus
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-xl">
                        View or download the complete 5-page curriculum document covering all 15 chapters, grammar structures, vocabulary topics, and official Goethe examination guidelines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Primary CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-[#64748b] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant access — opens directly in your browser or downloadable as PDF.</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <a
                      href="/syllabus/a1-german-course-syllabus.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-charcoal-900 text-white hover:bg-[#b91c1c] transition-all shadow-md group"
                    >
                      <FileText className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                      <span>Explore Syllabus (PDF)</span>
                      <ExternalLink className="w-4 h-4 text-white/70" />
                    </a>

                    <a
                      href="/syllabus/a1-german-course-syllabus.pdf"
                      download="German-With-Gaurav-A1-Syllabus.pdf"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[var(--sand-100)] text-charcoal-900 hover:bg-[var(--sand-200)] transition-colors shadow-2xs"
                    >
                      <Download className="w-4 h-4 text-charcoal-600" />
                      <span>Download</span>
                    </a>

                    <a
                      href={`https://wa.me/919960886075?text=${encodeURIComponent("Hi Gaurav, I have reviewed the A1 German syllabus PDF and would like to know about the upcoming batch dates.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-2xs"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Inquire WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ) : (
            /* Standard Course Curriculum Overview for A2 / B1 */
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-2">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#991b1b] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-[#b91c1c] uppercase tracking-wider mb-1">
                      <span>Official PDF Syllabus</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
                      <span>2026/2027 Cohort Edition</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#121826]">
                      Complete {course.level} Curriculum &amp; Exam Blueprint
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] mt-1">
                      Comprehensive study breakdown covering grammar rules, situational vocabulary, dialogue scripts, and official Goethe examination practice.
                    </p>
                  </div>
                </div>
              </div>

              {/* High-Level Overview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[var(--sand-50)] p-6 rounded-2xl shadow-2xs space-y-2">
                  <span className="text-[11px] font-bold text-[#b91c1c] uppercase tracking-wider">Pillar 1</span>
                  <h4 className="text-sm font-bold text-[#121826]">Spoken Interaction &amp; Phonetics</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    Real-time dialogue practice, native German pronunciation correction, and situational roleplay in every 90-minute live class.
                  </p>
                </div>

                <div className="bg-[var(--sand-50)] p-6 rounded-2xl shadow-2xs space-y-2">
                  <span className="text-[11px] font-bold text-[#b91c1c] uppercase tracking-wider">Pillar 2</span>
                  <h4 className="text-sm font-bold text-[#121826]">Grammar Architecture &amp; Logic</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    Systematic sentence structuring, declensions, case systems, and sentence inversion explained logically without confusing jargon.
                  </p>
                </div>

                <div className="bg-[var(--sand-50)] p-6 rounded-2xl shadow-2xs space-y-2">
                  <span className="text-[11px] font-bold text-[#b91c1c] uppercase tracking-wider">Pillar 3</span>
                  <h4 className="text-sm font-bold text-[#121826]">Listening &amp; Reading Comprehension</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    Authentic audio tracks from licensed Netzwerk textbooks, everyday announcements, workplace emails, and German media excerpts.
                  </p>
                </div>

                <div className="bg-[var(--sand-50)] p-6 rounded-2xl shadow-2xs space-y-2">
                  <span className="text-[11px] font-bold text-[#b91c1c] uppercase tracking-wider">Pillar 4</span>
                  <h4 className="text-sm font-bold text-[#121826]">Goethe-Zertifikat Exam Preparation</h4>
                  <p className="text-xs text-[#64748b] leading-relaxed">
                    Timed mock tests across Lesen, Hören, Schreiben, and Sprechen with personalized instructor feedback and scoring rubrics.
                  </p>
                </div>
              </div>

              {/* Download / WhatsApp Request Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#64748b] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>The complete course syllabus PDF will be shared directly upon enrollment inquiry.</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/919960886075?text=${encodeURIComponent(`Hi Gaurav, please share the ${course.title} detailed syllabus PDF and next batch schedule.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-700 text-white hover:bg-emerald-800 transition-colors shadow-xs"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Syllabus PDF (WhatsApp)</span>
                  </a>

                  <Link
                    href="/book-demo"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#121826] text-white hover:bg-[#b91c1c] transition-colors shadow-xs"
                  >
                    <span>Book Free Demo</span>
                  </Link>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* 6. Class Structure, Batch Info & Study Materials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/80 px-3.5 py-1 rounded-full shadow-2xs">
              STRUCTURE &amp; BATCH DETAILS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-900 tracking-tight">
              How the Classes Are Structured
            </h2>
            <p className="text-base text-charcoal-600">
              Designed around active conversational repetition, small groups of 5–7, and stress-free flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--sand-50)] p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="text-lg font-bold text-charcoal-900 mb-1">Duration &amp; Hours</h3>
              <p className="text-xs sm:text-sm text-charcoal-600">{course.duration}</p>
              <p className="text-xs text-charcoal-400 mt-2">{course.sessionDuration} per live session</p>
            </div>

            <div className="bg-[var(--sand-50)] p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="text-lg font-bold text-charcoal-900 mb-1">Small Batch Size</h3>
              <p className="text-xs sm:text-sm text-charcoal-600">{course.batchSize}</p>
              <p className="text-xs text-charcoal-400 mt-2">Every student speaks every day</p>
            </div>

            <div className="bg-[var(--sand-50)] p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <Video className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-charcoal-900 mb-1">Class Recordings</h3>
              <p className="text-xs sm:text-sm text-charcoal-600">Never fall behind if you miss a lesson</p>
              <p className="text-xs text-charcoal-400 mt-2">{course.recordedSessions}</p>
            </div>

            <div className="bg-[var(--sand-50)] p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-charcoal-900 mb-1">Exam Simulations</h3>
              <p className="text-xs sm:text-sm text-charcoal-600">{course.examPreparation}</p>
              <p className="text-xs text-charcoal-400 mt-2">Goethe Start Deutsch &amp; ÖSD</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Teacher Section */}
      <section className="py-16 sm:py-20 bg-[var(--sand-50)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-charcoal-900 to-charcoal-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp"
                  alt="Gaurav Raghuvanshi - German Teacher"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-top"
                />
              </div>

              <div className="md:col-span-8 space-y-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  YOUR INSTRUCTOR
                </span>
                <h2 className="text-3xl font-black text-white">
                  Gaurav Raghuvanshi
                </h2>
                <p className="text-amber-300 text-sm font-semibold">
                  Founder &amp; German Language Trainer with 19+ Years of Experience
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Gaurav personally conducts our {course.title} batches, bringing nearly two decades of proven instructional experience. His methodology deconstructs complex grammar cases, removes hesitation, and gives you individual pronunciation corrections so you speak German proudly from week one.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Read Gaurav&apos;s Full Teaching Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. Pathway Progression Bridge */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--sand-50)] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/70 px-3 py-1 rounded-full shadow-2xs">
                PATHWAY CONTINUATION
              </span>
              <h3 className="text-2xl font-black text-charcoal-900">
                {nextCourse
                  ? `Next Step: ${nextCourse.title}`
                  : "Next Step: Professional German & Working in Germany"}
              </h3>
              <p className="text-sm text-charcoal-600 max-w-xl">
                {nextCourse
                  ? `Continue your CEFR progression seamlessly from ${course.level} to ${nextCourse.level}. Deepen grammar nuances, expand your working vocabulary, and step closer to professional independence.`
                  : "Advance towards vocational German fluency, technical interview preparation, and Germany immigration pathways."}
              </p>
            </div>

            <div>
              {nextCourse ? (
                <Link
                  href={`/courses/${nextCourse.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-charcoal-900 text-white hover:bg-amber-400 hover:text-charcoal-950 transition-all shadow-xs shrink-0"
                >
                  <span>Explore {nextCourse.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  href="/learning-paths/professional-german"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-charcoal-900 text-white hover:bg-amber-400 hover:text-charcoal-950 transition-all shadow-xs shrink-0"
                >
                  <span>Explore Professional Path</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Course Specific FAQs */}
      <section className="py-16 sm:py-20 bg-[var(--sand-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/80 px-3.5 py-1 rounded-full shadow-2xs">
              COURSE QUESTIONS
            </span>
            <h2 className="text-3xl font-black text-charcoal-900 tracking-tight">
              {course.title} FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {course.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm space-y-2">
                <h3 className="text-base font-bold text-charcoal-900">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <FinalCTA />
    </>
  );
}
