"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="74.68"
      height="153.13"
      className="my-16"
    >
      <motion.line
        x1="15.62"
        y1="2"
        x2="15.62"
        y2="123.88"
        stroke="#fcd34d"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        d="M 15.62 123.88 A 8 8 90 0 1 15.62 139.88"
        stroke="#fcd34d"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      />
      <motion.path
        d="M 15.62 123.88 A 8 8 90 0 0 15.62 139.88"
        stroke="#fcd34d"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      />
      <motion.polyline
        points="50.81 2 50.81 51.3 59.06 81.73 59.06 111.26"
        stroke="#fcd34d"
        strokeWidth="4"
        strokeLinecap="round"
        strokeMiterlimit="8"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        d="M 59.06 111.26 A 8 8 90 0 1 59.06 127.26"
        stroke="#fcd34d"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      />
      <motion.path
        d="M 59.06 111.26 A 8 8 90 0 0 59.06 127.26"
        stroke="#fcd34d"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      />
    </svg>
  );
}
