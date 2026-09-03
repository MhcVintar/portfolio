export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="text-center text-sm text-zinc-700">
      <small>&copy; {year} Miha Vintar. All rights reserved.</small>
    </section>
  );
}
