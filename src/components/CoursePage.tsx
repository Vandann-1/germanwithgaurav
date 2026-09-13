import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CourseDetail } from "@/data/coursesData";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "./Breadcrumbs";
import { CourseCurriculum } from "./CourseCurriculum";
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
} from "lucide-react";

interface CoursePageProps {
  course: CourseDetail;
}

export function CoursePage({ course }: CoursePageProps) {
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
          url: "https://germanwithgaurav.com/about-gaurav-raghuvanshi",
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
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* 1. Course Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/30 via-white to-white py-12 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col: Info & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 text-xs font-bold tracking-wide uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{course.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-amber-700">
                {course.subheading}
              </p>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {course.shortDescription}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Duration</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{course.duration}</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1">
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span>Batch Size</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{course.batchSize.split("Maximum")[0].trim()}</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mb-1">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span>Exam Prep</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">Goethe {course.level}</p>
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <Link
                  href="/book-a-free-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base bg-amber-400 text-slate-950 hover:bg-amber-500 shadow-md transition-all active:scale-98"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Book Free Demo Session</span>
                </Link>

                <a
                  href="#curriculum"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-xs"
                >
                  <span>Explore Syllabus</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Callout */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero registration fee for consultation. Free level assessment included.</span>
              </div>
            </div>

            {/* Right Col: Course Card Feature Box (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Course Snapshot</span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Live Online Classes
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Schedule</strong>
                      <span className="text-slate-600">{course.classesPerWeek} ({course.sessionDuration})</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Licensed Books & PDFs</strong>
                      <span className="text-slate-600">{course.studyMaterial}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Session Recordings</strong>
                      <span className="text-slate-600">{course.recordedSessions}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">Examination Training</strong>
                      <span className="text-slate-600">{course.examPreparation}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-emerald-800 bg-emerald-50 hover:bg-emerald-100 font-bold text-xs sm:text-sm text-center border border-emerald-200 transition-colors"
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
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              In-Depth Overview
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              About the {course.title}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {course.fullOverview}
          </p>
        </div>
      </section>

      {/* 3 & 4. Who It's For & Learning Outcomes */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Who It's For */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-sm">?</span>
                Who This Course Is For
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                {course.targetAudience.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">✓</span>
                Learning Outcomes
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
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

      {/* 5. Complete Curriculum Accordion */}
      <CourseCurriculum curriculum={course.curriculum} courseTitle={course.title} />

      {/* 6. Class Structure, Batch Info & Study Materials */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              STRUCTURE &amp; BATCH DETAILS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              How the Classes Are Structured
            </h2>
            <p className="text-base text-slate-600">
              Designed around active conversational repetition, small groups, and stress-free flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <Clock className="w-8 h-8 text-amber-600 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">Duration &amp; Hours</h3>
              <p className="text-xs sm:text-sm text-slate-600">{course.duration}</p>
              <p className="text-xs text-slate-400 mt-2">{course.sessionDuration} per live session</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <Users className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">Small Batch Size</h3>
              <p className="text-xs sm:text-sm text-slate-600">{course.batchSize}</p>
              <p className="text-xs text-slate-400 mt-2">Every student speaks every day</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <Video className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">Class Recordings</h3>
              <p className="text-xs sm:text-sm text-slate-600">Never fall behind if you miss a lesson</p>
              <p className="text-xs text-slate-400 mt-2">{course.recordedSessions}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <Award className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">Exam Simulations</h3>
              <p className="text-xs sm:text-sm text-slate-600">{course.examPreparation}</p>
              <p className="text-xs text-slate-400 mt-2">Goethe Start Deutsch &amp; ÖSD</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Teacher Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-4 relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-slate-700">
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

      {/* 8. Course Specific FAQs */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              COURSE QUESTIONS
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              {course.title} FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {course.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2">
                <h3 className="text-base font-bold text-slate-900">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <FinalCTA />
    </>
  );
}
