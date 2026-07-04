"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type MissionStore = {
  selectedTerritoryId: string;
  setSelectedTerritoryId: (id: string) => void;
};

const MissionContext = createContext<MissionStore | null>(null);

export function MissionProvider({ children }: { children: ReactNode }) {
  const [selectedTerritoryId, setSelectedTerritoryId] = useState("");

  const value = useMemo(
    () => ({
      selectedTerritoryId,
      setSelectedTerritoryId,
    }),
    [selectedTerritoryId]
  );

  return (
    <MissionContext.Provider value={value}>
      {children}
    </MissionContext.Provider>
  );
}

export function useMissionStore() {
  const context = useContext(MissionContext);

  if (!context) {
    throw new Error("useMissionStore must be used inside MissionProvider");
  }

  return context;
}