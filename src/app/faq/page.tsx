import React from "react";
import { Metadata } from "next";
import { faqsData } from "@/data/faqData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQPageClient } from "@/components/FAQPageClient";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";


export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | German With Gaurav",
  description:
    "Find answers to all questions regarding German language courses, batch sizes, class timings, study materials, Goethe exam preparation, and certifications.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  const breadcrumbs = [{ label: "FAQ" }];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${item.directAnswer} ${item.detailedAnswer}`,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3.5 py-1 rounded-full">
            CLEAR &amp; DIRECT ANSWERS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about class schedules, Goethe exam preparation, batch sizes, or study materials? Here is everything you need to know.
          </p>
        </div>
      </section>

      {/* Interactive FAQ Directory */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQPageClient />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
