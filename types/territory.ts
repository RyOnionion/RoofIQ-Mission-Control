export type TerritoryStatus = "Active" | "Ready" | "Watch" | "Research";

export type Territory = {
  id: string;
  name: string;
  city: string;
  state: string;
  region: string;
  status: TerritoryStatus;
  readiness: number;
  scores: {
    roofing: number;
    fm: number;
    weather: number;
    permits: number;
    industrial: number;
    competition: number;
    labor: number;
    momentum: number;
  };
  map: { x: number; y: number };
  aiSummary: string;
  recommendedAction: string;
  expectedPipeline: string;
};
