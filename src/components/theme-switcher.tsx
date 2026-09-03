"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun, LuSunMedium } from "react-icons/lu";
import { setTheme, useTheme } from "@/hooks";

export default function ThemeSwitcher() {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Keep the <html> class in sync with the resolved theme. This is a plain
  // DOM side effect (no setState involved), which is exactly what effects
  // are meant for.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
