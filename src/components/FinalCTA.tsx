import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, CheckCircle2, MessageCircle, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-20 bg-[#08175e] text-white overflow-hidden" aria-labelledby="cta-heading">
      {/* Subtle decorative glow */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-[#050f42]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          START YOUR GERMAN JOURNEY TODAY
        </span>

        {/* Heading */}
        <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
          Ready to Speak German with Fluency <br />
          <span className="text-amber-400">&amp; True Confidence?</span>
        </h2>

        {/* Copy */}
        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Book a free 1-on-1 demo consultation with Gaurav Raghuvanshi. We&apos;ll assess your current level, discuss your career or university timeline, and find your perfect small batch.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero obligation consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Free 10-minute level diagnostic</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Strictly 5–7 students per batch</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/book-a-free-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-lg hover:shadow-xl transition-all active:scale-98"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Your Free Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>

        <p className="text-xs text-slate-500 pt-2">
          Prefer a quick call? Reach Gaurav directly at{" "}
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="text-amber-400 hover:underline font-mono">
            {siteConfig.contact.phone}
          </a>
        </p>

      </div>
    </section>
  );
}
