"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { LuMoon, LuSun, LuSunMedium } from "react-icons/lu";

type Theme = "light" | "dark";

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

function subscribe(callback: () => void) {
  themeListeners.add(callback);
  return () => themeListeners.delete(callback);
}

function writeTheme(theme: Theme) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  themeListeners.forEach((listener) => listener());
}

export default function ThemeSwitcher() {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerTheme);
  const [isHovered, setIsHovered] = useState(false);

  // Keep the <html> class in sync with the resolved theme. This is a plain
  // DOM side effect (no setState involved), which is exactly what effects
  // are meant for.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleClick = () => {
    writeTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="group fixed bottom-3 right-3 flex h-12 w-12 items-center
      justify-center rounded-full border border-amber-400 bg-amber-300
      text-2xl text-slate-900 outline-none transition hover:scale-110
      hover:bg-amber-400 hover:text-slate-950 focus:scale-110
      focus:bg-amber-400 focus:text-slate-950"
      onClick={handleClick}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {theme === "light" ? (
        isHovered ? (
          <LuSun />
        ) : (
          <LuSunMedium />
        )
      ) : (
        <LuMoon className="transition group-hover:-rotate-12" />
      )}
    </button>
  );
}
