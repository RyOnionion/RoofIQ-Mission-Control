"use client";

import type { Territory } from "@/types/territory";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function CommanderPanel({ territory }: { territory?: Territory }) {
  if (!territory) {
    return (
      <GlassPanel className="p-6">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-400">
          AI Commander
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Awaiting Territory
        </h2>
        <p className="mt-3 text-slate-400">
          Select a territory to generate mission intelligence.
        </p>
      </GlassPanel>
    );
  }

  const strongestSignal = Object.entries(territory.scores).sort(
    ([, a], [, b]) => b - a
  )[0];

  return (
    <GlassPanel className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-400">
            AI Commander
          </p>

          <h2 className="mt-2 text-3xl font-black text-white">
            Deploy {territory.city}
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            {territory.region} · {territory.status}
          </p>
        </div>

        <div className="text-right">
          <div className="text-5xl font-black text-amber-300">
            {territory.readiness}
          </div>
          <div className="text-xs uppercase tracking-widest text-slate-500">
            Readiness
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
          Strongest Signal
        </div>
        <div className="mt-2 text-xl font-black capitalize text-white">
          {strongestSignal?.[0] ?? "Momentum"} · {strongestSignal?.[1] ?? 0}
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <ScoreLine label="Roofing" value={territory.scores.roofing} />
        <ScoreLine label="FM" value={territory.scores.fm} />
        <ScoreLine label="Permits" value={territory.scores.permits} />
        <ScoreLine label="Industrial" value={territory.scores.industrial} />
      </div>

      <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
        <div className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
          Mission Order
        </div>
        <p className="mt-3 leading-7 text-slate-300">{territory.aiSummary}</p>
        <p className="mt-3 font-black text-white">
          {territory.recommendedAction}
        </p>
      </div>

      <button className="mt-6 w-full rounded-2xl bg-amber-400 py-4 text-sm font-black text-slate-950 transition hover:scale-[1.01]">
        Launch {territory.city} Mission
      </button>
    </GlassPanel>
  );
}

function ScoreLine({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-bold text-slate-400">{label}</span>
        <span className="font-black text-white">{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-400"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}