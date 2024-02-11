"use client";

import { useSectionInView } from "@/hooks";
import SectionHeading from "@/components/section-heading";
import { educationAndExperience } from "@/data";

export default function Timeline() {
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
      <SectionHeading>Education & Experience</SectionHeading>
      <ul></ul>
    </section>
  );
}
