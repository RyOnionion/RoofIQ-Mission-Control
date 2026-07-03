"use client";

import type { Territory } from "@/types/territory";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function ExpansionTheater({ territories, selectedId, onSelect }: { territories: Territory[]; selectedId: string; onSelect: (id: string) => void }) {
  return (
    <GlassPanel className="relative h-[520px] overflow-hidden p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-white">Expansion Theater</h2>
          <p className="text-sm text-slate-400">Click a territory to pivot Mission Control.</p>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-400">Mock Layer v1</span>
      </div>
      <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80">
        <svg viewBox="0 0 1000 560" className="absolute inset-0 h-full w-full opacity-90" aria-label="United States opportunity map">
          <path d="M110 225 L158 170 L248 138 L360 130 L468 146 L585 143 L702 164 L810 204 L900 278 L940 360 L888 424 L754 456 L630 450 L510 480 L385 462 L272 488 L185 432 L112 354 Z" fill="#d7dce2" stroke="#111827" strokeWidth="3" />
          <path d="M178 190 L300 220 L432 210 L568 220 L705 222 L842 262" fill="none" stroke="#111827" strokeWidth="1.5" opacity="0.75" />
          <path d="M255 485 L282 392 L312 282 L340 132" fill="none" stroke="#111827" strokeWidth="1.5" opacity="0.75" />
          <path d="M420 462 L424 350 L432 222 L448 138" fill="none" stroke="#111827" strokeWidth="1.5" opacity="0.75" />
          <path d="M575 473 L572 350 L570 222 L580 144" fill="none" stroke="#111827" strokeWidth="1.5" opacity="0.75" />
          <path d="M720 456 L700 355 L695 225 L700 164" fill="none" stroke="#111827" strokeWidth="1.5" opacity="0.75" />
          <path d="M840 428 L812 340 L800 250 L810 204" fill="none" stroke="#111827" strokeWidth="1.5" opacity="0.75" />
          <path d="M120 352 L260 350 L410 358 L570 356 L740 368 L940 360" fill="none" stroke="#111827" strokeWidth="1.5" opacity="0.75" />
        </svg>
        {territories.map((territory) => {
          const active = territory.id === selectedId;
          return (
            <button key={territory.id} onClick={() => onSelect(territory.id)} className={`absolute z-20 grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ring-2 ring-white transition hover:scale-125 ${active ? "bg-amber-400 shadow-[0_0_30px_rgba(251,191,36,.6)]" : "bg-sky-400"}`} style={{ left: `${territory.map.x}%`, top: `${territory.map.y}%` }} title={`${territory.name} ${territory.readiness}`}>
              <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
            </button>
          );
        })}
      </div>
    </GlassPanel>
  );
}
