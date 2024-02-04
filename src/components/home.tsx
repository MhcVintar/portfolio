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
    <div className="flex flex-col items-center">
      <div className="relative">
        <Image
          src={picture}
          alt="Miha portrait"
          height="120"
          width="120"
          quality={95}
          className="rounded-full"
        />
        <span className="absolute right-1 bottom-1 text-3xl">👋</span>
      </div>
      <h1>Hello, my name is Miha and I am a full-stack developer.</h1>
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
            className="bg-slate-900 text-white rounded-full flex justify-center items-center gap-x-2 h-10 w-48
              hover:bg-slate-950 hover:scale-105 cursor-pointer transition"
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
            className="bg-slate-100 border border-slate-300 border-opacity-50 rounded-full flex justify-center items-center gap-x-2 h-10 w-40
              hover:scale-105 transition"
          >
            Download CV <RiFileDownloadLine />
          </a>
        </li>
        <li>
          {/* TODO: polish up linkedin profile, add the link to it */}
          <a
            href="https://linkedin.com"
            className="bg-slate-100 border border-slate-300 border-opacity-50 rounded-full flex justify-center items-center h-10 w-10
              hover:scale-105 transition"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MhcVintar"
            className="bg-slate-100 border border-slate-300 border-opacity-50 rounded-full flex justify-center items-center h-10 w-10
              hover:scale-105 transition"
          >
            <FaGithub />
          </a>
        </li>
      </motion.ul>
    </div>
  );
}
