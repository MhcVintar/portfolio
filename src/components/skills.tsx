"use client";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import SectionHeading from "./section-heading";

const skills = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Prisma",
  "Git",
  "Node.js",
  "Express",
  "Next.js",
  "HTML",
  "CSS",
  "Docker",
  "Kubernetes",
  "Framer Motion",
  "TailwindCSS",
];

export default function Skills() {
  const [ref, animate] = useAnimate();
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate("li", { opacity: 1, y: 0 }, { delay: stagger(0.05) });
    }
  }, [isInView]);

  return (
    <section id="skills" className="mb-24 w-[55rem] scroll-mt-24 text-center">
      <SectionHeading>My skills</SectionHeading>
      <ul ref={ref} className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="rounded-lg border border-blue-200 bg-blue-100 px-4 py-2
            text-lg"
            initial={{ opacity: 0, y: 50 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
