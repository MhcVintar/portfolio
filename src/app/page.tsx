import About from "@/components/about";
import Contact from "@/components/contact";
import EducationAndExperience from "@/components/education-and-experience/education-and-experience";
import Home from "@/components/home";
import Projects from "@/components/projects/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function HomePage() {
  return (
    <main className="mb-32 flex max-w-[80rem] flex-col items-center rounded-xl bg-white px-36 pt-32">
      <Home />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <EducationAndExperience />
      <Contact />
    </main>
  );
}
