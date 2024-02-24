import musifyImage from "@public/projects/musify.png";
import dockerImage from "@public/projects/docker-compose.jpg";
import kubernetesImage from "@public/projects/microk8s.png";
import sudokuImage from "@public/projects/sudoku.png";
import portfolioImage from "@public/projects/portfolio.png";
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
      "A web app for users to exchange music files with random people " +
      "globally. They can easily upload, download, and share their favorite " +
      "tracks, fostering a dynamic community of music lovers.",
    tags: ["React", "Express", "PostgreSQL", "MinIO", "Prisma", "JWT", "Git"],
    image: musifyImage,
  },
  {
    title: "Musify Docker deployment",
    description:
      "Automation of a web app deployment using Docker and Docker " +
      "Compose with continuous integration using GitHub Actions.",
    tags: ["Docker", "Docker Compose", "Nginx", "Git", "PostgreSQL", "MinIO"],
    image: dockerImage,
  },
  {
    title: "Musify Kubernetes deployment",
    description:
      "Automation of a web app deployment and updates using " +
      "Kubernetes, with multiple server and web server instances and " +
      "a load balancer.",
    tags: ["Docker", "Kubernetes", "Nginx", "Git", "PostgreSQL", "MinIO"],
    image: kubernetesImage,
  },
  {
    title: "Sudoku Solver",
    description:
      "A terminal-based C program utilizing recursive backtracking for " +
      "solving Sudoku puzzles efficiently.",
    tags: ["C"],
    image: sudokuImage,
  },
  {
    title: "Portfolio",
    description:
      "A modern and responsive web app that showcases my frontend " +
      "abilities and my other computer science accomplishments.",
    tags: ["TypeScript", "React", "Next.js", "Framer Motion", "Tailwind"],
    image: portfolioImage,
  },
] as const;

export const skills = [
  "Python",
  "Java",
  "Spring",
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
  "Nginx",
  "Kubernetes",
] as const;

export const educationAndExperience = [
  {
    title: "First year of University",
    dateBegin: new Date("2022-10-01"),
    dateEnd: new Date("2023-06-26"),
    description:
      "First year of the university study programme for Computer and " +
      "Information Science at the University of Ljubljana.",
    link: "https://www.fri.uni-lj.si/en",
    reference: undefined,
    icon: React.createElement(FaUniversity),
  },
  {
    title: "iSystem internship",
    dateBegin: new Date("2023-07-11"),
    dateEnd: new Date("2023-09-15"),
    description:
      "Working on an IDE for embedded systems written in C++ and on " +
      "a testing application for the IDE written in Python and PyQt.",
    link: "https://www.isystemlabs.si/",
    reference: "/references/iSystem-reference.pdf",
    icon: React.createElement(FaMicrochip),
  },
  {
    title: "Second year of University",
    dateBegin: new Date("2023-10-01"),
    dateEnd: "present",
    description:
      "Second year of the university study programme for Computer and " +
      "Information Science at the University of Ljubljana.",
    link: "https://www.fri.uni-lj.si/en",
    reference: undefined,
    icon: React.createElement(FaUniversity),
  },
] as const;
