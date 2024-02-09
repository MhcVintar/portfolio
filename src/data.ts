import musifyImage from "@public/projects/musify.png";
import dockerImage from "@public/projects/docker-compose.jpg";
import kubernetesImage from "@public/projects/microk8s.png";
import sudokuImage from "@public/projects/sudoku.png";
import { FaUniversity } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import React from "react";

export const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education & Experience", href: "#education-and-experience" },
  { name: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    title: "Musify",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint " +
      "cillum sint consectetur cupidatat.",
    tags: ["React", "Express", "PostgreSQL", "MinIO", "Prisma", "JWT", "Git"],
    image: musifyImage,
  },
  {
    title: "Musify Docker deployment",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint " +
      "cillum sint consectetur cupidatat.",
    tags: ["Docker", "Docker Compose", "Nginx", "Git"],
    image: dockerImage,
  },
  {
    title: "Musify Kubernetes deployment",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint " +
      "cillum sint consectetur cupidatat.",
    tags: ["Docker", "Kubernetes", "Nginx", "Git"],
    image: kubernetesImage,
  },
  {
    title: "Sudoku Solver",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint " +
      "cillum sint consectetur cupidatat.",
    tags: ["C"],
    image: sudokuImage,
  },
  {
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint " +
      "cillum sint consectetur cupidatat.",
    tags: ["React", "Next.js", "Framer motion", "Tailwind"],
    image: sudokuImage,
  },
] as const;

export const skills = [
  "Python",
  "Java",
  "C",
  "C++",
  "HTML",
  "CSS",
  "TailwindCSS",
  "Framer Motion",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "React",
  "Next.js",
  "PostgreSQL",
  "Prisma",
  "Git",
  "Docker",
  "Kubernetes",
] as const;

export const educationAndExperience = [
  {
    title: "First year of University",
    dateBegin: new Date("2023-2-2"),
    dateEnd: new Date("2024-2-2"),
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint " +
      "cillum sint consectetur cupidatat.",
    link: "https://www.fri.uni-lj.si/en",
    icon: React.createElement(FaUniversity),
  },
  {
    title: "iSystem internship",
    dateBegin: new Date("2023-2-2"),
    dateEnd: new Date("2023-2-2"),
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint " +
      "cillum sint consectetur cupidatat.",
    link: "https://www.isystemlabs.si/",
    jobReference: "/references/iSystem-reference.pdf",
    icon: React.createElement(FaMicrochip),
  },
  {
    title: "Second year of University",
    dateBegin: new Date("2023-2-2"),
    dateEnd: new Date("2023-2-2"),
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint " +
      "cillum sint consectetur cupidatat.",
    link: "https://www.fri.uni-lj.si/en",
    icon: React.createElement(FaUniversity),
  },
] as const;
