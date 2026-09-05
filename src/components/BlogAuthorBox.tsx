import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

export function BlogAuthorBox() {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-amber-400 shadow-sm">
        <Image
          src="https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp"
          alt="Gaurav Raghuvanshi - German Instructor"
          fill
          sizes="96px"
          className="object-cover object-top"
        />
      </div>

      <div className="space-y-2 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <h3 className="text-lg font-bold text-slate-900">
            Gaurav Raghuvanshi
          </h3>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
            <Award className="w-3 h-3 text-amber-600" />
            19+ Years Teaching Expertise
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Founder of German With Gaurav. Gaurav has guided over 1499+ students and professionals across India and abroad to pass their Goethe-Zertifikat examinations and speak practical German fluently.
        </p>

        <div className="pt-1">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors"
          >
            <span>Read more about Gaurav&apos;s background &amp; methodology</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
