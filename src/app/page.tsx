import About from "@/components/about";
import Home from "@/components/home";

export default function HomePage() {
  return (
    <main className="max-w-[45rem] flex flex-col items-center mt-28 p-10 pt-32 rounded-xl bg-white">
      <Home />
      {/* <About /> */}
    </main>
  );
}
