import About from "@/components/about";
import Contact from "@/components/contact";
import Timeline from "@/components/education-and-experience/timeline";
import Home from "@/components/home";
import Projects from "@/components/projects/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function HomePage() {
  return (
    <main className="flex max-w-[55rem] flex-col items-center pt-10">
      <Home />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
    </main>
  );
}
