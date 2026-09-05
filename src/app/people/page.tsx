import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { peopleData } from "@/data/peopleData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinalCTA } from "@/components/FinalCTA";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import { LinkedinIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "People at GWG | Instructors & Educators | German With Gaurav",
  description:
    "Meet the passionate educators behind German With Gaurav: Founder Gaurav Raghuvanshi and native German advisor Frau Caprice.",
  alternates: {
    canonical: "/people",
  },
};

export default function PeoplePage() {
  const breadcrumbs = [{ label: "People at GWG" }];

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3.5 py-1 rounded-full">
            OUR EDUCATORS &amp; ADVISORS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            People at German With Gaurav
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Guided by Experts. Driven by Results. Meet the educators dedicated to your German language and career journey.
          </p>
        </div>
      </section>

      {/* Team Profiles Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {peopleData.map((person, idx) => (
            <div
              key={person.id}
              className={`bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Photo */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-lg">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    {person.badge}
                  </span>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                    {person.name}
                  </h2>
                  <p className="text-amber-700 font-semibold text-sm mt-1">
                    {person.role}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  {person.fullBio.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Highlights &amp; Credentials
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {person.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/book-a-free-demo"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shadow"
                  >
                    <span>Connect for Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {person.linkedIn && (
                    <a
                      href={person.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-amber-700 transition-colors"
                      aria-label={`${person.name} LinkedIn Profile`}
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
