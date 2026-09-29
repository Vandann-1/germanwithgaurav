import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare, Compass, Award, Users } from "lucide-react";

export function AboutGauravSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#f7f5f0] border-b border-[#e5e2da]" aria-labelledby="about-gaurav-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Photograph with Academic Frame (lg: 5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <div className="bg-white rounded-3xl border border-[#e5e2da] shadow-lg p-3 sm:p-4">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#ede8df]">
                  <Image
                    src="https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp"
                    alt="Gaurav Raghuvanshi - German Language Teacher with 19+ Years of Experience"
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 450px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="mt-3.5 p-3.5 bg-[#faf9f6] rounded-xl border border-[#e5e2da] flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#b91c1c]">Teaching German Since 2005</p>
                    <p className="text-sm font-bold text-[#121826]">Gaurav Raghuvanshi</p>
                  </div>
                  <span className="w-9 h-9 rounded-lg bg-[#121826] text-white font-mono font-black text-xs flex items-center justify-center shrink-0">
                    19+
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Pillars (lg: 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c]">
                FOUNDER &amp; LEAD INSTRUCTOR
              </span>
              <h2 id="about-gaurav-heading" className="text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight leading-tight">
                Meet Gaurav Raghuvanshi
              </h2>
              <p className="text-base sm:text-lg font-semibold text-[#b91c1c]">
                German Language Teacher &amp; Mentor with 19+ Years of Experience
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              For nearly two decades, Gaurav has mentored engineers, doctors, university aspirants, and corporate professionals across India and abroad. His teaching philosophy eliminates the dread of German grammar by framing cases, declensions, and sentence structures as clear, logical patterns.
            </p>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Unlike large coaching centres with 25+ students per class, every batch at German With Gaurav is strictly capped at <strong>5 to 7 learners</strong>. This ensures high daily student talk-time, direct pronunciation coaching, and rigorous mock test correction.
            </p>

            {/* Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-left">
              <div className="bg-white p-4 rounded-xl border border-[#e5e2da] shadow-2xs">
                <Compass className="w-4 h-4 text-[#b91c1c] mb-1.5" />
                <h3 className="text-sm font-bold text-[#121826]">Logical Case Blueprints</h3>
                <p className="text-xs text-[#64748b] mt-0.5">Demystifying Nominative, Accusative, and Dative cases with relatable analogies.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#e5e2da] shadow-2xs">
                <Users className="w-4 h-4 text-[#b91c1c] mb-1.5" />
                <h3 className="text-sm font-bold text-[#121826]">Small-Batch Philosophy</h3>
                <p className="text-xs text-[#64748b] mt-0.5">Strictly 5–7 learners per batch guaranteeing that every student speaks every day.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#e5e2da] shadow-2xs">
                <MessageSquare className="w-4 h-4 text-[#b91c1c] mb-1.5" />
                <h3 className="text-sm font-bold text-[#121826]">Active Spoken German</h3>
                <p className="text-xs text-[#64748b] mt-0.5">Roleplays, situational dialogues, and immediate verbal correction in every class.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#e5e2da] shadow-2xs">
                <Award className="w-4 h-4 text-[#b91c1c] mb-1.5" />
                <h3 className="text-sm font-bold text-[#121826]">Goethe-Zertifikat Focus</h3>
                <p className="text-xs text-[#64748b] mt-0.5">Module-by-module simulation of official examinations with personalized feedback.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#121826] text-white hover:bg-[#b91c1c] transition-colors shadow-xs"
              >
                <span>Read Full Teaching Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/book-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-[#121826] bg-[#ede8df] hover:bg-[#e2dcd0] border border-[#d5d0c5] transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
                <span>Book 1-on-1 Demo Session</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
