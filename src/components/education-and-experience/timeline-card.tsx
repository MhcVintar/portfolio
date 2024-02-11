import { educationAndExperience } from "@/data";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEye, FaLink } from "react-icons/fa";

type TimelineCardProps = (typeof educationAndExperience)[number] & {
  parity: "odd" | "even";
};

export default function TimelineCard({
  title,
  description,
  link,
  reference,
  parity,
}: TimelineCardProps) {
  const [sectionRef, animate] = useAnimate();
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      animate(sectionRef.current, { opacity: 1, x: 0 });
    }
  }, [isInView]);

  return (
    <motion.section
      ref={sectionRef}
      className="flex h-64 w-96 flex-col rounded-xl border border-blue-200 bg-blue-100 px-4 py-2 text-left"
      initial={{ opacity: 0, x: parity === "odd" ? -100 : 100 }}
    >
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p>{description}</p>
      <div className="mt-auto flex gap-2">
        <a
          href={link}
          target="_blank"
          className="flex items-center gap-x-2 rounded-full border border-amber-300 bg-amber-200 px-3 py-0.5
          outline-none transition hover:scale-105 hover:bg-amber-300 focus:scale-105 focus:bg-amber-300"
        >
          Visit website
          <FaLink className="text-sm" />
        </a>
        {reference && (
          <a
            href={reference}
            target="_blank"
            className="group/reference flex items-center gap-x-2 rounded-full border border-amber-300 bg-amber-200 px-3 py-0.5
            outline-none transition hover:scale-105 hover:bg-amber-300 focus:scale-105 focus:bg-amber-300"
          >
            View reference
            <FaEye className="transition group-hover/reference:scale-125" />
          </a>
        )}
      </div>
    </motion.section>
  );
}
