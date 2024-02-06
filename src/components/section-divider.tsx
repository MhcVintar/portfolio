"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="74.68"
      height="151.13"
      className="my-16"
    >
      <motion.line
        x1="14.62"
        y1="2"
        x2="14.62"
        y2="123.88"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.circle
        cx="14.62"
        cy="136.51"
        r="12.62"
        stroke="black"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0, rotate: -90 }}
        animate={{ pathLength: 1, rotate: -90 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      />
      <motion.polyline
        points="51.81 2 51.81 51.3 60.06 81.73 60.06 111.26"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.circle
        cx="60.06"
        cy="123.88"
        r="12.62"
        stroke="black"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0, rotate: -90 }}
        animate={{ pathLength: 1, rotate: -90 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      />
    </svg>
  );
}
