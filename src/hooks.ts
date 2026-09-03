import { useInView } from "framer-motion";
import { useEffect, useRef, useSyncExternalStore } from "react";
import {
  SectionType,
  useActiveSection,
} from "@/context/active-section-context";

export function useSectionInView(section: SectionType, amount: number) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (isInView) {
      setActiveSection(section);
    }
  }, [isInView, setActiveSection, section]);
  return ref;
}

export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";
const themeListeners = new Set<() => void>();

function readTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  if (stored) {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// The server has no localStorage/matchMedia to read, so it always renders
// "light"; useSyncExternalStore then reconciles to the real client value
// right after hydration without us calling setState from an effect.
function getServerTheme(): Theme {
  return "light";
}

function subscribeToTheme(callback: () => void) {
  themeListeners.add(callback);
  return () => themeListeners.delete(callback);
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribeToTheme, readTheme, getServerTheme);
}

export function setTheme(theme: Theme) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  themeListeners.forEach((listener) => listener());
}
