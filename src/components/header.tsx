"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Contact",
    href: "#contact",
  },
] as const;

export default function Header() {
  const [state, setState] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 110) {
        setState(true);
      } else {
        setState(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`${
        state ? "fixed top-4" : "absolute top-32"
      } left-1/2 -translate-x-1/2 bg-slate-200 rounded-full shadow-lg border border-slate-300 border-opacity-50`}
      initial={{ x: "-50%", y: -100, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
    >
      <nav>
        <ul className="flex py-1.5 px-1.5">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-slate-800 text-opacity-80
                  rounded-full px-3 py-1 transition
                  hover:bg-slate-400 hover:text-slate-900 hover:text-opacity-100
                  focus:bg-slate-300 focus:outline-none"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
