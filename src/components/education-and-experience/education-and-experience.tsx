"use client";

import { useSectionInView } from "@/hooks";
import { educationAndExperience } from "@/data";
import SectionHeading from "@/components/section-heading";
import EducationAndExperienceCard from "./education-and-experience-card";
import StartEndPattern from "@/components/education-and-experience/start-end-pattern";
import Connector from "@/components/education-and-experience/connector";
import IconContainer from "@/components/education-and-experience/icon-container";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function EducationAndExperience() {
  const sectionRef = useSectionInView(
    "Education & Experience",
    1 / educationAndExperience.length,
  );

  return (
    <section
      id="education-and-experience"
      ref={sectionRef}
      className="mb-32 flex w-[55rem] scroll-mt-24 flex-col items-center text-center"
    >
      <SectionHeading>My experience & education</SectionHeading>
      <motion.ul
        className="grid items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <li className="col-start-4 row-span-2">
          <StartEndPattern />
        </li>
        {educationAndExperience.map((item, index) => (
          <>
            <li
              key={index}
              className="col-span-3 row-span-3"
              style={{
                gridRowStart: index * 3 + 2,
                gridColumnStart: index % 2 == 0 ? 1 : 5,
              }}
            >
              <EducationAndExperienceCard {...item} />
            </li>
            <div
              className={`col-start-4 ${index % 2 == 1 && "scale-x-[-1]"}`}
              style={{ gridRowStart: index * 3 + 3 }}
            >
              <IconContainer icon={item.icon} />
            </div>
            <div
              className={`flex w-36 items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} gap-x-2 px-3 font-medium`}
              style={{
                gridRowStart: index * 3 + 3,
                gridColumnStart: index % 2 === 0 ? 5 : 3,
              }}
            >
              {item.dateBegin.getFullYear() === item.dateEnd.getFullYear() ? (
                item.dateBegin.getFullYear()
              ) : (
                <>
                  {item.dateBegin.getFullYear()}
                  <FaLongArrowAltRight />
                  {item.dateEnd.getFullYear()}
                </>
              )}
            </div>
            {index + 1 < educationAndExperience.length && (
              <div
                className={`row-span-2 ${index % 2 == 1 && "scale-x-[-1]"}`}
                style={{ gridRowStart: index * 3 + 4 }}
              >
                <Connector />
              </div>
            )}
          </>
        ))}
        <li
          className={`col-start-4 row-span-2 scale-y-[-1] ${educationAndExperience.length % 2 == 0 && "scale-x-[-1]"}`}
          style={{ gridRowStart: educationAndExperience.length * 3 + 1 }}
        >
          <StartEndPattern />
        </li>
      </motion.ul>
    </section>
  );
}
