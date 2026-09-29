import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { learningPathsData } from "@/data/learningPathsData";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import {
  Clock,
  Target,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  GraduationCap,
  Calendar,
  PhoneCall,
  Lightbulb,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return learningPathsData.map((path) => ({
    slug: path.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = learningPathsData.find((p) => p.slug === slug);

  if (!path) {
    return {
      title: "Learning Path Not Found | German With Gaurav",
    };
  }

  return {
    title: `${path.title} Roadmap | German With Gaurav`,
    description: `${path.subtitle} Structured German pathway designed for ${path.targetLevel}. Small batches of 5–7 with Gaurav Raghuvanshi.`,
    alternates: {
      canonical: `/learning-paths/${path.slug}`,
    },
    openGraph: {
      title: `${path.title} Roadmap | German With Gaurav`,
      description: path.subtitle,
      url: `https://germanwithgaurav.com/learning-paths/${path.slug}`,
      type: "website",
    },
  };
}

export default async function LearningPathDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const path = learningPathsData.find((p) => p.slug === slug);

  if (!path) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Learning Paths", href: "/learning-paths" },
    { label: path.title },
  ];

  const pathSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: `${path.title} - German Language Roadmap`,
    description: path.subtitle,
    provider: {
      "@type": "EducationalOrganization",
      name: "German With Gaurav",
      url: "https://germanwithgaurav.com",
    },
    timeToComplete: path.duration,
    educationalCredentialAwarded: path.targetLevel,
  };

  return (
    <>
      <JsonLd data={pathSchema} />

      {/* Breadcrumbs */}
      <div className="bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-[var(--sand-100)] via-white to-white border-b border-[var(--sand-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold tracking-wide uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{path.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-charcoal-900 tracking-tight leading-tight">
                {path.title}
              </h1>

              <p className="text-lg sm:text-xl font-bold text-amber-800 leading-snug">
                {path.subtitle}
              </p>

              {/* Path Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-[var(--sand-300)] shadow-xs">
                  <div className="flex items-center gap-1.5 text-charcoal-500 text-xs font-semibold mb-1">
                    <Target className="w-4 h-4 text-amber-600" />
                    <span>Target Level</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-900">{path.targetLevel}</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[var(--sand-300)] shadow-xs">
                  <div className="flex items-center gap-1.5 text-charcoal-500 text-xs font-semibold mb-1">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Total Duration</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-900">{path.duration}</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[var(--sand-300)] shadow-xs col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-charcoal-500 text-xs font-semibold mb-1">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Batch Size</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-charcoal-900">5–7 Students Max</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <Link
                  href="/book-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base bg-amber-400 text-charcoal-950 hover:bg-amber-500 shadow-md transition-all active:scale-98"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Book Free Pathway Consultation</span>
                </Link>

                <a
                  href="#courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base bg-charcoal-900 text-white hover:bg-charcoal-800 transition-all shadow-xs"
                >
                  <span>View Recommended Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Col: Track Features Box (5 cols) - Picture-free Hero */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-[var(--sand-300)] p-6 sm:p-7 shadow-xl space-y-5">
                {/* Academic Pathway Header with Brand Styling */}
                <div className="bg-gradient-to-br from-[#8b0000] via-[#991b1b] to-[#7f1d1d] text-white p-5 rounded-2xl space-y-2 border border-red-800 shadow-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-amber-300 font-bold uppercase tracking-wider">
                      Specialized Career Track
                    </span>
                    <span className="bg-white/20 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold border border-white/30">
                      {path.badge}
                    </span>
                  </div>
                  <div className="text-xl font-black tracking-tight text-white">{path.title}</div>
                  <p className="text-xs text-red-100 leading-relaxed">{path.subtitle}</p>
                </div>

                <div className="flex items-center justify-between border-b border-[var(--sand-200)] pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Track Features</span>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Live Mentor-Led
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-charcoal-900 font-bold">Official Goethe &amp; CEFR Focus</strong>
                      <span className="text-charcoal-600">Aligned with Goethe-Zertifikat and international visa requirements.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-charcoal-900 font-bold">Authentic Licensed Materials</strong>
                      <span className="text-charcoal-600">Netzwerk Kursbuch &amp; Arbeitsbuch plus custom vocabulary glossaries.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-charcoal-900 font-bold">Flexible Batch Timings</strong>
                      <span className="text-charcoal-600">Morning, evening, and weekend batches tailored to working schedules.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--sand-200)]">
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

      {/* 2. Target Audience & Key Outcomes Grid */}
      <section className="py-16 sm:py-20 bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Who It's For */}
            <div className="bg-white rounded-3xl p-8 border border-[var(--sand-300)] shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-charcoal-900 tracking-tight flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-amber-400 text-charcoal-950 flex items-center justify-center font-bold text-sm">?</span>
                Who This Pathway Is For
              </h2>
              <ul className="space-y-3.5 text-sm text-charcoal-700">
                {path.targetAudience.map((audience, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Outcomes */}
            <div className="bg-white rounded-3xl p-8 border border-[var(--sand-300)] shadow-xs space-y-6">
              <h2 className="text-2xl font-black text-charcoal-900 tracking-tight flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">✓</span>
                Key Milestone Outcomes
              </h2>
              <ul className="space-y-3.5 text-sm text-charcoal-700">
                {path.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Curriculum Highlights */}
      <section className="py-16 sm:py-20 bg-white border-b border-[var(--sand-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              CONTENT BREAKDOWN
            </span>
            <h2 className="text-3xl font-black text-charcoal-900 tracking-tight">
              Curriculum Modules &amp; Focus Areas
            </h2>
            <p className="text-sm text-charcoal-600">
              Systematic progression that removes guesswork and builds genuine communicative capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {path.curriculumHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-[var(--sand-50)] p-6 rounded-2xl border border-[var(--sand-300)] shadow-xs space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-charcoal-950 font-black text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-charcoal-900">
                  {highlight.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Mentor Advice Section */}
      <section className="py-16 bg-[var(--sand-100)] border-b border-[var(--sand-300)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[var(--sand-300)] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-charcoal-950 flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  MENTOR INSIGHT
                </span>
                <h3 className="text-2xl font-black text-charcoal-900">
                  How to Succeed on the {path.title} Path
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              &quot;Most language learners fail not from lack of intelligence, but from lack of active spoken repetition. When you study German in a batch of 20 or 30 people, you speak for barely 2 minutes an hour. That is why our batches are strictly capped at 5 to 7 learners. In every class, you will answer questions, formulate sentence cases out loud, and receive immediate pronunciation correction. Consistency and spoken muscle memory are the secret to passing your Goethe exams and thriving in Germany.&quot;
            </p>

            <div className="pt-2 flex items-center gap-3 border-t border-[var(--sand-200)]">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[var(--sand-300)] shrink-0">
                <Image
                  src="https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp"
                  alt="Gaurav Raghuvanshi"
                  fill
                  sizes="48px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <strong className="block text-sm font-bold text-charcoal-900">Gaurav Raghuvanshi</strong>
                <span className="text-xs text-charcoal-500">Founder &amp; German Teacher (19+ Years Experience)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Recommended Courses Section */}
      <section id="courses" className="py-16 sm:py-20 bg-white border-b border-[var(--sand-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              ENROLLMENT STEPS
            </span>
            <h2 className="text-3xl font-black text-charcoal-900 tracking-tight">
              Recommended Courses for This Path
            </h2>
            <p className="text-sm text-charcoal-600">
              Enroll sequentially or join directly at your diagnostic level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {path.recommendedCourses.map((c) => (
              <div
                key={c.slug}
                className="bg-[var(--sand-50)] rounded-3xl p-7 border border-[var(--sand-300)] shadow-xs flex flex-col justify-between hover:border-amber-400 hover:bg-white transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-charcoal-950 font-mono bg-amber-400 px-3 py-1 rounded-xl">
                      {c.level}
                    </span>
                    <span className="text-xs font-bold text-charcoal-600 bg-white px-2.5 py-1 rounded-full border border-[var(--sand-300)]">
                      100+ Live Hours
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-charcoal-900">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--sand-300)]">
                  <Link
                    href={`/courses/${c.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-charcoal-900 text-white hover:bg-amber-400 hover:text-charcoal-950 font-bold text-xs transition-colors"
                  >
                    <span>View {c.level} Syllabus &amp; Schedule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Goal-Specific FAQs */}
      <section className="py-16 sm:py-20 bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              PATHWAY QUESTIONS
            </span>
            <h2 className="text-3xl font-black text-charcoal-900 tracking-tight">
              {path.title} FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {path.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-[var(--sand-300)] shadow-xs space-y-2">
                <h3 className="text-base font-bold text-charcoal-900">{faq.question}</h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <FinalCTA />
    </>
  );
}
