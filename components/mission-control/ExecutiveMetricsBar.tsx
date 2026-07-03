const metrics = [
  {
    label: "Active Missions",
    value: "8",
    detail: "3 ready to launch",
  },
  {
    label: "Projected Pipeline",
    value: "$42.8M",
    detail: "+4.1% this quarter",
  },
  {
    label: "Priority Targets",
    value: "127",
    detail: "19 added this week",
  },
  {
    label: "National Readiness",
    value: "84.2",
    detail: "+2.1 this week",
  },
  {
    label: "Critical Intel",
    value: "14",
    detail: "3 urgent signals",
  },
];

export function ExecutiveMetricsBar() {
  return (
    <section className="grid overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl lg:grid-cols-5">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="border-b border-white/10 p-5 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
        >
          <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
            {metric.label}
          </div>

          <div className="mt-3 text-3xl font-black text-white">
            {metric.value}
          </div>

          <div className="mt-1 text-sm font-bold text-amber-300">
            {metric.detail}
          </div>
        </div>
      ))}
    </section>
  );
}