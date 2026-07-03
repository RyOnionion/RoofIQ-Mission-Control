import type { Territory } from "@/types/territory";

export function rankTerritories(territories: Territory[]) {
  return [...territories].sort((a, b) => b.readiness - a.readiness);
}

export function scoreColor(score: number) {
  if (score >= 88) return "text-emerald-300";
  if (score >= 80) return "text-amber-300";
  return "text-red-300";
}
