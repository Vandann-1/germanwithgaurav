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
  // Store open state by FAQ id (first item open by default)
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#121826] text-white shadow-xs"
                  : "bg-white text-[#475569] border border-[#e5e2da] hover:bg-[#ede8df]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion Box */}
      <div className="border border-[#e5e2da] rounded-2xl divide-y divide-[#e5e2da] bg-white shadow-xs overflow-hidden">
        {faqs.map((faq) => {
          const isOpen = !!openIds[faq.id];
          return (
            <div key={faq.id} className="transition-colors">
              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center text-left gap-4 hover:bg-[#faf9f6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b91c1c] cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${faq.id}`}
                id={`faq-btn-${faq.id}`}
              >
                {/* Left Toggle Icon */}
                <div
                  className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-[#b91c1c] text-white" : "bg-[#ede8df] text-[#121826]"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  )}
                </div>

                {/* Question Title */}
                <HeadingTag className="text-base sm:text-lg font-bold text-[#121826] tracking-tight leading-snug flex-1">
                  {faq.question}
                </HeadingTag>
              </button>

              {/* Collapsible Answer Panel */}
              {isOpen && (
                <div
                  id={`faq-panel-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="border-t border-[#f7f5f0] px-6 py-5 pl-16 text-[#475569] text-sm sm:text-base leading-relaxed bg-[#fbfbf9]"
                >
                  <p className="leading-relaxed font-normal">{faq.directAnswer}</p>
                  {faq.detailedAnswer && faq.detailedAnswer !== faq.directAnswer && (
                    <p className="mt-3 text-[#64748b] text-xs sm:text-sm leading-relaxed border-l-2 border-[#b91c1c]/40 pl-3">
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
