import { educationAndExperience } from "@/data";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { FaEye, FaLink } from "react-icons/fa";

type TimelineCardProps = (typeof educationAndExperience)[number] & {
  parity: "odd" | "even";
};

export default function TimelineCard({
  title,
  description,
  link,
  reference,
  parity,
}: TimelineCardProps) {
  const [sectionRef, animate] = useAnimate();
  const isInView = useInView(sectionRef, { once: true, amount: 0.33 });

  useEffect(() => {
    if (isInView) {
      animate(sectionRef.current, { opacity: 1, x: 0 });
    }
  }, [isInView, animate, sectionRef]);

  return (
    <motion.section
      ref={sectionRef}
      className="mr-2 flex h-fit w-3/4 flex-col rounded-xl border
      border-blue-200 bg-blue-100 px-4 py-2 text-left dark:border-gray-700
      dark:bg-gray-800 sm:mr-0 sm:h-60 sm:w-[29rem] md:h-72 md:w-[20rem]
      lg:h-64 lg:w-[22rem] xl:w-96"
      initial={{ opacity: 0, x: parity === "odd" ? -100 : 100 }}
    >
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p className="mb-5 sm:mb-0">{description}</p>
      <div className="mt-auto flex flex-col gap-2 lg:flex-row">
        <a
          href={link}
          target="_blank"
          className="flex w-fit items-center gap-x-2 rounded-full border
          border-amber-300 bg-amber-200 px-3 py-0.5 text-slate-900 outline-none
          transition hover:scale-105 hover:bg-amber-300 hover:text-slate-950
          focus:scale-105 focus:bg-amber-300"
        >
          Visit website
          <FaLink className="text-sm" />
        </a>
        {reference && (
          <a
            href={reference}
            target="_blank"
            className="group/reference flex w-fit items-center gap-x-2
            rounded-full border border-amber-300 bg-amber-200 px-3 py-0.5
            text-slate-900 outline-none transition hover:scale-105
            hover:bg-amber-300 hover:text-slate-950 focus:scale-105
            focus:bg-amber-300"
          >
            View reference
            <FaEye className="transition group-hover/reference:scale-125" />
          </a>
        )}
      </div>
    </motion.section>
  );
}
