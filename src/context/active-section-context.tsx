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

type SectionType = (typeof links)[number]["name"];
type ActiveSectionContextType = {
  activeSection: SectionType;
  setActiveSection: Dispatch<SetStateAction<SectionType>>;
};
type ActiveSectionProviderProps = { children: ReactNode };

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionType>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
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
