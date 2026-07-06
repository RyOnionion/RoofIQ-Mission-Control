"use client";

import { TaskBoard } from "@/components/campaigns/TaskBoard";
import { territories } from "@/data/mock/territories";
import { analyzeTerritory } from "@/lib/intelligence";
import { GlassPanel } from "@/components/ui/GlassPanel";

const objectives = [
  ["Roof Walks", "0 / 50"],
  ["New Contacts", "0 / 200"],
  ["Target Accounts", "0 / 100"],
  ["Opportunities", "0 / 25"],
  ["Proposals", "0 / 10"],
  ["Wins", "0 / 3"],
];

export function CampaignsContent() {
  const territory = territories[0];
  const report = analyzeTerritory(territory);

  return (
    <section className="space-y-6 p-6 lg:p-8">
      <GlassPanel className="p-8">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-400">
          Campaign Operations
        </p>

        <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-4xl font-black text-white">
              {territory.city} Expansion Mission
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              Campaign initialized from AI Commander recommendation. This is the
              operating plan for turning territory intelligence into field
              execution.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 px-6 py-4 text-right">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">
              Readiness
            </div>
            <div className="text-5xl font-black text-white">
              {report.readiness}
            </div>
          </div>
        </div>
      </GlassPanel>

      <div className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
        <div className="space-y-6">
          <GlassPanel className="p-6">
            <h3 className="text-2xl font-black text-white">
              Mission Objectives
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {objectives.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    {label}
                  </div>
                  <div className="mt-3 text-3xl font-black text-amber-300">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>

          <TaskBoard />
        </div>

        <GlassPanel className="p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-400">
            Mission Order
          </p>

          <h3 className="mt-2 text-2xl font-black text-white">
            {report.recommendation}
          </h3>

          <div className="mt-6 space-y-3">
            <MissionMetric label="Territory" value={territory.name} />
            <MissionMetric label="Pipeline" value={territory.expectedPipeline} />
            <MissionMetric label="Confidence" value={`${report.confidence}%`} />
            <MissionMetric
              label="Strongest Signal"
              value={report.strongestSignal}
            />
            <MissionMetric label="Weakest Signal" value={report.weakestSignal} />
          </div>

          <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm leading-6 text-slate-300">
            {territory.recommendedAction}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}

function MissionMetric({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <span className="text-sm font-bold text-slate-400">{label}</span>
      <span className="text-sm font-black capitalize text-white">{value}</span>
    </div>
  );
}