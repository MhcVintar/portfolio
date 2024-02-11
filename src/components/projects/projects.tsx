"use client";

import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/data";
import { useSectionInView } from "@/hooks";

export default function Projects() {
  const sectionRef = useSectionInView("Projects", 1 / projects.length);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="mb-32 w-[55rem] scroll-mt-24 text-center"
    >
      <SectionHeading>My projects</SectionHeading>
      <ul className="flex flex-col items-center gap-y-10">
        {projects.map((project, index) => (
          <li key={index} className="group">
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
