"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun, LuSunMedium } from "react-icons/lu";

type Theme = "light" | "dark";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "light") {
        document.documentElement.classList.remove("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

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
