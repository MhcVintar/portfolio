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
    offset: ["0 1", "1.25 1"],
  });
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.article
      ref={ref}
      style={{ scale: transformedProgress, opacity: transformedProgress }}
      className="relative h-96 overflow-hidden rounded-lg
      border border-blue-200 bg-blue-100"
    >
      <div
        className="flex h-full w-1/2 flex-col px-10 py-8 text-left
        group-odd:ml-[28rem]"
      >
        <h3 className="mb-2 text-2xl font-semibold capitalize">{title}</h3>
        <p>{description}</p>
        <ul className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="rounded-full border border-amber-300 bg-amber-200
              px-2.5 py-0.5"
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
        className="absolute top-8 h-full w-[36rem] rounded-t-xl object-cover
        transition group-odd:-left-40 group-even:-right-40
        group-hover:-translate-y-5 group-hover:scale-105
        group-odd:group-hover:translate-x-4 group-odd:group-hover:rotate-6
        group-even:group-hover:-translate-x-4 group-even:group-hover:-rotate-6"
      />
    </motion.article>
  );
}
