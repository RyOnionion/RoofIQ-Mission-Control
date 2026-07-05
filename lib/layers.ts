export const layers = {
  readiness: "readiness",
  roofing: "roofing",
  permits: "permits",
  weather: "weather",
  industrial: "industrial",
  fm: "fm",
  competition: "competition",
  labor: "labor",
  momentum: "momentum",
} as const;

export type LayerType = keyof typeof layers;