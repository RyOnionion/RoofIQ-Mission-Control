"use client";

import { useMemo, useState } from "react";

import { CampaignCard } from "@/components/campaigns/CampaignCard";
import { ExpansionTheater } from "@/components/expansion-theater/ExpansionTheater";
import { IntelFeed } from "@/components/intelligence/IntelFeed";
import { CommanderPanel } from "@/components/mission-control/CommanderPanel";
import { ExecutiveMetricsBar } from "@/components/mission-control/ExecutiveMetricsBar";
import { MissionHero } from "@/components/mission-control/MissionHero";
import { TerritoryRanking } from "@/components/territories/TerritoryRanking";

import { campaigns } from "@/data/mock/campaigns";
import { territories } from "@/data/mock/territories";
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

      <ExecutiveMetricsBar />

      <div className="grid gap-6 lg:grid-cols-[1.6fr_.9fr]">
        <div className="space-y-6">
          <ExpansionTheater
            territories={territories}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />

          <TerritoryRanking
            territories={ranked}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>

        <div className="space-y-6">
          {selected && <CommanderPanel territory={selected} />}
          <IntelFeed />
          {campaign && <CampaignCard campaign={campaign} />}
        </div>
      </div>
    </section>
  );
}