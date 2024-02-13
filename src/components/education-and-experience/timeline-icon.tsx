import { educationAndExperience } from "@/data";
import { motion, useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

type TimelineIconProps = {
  icon: (typeof educationAndExperience)[number]["icon"];
  className?: string;
};

export default function TimelineIcon({ icon, className }: TimelineIconProps) {
  const [divRef, animate] = useAnimate();
  const inView = useInView(divRef, { once: true, amount: 1 });

  useEffect(() => {
    if (inView) {
      animate(divRef.current, { opacity: 1, scale: 1, x: "-50%" });
    }
  }, [inView]);

  return (
    <motion.div
      ref={divRef}
      className={`h-fit w-fit rounded-full border-4 border-amber-300 bg-amber-200 p-2 text-3xl text-slate-900 ${className}`}
      initial={{ opacity: 0, scale: 0, x: "-50%" }}
    >
      {icon}
    </motion.div>
  );
}
