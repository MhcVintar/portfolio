"use client";

import { useActiveSection } from "@/context/active-section-context";
import { links } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <motion.header
      className="sticky top-0 z-50 w-full md:top-4 md:w-fit"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 1 }}
    >
      <nav>
        <ul className="flex flex-wrap items-center justify-center border-b-[1px] border-blue-200 border-opacity-50 bg-blue-100 bg-opacity-90 px-3 py-4 text-lg shadow-xl md:flex-nowrap md:rounded-full md:border">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`rounded-full px-3.5 py-1.5 font-medium outline-none transition hover:bg-blue-200 hover:text-slate-950 focus:bg-blue-200 md:py-2.5 ${activeSection === link.name && "bg-blue-200"}`}
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
