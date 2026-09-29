import { Star, Clock, Users, Award } from "lucide-react";

export function TrustCredibility() {
  return (
    <section className="py-10 bg-white border-b border-[#e5e2da]" aria-label="Academy Credibility and Verification">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
          
          {/* Item 1 */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl">
            <div className="w-11 h-11 rounded-lg bg-[#ede8df] flex items-center justify-center shrink-0 text-[#b91c1c]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#121826] tracking-tight">19+ Years</p>
              <p className="text-xs text-[#64748b] font-medium">Teaching Excellence</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl">
            <div className="w-11 h-11 rounded-lg bg-[#ede8df] flex items-center justify-center shrink-0 text-[#b91c1c]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#121826] tracking-tight">5–7 Students</p>
              <p className="text-xs text-[#64748b] font-medium">Strict Batch Maximum</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl">
            <div className="w-11 h-11 rounded-lg bg-[#ede8df] flex items-center justify-center shrink-0 text-[#b91c1c]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-[#121826] tracking-tight">100+ Hours</p>
              <p className="text-xs text-[#64748b] font-medium">Live Teaching / Level</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl">
            <div className="w-11 h-11 rounded-lg bg-[#ede8df] flex items-center justify-center shrink-0 text-[#d97706]">
              <Star className="w-5 h-5 fill-[#d97706]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl sm:text-2xl font-black text-[#121826] tracking-tight">5.0</span>
                <span className="text-xs font-bold text-[#d97706]">★★★★★</span>
              </div>
              <p className="text-xs text-[#64748b] font-medium">158 Verified Google Reviews</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
