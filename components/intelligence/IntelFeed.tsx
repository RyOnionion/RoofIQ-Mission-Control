"use client";

import { intel } from "@/data/mock/intel";
import { territories } from "@/data/mock/territories";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function IntelFeed({ territoryId }: { territoryId?: string }) {
  const territory =
    territories.find((item) => item.id === territoryId) ?? territories[0];

  const items =
    intel[territory.id as keyof typeof intel] ??
    ["No current intelligence available for this territory."];

  return (
    <GlassPanel className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-400">
            Intel Feed
          </p>
          <h3 className="mt-1 text-xl font-black text-white">
            {territory.city} Signals
          </h3>
        </div>

        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-400">
          Live mock
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}