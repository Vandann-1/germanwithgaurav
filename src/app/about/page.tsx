import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Stats } from "@/components/Stats";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import {
  CheckCircle2,
  Sparkles,
  Users,
  MapPin,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "About Gaurav Raghuvanshi | German Language Teacher (19+ Years) | German With Gaurav",
  description:
    "Meet Gaurav Raghuvanshi, founder and lead German educator at German With Gaurav (Pune). Discover his 19+ year teaching journey, small-batch philosophy (5–7 students), and verified student achievements.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Gaurav Raghuvanshi | German Language Teacher | German With Gaurav",
    description:
      "Learn about Gaurav Raghuvanshi, German educator with 19+ years of teaching experience. Discover the GWG methodology, student achievements, and our Pune language academy.",
    url: "https://germanwithgaurav.com/about",
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

export default function AboutPage() {
  const breadcrumbs = [{ label: "About Gaurav" }];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
        name: "Gaurav Raghuvanshi",
        jobTitle: "Founder & Lead German Language Instructor",
        worksFor: {
          "@type": "EducationalOrganization",
          "@id": "https://germanwithgaurav.com/#organization",
          name: "German With Gaurav",
          url: "https://germanwithgaurav.com",
        },
        description: siteConfig.founder.bio,
        url: "https://germanwithgaurav.com/about",
        image: "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "India",
        },
        knowsAbout: [
          "German Language Education",
          "Goethe-Zertifikat Examination Preparation",
          "CEFR A1, A2, B1 Curriculum",
          "German Pronunciation & Phonetics",
          "Indian Student Immigration to Germany",
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
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address.street,
          addressLocality: siteConfig.contact.address.city,
          postalCode: siteConfig.contact.address.postalCode,
          addressCountry: "India",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={personJsonLd} />

      <div className="bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Hero / Intro Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[var(--sand-100)] via-white to-white border-b border-[var(--sand-200)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Photo & Credentials Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm">
                <div className="bg-white rounded-3xl border border-[var(--sand-300)] shadow-xl overflow-hidden">
                  <div className="relative aspect-[4/5] w-full bg-[var(--sand-100)]">
                    <Image
                      src="https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp"
                      alt="Gaurav Raghuvanshi - German Language Teacher with 19+ Years Experience"
                      fill
                      priority
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 450px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-5 bg-charcoal-900 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-amber-300">Teaching German Since 2005</p>
                      <p className="text-sm font-bold text-white">19+ Years Classroom Mentorship</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-charcoal-950 font-black flex items-center justify-center text-sm shrink-0">
                      19+
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wide">
                  <span>Founder &amp; Lead German Educator</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-charcoal-900 tracking-tight leading-tight">
                  Meet Gaurav Raghuvanshi <br />
                  <span className="text-german-red">Educator, Mentor &amp; Linguist</span>
                </h1>
              </div>

              <p className="text-lg text-charcoal-800 font-semibold leading-relaxed">
                &quot;You haven&apos;t reached the limits of your German ability. You have simply been studying with the wrong system.&quot;
              </p>

              <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
                For nearly two decades, Gaurav Raghuvanshi has mentored engineering graduates, healthcare professionals, university researchers, and relocating spouses across India and abroad. Based in Pune, Maharashtra, his teaching philosophy is rooted in one fundamental truth: fluency does not come from passive listening or memorizing abstract grammar tables. It comes from daily, active spoken repetition in small, supportive cohorts.
              </p>

              <p className="text-charcoal-600 text-sm sm:text-base leading-relaxed">
                Under Gaurav&apos;s personal guidance, more than 1,499 students have achieved Goethe-Zertifikat success and built prosperous academic and corporate lives in Germany, Austria, and Switzerland.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-charcoal-700">
                <div className="flex items-center gap-1.5 bg-[var(--sand-100)] px-3 py-1.5 rounded-lg border border-[var(--sand-300)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Practical German</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[var(--sand-100)] px-3 py-1.5 rounded-lg border border-[var(--sand-300)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Simple Grammar Logic</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[var(--sand-100)] px-3 py-1.5 rounded-lg border border-[var(--sand-300)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Speaking Confidence</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[var(--sand-100)] px-3 py-1.5 rounded-lg border border-[var(--sand-300)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Personalised Correction</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-amber-400 text-charcoal-950 hover:bg-amber-500 transition-all shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book a Free Diagnostic Session</span>
                </Link>
                <Link
                  href="/method"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-charcoal-900 text-white hover:bg-charcoal-800 transition-all shadow-xs"
                >
                  <span>Explore The GWG Method</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Centralized Verified Stats */}
      <Stats variant="dark" />

      {/* 2. Teaching Philosophy & The Small-Batch Doctrine */}
      <section className="py-16 sm:py-24 bg-white border-b border-[var(--sand-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              THE SMALL-BATCH DOCTRINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-900 tracking-tight">
              Why 5–7 Students Is a Hard Pedagogical Rule
            </h2>
            <p className="text-base text-charcoal-600">
              Not a marketing slogan, but an instructional necessity for authentic German fluency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--sand-50)] p-8 rounded-3xl border border-[var(--sand-300)] shadow-xs space-y-4">
              <Users className="w-8 h-8 text-amber-600" />
              <h3 className="text-xl font-bold text-charcoal-900">
                15–20 Minutes Individual Speaking
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                In a traditional class of 25 students, simple arithmetic means each learner speaks for barely 2 minutes during an hour. In a batch of 5 to 7, you are engaged continuously. You speak out loud in every exercise, formulating sentences under real-time conversational pressure.
              </p>
            </div>

            <div className="bg-[var(--sand-50)] p-8 rounded-3xl border border-[var(--sand-300)] shadow-xs space-y-4">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
              <h3 className="text-xl font-bold text-charcoal-900">
                Zero Hidden Mistakes
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                When students are lost in large groups, mispronunciations of vowels like &apos;ä&apos;, &apos;ö&apos;, and &apos;ü&apos; and case errors slip by uncorrected. Gaurav catches and gently corrects your phonetic errors immediately before they become bad permanent habits.
              </p>
            </div>

            <div className="bg-[var(--sand-50)] p-8 rounded-3xl border border-[var(--sand-300)] shadow-xs space-y-4">
              <HeartHandshake className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-bold text-charcoal-900">
                Anxiety-Free Camaraderie
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Speaking a foreign language triggers natural vulnerability. A micro-batch creates a warm, collaborative cohort where students support one another, laugh through linguistic blunders, and build lifelong friendships that continue in Germany.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Honest Approach: No False Shortcuts */}
      <section className="py-16 sm:py-20 bg-[var(--sand-50)] border-b border-[var(--sand-300)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              INTEGRITY FIRST
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal-900 tracking-tight">
              An Honest Promise: Real German Takes Effort
            </h2>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[var(--sand-300)] shadow-xs space-y-5 text-sm sm:text-base text-charcoal-700 leading-relaxed">
            <p>
              The internet is flooded with deceptive promises: &quot;Speak fluent German in 30 days!&quot; or &quot;Pass Goethe B2 in 2 months with passive background audio!&quot;
            </p>
            <p>
              At German With Gaurav, we reject such gimmicks entirely. German is an intricate, highly structured European language with four grammatical cases, three grammatical genders, and rigorous syntax. Mastering it requires structured guidance, focused study hours, consistent attendance, and regular homework revision.
            </p>
            <p>
              What Gaurav guarantees is not an overnight miracle, but an exceptionally clear roadmap, 19+ years of pedagogical mastery, unyielding patience, and an environment where every question is answered thoroughly. If you show up and do the work, you will pass your Goethe exams and speak German proudly.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Academy Roots & Pune Heritage */}
      <section className="py-16 sm:py-20 bg-white border-b border-[var(--sand-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                PUNE ACADEMY HERITAGE
              </span>
              <h2 className="text-3xl font-black text-charcoal-900 tracking-tight">
                Rooted in Pune, Teaching Globally
              </h2>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                German With Gaurav operates from Pune, Maharashtra — long regarded as India’s premier academic hub and automotive engineering capital with deep German industrial ties (Volkswagen, Mercedes-Benz, Bosch).
              </p>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                While our physical headquarters is located in Pune, our high-definition live interactive online classroom welcomes ambitious engineers, doctors, and students from Mumbai, Bangalore, Delhi, Hyderabad, and across Europe.
              </p>

              {/* Real Student Community Image Banner */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[var(--sand-300)] shadow-xs">
                <Image
                  src="/images/students-german-flag.webp"
                  alt="German language students studying together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>

              <div className="pt-1 flex items-center gap-3 text-xs text-charcoal-600">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Office: {siteConfig.contact.address.street}, {siteConfig.contact.address.city} – {siteConfig.contact.address.postalCode}</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Official Academy Campaign Banner */}
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-[var(--sand-300)] shadow-lg">
                <Image
                  src="/images/official-gwg-banner.jpg"
                  alt="Learn German with Gaurav - For Higher Education and Global Job Opportunities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>

              <div className="bg-[var(--sand-50)] rounded-3xl p-6 border border-[var(--sand-300)] space-y-4">
                <h3 className="text-lg font-bold text-charcoal-900">
                  Connect with Gaurav
                </h3>
                <p className="text-xs text-charcoal-600">
                  Follow Gaurav on social media for weekly German vocabulary breakdowns, common pronunciation traps, and student success stories.
                </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-[var(--sand-300)] text-charcoal-700 hover:text-amber-700 hover:border-amber-400 transition-colors shadow-2xs"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-[var(--sand-300)] text-charcoal-700 hover:text-amber-700 hover:border-amber-400 transition-colors shadow-2xs"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white border border-[var(--sand-300)] text-charcoal-700 hover:text-amber-700 hover:border-amber-400 transition-colors shadow-2xs"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* 5. Consultation CTA */}
      <section className="py-16 bg-[var(--sand-100)] border-b border-[var(--sand-300)]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-charcoal-900">
            Speak with Gaurav Directly
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 max-w-xl mx-auto">
            Schedule a free 20-minute diagnostic session to assess your current level and discover the best timeline for your German goals.
          </p>
          <div className="pt-2">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 text-charcoal-950 font-bold text-sm hover:bg-amber-500 transition-all shadow-sm"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Book Your Free Diagnostic Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
