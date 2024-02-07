import SectionHeading from "../section-heading";
import ProjectCard from "./project-card";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="skills" className="mb-32 w-[55rem] scroll-mt-24 text-center">
      <SectionHeading>My projects</SectionHeading>
      <ul className="flex flex-col gap-y-10">
        {projects.map((project, index) => (
          <li key={index} className="group">
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
