export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="text-center text-sm text-zinc-700">
      <small>&copy; {year} Vintar. All rights reserved.</small>
      <br />
      <small>
        <b>About website:</b> built with Next.js, Tailwind and Framer Motion.
      </small>
    </section>
  );
}
