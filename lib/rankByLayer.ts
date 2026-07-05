import type { Territory } from "@/types/territory";
import type { LayerType } from "@/lib/layers";

export function rankTerritoriesByLayer(
  territories: Territory[],
  layer: LayerType
): Territory[] {
  return [...territories].sort((a, b) => {
    switch (layer) {
      case "readiness":
        return b.readiness - a.readiness;

      case "roofing":
        return b.scores.roofing - a.scores.roofing;

      case "permits":
        return b.scores.permits - a.scores.permits;

      case "weather":
        return b.scores.weather - a.scores.weather;

      case "industrial":
        return b.scores.industrial - a.scores.industrial;

      case "fm":
        return b.scores.fm - a.scores.fm;

      case "competition":
        return b.scores.competition - a.scores.competition;

      case "labor":
        return b.scores.labor - a.scores.labor;

      case "momentum":
        return b.scores.momentum - a.scores.momentum;

      default:
        return b.readiness - a.readiness;
    }
  });
}