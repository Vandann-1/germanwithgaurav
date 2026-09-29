import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, CheckCircle2, MessageCircle, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-24 bg-[#121826] text-white overflow-hidden" aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-[0.14em] text-white">
          <span className="w-2 h-2 rounded-full bg-[#b91c1c]" />
          <span>START YOUR GERMAN JOURNEY TODAY</span>
        </div>

        {/* Heading */}
        <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Ready to speak German with clarity <br className="hidden sm:inline" />
          <span className="text-[#f59e0b]">&amp; genuine confidence?</span>
        </h2>

        {/* Copy */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Schedule a free 1-on-1 demo consultation with Gaurav Raghuvanshi. We&apos;ll assess your current level, discuss your study or job timeline, and recommend your ideal small batch.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
            <span>Zero obligation consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
            <span>Free 10-minute level assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
            <span>Strictly 5–7 students per batch</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/book-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#b91c1c] text-white hover:bg-[#991b1b] shadow-md transition-all active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white/10 text-white hover:bg-white/15 border border-white/20 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#22c55e]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <p className="text-xs text-slate-400 pt-1">
          Have immediate questions? Call or WhatsApp Gaurav directly at{" "}
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="text-white font-mono font-semibold underline underline-offset-4">
            {siteConfig.contact.phone}
          </a>
        </p>

      </div>
    </section>
  );
}
