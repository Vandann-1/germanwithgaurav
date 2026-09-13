import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Stats } from "@/components/Stats";
import { TeachingMethod } from "@/components/TeachingMethod";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Gaurav Raghuvanshi | German Language Teacher | German With Gaurav",
  description:
    "Learn about Gaurav Raghuvanshi, German educator with 19+ years of teaching experience. Discover the GWG methodology, student achievements, and our Pune language academy.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About Gaurav" }];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
    name: "Gaurav Raghuvanshi",
    jobTitle: "German Language Teacher & Founder",
    worksFor: {
      "@type": "EducationalOrganization",
      "@id": "https://germanwithgaurav.com/#organization",
      name: "German With Gaurav",
      url: "https://germanwithgaurav.com",
    },
    description: siteConfig.founder.bio,
    url: "https://germanwithgaurav.com/about-gaurav-raghuvanshi",
    image: "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
    ],
  };

  return (
    <>
      <JsonLd data={personJsonLd} />

      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero / Intro Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm">
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                  <div className="relative aspect-[4/5] w-full bg-slate-100">
                    <Image
                      src="https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp"
                      alt="Gaurav Raghuvanshi - German Language Teacher with 19+ Years Experience"
                      fill
                      priority
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 450px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-amber-300">Teaching German Since 2005</p>
                      <p className="text-sm font-bold text-white">19+ Years Classroom Mentorship</p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm shrink-0">
                      19+
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold tracking-wide">
                  <span>Founder & Lead German Educator</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                  Meet Gaurav Raghuvanshi <br />
                  <span className="text-amber-600">Your German Language Teacher</span>
                </h1>
              </div>

              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                You haven&apos;t reached the limits of your German ability. You&apos;ve just been studying with the wrong system!
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Fluency doesn’t come from memorizing random words, dry grammar rules, or switching aimlessly between gamified phone apps. It comes from clear, structured lessons focused simultaneously on <strong>speaking, listening, reading, and writing</strong>.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Improving your German doesn&apos;t have to feel like overwhelming, tedious work. It can—and should—feel genuinely fun and rewarding! Because the more you enjoy your lessons and the more you speak in every session, the faster you achieve real fluency that stays with you forever.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Practical German</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Simple Grammar Logic</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Speaking Confidence</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Personalised Guidance</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/book-a-free-demo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-amber-400 text-slate-950 hover:bg-amber-500 transition-all shadow hover:shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book a Free Diagnostic Session</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Centralized Stats Component */}
      <Stats variant="dark" />

      {/* Teaching Method */}
      <TeachingMethod />

      <FinalCTA />
    </>
  );
}
