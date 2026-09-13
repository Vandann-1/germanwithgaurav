import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { testimonialsData } from "@/data/testimonialsData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRight, Sparkles } from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Gaurav Raghuvanshi | German Language Teacher & Founder | German With Gaurav",
  description:
    "Official profile of Gaurav Raghuvanshi, German language teacher and founder of German With Gaurav. Learn about his teaching methodology, small-batch system, and Goethe exam preparation.",
  alternates: {
    canonical: "/about-gaurav-raghuvanshi",
  },
  openGraph: {
    title: "Gaurav Raghuvanshi | German Language Teacher | German With Gaurav",
    description:
      "Official entity page for Gaurav Raghuvanshi, German educator and founder of German With Gaurav. Specialized in CEFR A1, A2, and B1 German instruction for Indian students and professionals.",
    url: "https://germanwithgaurav.com/about-gaurav-raghuvanshi",
    type: "profile",
    images: [
      {
        url: "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
        width: 1200,
        height: 630,
        alt: "Gaurav Raghuvanshi - German Language Teacher",
      },
    ],
  },
};

export default function AboutGauravPage() {
  const breadcrumbs = [{ label: "About Gaurav Raghuvanshi" }];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://germanwithgaurav.com/about-gaurav-raghuvanshi#webpage",
        url: "https://germanwithgaurav.com/about-gaurav-raghuvanshi",
        name: "Gaurav Raghuvanshi - Official Profile | German With Gaurav",
        mainEntity: {
          "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
        },
      },
      {
        "@type": "Person",
        "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
        name: "Gaurav Raghuvanshi",
        jobTitle: "German Language Teacher & Founder",
        worksFor: {
          "@id": "https://germanwithgaurav.com/#organization",
        },
        url: "https://germanwithgaurav.com/about-gaurav-raghuvanshi",
        image: "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
        description:
          "Gaurav Raghuvanshi is a dedicated German language teacher and the founder of German With Gaurav. He mentors students, engineers, healthcare workers, and working professionals across India and abroad in German A1, A2, and B1 levels with an emphasis on conversational fluency and Goethe-Zertifikat preparation.",
        knowsAbout: [
          "German Language Teaching",
          "Goethe-Zertifikat A1",
          "Goethe-Zertifikat A2",
          "Goethe-Zertifikat B1",
          "CEFR German Language Curriculum",
          "German Language Requirements for Studying in Germany",
          "German Language Requirements for Working in Germany",
        ],
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.youtube,
          siteConfig.social.linkedin,
        ],
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://germanwithgaurav.com/#organization",
        name: "German With Gaurav",
        url: "https://germanwithgaurav.com",
        founder: {
          "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />

      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero Header: Official Entity Introduction */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Professional Photograph */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                  <div className="relative aspect-[4/5] w-full bg-slate-100">
                    <Image
                      src="https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp"
                      alt="Gaurav Raghuvanshi - German Language Teacher and Founder of German With Gaurav"
                      fill
                      priority
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 450px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-4 bg-[#08175e] text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-amber-300">Teaching German Since 2005</p>
                      <p className="text-sm font-bold text-white">Gaurav Raghuvanshi</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 font-bold text-xs">
                      Lead Mentor
                    </span>
                  </div>
                </div>

                {/* Verified Social Channels */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-[#08175e] hover:text-white transition-colors text-xs font-semibold text-slate-700"
                    aria-label="Gaurav Raghuvanshi on LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-red-600 hover:text-white transition-colors text-xs font-semibold text-slate-700"
                    aria-label="German With Gaurav on YouTube"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-pink-600 hover:text-white transition-colors text-xs font-semibold text-slate-700"
                    aria-label="German With Gaurav on Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Biography & Verification Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300 text-xs font-bold tracking-wide uppercase">
                  <span>OFFICIAL EDUCATOR PROFILE</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Gaurav Raghuvanshi
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-amber-700">
                  German Language Teacher &amp; Founder — German With Gaurav
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  <strong>Gaurav Raghuvanshi</strong> is an experienced German language teacher based in Pune, Maharashtra, India, and the founder of the online language academy <strong>German With Gaurav</strong>. Over nearly two decades of classroom and live online instruction, Gaurav has dedicated his professional career to helping Indian students, engineers, medical professionals, and job seekers conquer the German language.
                </p>
                <p>
                  Rather than teaching German through passive app swiping or robotic grammar tables, Gaurav developed a conversational instructional framework centered around high personal talk-time, clear sentence mechanics, and structured Goethe-Zertifikat preparation.
                </p>
                <p>
                  Every batch at German With Gaurav is strictly capped at <strong>5 to 7 learners</strong>, ensuring each student receives live verbal correction, personalized pronunciation feedback, and rigorous mock test practice.
                </p>
              </div>

              {/* Verified Core Competencies */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-400">Primary Specialty</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">CEFR A1, A2 &amp; B1</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-bold uppercase text-slate-400">Batch Format</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">5–7 Students / Batch</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                  <p className="text-xs font-bold uppercase text-slate-400">Exam Preparation</p>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">Goethe-Zertifikat</p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-a-free-demo"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#08175e] text-white font-bold text-sm hover:bg-[#050f42] transition-colors shadow"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Book Demo Consultation with Gaurav</span>
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 border border-slate-300 font-bold text-sm hover:bg-slate-50 transition-colors"
                >
                  <span>View Courses (A1–B1)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Teaching Philosophy & The GWG Method */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3.5 py-1 rounded-full">
              PEDAGOGICAL APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Gaurav&apos;s Teaching Philosophy
            </h2>
            <p className="text-base text-slate-600">
              Why traditional methods fail, and how our conversational system gets learners speaking German in real life.
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                1. Intuitive Grammar Logic Over Dry Memorization
              </h3>
              <p>
                German grammar has a reputation for being intimidating due to four noun cases (Nominative, Accusative, Dative, Genitive) and gendered articles (der, die, das). Gaurav deconstructs these rules using relatable real-life analogies and logical sentence blueprints, helping Indian learners understand how German grammar mirrors the structural logic of languages they already know.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                2. High Student Talk-Time in Small Batches
              </h3>
              <p>
                In a standard class of 20 to 30 students, each learner speaks for barely 60 seconds per session. At German With Gaurav, batch size is strictly capped at 5 to 7 learners. Students engage in daily roleplays, partner conversations, and spoken Q&amp;A drills from Day 1.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                3. Comprehensive 4-Skill Mastery &amp; Goethe Preparation
              </h3>
              <p>
                Fluency requires balanced command of all four CEFR components: <em>Hören</em> (Listening), <em>Lesen</em> (Reading), <em>Schreiben</em> (Writing), and <em>Sprechen</em> (Speaking). Gaurav integrates official Goethe-Zertifikat mock examinations, timed writing rubrics, and audio drills into every course level so learners feel completely prepared for official certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Student Outcomes */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3.5 py-1 rounded-full">
              STUDENT EXPERIENCES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Feedback from Gaurav&apos;s Students
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Verified reviews from learners who studied German with Gaurav Raghuvanshi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md inline-block">
                    {review.courseTaken}
                  </p>
                  <p className="text-sm text-slate-600 italic leading-relaxed">
                    &ldquo;{review.reviewText}&rdquo;
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.role} • Verified via {review.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Led by Gaurav Raghuvanshi */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            German Language Courses Led by Gaurav
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Choose your current level to begin structured learning with personal mentorship from Gaurav Raghuvanshi.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <Link
              href="/courses/a1-german"
              className="p-5 rounded-2xl border-2 border-slate-200 hover:border-[#08175e] hover:shadow-md transition-all group bg-slate-50/50"
            >
              <span className="text-xs font-bold text-amber-700 uppercase">Beginner</span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#08175e] mt-1">A1 German Course</h3>
              <p className="text-xs text-slate-600 mt-2">100+ Hours • Everyday fluency foundation &amp; Goethe A1 prep.</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#08175e] mt-4">
                View Syllabus <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/courses/a2-german"
              className="p-5 rounded-2xl border-2 border-slate-200 hover:border-[#08175e] hover:shadow-md transition-all group bg-slate-50/50"
            >
              <span className="text-xs font-bold text-amber-700 uppercase">Elementary</span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#08175e] mt-1">A2 German Course</h3>
              <p className="text-xs text-slate-600 mt-2">100+ Hours • Dative case, past tense, and workplace interactions.</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#08175e] mt-4">
                View Syllabus <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/courses/b1-german"
              className="p-5 rounded-2xl border-2 border-slate-200 hover:border-[#08175e] hover:shadow-md transition-all group bg-slate-50/50"
            >
              <span className="text-xs font-bold text-amber-700 uppercase">Intermediate</span>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#08175e] mt-1">B1 German Course</h3>
              <p className="text-xs text-slate-600 mt-2">100+ Hours • Independent fluency for jobs, Studienkolleg &amp; visa.</p>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#08175e] mt-4">
                View Syllabus <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
