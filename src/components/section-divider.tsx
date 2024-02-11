"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="150"
      className="my-28"
    >
      <motion.circle
        cx={30}
        cy={10}
        r={8}
        stroke="#fcd34d"
        strokeWidth={4}
        fill="#fde68a"
        initial={{ pathLength: 0, fillOpacity: 0, rotate: 90 }}
        animate={{ pathLength: 1.1, fillOpacity: 1, rotate: 90 }}
        transition={{ duration: 0.2 }}
      />
      <motion.line
        x1={30}
        y1={19}
        x2={30}
        y2={131}
        stroke="#fcd34d"
        strokeWidth={4}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      />
      <motion.circle
        cx={30}
        cy={140}
        r={8}
        stroke="#fcd34d"
        strokeWidth={4}
        fill="#fde68a"
        initial={{ pathLength: 0, fillOpacity: 0, rotate: -90 }}
        animate={{ pathLength: 1.1, fillOpacity: 1, rotate: -90 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      />
      <motion.line
        x1={30}
        y1={90}
        x2={15.66}
        y2={104.34}
        stroke="#fcd34d"
        strokeWidth={4}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.2, delay: 0.34 }}
      />
      <motion.circle
        cx={10}
        cy={110}
        r={8}
        stroke="#fcd34d"
        strokeWidth={4}
        fill="#fde68a"
        initial={{ pathLength: 0, fillOpacity: 0, rotate: -45 }}
        animate={{ pathLength: 1.1, fillOpacity: 1, rotate: -45 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      />
      <motion.polyline
        points="30 50 50 75 50 110"
        stroke="#fcd34d"
        strokeWidth={4}
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1.1 }}
        transition={{ duration: 0.2, delay: 0.27 }}
      />
      <motion.circle
        cx={50}
        cy={120}
        r={8}
        stroke="#fcd34d"
        strokeWidth={4}
        fill="#fde68a"
        initial={{ pathLength: 0, fillOpacity: 0, rotate: -90 }}
        animate={{ pathLength: 1.1, fillOpacity: 1, rotate: -90 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      />
    </svg>
  );
}
