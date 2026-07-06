export type MissionTaskStatus = "todo" | "active" | "complete";

export type MissionTaskCategory =
  | "Roof Walk"
  | "Contact"
  | "Target"
  | "Proposal"
  | "Win";

export type MissionTask = {
  id: string;
  title: string;
  category: MissionTaskCategory;
  points: number;
  status: MissionTaskStatus;
};