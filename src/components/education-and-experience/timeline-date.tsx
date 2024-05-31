import { educationAndExperience } from "@/data";
import { motion } from "framer-motion";
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
  return (
    <motion.span
      className={`font-medium ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
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
