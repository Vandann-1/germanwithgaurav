import React from "react";
import Link from "next/link";
import { CourseDetail } from "@/data/coursesData";
import { Check, Clock, Users, ArrowRight, BookCheck } from "lucide-react";

interface CourseCardProps {
  course: CourseDetail;
}

export function CourseCard({ course }: CourseCardProps) {
  // Key skills highlighted by level
  const skillsByLevel: Record<string, string[]> = {
    A1: ["Phonetics", "Nominative & Accusative", "Daily Routines", "Goethe A1 Prep"],
    A2: ["Dative Case", "Past Tense (Perfekt)", "Two-Way Prepositions", "Goethe A2 Prep"],
    B1: ["Passive Voice", "Konjunktiv II", "Professional Debates", "Goethe B1 4-Module"],
  };

  const skills = skillsByLevel[course.level] || ["Grammar", "Speaking", "Listening", "Writing"];

  return (
    <article className="flex flex-col justify-between bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div>
        {/* Card Header & Level Banner */}
        <div className="p-6 sm:p-7 bg-[#faf9f6]">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#b91c1c] text-white shadow-2xs">
              Level {course.level}
            </span>
            <span className="text-xs font-semibold text-[#64748b] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#b91c1c]" />
              <span>{course.duration.split("(")[0].trim()}</span>
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#121826] tracking-tight group-hover:text-[#b91c1c] transition-colors">
            {course.title}
          </h3>
          <p className="text-xs font-medium text-[#b91c1c] mt-1">
            {course.subheading}
          </p>
          <p className="text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed">
            {course.shortDescription}
          </p>
        </div>

        {/* Card Body: Learning Outcomes & Skills */}
        <div className="p-6 sm:p-7 space-y-5">
          {/* Learning Outcomes */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748b] mb-2.5">
              Key Learning Outcomes
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#334155]">
              {course.learningOutcomes.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#15803d] mt-0.5 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Skills Chips */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748b] mb-2">
              Skills Acquired
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-full text-[11px] font-medium bg-[#f7f5f0] text-[#475569]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Batch Details */}
          <div className="flex items-center justify-between pt-3 text-xs text-[#64748b]">
            <span className="flex items-center gap-1.5 font-medium">
              <Users className="w-3.5 h-3.5 text-[#b91c1c]" />
              <span>Small Batch: <strong>5–7 Students</strong></span>
            </span>
            <span className="flex items-center gap-1 text-[#15803d] font-semibold">
              <BookCheck className="w-3.5 h-3.5" />
              <span>Netzwerk Licensed</span>
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer: CTA */}
      <div className="p-6 sm:p-7 pt-0">
        <Link
          href={`/courses/${course.slug}`}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#121826] text-white hover:bg-[#b91c1c] transition-colors shadow-xs"
        >
          <span>Explore Syllabus &amp; Schedule</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
