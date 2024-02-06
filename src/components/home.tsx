"use client";

import picture from "@public/portrait.jpg";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOpenOutline, IoMailOutline } from "react-icons/io5";
import { RiFileDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { MotionImage } from "./framer-motion-wrappers";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex w-[55rem] flex-col items-center text-center">
      <div className="group relative transition hover:scale-110">
        <MotionImage
          src={picture}
          alt="Miha portrait"
          height="120"
          width="120"
          quality={95}
          className="rounded-full border-4 border-blue-200"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.2,
          }}
        >
          <span
            className="absolute bottom-1 right-1 text-3xl transition
            group-hover:rotate-[30deg]"
          >
            👋
          </span>
        </motion.div>
      </div>
      <motion.h1
        className="py-6 text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <b>Hello, my name is Miha.</b> I'm a <b>computer science student</b> and
        I love building web applications, especially with <i>React</i> and{" "}
        <i>Next.js</i>
      </motion.h1>
      <motion.ul
        className="flex gap-x-2.5"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <li>
          <Link
            href="#contact"
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            className="flex h-11 w-48 cursor-pointer items-center
            justify-center gap-x-2 rounded-full border border-amber-400
            bg-amber-300 transition hover:scale-105 hover:bg-amber-400"
          >
            Send me an email{" "}
            {isHovered ? <IoMailOpenOutline /> : <IoMailOutline />}
          </Link>
        </li>
        <li>
          {/* TODO: polish up the CV.pdf */}
          <a
            href="/CV.pdf"
            download
            className="flex h-10 w-40 items-center justify-center gap-x-2
            rounded-full border border-blue-200 border-opacity-50 bg-blue-100
            transition hover:scale-105 hover:bg-blue-200"
          >
            Download CV <RiFileDownloadLine />
          </a>
        </li>
        <li>
          {/* TODO: polish up linkedin profile, add the link to it */}
          <a
            href="https://linkedin.com"
            className="flex h-10 w-10 items-center justify-center rounded-full
            border border-blue-200 border-opacity-50 bg-blue-100 transition
            hover:scale-110 hover:bg-blue-200"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MhcVintar"
            className="flex h-10 w-10 items-center justify-center rounded-full
            border border-blue-200 border-opacity-50 bg-blue-100
            transition hover:scale-110 hover:bg-blue-200"
          >
            <FaGithub />
          </a>
        </li>
      </motion.ul>
    </div>
  );
}
