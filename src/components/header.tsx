"use client";

import { useActiveSection } from "@/context/active-section-context";
import { links } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <motion.header
      className="sticky left-1/2 top-4 z-50 -mb-20 mt-36"
      initial={{ opacity: 0, y: -100, x: "-50%" }}
      animate={{ opacity: 1, y: 1, x: "-50%" }}
    >
      <nav>
        <ul
          className="flex items-center justify-center rounded-full border
          border-blue-200 border-opacity-50 bg-blue-100 bg-opacity-90 px-3
          py-4 text-lg shadow-xl"
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`rounded-full px-3.5 py-2.5 font-medium
                outline-none transition hover:bg-blue-200
                hover:text-slate-950 focus:bg-blue-200
                ${activeSection === link.name && "bg-blue-200"}`}
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
