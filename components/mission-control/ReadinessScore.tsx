import { ShieldCheck } from "lucide-react";

export function ReadinessScore() {
  return (
    <div>
      <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-amber-400">
        <ShieldCheck size={18} />
        National Expansion Readiness
      </div>

      <div className="mt-8 flex flex-wrap items-end gap-5">
        <div className="text-8xl font-black leading-none tracking-[-0.08em] text-white lg:text-[10rem]">
          84.2
        </div>

        <div className="mb-4 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-black text-emerald-300">
          Up 2.1 this week
        </div>
      </div>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400 shadow-[0_0_30px_rgba(251,191,36,.45)]" />
      </div>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        RoofIQ is tracking territory readiness, campaign momentum, weather
        pressure, permit activity, and industrial growth across the national
        expansion field.
      </p>
    </div>
  );
}