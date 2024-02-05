import About from "@/components/about";
import Home from "@/components/home";

export default function HomePage() {
  return (
    <main className="mt-28 flex max-w-[80rem] flex-col items-center rounded-xl bg-white p-10 pt-32">
      <Home />
      {/* <About /> */}
    </main>
  );
}
