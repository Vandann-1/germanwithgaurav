import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { coursesData } from "@/data/coursesData";
import { CoursePage } from "@/components/CoursePage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | German With Gaurav",
    };
  }

  return {
    title: `${course.title} (Live Online Classes) | German With Gaurav`,
    description: course.shortDescription,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} | German With Gaurav`,
      description: course.shortDescription,
      url: `https://germanwithgaurav.com/courses/${course.slug}`,
      type: "website",
      images: [
        {
          url: "https://germanwithgaurav.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-03-at-16.37.13.webp",
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | German With Gaurav`,
      description: course.shortDescription,
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return <CoursePage course={course} />;
}
