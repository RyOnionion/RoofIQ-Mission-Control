import type { Territory } from "@/types/territory";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function TerritoryPanel({ territory }: { territory: Territory }) {
  return (
    <GlassPanel className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-400">Selected Territory</p>
          <h2 className="mt-2 text-3xl font-black text-white">{territory.name}</h2>
          <p className="mt-1 text-sm text-slate-400">{territory.region} · {territory.status}</p>
        </div>
        <div className="text-right">
          <div className="text-5xl font-black text-amber-300">{territory.readiness}</div>
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Readiness</div>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-300">{territory.aiSummary}</p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {Object.entries(territory.scores).map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="text-xs capitalize text-slate-500">{label}</div>
            <div className="mt-1 text-xl font-black text-white">{value}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-amber-400/25 bg-amber-400/10 p-4">
        <div className="text-xs font-black uppercase tracking-widest text-amber-300">Recommended Action</div>
        <div className="mt-2 font-bold text-white">{territory.recommendedAction}</div>
        <div className="mt-1 text-sm text-slate-400">Expected pipeline: {territory.expectedPipeline}</div>
      </div>
    </GlassPanel>
  );
}
