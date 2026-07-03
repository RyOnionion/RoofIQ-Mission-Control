import type { Campaign } from "@/types/campaign";

export const campaigns: Campaign[] = [
  {
    id: "dallas-90-day",
    territoryId: "dallas-tx",
    name: "Dallas 90-Day Expansion",
    phase: "Foundation Build",
    progress: 42,
    objectives: [
      { label: "Roof Walks", current: 18, target: 50 },
      { label: "Commercial Contacts", current: 74, target: 200 },
      { label: "Target Accounts", current: 39, target: 100 },
      { label: "Opportunities", current: 11, target: 25 },
      { label: "Proposals", current: 4, target: 10 },
      { label: "Wins", current: 1, target: 5 }
    ]
  }
];
