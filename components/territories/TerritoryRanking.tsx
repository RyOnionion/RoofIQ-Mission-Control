"use client";

import type { Territory } from "@/types/territory";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { analyzeTerritory } from "@/lib/intelligence";

export function TerritoryRanking({
  territories,
  selectedId,
  onSelect,
}: {
  territories: Territory[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const ranked = [...territories].sort(
    (a, b) => analyzeTerritory(b).readiness - analyzeTerritory(a).readiness
  );

  return (
    <GlassPanel className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-400">
            Priority Territories
          </p>
          <h3 className="mt-1 text-xl font-black text-white">
            Expansion Targets
          </h3>
        </div>

        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-400">
          Ranked by calculated readiness
        </span>
      </div>

      <div className="grid gap-3 lg:grid-cols-5">
        {ranked.map((territory, index) => {
          const active = selectedId === territory.id;
          const report = analyzeTerritory(territory);

          return (
            <button
              key={territory.id}
              onClick={() => onSelect(territory.id)}
              className={`rounded-2xl border p-4 text-left transition hover:scale-[1.02] ${
                active
                  ? "border-amber-400 bg-amber-400/10 shadow-[0_0_28px_rgba(251,191,36,.16)]"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
              }`}
            >
              <div className="flex justify-between text-xs text-slate-400">
                <span>#{index + 1}</span>
                <span>{report.recommendation}</span>
              </div>

              <div className="mt-2 font-black text-white">{territory.name}</div>

              <div className="mt-3 flex items-end justify-between">
                <div className="text-3xl font-black text-amber-300">
                  {report.readiness}
                </div>

                <span className="text-xs font-bold text-slate-500">
                  calc
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </GlassPanel>
  );
}