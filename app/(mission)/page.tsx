"use client";

import { useMemo, useState } from "react";
import { MissionHero } from "@/components/mission-control/MissionHero";
import { ExpansionTheater } from "@/components/expansion-theater/ExpansionTheater";
import { TerritoryPanel } from "@/components/territories/TerritoryPanel";
import { IntelFeed } from "@/components/intelligence/IntelFeed";
import { CampaignCard } from "@/components/campaigns/CampaignCard";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { territories } from "@/data/mock/territories";
import { campaigns } from "@/data/mock/campaigns";
import { rankTerritories } from "@/lib/scoring";

export default function Page() {
  const ranked = useMemo(() => rankTerritories(territories), []);
  const [selectedId, setSelectedId] = useState(ranked[0]?.id ?? "");
  const selected =
    territories.find((territory) => territory.id === selectedId) ??
    ranked[0] ??
    territories[0];
  const campaign = campaigns[0];

  return (
    <section className="space-y-6 p-5 lg:p-8">
      <MissionHero />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_.9fr]">
        <div className="space-y-6">
          <ExpansionTheater
            territories={territories}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />

          <GlassPanel className="p-5">
            <h3 className="mb-4 text-xl font-black">Priority Territories</h3>
            <div className="grid gap-3 lg:grid-cols-5">
              {ranked.map((territory, index) => (
                <button
                  key={territory.id}
                  onClick={() => setSelectedId(territory.id)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    selectedId === territory.id
                      ? "border-amber-400 bg-amber-400/10"
                      : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>#{index + 1}</span>
                    <span>{territory.status}</span>
                  </div>
                  <div className="mt-2 font-black">{territory.name}</div>
                  <div className="mt-3 text-3xl font-black text-amber-300">
                    {territory.readiness}
                  </div>
                </button>
              ))}
            </div>
          </GlassPanel>
        </div>

        <div className="space-y-6">
          <TerritoryPanel territory={selected} />
          <IntelFeed />
          <CampaignCard campaign={campaign} />
        </div>
      </div>
    </section>
  );
}
