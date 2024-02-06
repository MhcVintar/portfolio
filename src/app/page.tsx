import About from "@/components/about";
import Home from "@/components/home";
import SectionDivider from "@/components/section-divider";

export default function HomePage() {
  return (
    <main className="mt-28 flex max-w-[80rem] flex-col items-center rounded-xl bg-white px-36 pt-32">
      <Home />
      <SectionDivider />
      {/* <About /> */}
    </main>
  );
}
