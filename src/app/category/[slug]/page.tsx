import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogArticles, blogCategories } from "@/data/blogData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/BlogCard";
import { FinalCTA } from "@/components/FinalCTA";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found | German With Gaurav",
    };
  }

  return {
    title: `${category.name} Articles & Guides | German With Gaurav`,
    description: category.description,
    alternates: {
      canonical: `/category/${category.slug}`,
    },
  };
}

export default async function CategoryArchivePage({ params }: PageProps) {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const articles = blogArticles.filter((a) => a.categorySlug === slug);

  const breadcrumbs = [
    { label: "Blog", href: "/blog" },
    { label: category.name },
  ];

  return (
    <>
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>

      <header className="py-14 sm:py-20 bg-gradient-to-b from-amber-50/40 via-white to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-amber-700 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {category.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {category.description}
          </p>
        </div>
      </header>

      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <BlogCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
              <p className="text-base font-bold text-slate-800">
                New articles are currently being added to this category.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
              >
                <span>Browse All Articles</span>
              </Link>
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
