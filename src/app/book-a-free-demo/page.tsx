import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DemoBookingForm } from "@/components/DemoBookingForm";
import {
  Users,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Free Demo Class | German With Gaurav",
  description:
    "Schedule a free 1-on-1 German demo consultation with Gaurav Raghuvanshi. Receive a 10-minute level diagnostic, batch schedule recommendations, and a personalized study roadmap.",
  alternates: {
    canonical: "/book-a-free-demo",
  },
};

export default function BookFreeDemoPage() {
  const breadcrumbs = [{ label: "Book Free Demo" }];

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Main Conversion Hero */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Col: Conversion Arguments & Trust Proof (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>PRIMARY ADMISSIONS FUNNEL</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Experience the Difference in a <span className="text-amber-600">Free Demo Class</span>
              </h1>

              <p className="text-base text-slate-600 leading-relaxed">
                Don’t commit blindly to any German language institute. Book a 20-minute consultation with Gaurav Raghuvanshi to see exactly how our conversational method works.
              </p>

              {/* What Happens in Demo */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>What You Get in Your Session:</span>
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span><strong>10-Minute Pronunciation Diagnostic:</strong> Identify phonetic habits and learn how to pronounce tricky German umlauts (ä, ö, ü) effortlessly.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span><strong>Tailored Milestone Plan:</strong> Timeline calculation for when you will reach B1 or B2 for your target visa intake or job start date.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span><strong>Curriculum &amp; PDF Preview:</strong> Inspection of our licensed Netzwerk textbooks and colourful grammar exercise sheets.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span><strong>Direct Q&amp;A:</strong> Ask Gaurav any questions about living costs, Goethe exam test centers, or work culture in Germany.</span>
                  </li>
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <Award className="w-5 h-5 text-amber-600 mb-1" />
                  <p className="text-lg font-black text-slate-900">19+ Years</p>
                  <p className="text-xs text-slate-500">Teaching Experience</p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                  <Users className="w-5 h-5 text-emerald-600 mb-1" />
                  <p className="text-lg font-black text-slate-900">5–7 Students</p>
                  <p className="text-xs text-slate-500">Per Batch Guarantee</p>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2 text-xs text-slate-500">
                <span>Want an immediate response? </span>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-bold hover:underline"
                >
                  Chat with Gaurav on WhatsApp →
                </a>
              </div>
            </div>

            {/* Right Col: Booking Form (7 cols) */}
            <div className="lg:col-span-7">
              <DemoBookingForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
