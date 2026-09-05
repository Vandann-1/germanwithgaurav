"use client";

import React, { useState, useMemo } from "react";
import { faqsData, faqCategories, FAQCategory } from "@/data/faqData";
import { FAQAccordion } from "./FAQAccordion";
import { Search } from "lucide-react";

export function FAQPageClient() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.directAnswer.toLowerCase().includes(q) ||
        faq.detailedAnswer.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Category Tabs & Search Bar */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
        
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., A1 duration, Goethe exams, batch size)..."
            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-slate-900 text-amber-400 shadow-sm"
                  : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Results Count & Accordion */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Showing {filteredFaqs.length} Questions {activeCategory !== "All" && `in ${activeCategory}`}
          </p>
        </div>

        <FAQAccordion faqs={filteredFaqs} headingLevel="h2" />
      </div>

    </div>
  );
}
