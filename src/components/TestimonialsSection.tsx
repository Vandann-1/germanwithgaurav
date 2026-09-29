import React from "react";
import { testimonialsData } from "@/data/testimonialsData";
import { Star, CheckCircle, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#faf9f6] border-b border-[#e5e2da]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c]">
            VERIFIED STUDENT REVIEWS
          </span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Genuine experiences from students and working professionals who learned German with Gaurav Raghuvanshi.
          </p>
          <div className="pt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e5e2da] text-xs font-semibold text-[#121826] shadow-2xs">
            <span className="flex text-[#d97706]">★★★★★</span>
            <span>Rated 5.0 / 5.0 on Google Reviews (158 Reviews)</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e5e2da] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Level */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#d97706]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d97706]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#b91c1c] bg-[#fef2f2] px-2.5 py-0.5 rounded border border-[#fecaca]/60">
                    {review.courseTaken}
                  </span>
                </div>

                {/* Highlight Quote */}
                {review.highlight && (
                  <p className="text-sm font-bold text-[#121826] leading-snug">
                    &ldquo;{review.highlight}&rdquo;
                  </p>
                )}

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic">
                  &ldquo;{review.reviewText}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 mt-6 border-t border-[#f7f5f0] flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#121826]">{review.name}</p>
                  <p className="text-xs text-[#64748b]">{review.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-[#15803d]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Guarantee Footer */}
        <div className="mt-10 text-center text-xs text-[#64748b] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#15803d]" />
          <span>All reviews are authentic, unedited submissions from enrolled students on Google Reviews.</span>
        </div>

      </div>
    </section>
  );
}
