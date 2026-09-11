"use client";

import { projects } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useTheme } from "@/hooks";

type ProjectCardProps = (typeof projects)[number] & {
  priority?: boolean;
};

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  image,
  priority,
}: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const theme = useTheme();

  return (
    <motion.article
      ref={ref}
      style={{ scale: transformedProgress, opacity: transformedProgress }}
      className="relative h-fit w-full overflow-hidden rounded-xl border border-blue-200 bg-blue-100 sm:h-96 dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="scrollbar-hide flex h-3/5 w-full flex-col overflow-auto px-5 py-4 text-left sm:h-full sm:w-1/2 sm:group-even:translate-x-[19rem] md:group-even:translate-x-[21rem] lg:group-even:translate-x-[22rem]">
        <h3 className="mb-2 text-2xl font-semibold capitalize">
          <a
            href={link.href}
            target="_blank"
            className="group/link flex w-fit items-center gap-x-2 transition outline-none hover:text-blue-700 focus:text-blue-700 dark:hover:text-blue-300 dark:focus:text-blue-300"
          >
            {title}
            <span className="text-lg transition group-hover/link:scale-110 group-focus/link:scale-110">
              {link.icon}
            </span>
          </a>
        </h3>
        <p className="mb-6">{description}</p>
        <ul className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="rounded-full border border-amber-300 bg-amber-200 px-3 py-0.5 text-slate-900"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={theme === "dark" ? image.dark : image.light}
        alt={title}
        quality={95}
        priority={priority}
        className="h-1/3 w-11/12 rounded-tr-xl border border-blue-200 object-cover transition group-hover:scale-105 sm:absolute sm:top-8 sm:block sm:h-full sm:w-[27rem] sm:rounded-t-xl sm:group-odd:-right-40 sm:group-even:-left-40 sm:group-hover:-translate-y-5 sm:group-odd:group-hover:-translate-x-4 sm:group-odd:group-hover:-rotate-6 sm:group-even:group-hover:translate-x-4 sm:group-even:group-hover:rotate-6 md:w-[30rem] dark:border-gray-700"
      />
    </motion.article>
  );
}
