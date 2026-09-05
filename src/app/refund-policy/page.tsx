import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Refund Policy | German With Gaurav",
  description: "Clear and transparent refund and batch transfer policies for German With Gaurav language courses.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  const breadcrumbs = [{ label: "Refund Policy" }];

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
          Refund &amp; Batch Transfer Policy
        </h1>
        <p className="text-xs text-slate-400 mb-8">Last updated: January 2026</p>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700">
          <p>
            At <strong>German With Gaurav</strong>, student satisfaction and instructional transparency are our highest priorities. Because our batches are strictly capped at <strong>5 to 7 students</strong>, each seat represents an exclusive operational commitment.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">1. Free Demo Before Payment</h2>
          <p>
            We encourage all students to attend our <strong>Free 1-on-1 Demo Consultation</strong> before making any financial commitment. This allows you to evaluate our teaching methodology, examine the course curriculum, and verify batch timings risk-free.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">2. Refund Eligibility</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Prior to Course Commencement:</strong> If a student requests cancellation at least 48 hours prior to the batch start date, a 100% refund (minus a nominal payment gateway processing fee of 3%) will be issued.</li>
            <li><strong>After Course Commencement:</strong> Once a batch has commenced and classes have begun, fee refunds are generally not permitted as seat allocation is fixed.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-6">3. Flexible Batch Transfer Option</h2>
          <p>
            We understand that unforeseen workplace obligations, university exams, or health matters can arise. In lieu of cancellation, students may request to pause their enrollment and transfer into an upcoming batch or alternate timing without additional penalty, subject to seat availability.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">4. Processing Time</h2>
          <p>
            Approved refunds are credited back to the original method of payment (bank transfer, UPI, or card) within 5 to 7 business days.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">5. Contact Support</h2>
          <p>
            For any billing or batch transfer inquiries, please reach out to:
          </p>
          <p className="font-semibold text-slate-900">
            Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-amber-700 hover:underline">{siteConfig.contact.email}</a><br />
            Phone / WhatsApp: {siteConfig.contact.phone}
          </p>
        </div>
      </main>
    </>
  );
}
