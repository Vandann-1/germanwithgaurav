"use client";

import React, { useEffect, useState } from "react";
import { TableOfContentsItem } from "@/data/blogData";
import { ListCollapse } from "lucide-react";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px" }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="p-5 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-3"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200/80 pb-2.5">
        <ListCollapse className="w-4 h-4 text-amber-600" />
        <span>Table of Contents</span>
      </div>

      <ol className="space-y-1.5 text-xs">
        {items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block py-1 px-2 rounded-md transition-colors leading-relaxed ${
                  isActive
                    ? "bg-amber-100/70 text-amber-900 font-bold"
                    : "text-slate-600 hover:text-amber-800 hover:bg-slate-100"
                }`}
              >
                <span className="font-mono text-slate-400 mr-1.5">{idx + 1}.</span>
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
