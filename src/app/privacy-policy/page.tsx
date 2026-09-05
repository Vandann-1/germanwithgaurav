import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | German With Gaurav",
  description: "Privacy policy and data protection disclosures for German With Gaurav Language Academy.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [{ label: "Privacy Policy" }];

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400 mb-8">Last updated: January 2026</p>

        <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700">
          <p>
            At <strong>German With Gaurav</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we are committed to safeguarding the privacy and personal data of our students, prospective learners, and website visitors. This Privacy Policy explains what information we collect, how it is used, and your rights regarding your data.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">1. Information We Collect</h2>
          <p>
            When you contact us, book a free demo class, or register for an online German course, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Personal details: Name, email address, phone / WhatsApp number</li>
            <li>Academic / professional preferences: Current German language level, target CEFR goals, preferred batch times</li>
            <li>Communications: Messages submitted via our contact forms or direct email inquiries</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-6">2. How We Use Your Information</h2>
          <p>We use your information exclusively to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Coordinate and confirm your free demo sessions and class timings</li>
            <li>Deliver live German classes, course study materials, and session recordings</li>
            <li>Send administrative updates, mock exam schedules, and diagnostic feedback</li>
            <li>Respond to your direct inquiries via phone, email, or WhatsApp</li>
          </ul>
          <p>We <strong>never sell, rent, or trade</strong> your personal information to third-party marketing companies.</p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">3. Data Security</h2>
          <p>
            We implement strict security measures to protect your personal information from unauthorized access, alteration, or disclosure. Communications with our website are encrypted via SSL/TLS protocols.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-6">4. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request deletion of your information, please contact us at:
          </p>
          <p className="font-semibold text-slate-900">
            German With Gaurav<br />
            1129, The Collection, New Kalyani Nagar, Wadgaon Sheri Road, Pune – 411014<br />
            Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-amber-700 hover:underline">{siteConfig.contact.email}</a><br />
            Phone: {siteConfig.contact.phone}
          </p>
        </div>
      </main>
    </>
  );
}
