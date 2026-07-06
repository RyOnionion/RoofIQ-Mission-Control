"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { territories } from "@/data/mock/territories";
import type { Territory } from "@/types/territory";

type CommandMode = "overview" | "campaign" | "territory" | "intelligence";

type MissionStoreValue = {
  territories: Territory[];
  selectedTerritory: Territory;
  selectedTerritoryId: string;
  commandMode: CommandMode;
  setSelectedTerritoryId: (territoryId: string) => void;
  setCommandMode: (mode: CommandMode) => void;
};

const MissionStoreContext = createContext<MissionStoreValue | null>(null);

export function MissionStoreProvider({ children }: { children: ReactNode }) {
  const [selectedTerritoryId, setSelectedTerritoryIdState] = useState(
    territories[0]?.id ?? ""
  );
  const [commandMode, setCommandMode] = useState<CommandMode>("overview");

  const selectedTerritory =
    territories.find((territory) => territory.id === selectedTerritoryId) ??
    territories[0];

  function setSelectedTerritoryId(territoryId: string) {
    const territoryExists = territories.some(
      (territory) => territory.id === territoryId
    );

    if (!territoryExists) return;

    setSelectedTerritoryIdState(territoryId);
  }

  const value = useMemo<MissionStoreValue>(
    () => ({
      territories,
      selectedTerritory,
      selectedTerritoryId,
      commandMode,
      setSelectedTerritoryId,
      setCommandMode,
    }),
    [selectedTerritory, selectedTerritoryId, commandMode]
  );

  return (
    <MissionStoreContext.Provider value={value}>
      {children}
    </MissionStoreContext.Provider>
  );
}

export function useMissionStore() {
  const context = useContext(MissionStoreContext);

  if (!context) {
    throw new Error("useMissionStore must be used inside MissionStoreProvider");
  }

  return context;
}