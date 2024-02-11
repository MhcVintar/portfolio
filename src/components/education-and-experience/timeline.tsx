"use client";

import { useSectionInView } from "@/hooks";
import SectionHeading from "@/components/section-heading";
import { educationAndExperience } from "@/data";
import TimelineCard from "./timeline-card";
import TimelineIcon from "./timeline-icon";
import TimelinePattern from "./timeline-pattern";
import TimelineDate from "./timeline-date";

export default function Timeline() {
  const sectionRef = useSectionInView(
    "Education & Experience",
    1 / educationAndExperience.length,
  );

  return (
    <section
      id="education-and-experience"
      ref={sectionRef}
      className="mb-32 w-[55rem] scroll-mt-24 text-center"
    >
      <SectionHeading>Education & Experience</SectionHeading>
      <div className="relative">
        <TimelinePattern className="absolute left-1/2 top-0 z-10 -translate-x-[10px]" />
        <ul className="relative flex flex-col">
          {educationAndExperience.map((item, index) => (
            <li
              key={index}
              className="group flex items-center odd:justify-start even:justify-end"
            >
              <TimelineCard
                {...item}
                parity={index % 2 === 1 ? "odd" : "even"}
              />
              <TimelineIcon
                icon={item.icon}
                className="absolute left-1/2 z-10"
              />
              <TimelineDate
                dateBegin={item.dateBegin}
                dateEnd={item.dateEnd}
                className="absolute flex items-center gap-x-2 group-odd:left-1/2 group-odd:translate-x-10 group-even:right-1/2 group-even:-translate-x-10"
              />
              <div className="absolute h-[4px] w-[56px] bg-amber-300 group-odd:right-1/2 group-even:left-1/2" />
            </li>
          ))}
        </ul>
        <div className="absolute left-1/2 top-0 h-full w-[4px] -translate-x-1/2 rounded-full bg-amber-300" />
        <TimelinePattern className="absolute bottom-0 right-1/2 translate-x-[10px] rotate-180" />
      </div>
    </section>
  );
}
