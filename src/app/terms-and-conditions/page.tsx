import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions | German With Gaurav",
  description: "Terms and conditions for enrollment and participation in German With Gaurav courses.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const breadcrumbs = [{ label: "Terms & Conditions" }];

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
          Terms and Conditions
        </h1>
        <p className="text-xs text-slate-400 mb-8">Last updated: January 2026</p>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700">
          <p>
            Welcome to <strong>German With Gaurav</strong>. By enrolling in our German language courses, attending demo consultations, or utilizing our educational materials, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">1. Course Enrollment &amp; Attendance</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Course batches are strictly limited to 5–7 students to maintain instructional excellence and high individual student speaking time.</li>
            <li>Enrolled students are expected to maintain punctuality and regular attendance. In the event of an unavoidable absence, recorded session videos are provided for revision.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-6">2. Study Materials &amp; Intellectual Property</h2>
          <p>
            All custom learning sheets, presentation slides, mock examination papers, and class recordings provided by German With Gaurav are for the personal, non-commercial use of the registered student only. Redistribution, uploading, or reselling of course materials is strictly prohibited.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">3. Official Certifications</h2>
          <p>
            German With Gaurav provides course completion certificates verifying instructional hours and CEFR coverage. Formal international certifications (such as the Goethe-Zertifikat) must be taken through authorized examination centers (e.g., Goethe-Institut / Max Mueller Bhavan). German With Gaurav provides comprehensive exam training but does not set external examination dates or grading.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">4. Modifications to Courses</h2>
          <p>
            We reserve the right to reschedule specific sessions with reasonable advance notice in the event of instructor illness, technical interruptions, or national holidays. Any rescheduled class will be completed in full.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">5. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India, under the jurisdiction of the courts of Pune, Maharashtra.
          </p>
        </div>
      </main>
    </>
  );
}
