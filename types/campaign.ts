export type Campaign = {
  id: string;
  territoryId: string;
  name: string;
  phase: string;
  progress: number;
  objectives: { label: string; current: number; target: number }[];
};
