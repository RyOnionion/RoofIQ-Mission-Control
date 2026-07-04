import type { Territory } from "@/types/territory";

const WEIGHTS = {
  roofing: 0.22,
  fm: 0.15,
  weather: 0.08,
  permits: 0.15,
  industrial: 0.15,
  competition: 0.10,
  labor: 0.05,
  momentum: 0.10,
};

export type IntelligenceReport = {
  readiness: number;
  confidence: number;
  strongestSignal: string;
  weakestSignal: string;
  recommendation: string;
};

export function analyzeTerritory(
  territory: Territory
): IntelligenceReport {
  const scores = territory.scores;

  const readiness =
    scores.roofing * WEIGHTS.roofing +
    scores.fm * WEIGHTS.fm +
    scores.weather * WEIGHTS.weather +
    scores.permits * WEIGHTS.permits +
    scores.industrial * WEIGHTS.industrial +
    scores.competition * WEIGHTS.competition +
    scores.labor * WEIGHTS.labor +
    scores.momentum * WEIGHTS.momentum;

  const ordered = Object.entries(scores).sort(
    ([, a], [, b]) => b - a
  );

  const strongestSignal = ordered[0][0];
  const weakestSignal = ordered[ordered.length - 1][0];

  let recommendation = "Monitor";

  if (readiness >= 90) {
    recommendation = "Deploy Immediately";
  } else if (readiness >= 80) {
    recommendation = "Build Pipeline";
  } else if (readiness >= 70) {
    recommendation = "Develop Market";
  }

  return {
    readiness: Number(readiness.toFixed(1)),
    confidence: Math.min(
      99,
      Math.round(readiness + territory.scores.momentum * 0.08)
    ),
    strongestSignal,
    weakestSignal,
    recommendation,
  };
}