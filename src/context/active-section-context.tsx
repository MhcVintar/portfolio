"use client";

import { links } from "@/data";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type SectionType = (typeof links)[number]["name"];
type ActiveSectionContextType = {
  activeSection: SectionType;
  setActiveSection: (value: SectionType) => void;
};
type ActiveSectionProviderProps = { children: ReactNode };

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionType>("Home");
  const [lastChange, setLastChange] = useState(Date.now());

  const throttledSetActiveState = (value: SectionType) => {
    if (Date.now() - lastChange > 1000) {
      setActiveSection(value);
      setLastChange(Date.now());
    }
  };

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection: throttledSetActiveState }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSection must be used within the ActiveSectionProvider",
    );
  }
  return context;
}
