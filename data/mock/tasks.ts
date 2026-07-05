import type { MissionTask } from "@/types/task";

export const tasks: MissionTask[] = [
  {
    id: "1",
    title: "Walk ABC Manufacturing",
    category: "Roof Walk",
    points: 5,
    status: "todo",
  },
  {
    id: "2",
    title: "Call Facility Manager",
    category: "Contact",
    points: 2,
    status: "active",
  },
  {
    id: "3",
    title: "Quote Distribution Center",
    category: "Proposal",
    points: 10,
    status: "todo",
  },
  {
    id: "4",
    title: "Visit Hospital Campus",
    category: "Roof Walk",
    points: 5,
    status: "complete",
  },
];