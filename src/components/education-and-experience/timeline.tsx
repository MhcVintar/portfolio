"use client";

import { useSectionInView } from "@/hooks";
import SectionHeading from "@/components/section-heading";
import { educationAndExperience } from "@/data";
import TimelineCard from "./timeline-card";
import TimelineIcon from "./timeline-icon";
import TimelinePattern from "./timeline-pattern";
import TimelineDate from "./timeline-date";
import { motion } from "framer-motion";

export default function Timeline() {
  const sectionRef = useSectionInView(
    "Education & Experience",
    1 / educationAndExperience.length,
  );

  return (
    <section
      id="education-and-experience"
      ref={sectionRef}
      className="mb-32 scroll-mt-24 text-center sm:w-[35rem] md:w-[45rem] lg:w-[50rem] xl:w-[55rem]"
    >
      <SectionHeading>Education & Experience</SectionHeading>
      <div className="relative">
        <TimelinePattern className="absolute left-[22px] top-0 z-10 md:left-1/2 md:-translate-x-[10px]" />
        <ul className="relative flex flex-col gap-y-6 md:gap-y-0">
          {educationAndExperience.map((item, index) => (
            <li
              key={index}
              className="group flex flex-col items-end justify-center sm:flex-row sm:items-center sm:justify-end md:odd:justify-start md:even:justify-end"
            >
              <TimelineCard
                {...item}
                parity={index % 2 === 1 ? "odd" : "even"}
              />
              <TimelineIcon
                icon={item.icon}
                className="absolute left-[32px] z-10 md:left-1/2"
              />
              <TimelineDate
                dateBegin={item.dateBegin}
                dateEnd={item.dateEnd}
                className="right-4 mb-2 mr-4 flex items-center gap-x-2 self-end sm:absolute sm:mr-0 md:mb-0 md:self-center md:group-odd:left-1/2 md:group-odd:translate-x-10 md:group-even:right-1/2 md:group-even:-translate-x-10"
              />
              <motion.div
                className="absolute right-3/4 mr-2 h-[4px] w-1/5 bg-amber-300 sm:left-[48px] sm:mr-0 sm:w-[48px] md:left-[initial] md:w-[40px] md:group-odd:right-1/2 md:group-even:left-1/2 lg:w-[48px] xl:w-[56px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </li>
          ))}
        </ul>
        <motion.div
          className="absolute left-[30px] top-0 h-full w-[4px] rounded-full bg-amber-300 md:left-1/2 md:-translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
        <TimelinePattern className="absolute bottom-0 left-[2px] rotate-180 md:left-[initial] md:right-1/2 md:translate-x-[10px]" />
      </div>
    </section>
  );
}
