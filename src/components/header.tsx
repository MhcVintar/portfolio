"use client";

import { SectionType, useActiveSection } from "@/context/active-section-context";
import { links } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { MouseEvent } from "react";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSection();

  function handleClick(event: MouseEvent<HTMLAnchorElement>, section: SectionType) {
    event.currentTarget.blur();
    setActiveSection(section);
  }

  return (
    <motion.header
      className="sticky top-0 z-50 w-full md:top-4 md:w-fit"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <nav>
        <ul
          className="flex flex-wrap items-center justify-center gap-y-2
          border-b-[1px] border-blue-200 border-opacity-50 bg-blue-100
          bg-opacity-90 px-3 py-4 text-lg shadow-xl dark:border-gray-700
          dark:bg-gray-800 dark:bg-opacity-90 md:flex-nowrap md:rounded-full
          md:border"
        >
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                onClick={(event) => handleClick(event, link.name)}
                className={`rounded-full px-3.5 py-1.5 font-medium outline-none
                transition hover:bg-blue-200 hover:text-slate-950
                focus:bg-blue-200 dark:hover:bg-gray-700
                dark:hover:text-gray-100 dark:focus:bg-gray-700 md:py-2.5
                ${activeSection === link.name && "bg-blue-200 dark:bg-gray-700"}`}
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
