"use client";

import { educationAndExperience } from "@/data";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useSyncExternalStore } from "react";
import TimelineCardLink from "./timeline-card-link";

type TimelineCardProps = (typeof educationAndExperience)[number] & {
  parity: "odd" | "even";
};

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("resize", callback);
  };
}

function getSnapshot() {
  return window.innerWidth;
}

export default function TimelineCard({
  title,
  description,
  links,
  parity,
}: TimelineCardProps) {
  const [sectionRef, animate] = useAnimate();
  const isInView = useInView(sectionRef, { once: true, amount: 0.33 });
  const viewportWidth = useSyncExternalStore(subscribe, getSnapshot);

  useEffect(() => {
    if (isInView) {
      animate(sectionRef.current, { opacity: 1, x: 0 });
    }
  }, [isInView, animate, sectionRef]);

  return (
    <motion.section
      ref={sectionRef}
      className="mr-2 flex h-fit w-3/4 flex-col rounded-xl border border-blue-200 bg-blue-100 px-4 py-2 text-left sm:mr-0 sm:h-60 sm:w-[29rem] md:h-72 md:w-[20rem] lg:h-64 lg:w-[22rem] xl:w-96 dark:border-gray-700 dark:bg-gray-800"
      initial={{
        opacity: 0,
        x: parity === "odd" && viewportWidth >= 768 ? -100 : 100,
      }}
    >
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p className="mb-5 sm:mb-0">{description}</p>
      <div className="mt-auto flex flex-col gap-2 lg:flex-row">
        {links.map((item) => (
          <TimelineCardLink key={item.link} {...item} />
        ))}
      </div>
    </motion.section>
  );
}
