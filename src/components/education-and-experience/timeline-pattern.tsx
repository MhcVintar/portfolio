import { motion } from "framer-motion";

type TimelinePatternProps = { className?: string };

export default function TimelinePattern({ className }: TimelinePatternProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      height="53"
      width="40"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        strokeWidth="4"
        stroke="#fcd34d"
        fill="#fde68a"
      />
      <circle
        cx="30"
        cy="30"
        r="8"
        strokeWidth="4"
        stroke="#fcd34d"
        fill="#fde68a"
      />
      <line
        x1="24.34"
        y1="35.66"
        x2="10"
        y2="52"
        strokeWidth="4"
        stroke="#fcd34d"
      />
    </motion.svg>
  );
}
