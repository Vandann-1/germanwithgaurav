import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "@/data/blogData";
import { coursesData } from "@/data/coursesData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TableOfContents } from "@/components/TableOfContents";
import { BlogAuthorBox } from "@/components/BlogAuthorBox";
import { BlogCard } from "@/components/BlogCard";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";
import {
  Calendar,
  Clock,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  BookOpen,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | German With Gaurav",
    };
  }

  return {
    title: `${article.title} | German With Gaurav`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `https://germanwithgaurav.com/blog/${article.slug}`,
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author.name],
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
    },
  };
}

function parseInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" class="text-[#08175e] font-semibold underline underline-offset-2 hover:text-amber-700 transition-colors">$1</a>'
    )
    .replace(
      /`([^`]+)`/g,
      '<code class="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-xs font-mono font-medium">$1</code>'
    );
}

function parseMarkdownToHtml(
  content: string,
  tableOfContents: Array<{ id: string; title: string }>
): string {
  const blocks = content.split("\n\n");

  return blocks
    .map((rawBlock) => {
      const block = rawBlock.trim();
      if (!block) return "";

      // Headings: H2
      if (block.startsWith("## ")) {
        const headingText = block.replace(/^##\s+/, "").trim();
        const tocMatch = tableOfContents.find(
          (t) =>
            t.title.toLowerCase() === headingText.toLowerCase() ||
            headingText.toLowerCase().includes(t.title.toLowerCase()) ||
            t.title.toLowerCase().includes(headingText.toLowerCase())
        );
        const id = tocMatch ? tocMatch.id : headingText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return `<h2 id="${id}" class="text-2xl sm:text-3xl font-black text-slate-900 mt-12 mb-5 scroll-mt-24 border-b border-slate-100 pb-3">${parseInlineMarkdown(
          headingText
        )}</h2>`;
      }

      // Headings: H3
      if (block.startsWith("### ")) {
        const h3Text = block.replace(/^###\s+/, "").trim();
        return `<h3 class="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3">${parseInlineMarkdown(
          h3Text
        )}</h3>`;
      }

      // Blockquotes / Callout notes
      if (block.startsWith("> ")) {
        const quoteLines = block
          .split("\n")
          .map((line) => line.replace(/^>\s?/, "").trim())
          .filter(Boolean);
        return `<blockquote class="border-l-4 border-amber-500 bg-amber-50/60 pl-5 py-3.5 pr-4 rounded-r-2xl my-6 text-slate-800 font-medium italic leading-relaxed shadow-2xs">${quoteLines
          .map((l) => parseInlineMarkdown(l))
          .join("<br />")}</blockquote>`;
      }

      // Markdown Tables
      if (block.startsWith("|") && block.includes("---")) {
        const lines = block
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);

        if (lines.length >= 2) {
          const parseRow = (line: string) => {
            const cleanLine = line.replace(/^\|/, "").replace(/\|$/, "");
            return cleanLine.split("|").map((cell) => cell.trim());
          };

          const headerCells = parseRow(lines[0]);
          const bodyLines = lines.slice(2);

          return `
            <div class="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-2xs">
              <table class="w-full text-left border-collapse text-sm">
                <thead class="bg-slate-100 text-slate-900 border-b border-slate-200 font-bold">
                  <tr>
                    ${headerCells
                      .map(
                        (cell) =>
                          `<th class="py-3.5 px-4 font-bold text-slate-900 border-r border-slate-200 last:border-r-0">${parseInlineMarkdown(
                            cell
                          )}</th>`
                      )
                      .join("")}
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 bg-white">
                  ${bodyLines
                    .map((rowLine, rIdx) => {
                      const cells = parseRow(rowLine);
                      return `
                        <tr class="${
                          rIdx % 2 === 1 ? "bg-slate-50/60" : "bg-white"
                        } hover:bg-amber-50/30 transition-colors">
                          ${cells
                            .map(
                              (cell) =>
                                `<td class="py-3 px-4 text-slate-700 border-r border-slate-100 last:border-r-0 leading-relaxed">${parseInlineMarkdown(
                                  cell
                                )}</td>`
                            )
                            .join("")}
                        </tr>
                      `;
                    })
                    .join("")}
                </tbody>
              </table>
            </div>
          `;
        }
      }

      // Unordered lists
      if (block.startsWith("* ") || block.startsWith("- ")) {
        const items = block
          .split(/\n[\*\-]\s+/)
          .map((item) => item.replace(/^[\*\-]\s+/, "").trim())
          .filter(Boolean);
        return `<ul class="space-y-2.5 my-5 list-disc pl-6 text-slate-700 leading-relaxed">${items
          .map((i) => `<li>${parseInlineMarkdown(i)}</li>`)
          .join("")}</ul>`;
      }

      // Ordered lists
      if (/^\d+\.\s+/.test(block)) {
        const items = block
          .split(/\n\d+\.\s+/)
          .map((item) => item.replace(/^\d+\.\s+/, "").trim())
          .filter(Boolean);
        return `<ol class="space-y-2.5 my-5 list-decimal pl-6 text-slate-700 leading-relaxed">${items
          .map((i) => `<li>${parseInlineMarkdown(i)}</li>`)
          .join("")}</ol>`;
      }

      // Normal Paragraphs
      return `<p class="text-slate-700 leading-relaxed mb-5">${parseInlineMarkdown(block)}</p>`;
    })
    .join("");
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Schema.org Unified Knowledge Graph JSON-LD
  const canonicalUrl = `https://germanwithgaurav.com/blog/${article.slug}`;
  const imageUrl = article.featuredImage.startsWith("http")
    ? article.featuredImage
    : `https://germanwithgaurav.com${article.featuredImage}`;

  const articleNode = {
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    isPartOf: {
      "@type": "WebPage",
      "@id": canonicalUrl,
      url: canonicalUrl,
      name: article.title,
    },
    headline: article.title,
    description: article.excerpt,
    image: imageUrl,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    mainEntityOfPage: canonicalUrl,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
      name: article.author.name,
      jobTitle: article.author.role,
      url: "https://germanwithgaurav.com/about-gaurav-raghuvanshi",
    },
    publisher: {
      "@type": "EducationalOrganization",
      "@id": "https://germanwithgaurav.com/#organization",
      name: "German With Gaurav",
      url: "https://germanwithgaurav.com",
      logo: {
        "@type": "ImageObject",
        url: "https://germanwithgaurav.com/logo.png",
      },
    },
  };

  const breadcrumbNode = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumbs`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://germanwithgaurav.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://germanwithgaurav.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.category,
        item: `https://germanwithgaurav.com/category/${article.categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqNode =
    article.faqs && article.faqs.length > 0
      ? {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
      articleNode,
      breadcrumbNode,
      ...(faqNode ? [faqNode] : []),
      {
        "@type": "Person",
        "@id": "https://germanwithgaurav.com/#gaurav-raghuvanshi",
        name: "Gaurav Raghuvanshi",
        jobTitle: "German Language Teacher & Founder",
        url: "https://germanwithgaurav.com/about-gaurav-raghuvanshi",
        sameAs: [
          "https://www.youtube.com/@germanwithgaurav",
          "https://www.instagram.com/germanwithgaurav",
          "https://www.linkedin.com/in/gaurav-raghuvanshi",
        ],
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://germanwithgaurav.com/#organization",
        name: "German With Gaurav",
        url: "https://germanwithgaurav.com",
        logo: "https://germanwithgaurav.com/logo.png",
      },
    ],
  };

  const breadcrumbs = [
    { label: "Blog", href: "/blog" },
    { label: article.category, href: `/category/${article.categorySlug}` },
    { label: article.title },
  ];

  // Related courses
  const relatedCourses = coursesData.filter((c) =>
    article.relatedCourses.includes(c.slug)
  );

  // Related articles
  const relatedArticles = blogArticles.filter(
    (a) => a.slug !== article.slug && article.relatedArticles.includes(a.slug)
  );

  return (
    <article className="min-h-screen bg-white">
      <JsonLd data={fullSchema} />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      {/* Article Header Section */}
      <header className="py-12 bg-gradient-to-b from-amber-50/30 via-white to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <Link
            href={`/category/${article.categorySlug}`}
            className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
          >
            {article.category}
          </Link>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 pt-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-800">By {article.author.name}</span>
            </div>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Updated: {article.updatedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Image */}
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <Image
                src={article.featuredImage}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>

            {/* Short Answer / Summary Callout Box (AEO Direct Answer target) */}
            <section
              aria-label="Direct answer summary"
              className="bg-amber-50/70 border-2 border-amber-300 rounded-2xl p-6 sm:p-7 shadow-xs space-y-2"
            >
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-900">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>QUICK ANSWER / EXECUTIVE SUMMARY</span>
              </div>
              <p className="text-base font-semibold text-slate-900 leading-relaxed">
                {article.directAnswer}
              </p>
            </section>

            {/* Mobile Table of Contents */}
            <div className="block lg:hidden">
              <TableOfContents items={article.tableOfContents} />
            </div>

            {/* Main Article Body with Enhanced Markdown Parsing */}
            <div className="prose prose-slate max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: parseMarkdownToHtml(article.content, article.tableOfContents),
                }}
              />
            </div>

            {/* Key Takeaways Section */}
            {article.keyTakeaways && article.keyTakeaways.length > 0 && (
              <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <BookOpen className="w-4 h-4" />
                  <span>KEY TAKEAWAYS</span>
                </div>
                <h3 className="text-xl font-bold text-white">Summary for Fast Review</h3>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {article.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Article Specific FAQs */}
            {article.faqs && article.faqs.length > 0 && (
              <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <HelpCircle className="w-4 h-4" />
                  <span>COMMONLY ASKED QUESTIONS</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {article.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                      <h4 className="text-base font-bold text-slate-900">{faq.question}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Author Box */}
            <BlogAuthorBox />

          </div>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Desktop Sticky Table of Contents */}
            <div className="hidden lg:block sticky top-28 space-y-6">
              <TableOfContents items={article.tableOfContents} />

              {/* Related Courses Widget */}
              {relatedCourses.length > 0 && (
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <span>Recommended German Courses</span>
                  </div>
                  <div className="space-y-3">
                    {relatedCourses.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/courses/${c.slug}`}
                        className="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/80 border border-slate-200/80 transition-colors group"
                      >
                        <span className="text-[11px] font-bold text-amber-700 uppercase">{c.badge}</span>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                          {c.title}
                        </h4>
                        <span className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-medium">
                          <span>View Course Syllabus</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Free Demo Banner in Sidebar */}
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 p-6 rounded-2xl shadow-md space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Free Consultation</p>
                <h3 className="text-lg font-black leading-tight">
                  Start Speaking German with Confidence
                </h3>
                <p className="text-xs text-slate-800 leading-relaxed">
                  Join a small batch of 5–7 learners. Get your free 10-minute level assessment with Gaurav.
                </p>
                <Link
                  href="/book-a-free-demo"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-slate-900 transition-colors shadow"
                >
                  <span>Book Free Demo</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>

          </aside>

        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center sm:text-left">
              Related Articles &amp; Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((rel) => (
                <BlogCard key={rel.slug} article={rel} />
              ))}
            </div>
          </section>
        )}

      </div>

      <FinalCTA />
    </article>
  );
}
