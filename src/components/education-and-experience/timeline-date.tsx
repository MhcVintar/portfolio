import { educationAndExperience } from "@/data";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type TimelineDateProps = {
  dateBegin: (typeof educationAndExperience)[number]["dateBegin"];
  dateEnd: (typeof educationAndExperience)[number]["dateEnd"];
  className?: string;
};

export default function TimelineDate({
  dateBegin,
  dateEnd,
  className,
}: TimelineDateProps) {
  const [spanRef, animate] = useAnimate();
  const inView = useInView(spanRef, { once: true, amount: 1 });

  useEffect(() => {
    if (inView) {
      animate(spanRef.current, { opacity: 1 }, { duration: 0.5 });
    }
  }, [inView]);

  return (
    <motion.span
      ref={spanRef}
      className={`font-medium ${className}`}
      initial={{ opacity: 0 }}
    >
      {typeof dateEnd === "string" && (
        <>
          {dateBegin.getFullYear()}
          <FaArrowRightLong />
          {dateEnd}
        </>
      )}
      {typeof dateEnd !== "string" &&
        (dateBegin.getFullYear() === dateEnd.getFullYear() ? (
          dateBegin.getFullYear()
        ) : (
          <>
            {dateBegin.getFullYear()}
            <FaArrowRightLong />
            {dateEnd.getFullYear()}
          </>
        ))}
    </motion.span>
  );
}
