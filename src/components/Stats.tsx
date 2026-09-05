import React from "react";
import { statisticsData, StatItem } from "@/data/statsData";

interface StatsProps {
  items?: StatItem[];
  variant?: "dark" | "light";
  className?: string;
}

export function Stats({ items = statisticsData.slice(0, 4), variant = "dark", className = "" }: StatsProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-12 sm:py-16 ${
        isDark
          ? "bg-[#08175e] text-white border-y border-[#050f42]"
          : "bg-amber-50/60 text-slate-900 border-y border-amber-200/60"
      } ${className}`}
      aria-label="Academy Statistics and Achievements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {items.map((stat) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-amber-200/80 shadow-2xs"
              }`}
            >
              <span
                className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight ${
                  isDark ? "text-amber-400" : "text-amber-600"
                }`}
              >
                {stat.value}
              </span>
              <span
                className={`text-xs sm:text-sm font-bold uppercase tracking-wider mt-2 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {stat.label}
              </span>
              <p
                className={`text-xs mt-1.5 max-w-xs ${
                  isDark ? "text-white/70" : "text-slate-600"
                }`}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
