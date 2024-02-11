"use client";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import SectionHeading from "./section-heading";
import { skills } from "@/data";
import { useSectionInView } from "@/hooks";

export default function Skills() {
  const [ulRef, animate] = useAnimate();
  const isInView = useInView(ulRef, { once: true, amount: 0.5 });
  const sectionRef = useSectionInView("Skills", 0.75);

  useEffect(() => {
    if (isInView) {
      animate("li", { opacity: 1, y: 0 }, { delay: stagger(0.05) });
    }
  }, [isInView]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="mb-32 w-[55rem] scroll-mt-24 text-center"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul ref={ulRef} className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="rounded-xl border border-blue-200 bg-blue-100 px-4 py-2
            text-lg"
            initial={{ opacity: 0, y: 100 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
