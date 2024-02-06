"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
] as const;

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 110) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
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
        isFixed ? "fixed top-4" : "absolute top-32"
      } left-1/2 z-50 -translate-x-1/2`}
      initial={{ x: "-50%", y: -100, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
    >
      <nav>
        <ul
          className="flex h-16 w-[35rem] items-center justify-center gap-y-2
          rounded-full border border-blue-200 border-opacity-50 bg-blue-100
          bg-opacity-95 text-lg shadow-2xl"
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-3 font-medium
                transition hover:bg-blue-200 hover:text-slate-950"
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
