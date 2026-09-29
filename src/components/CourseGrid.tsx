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
  heading = "Structured German Courses: A1 to B1",
  subheading = "Progress smoothly from absolute beginner to confident independent speaker with our live, small-batch curriculum.",
}: CourseGridProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#faf9f6] border-b border-[#e5e2da]" aria-labelledby="courses-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeading && (
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c]">
              LIVE INSTRUCTIONAL CURRICULUM
            </span>
            <h2 id="courses-heading" className="text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight">
              {heading}
            </h2>
            <p className="text-base sm:text-lg text-[#475569]">
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
