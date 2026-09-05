import React from "react";
import Link from "next/link";
import { CourseDetail } from "@/data/coursesData";
import { Check, Clock, Users, ArrowRight } from "lucide-react";

interface CourseCardProps {
  course: CourseDetail;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-amber-400/80 transition-all duration-200 overflow-hidden group">
      <div>
        {/* Card Header & Level Banner */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
              Level {course.level}
            </span>
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {course.duration.split("(")[0].trim()}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-amber-700 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-1">
            {course.subheading}
          </p>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            {course.shortDescription}
          </p>
        </div>

        {/* Card Body: Key Outcomes Only */}
        <div className="p-6 space-y-4">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Key Learning Outcomes
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              {course.learningOutcomes.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Batch Meta - Clean single line */}
          <div className="flex items-center gap-2 pt-3 text-xs text-slate-500 border-t border-slate-100">
            <Users className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Small Batch: <strong>5–7 Students</strong></span>
            <span className="text-slate-300">•</span>
            <span>Goethe Exam Prep</span>
          </div>
        </div>
      </div>

      {/* Card Footer: CTA */}
      <div className="p-6 pt-0">
        <Link
          href={`/courses/${course.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-amber-400 hover:text-slate-950 transition-all duration-150 shadow-2xs"
        >
          <span>Explore Syllabus</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
