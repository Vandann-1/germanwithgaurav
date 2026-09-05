"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/faqData";
import { Plus, Minus } from "lucide-react";

interface FAQAccordionProps {
  faqs: FAQItem[];
  showCategoryFilter?: boolean;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
  categories?: string[];
  headingLevel?: "h2" | "h3";
}

export function FAQAccordion({
  faqs,
  showCategoryFilter = false,
  activeCategory = "All",
  onSelectCategory,
  categories = [],
  headingLevel = "h3",
}: FAQAccordionProps) {
  // Store open state by FAQ id (first item open by default like the screenshot)
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [faqs[0]?.id || ""]: true,
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const HeadingTag = headingLevel;

  return (
    <div className="space-y-6">
      {/* Optional Category Pills Filter */}
      {showCategoryFilter && categories.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory && onSelectCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-amber-400 text-slate-950 shadow-md font-extrabold"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion Box Matching Original Reference */}
      <div className="border border-white/25 rounded-2xl divide-y divide-white/25 bg-[#08175e] shadow-2xl overflow-hidden">
        {faqs.map((faq) => {
          const isOpen = !!openIds[faq.id];
          return (
            <div key={faq.id} className="transition-colors">
              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-5 sm:px-6 py-4.5 sm:py-5 flex items-center text-left gap-3.5 sm:gap-4 hover:bg-white/[0.04] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${faq.id}`}
                id={`faq-btn-${faq.id}`}
              >
                {/* Left Toggle Icon: Minus when open, Plus when closed */}
                <div className="w-5 h-5 flex items-center justify-center shrink-0 text-white">
                  {isOpen ? (
                    <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
                  ) : (
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
                  )}
                </div>

                {/* Question Title */}
                <HeadingTag className="text-sm sm:text-base font-normal sm:font-medium text-white tracking-normal leading-snug flex-1">
                  {faq.question}
                </HeadingTag>
              </button>

              {/* Collapsible Answer Panel */}
              {isOpen && (
                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="border-t border-white/25 px-5 sm:px-6 py-5 sm:py-6 pl-12 sm:pl-14 text-white/95 text-sm sm:text-base leading-relaxed bg-white/[0.02]"
                >
                  <p className="leading-relaxed">{faq.directAnswer}</p>
                  {faq.detailedAnswer &&
                    faq.detailedAnswer !== faq.directAnswer && (
                      <p className="mt-3 text-white/80 text-xs sm:text-sm leading-relaxed">
                        {faq.detailedAnswer}
                      </p>
                    )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
