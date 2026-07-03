"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Crosshair, FileText, Flag, Map, RadioTower, Settings, Shield } from "lucide-react";

const nav = [
  { label: "Mission Control", href: "/", icon: Shield },
  { label: "Expansion Theater", href: "/expansion-theater", icon: Map },
  { label: "Territories", href: "/territories", icon: Crosshair },
  { label: "Campaigns", href: "/campaigns", icon: Flag },
  { label: "Intel Feed", href: "/intelligence", icon: RadioTower },
  { label: "Briefings", href: "/executive-briefings", icon: FileText },
  { label: "Settings", href: "/settings", icon: Settings }
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-white/10 bg-slate-950/80 p-5 lg:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-400 text-lg font-black text-slate-950">RQ</div>
        <div>
          <div className="text-xl font-black tracking-tight text-white">RoofIQ</div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Mission Control</div>
        </div>
      </div>
      <nav className="space-y-1">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${active ? "bg-amber-400 text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-8 rounded-3xl border border-amber-400/25 bg-amber-400/10 p-4">
        <div className="flex items-center gap-2 text-sm font-black text-amber-300"><Activity size={16} /> v1.0 Foundation</div>
        <p className="mt-2 text-xs leading-5 text-slate-400">Executive demo mode. Mock intelligence, real product direction.</p>
      </div>
    </aside>
  );
}
