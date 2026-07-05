"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { territories } from "@/data/mock/territories";
import { analyzeTerritory } from "@/lib/intelligence";
import { GlassPanel } from "@/components/ui/GlassPanel";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const coordinates: Record<string, [number, number]> = {
  "dallas-tx": [-96.797, 32.7767],
  "houston-tx": [-95.3698, 29.7604],
  "phoenix-az": [-112.074, 33.4484],
  "denver-co": [-104.9903, 39.7392],
  "atlanta-ga": [-84.388, 33.749],
};

export function NationalTheater() {
  const ranked = useMemo(
    () =>
      [...territories].sort(
        (a, b) => analyzeTerritory(b).readiness - analyzeTerritory(a).readiness
      ),
    []
  );

  const [selectedId, setSelectedId] = useState(ranked[0]?.id ?? "");
  
  const selected =
    territories.find((territory) => territory.id === selectedId) ??
    ranked[0] ??
    territories[0];

  const report = analyzeTerritory(selected);

  return (
    <div className="grid h-full gap-6 xl:grid-cols-[1fr_420px]">
      <GlassPanel className="relative min-h-[640px] overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.22)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(251,191,36,0.16),transparent_32rem),radial-gradient(circle_at_72%_36%,rgba(56,189,248,0.12),transparent_28rem)]" />

        <div className="absolute left-6 top-6 z-20">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-400">
            National Expansion Theater
          </p>

          <h2 className="mt-2 text-4xl font-black text-white">
            United States Opportunity Map
          </h2>

          <p className="mt-2 max-w-xl text-slate-400">
            Analyze markets, identify opportunities, and deploy campaigns.
          </p>
        </div>

        <div className="absolute left-6 top-36 z-20 flex flex-wrap gap-2">
          <Layer active label="Readiness" />
          <Layer label="Permits" />
          <Layer label="Weather" />
          <Layer label="FM Global" />
          <Layer label="Industrial" />
          <Layer label="Competition" />
        </div>

        <div className="absolute inset-x-4 bottom-24 top-44">
          <ComposableMap
            projection="geoAlbersUsa"
            projectionConfig={{ scale: 1180 }}
            className="h-full w-full"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(226,232,240,0.82)"
                    stroke="rgba(15,23,42,0.96)"
                    strokeWidth={0.75}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: "rgba(251,191,36,0.38)",
                        outline: "none",
                      },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {territories.map((territory) => {
              const active = territory.id === selectedId;
              const territoryReport = analyzeTerritory(territory);
              const point = coordinates[territory.id];

              if (!point) return null;

              return (
                <Marker key={territory.id} coordinates={point}>
                  <g
                    onClick={() => setSelectedId(territory.id)}
                    className="cursor-pointer"
                  >
                    {active && (
                      <>
                        <circle
                          r={24}
                          fill="rgba(251,191,36,0.11)"
                          stroke="rgba(251,191,36,0.9)"
                          strokeWidth={2}
                        />
                        <circle
                          r={14}
                          fill="rgba(251,191,36,0.15)"
                          stroke="rgba(251,191,36,0.55)"
                          strokeWidth={1}
                        />
                      </>
                    )}

                    <circle
                      r={active ? 8 : 6}
                      fill={active ? "#fbbf24" : "#38bdf8"}
                      stroke="#ffffff"
                      strokeWidth={2}
                    />

                    <circle r={2.5} fill="#020617" />

                    <text
                      x={13}
                      y={-8}
                      fill="#ffffff"
                      fontSize={11}
                      fontWeight={900}
                      paintOrder="stroke"
                      stroke="#020617"
                      strokeWidth={4}
                    >
                      {territory.city}
                    </text>

                    <text
                      x={13}
                      y={7}
                      fill="#fbbf24"
                      fontSize={9}
                      fontWeight={900}
                      paintOrder="stroke"
                      stroke="#020617"
                      strokeWidth={4}
                    >
                      {territoryReport.readiness} readiness
                    </text>
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-20 grid gap-3 rounded-3xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur lg:grid-cols-5">
          <TheaterStat label="Selected" value={selected.name} />
          <TheaterStat label="Readiness" value={String(report.readiness)} />
          <TheaterStat label="Confidence" value={`${report.confidence}%`} />
          <TheaterStat label="Recommendation" value={report.recommendation} />
          <TheaterStat label="Pipeline" value={selected.expectedPipeline} />
        </div>
      </GlassPanel>

      <GlassPanel className="flex min-h-[640px] flex-col p-6">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-400">
          AI Commander
        </p>

        <h2 className="mt-2 text-3xl font-black text-white">
          {report.recommendation}: {selected.city}
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          {selected.region} · {selected.status}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <CommanderMetric label="Readiness" value={report.readiness} />
          <CommanderMetric label="Confidence" value={`${report.confidence}%`} />
          <CommanderMetric label="Pipeline" value={selected.expectedPipeline} />
          <CommanderMetric label="Signal" value={report.strongestSignal} />
        </div>

        <div className="mt-6 space-y-4">
          <ScoreLine label="Roofing" value={selected.scores.roofing} />
          <ScoreLine label="FM" value={selected.scores.fm} />
          <ScoreLine label="Permits" value={selected.scores.permits} />
          <ScoreLine label="Industrial" value={selected.scores.industrial} />
          <ScoreLine label="Momentum" value={selected.scores.momentum} />
        </div>

        <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
            Mission Assessment
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            {selected.aiSummary}
          </p>

          <p className="mt-3 text-sm font-black text-white">
            {selected.recommendedAction}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
            Ranked Territories
          </div>

          <div className="mt-4 space-y-2">
            {ranked.map((territory, index) => {
              const active = territory.id === selectedId;
              const itemReport = analyzeTerritory(territory);

              return (
                <button
                  key={territory.id}
                  onClick={() => setSelectedId(territory.id)}
                  className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left transition ${
                    active
                      ? "border-amber-400 bg-amber-400/10"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                  }`}
                >
                  <span className="text-sm font-black text-white">
                    #{index + 1} {territory.city}
                  </span>

                  <span className="text-sm font-black text-amber-300">
                    {itemReport.readiness}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <Link
          href={`/campaigns?territory=${selected.id}`}
          className="mt-auto flex w-full items-center justify-center rounded-2xl bg-amber-400 py-4 text-sm font-black text-slate-950 transition hover:scale-[1.01]"
        >
          Launch {selected.city} Mission
        </Link>
      </GlassPanel>
    </div>
  );
}

function Layer({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`rounded-full border px-4 py-2 text-xs font-black transition ${
        active
          ? "border-amber-400 bg-amber-400 text-slate-950"
          : "border-white/10 bg-slate-900/70 text-slate-400 hover:border-slate-500"
      }`}
    >
      {label}
    </button>
  );
}

function TheaterStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>
      <div className="mt-1 text-lg font-black text-white">{value}</div>
    </div>
  );
}

function CommanderMetric({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>
      <div className="mt-1 text-sm font-black capitalize text-white">
        {value}
      </div>
    </div>
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