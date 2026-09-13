import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://germanwithgaurav.com",
      },
      ...items.map((item, index) => {
        const entry: { "@type": string; position: number; name: string; item?: string } = {
          "@type": "ListItem",
          position: index + 2,
          name: item.label,
        };
        if (item.href) {
          entry.item = `https://germanwithgaurav.com${item.href.startsWith("/") ? item.href : "/" + item.href}`;
        }
        return entry;
      }),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 text-sm text-slate-500">
        <ol className="flex items-center flex-wrap gap-2">
          <li className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-amber-600 transition-colors"
            >
              <Home className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                {isLast || !item.href ? (
                  <span className="font-medium text-slate-800" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
