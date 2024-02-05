"use client";

import picture from "@public/portrait.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOpenOutline, IoMailOutline } from "react-icons/io5";
import { RiFileDownloadLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <Image
          src={picture}
          alt="Miha portrait"
          height="120"
          width="120"
          quality={95}
          className="rounded-full"
        />
        <span className="absolute bottom-1 right-1 text-3xl">👋</span>
      </div>
      <h1 className="text-2xl">
        <b>Hello, my name is Miha.</b> I'm a <b>computer science student</b> and
        I love building web applications, especially with <i>React</i> and{" "}
        <i>Next.js</i>
      </h1>
      <motion.ul
        className="flex gap-x-2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <li>
          <Link
            href="#contact"
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            className="flex h-10 w-48 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-slate-900 text-white
              transition hover:scale-105 hover:bg-slate-950"
          >
            Send me an email{" "}
            {isHovered ? <IoMailOpenOutline /> : <IoMailOutline />}
          </Link>
        </li>
        <li>
          {/* TODO: add the CV into the public folder */}
          <a
            href="/CV.pdf"
            download
            className="flex h-10 w-40 items-center justify-center gap-x-2 rounded-full border border-slate-300 border-opacity-50 bg-slate-100
              transition hover:scale-105"
          >
            Download CV <RiFileDownloadLine />
          </a>
        </li>
        <li>
          {/* TODO: polish up linkedin profile, add the link to it */}
          <a
            href="https://linkedin.com"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 border-opacity-50 bg-slate-100
              transition hover:scale-105"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MhcVintar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 border-opacity-50 bg-slate-100
              transition hover:scale-105"
          >
            <FaGithub />
          </a>
        </li>
      </motion.ul>
    </div>
  );
}
