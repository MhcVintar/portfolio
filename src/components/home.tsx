"use client";

import portrait from "@public/portrait.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  FaEnvelope,
  FaEnvelopeOpenText,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiDocument, HiDocumentArrowDown } from "react-icons/hi2";
import { MotionImage } from "./framer-motion-wrappers";
import { useSectionInView } from "@/hooks";

export default function Home() {
  const [isEmailMeHovered, setIsEmailMeHovered] = useState(false);
  const [isDownloadCVHovered, setIsDownloadCVHovered] = useState(false);
  const sectionRef = useSectionInView("Home", 1);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="flex w-full scroll-mt-[1000px] flex-col items-center px-2
      text-center sm:w-[37rem] sm:px-0 lg:w-[45rem] xl:w-[50rem] 2xl:w-[55rem]"
    >
      <div className="group relative transition hover:scale-110">
        <MotionImage
          src={portrait}
          alt="Miha portrait"
          height="120"
          width="120"
          quality={95}
          className="rounded-full border-4 border-blue-200 dark:border-gray-700"
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
        className="py-6 text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <b>Hello, my name is Miha.</b> I&apos;m a{" "}
        <b>computer science student </b>
        and I love building web applications, especially with <i>React</i>,{" "}
        <i>Next.js</i> and <i>Spring</i>
      </motion.h1>
      <motion.ul
        className="flex flex-wrap items-center justify-center gap-2.5"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <li>
          <Link
            href="#contact"
            onPointerEnter={() => setIsEmailMeHovered(true)}
            onPointerLeave={() => setIsEmailMeHovered(false)}
            onFocus={() => setIsEmailMeHovered(true)}
            onBlur={() => setIsEmailMeHovered(false)}
            className="flex cursor-pointer items-center justify-center gap-x-2
            rounded-full border border-amber-400 bg-amber-300 px-4 py-2
            font-medium outline-none transition hover:scale-105
            hover:bg-amber-400 hover:text-slate-950 focus:scale-105
            focus:bg-amber-400 focus:text-slate-950 dark:text-slate-900"
          >
            Send me an email
            {isEmailMeHovered ? <FaEnvelopeOpenText /> : <FaEnvelope />}
          </Link>
        </li>
        <li>
          <a
            href="/CV.pdf"
            download
            onPointerEnter={() => setIsDownloadCVHovered(true)}
            onPointerLeave={() => setIsDownloadCVHovered(false)}
            onFocus={() => setIsDownloadCVHovered(true)}
            onBlur={() => setIsDownloadCVHovered(false)}
            className="flex items-center justify-center gap-x-2 rounded-full
            border border-blue-200 bg-blue-100 px-4 py-2 font-medium
            outline-none transition hover:scale-105 hover:bg-blue-200
            hover:text-slate-950 focus:scale-105 focus:bg-blue-200
            focus:text-slate-950 dark:border-gray-700 dark:bg-gray-800
            dark:hover:bg-gray-700 dark:hover:text-gray-100
            dark:focus:bg-gray-700 dark:focus:text-gray-100"
          >
            Download CV
            {isDownloadCVHovered ? <HiDocumentArrowDown /> : <HiDocument />}
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/miha-vintar-029b4a289/"
            target="_blank"
            className="flex items-center justify-center rounded-full border
            border-blue-200 bg-blue-100 px-2 py-2 outline-none transition
            hover:scale-110 hover:bg-blue-200 hover:text-slate-950
            focus:scale-110 focus:bg-blue-200 dark:border-gray-700
            dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-100
            dark:focus:bg-gray-700 dark:focus:text-gray-100"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MhcVintar"
            target="_blank"
            className="flex items-center justify-center rounded-full border
            border-blue-200 bg-blue-100 px-2 py-2 outline-none transition
            hover:scale-110 hover:bg-blue-200 hover:text-slate-950
            focus:scale-110 focus:bg-blue-200 dark:border-gray-700
            dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-100
            dark:focus:bg-gray-700 dark:focus:text-gray-100"
          >
            <FaGithub className="text-2xl" />
          </a>
        </li>
      </motion.ul>
    </section>
  );
}
