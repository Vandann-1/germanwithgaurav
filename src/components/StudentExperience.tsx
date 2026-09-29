import React from "react";
import Image from "next/image";
import { Users, Video, BookCheck, Clock, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export function StudentExperience() {
  const features = [
    {
      icon: Users,
      title: "5 to 7 Students Maximum",
      description:
        "Every batch is strictly capped so you are never lost in a crowd. You speak for 15–20 minutes every session, receiving immediate correction.",
    },
    {
      icon: Video,
      title: "High-Definition Session Recordings",
      description:
        "Never fall behind due to work meetings, university exams, or travel. Every live class is recorded in HD for dedicated revision access.",
    },
    {
      icon: BookCheck,
      title: "Licensed Netzwerk Curriculum",
      description:
        "Work directly with licensed coursebooks, workbooks, audio tracks, and Gaurav's custom color-coded grammar reference sheets.",
    },
    {
      icon: Clock,
      title: "Consistent 4–5 Days Weekly Rhythm",
      description:
        "Regular 60 to 90 minute sessions maintain linguistic momentum and muscle memory, preventing the decay of newly learned concepts.",
    },
    {
      icon: Award,
      title: "Weekly Goethe Exam Drills",
      description:
        "Official Goethe Start Deutsch & ÖSD examination format training is embedded into the syllabus from week one across all 4 modules.",
    },
    {
      icon: ShieldCheck,
      title: "Personal Line-by-Line Feedback",
      description:
        "Gaurav personally assesses your homework essays, speech recordings, and test papers, pinpointing syntax and phonetic nuances.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#e5e2da]" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#b91c1c]">
            THE CLASSROOM ENVIRONMENT
          </span>
          <h2 id="experience-heading" className="text-3xl sm:text-4xl font-extrabold text-[#121826] tracking-tight">
            The Student Experience at GWG
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Engineered from the ground up for active participation, conceptual retention, and zero intimidation.
          </p>
        </div>

        {/* Visual Classroom Spotlight Banner */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-[#e5e2da] bg-[#faf9f6] shadow-md grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-200">
            <Image
              src="/images/german-students-classroom.jpg"
              alt="German language students learning together in small batch with Netzwerk books"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
            <div className="absolute bottom-3 left-3 text-white text-xs font-semibold lg:hidden bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              Live Interactive Small Cohort
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              REAL TALK-TIME GUARANTEE
            </span>

            <h3 className="text-2xl font-black text-[#121826] tracking-tight leading-snug">
              Every Student Speaks in Every Single Class
            </h3>

            <p className="text-sm text-[#475569] leading-relaxed">
              Language is a spoken reflex, not a spectator sport. In our small cohorts of 5 to 7 learners, you never sit passively behind a muted microphone. You roleplay real-life situations, practice Goethe oral exam drills, and build spoken fluency without anxiety.
            </p>

            <ul className="space-y-2.5 text-xs text-[#121826] font-semibold pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Immediate live phonetic &amp; pronunciation correction</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Authentic licensed Netzwerk A1, A2 &amp; B1 textbooks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full HD video recordings provided after every lesson</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#faf9f6] rounded-2xl p-6 sm:p-7 border border-[#e5e2da] hover:border-[#b91c1c]/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e2da] text-[#b91c1c] flex items-center justify-center mb-4 group-hover:bg-[#b91c1c] group-hover:text-white transition-all shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#121826] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
