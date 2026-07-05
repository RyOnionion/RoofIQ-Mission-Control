"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import type { Territory } from "@/types/territory";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { analyzeTerritory } from "@/lib/intelligence";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const coordinates: Record<string, [number, number]> = {
  "dallas-tx": [-96.797, 32.7767],
  "houston-tx": [-95.3698, 29.7604],
  "phoenix-az": [-112.074, 33.4484],
  "denver-co": [-104.9903, 39.7392],
  "atlanta-ga": [-84.388, 33.749],
};

export function ExpansionTheater({
  territories,
  selectedId,
  onSelect,
}: {
  territories: Territory[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const selected =
    territories.find((territory) => territory.id === selectedId) ??
    territories[0];

  const selectedReport = selected ? analyzeTerritory(selected) : null;

  return (
    <GlassPanel className="relative overflow-hidden p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-400">
            Expansion Theater
          </p>
          <h2 className="mt-1 text-2xl font-black text-white">
            National Opportunity Map
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Click a territory to pivot Mission Control.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-right">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">
            Selected
          </div>
          <div className="text-lg font-black text-white">
            {selected?.name ?? "None"}
          </div>
        </div>
      </div>

      <div className="relative h-[620px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(251,191,36,0.16),transparent_30rem),linear-gradient(180deg,rgba(15,23,42,.45),rgba(2,6,23,1))]" />

        <div className="absolute inset-0 opacity-[0.12]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.22)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="absolute left-5 top-5 z-20 flex flex-wrap gap-2">
          <Layer active label="Readiness" />
          <Layer label="Permits" />
          <Layer label="Weather" />
          <Layer label="FM" />
          <Layer label="Industrial" />
        </div>

        <div className="absolute inset-x-4 top-14 bottom-28">
          <ComposableMap
            projection="geoAlbersUsa"
            projectionConfig={{ scale: 1050 }}
            className="h-full w-full"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(226,232,240,0.78)"
                    stroke="rgba(15,23,42,0.95)"
                    strokeWidth={0.75}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        fill: "rgba(251,191,36,0.35)",
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
              const report = analyzeTerritory(territory);
              const point = coordinates[territory.id];

              if (!point) return null;

              return (
                <Marker key={territory.id} coordinates={point}>
                  <g
                    onClick={() => onSelect(territory.id)}
                    className="cursor-pointer"
                  >
                    {active && (
                      <circle
                        r={18}
                        fill="rgba(251,191,36,0.18)"
                        stroke="rgba(251,191,36,0.75)"
                        strokeWidth={2}
                      />
                    )}

                    <circle
                      r={active ? 8 : 6}
                      fill={active ? "#fbbf24" : "#38bdf8"}
                      stroke="#ffffff"
                      strokeWidth={2}
                    />

                    <circle r={2.5} fill="#020617" />

                    <text
                      x={12}
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
                      x={12}
                      y={6}
                      fill="#fbbf24"
                      fontSize={9}
                      fontWeight={900}
                      paintOrder="stroke"
                      stroke="#020617"
                      strokeWidth={4}
                    >
                      {report.readiness} readiness
                    </text>
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-20 grid gap-3 rounded-3xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur lg:grid-cols-4">
          <TheaterStat label="Mode" value="Executive Map" />
          <TheaterStat label="Territory" value={selected?.city ?? "None"} />
          <TheaterStat
            label="Readiness"
            value={String(selectedReport?.readiness ?? 0)}
          />
          <TheaterStat
            label="Recommendation"
            value={selectedReport?.recommendation ?? "Monitor"}
          />
        </div>
      </div>
    </GlassPanel>
  );
}

function Layer({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-black ${
        active
          ? "border-amber-400 bg-amber-400 text-slate-950"
          : "border-white/10 bg-slate-950/70 text-slate-400"
      }`}
    >
      {label}
    </span>
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