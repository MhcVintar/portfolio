"use client";

import { projects } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectCardProps = (typeof projects)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  image,
}: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.article
      ref={ref}
      style={{ scale: transformedProgress, opacity: transformedProgress }}
      className="relative h-fit w-full overflow-hidden rounded-xl border
      border-blue-200 bg-blue-100 dark:border-gray-700 dark:bg-gray-800
      sm:h-96"
    >
      <div
        className="flex h-3/5 w-full flex-col px-5 py-4 text-left sm:h-full
        sm:w-1/2 sm:group-odd:translate-x-[19rem]
        md:group-odd:translate-x-[21rem] lg:group-odd:translate-x-[22rem]"
      >
        <h3 className="mb-2 text-2xl font-semibold capitalize">{title}</h3>
        <p className="mb-6">{description}</p>
        <ul className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="rounded-full border border-amber-300 bg-amber-200 px-3
              py-0.5 text-slate-900"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={image}
        alt={title}
        quality={95}
        className="h-1/3 w-11/12 rounded-tr-xl object-cover transition
        group-hover:scale-105 sm:absolute sm:top-8 sm:block sm:h-full
        sm:w-[27rem] sm:rounded-t-xl sm:group-odd:-left-40
        sm:group-even:-right-40 sm:group-hover:-translate-y-5
        sm:group-odd:group-hover:translate-x-4
        sm:group-odd:group-hover:rotate-6
        sm:group-even:group-hover:-translate-x-4
        sm:group-even:group-hover:-rotate-6 md:w-[30rem]"
      />
    </motion.article>
  );
}
