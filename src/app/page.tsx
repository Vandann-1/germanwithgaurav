import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { faqsData } from "@/data/faqData";
import { Hero } from "@/components/Hero";
import { TrustCredibility } from "@/components/TrustCredibility";
import { LearningProblem } from "@/components/LearningProblem";
import { LearningGoals } from "@/components/LearningGoals";
import { CourseGrid } from "@/components/CourseGrid";
import { TeachingMethod } from "@/components/TeachingMethod";
import { AboutGauravSection } from "@/components/AboutGauravSection";
import { StudentExperience } from "@/components/StudentExperience";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LatestBlogSection } from "@/components/LatestBlogSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "German With Gaurav | Learn German with Clarity. Speak with Confidence.",
  description:
    "Structured online German language courses (A1, A2, B1) for students, engineers, and healthcare professionals. Small 5–7 student batches led by Gaurav Raghuvanshi with 19+ years of expertise.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://germanwithgaurav.com/#website",
        url: "https://germanwithgaurav.com",
        name: "German With Gaurav",
        description: "Premium German Language Academy led by German language teacher Gaurav Raghuvanshi",
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: siteConfig.ratings.averageRating,
          reviewCount: siteConfig.ratings.reviewCount,
          bestRating: "5",
          worstRating: "1",
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
        description: siteConfig.founder.bio,
        url: "https://germanwithgaurav.com/about",
        image: "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.youtube,
          siteConfig.social.linkedin,
        ],
        knowsAbout: [
          "German Language Teaching",
          "CEFR Curriculum",
          "Goethe-Zertifikat A1",
          "Goethe-Zertifikat A2",
          "Goethe-Zertifikat B1",
          "German for Indian Students and Professionals",
        ],
      },
    ],
  };

  // Top 8 homepage FAQs
  const homepageFaqs = faqsData.slice(0, 8);

  return (
    <>
      <JsonLd data={structuredData} />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust / Credibility */}
      <TrustCredibility />

      {/* 3. Problem */}
      <LearningProblem />

      {/* 4. Learning Paths */}
      <LearningGoals />

      {/* 5. Courses */}
      <CourseGrid />

      {/* 6. GWG Method */}
      <TeachingMethod />

      {/* 7. About Gaurav */}
      <AboutGauravSection />

      {/* 8. Student Experience */}
      <StudentExperience />

      {/* 9. Genuine Testimonials */}
      <TestimonialsSection />

      {/* 10. Educational Resources */}
      <LatestBlogSection />

      {/* 11. FAQ */}
      <section className="py-16 sm:py-24 bg-[#faf9f6] border-b border-[#e5e2da]" aria-labelledby="home-faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c]">
              CLARITY FIRST
            </span>
            <h2 id="home-faq-heading" className="text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#475569]">
              Clear, direct answers regarding course durations, batch sizes, study materials, and Goethe examinations.
            </p>
          </div>

          <FAQAccordion faqs={homepageFaqs} headingLevel="h3" />

          <div className="mt-12 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#121826] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#b91c1c] transition-colors shadow-xs"
            >
              <HelpCircle className="w-4 h-4 text-[#f59e0b]" />
              <span>View All Academy FAQs</span>
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
