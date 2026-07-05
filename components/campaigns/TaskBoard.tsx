"use client";

import { useState } from "react";
import { tasks as initialTasks } from "@/data/mock/tasks";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function TaskBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  const completed = tasks.filter((task) => task.status === "complete").length;

  function toggleTask(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "complete" ? "todo" : "complete",
            }
          : task
      )
    );
  }

  return (
    <GlassPanel className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-white">Mission Tasks</h3>

        <div className="text-sm font-bold text-slate-400">
          {completed} / {tasks.length} Complete
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {tasks.map((task) => {
          const complete = task.status === "complete";

          return (
            <button
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-amber-400"
            >
              <div className="text-left">
                <div className="font-bold text-white">{task.title}</div>
                <div className="text-sm text-slate-400">{task.category}</div>
              </div>

              <div
                className={`rounded-full px-3 py-1 text-xs font-black uppercase ${
                  complete
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {task.status}
              </div>
            </button>
          );
        })}
      </div>
    </GlassPanel>
  );
}