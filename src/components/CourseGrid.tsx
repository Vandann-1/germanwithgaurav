import React from "react";
import { coursesData } from "@/data/coursesData";
import { CourseCard } from "./CourseCard";

interface CourseGridProps {
  showHeading?: boolean;
  heading?: string;
  subheading?: string;
}

export function CourseGrid({
  showHeading = true,
  heading = "Learn German Step by Step",
  subheading = "Progress smoothly from absolute beginner (A1) to confident independent speaker (B1) with our structured, small-batch system.",
}: CourseGridProps) {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/60 px-3 py-1 rounded-full">
              Our Core Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              {subheading}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
}
