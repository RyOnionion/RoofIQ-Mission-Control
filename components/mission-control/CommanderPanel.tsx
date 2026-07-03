import { ArrowUpRight, Crosshair, RadioTower, Rocket } from "lucide-react";

export function CommanderPanel() {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-400 text-slate-950">
            <RadioTower size={22} />
          </span>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">
              AI Commander
            </p>
            <h3 className="text-2xl font-black text-white">Deploy Dallas</h3>
          </div>
        </div>

        <div className="rounded-2xl bg-emerald-400/10 px-4 py-2 text-right">
          <div className="text-2xl font-black text-emerald-300">94%</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">
            Confidence
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <Signal label="Permit momentum" value="+18%" />
        <Signal label="Industrial growth" value="Extreme" />
        <Signal label="Weather window" value="Favorable" />
        <Signal label="Competition pressure" value="Manageable" />
      </div>

      <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
        <div className="flex items-center gap-2 text-sm font-black text-amber-300">
          <Crosshair size={17} />
          Recommended Action
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Launch Dallas campaign within 30 days. Assign 2 business developers,
          1 estimator, and 1 service lead.
        </p>
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-4 text-sm font-black text-slate-950 transition hover:scale-[1.02]">
        <Rocket size={18} />
        Launch Campaign
        <ArrowUpRight size={18} />
      </button>
    </div>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <span className="text-sm font-bold text-slate-400">{label}</span>
      <span className="text-sm font-black text-white">{value}</span>
    </div>
  );
}