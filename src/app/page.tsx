import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { faqsData } from "@/data/faqData";
import { Hero } from "@/components/Hero";
import { LearningProblem } from "@/components/LearningProblem";
import { LearningGoals } from "@/components/LearningGoals";
import { AboutGauravSection } from "@/components/AboutGauravSection";
import { Stats } from "@/components/Stats";
import { CourseGrid } from "@/components/CourseGrid";
import { TeachingMethod } from "@/components/TeachingMethod";
import { EducatorVideo } from "@/components/EducatorVideo";
import { LatestBlogSection } from "@/components/LatestBlogSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn German Online with Gaurav Raghuvanshi | German With Gaurav",
  description:
    "Structured online German language courses (A1, A2, B1) for students, engineers, healthcare professionals, and Germany aspirants. Small 5–7 student batches led by Gaurav Raghuvanshi with 19+ years of expertise.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  // Structured Data Schema for Homepage with unified entity IDs
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://germanwithgaurav.com/#website",
        url: "https://germanwithgaurav.com",
        name: "German With Gaurav",
        description: "Learn German Online with German Language Teacher Gaurav Raghuvanshi",
        publisher: {
          "@id": "https://germanwithgaurav.com/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://germanwithgaurav.com/#organization",
        name: "German With Gaurav",
        legalName: siteConfig.legalName,
        url: "https://germanwithgaurav.com",
        logo: {
          "@type": "ImageObject",
          url: "https://germanwithgaurav.com/logo.png",
          caption: "German With Gaurav Logo",
        },
        founder: {
          "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
        },
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.street,
          addressLocality: siteConfig.contact.address.city,
          addressRegion: siteConfig.contact.address.state,
          postalCode: siteConfig.contact.address.postalCode,
          addressCountry: siteConfig.contact.address.country,
        },
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.youtube,
          siteConfig.social.linkedin,
        ],
      },
      {
        "@type": "Person",
        "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
        name: "Gaurav Raghuvanshi",
        jobTitle: "German Language Teacher & Founder",
        worksFor: {
          "@id": "https://germanwithgaurav.com/#organization",
        },
        description: siteConfig.founder.bio,
        url: "https://germanwithgaurav.com/about-gaurav-raghuvanshi",
        image: "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.youtube,
          siteConfig.social.linkedin,
        ],
        knowsAbout: [
          "German Language",
          "Goethe-Zertifikat A1",
          "Goethe-Zertifikat A2",
          "Goethe-Zertifikat B1",
          "CEFR German Language Curriculum",
          "German for Higher Studies in Germany",
          "German for Working Professionals",
        ],
      },
    ],
  };

  // Select 12 questions from the original website for Homepage FAQ section
  const homepageFaqs = faqsData.slice(0, 12);

  return (
    <>
      <JsonLd data={structuredData} />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Learning problem */}
      <LearningProblem />

      {/* 3. Learning goals */}
      <LearningGoals />

      {/* 4. About Gaurav */}
      <AboutGauravSection />

      {/* 5. Statistics */}
      <Stats variant="dark" />

      {/* 6. Courses */}
      <CourseGrid />

      {/* 7. Teaching method */}
      <TeachingMethod />

      {/* 8. Educator/video section */}
      <EducatorVideo />

      {/* 10. Latest blog posts */}
      <LatestBlogSection />

      {/* 11. FAQ Section */}
      <section className="py-16 sm:py-24 bg-[#08175e] text-white border-t border-slate-900" aria-labelledby="home-faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full inline-block">
              GOT QUESTIONS?
            </span>
            <h2 id="home-faq-heading" className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-300">
              Clear, direct answers to common questions about course duration, class sizes, study materials, and Goethe examinations.
            </p>
          </div>

          <FAQAccordion faqs={homepageFaqs} headingLevel="h3" />

          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#08175e] font-bold text-sm hover:bg-amber-400 hover:text-slate-950 transition-all shadow-lg"
            >
              <HelpCircle className="w-4 h-4" />
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <FinalCTA />
    </>
  );
}
