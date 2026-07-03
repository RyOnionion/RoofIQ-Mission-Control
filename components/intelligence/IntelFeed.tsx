import { GlassPanel } from "@/components/ui/GlassPanel";

const items = [
  "Dallas permit momentum increased 11% over trailing 60 days.",
  "Houston rainfall pressure elevated; service demand likely to rise.",
  "Denver hail probability remains above baseline.",
  "Atlanta logistics construction activity continues to expand."
];

export function IntelFeed() {
  return (
    <GlassPanel className="p-5">
      <h3 className="text-xl font-black text-white">Intel Feed</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-300">{item}</div>
        ))}
      </div>
    </GlassPanel>
  );
}
