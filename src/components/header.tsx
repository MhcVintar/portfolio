"use client";

import { useActiveSection } from "@/context/active-section-context";
import { links } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <motion.header
      className="sticky left-1/2 top-4 z-50 mt-32"
      initial={{ opacity: 0, y: -100, x: "-50%" }}
      animate={{ opacity: 1, y: 1, x: "-50%" }}
    >
      <nav>
        <ul
          className="flex h-16 w-[43rem] items-center justify-center gap-y-2
          rounded-full border border-blue-200 border-opacity-50 bg-blue-100
          bg-opacity-90 text-lg shadow-2xl"
        >
          {links.map((link, index) => (
            <li
              key={index}
              className={`rounded-full px-3.5 py-2 font-medium
              transition hover:bg-blue-200 hover:text-slate-950
              ${activeSection === link.name && "bg-blue-200"}`}
            >
              <Link
                href={link.href}
                onClick={() => setActiveSection(link.name)}
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
