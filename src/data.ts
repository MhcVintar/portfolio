import portfolioDarkImage from "@public/projects/portfolio-dark.png";
import portfolioLightImage from "@public/projects/portfolio-light.png";
import povDarkImage from "@public/projects/pov-dark.png";
import povLightImage from "@public/projects/pov-light.png";
import repogenDarkImage from "@public/projects/repogen-dark.png";
import repogenLightImage from "@public/projects/repogen-light.png";
import sudokuDarkImage from "@public/projects/sudoku-dark.png";
import sudokuLightImage from "@public/projects/sudoku-light.png";
import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { FaMicrochip, FaRobot, FaServer } from "react-icons/fa6";

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
    title: "Repo-Gen",
    description:
      "A code generator for Go that eliminates repetitive repository-layer code by letting you declare data-access methods on an interface, Spring Data JPA style, while the implementation is generated automatically.",
    tags: ["Go", "SQL"],
    image: { light: repogenLightImage, dark: repogenDarkImage },
  },
  {
    title: "POV",
    description:
      "An iOS app that uses Metal to enable GPU-accelerated video processing. It effortlessly turns 4:3 footage into 16:9 or 9:16 with intelligent reframing and adaptive transformation for any screen to make your POV footage shine.",
    tags: ["Swift", "Metal"],
    image: { light: povLightImage, dark: povDarkImage },
  },
  {
    title: "Portfolio",
    description:
      "A modern and responsive web app that showcases my frontend abilities and my other computer science accomplishments.",
    tags: ["TypeScript", "React", "Next.js", "Framer Motion", "Tailwind"],
    image: { light: portfolioLightImage, dark: portfolioDarkImage },
  },
  {
    title: "Sudoku TUI",
    description:
      "A terminal-based Sudoku game written in Go. User can choose between multiple difficulty levels and the game generates a new Sudoku puzzle every time. When the puzzle is solved, the user can see their time and the number of mistakes they made.",
    tags: ["Go"],
    image: { light: sudokuLightImage, dark: sudokuDarkImage },
  },
] as const;

export const skills = [
  ["AWS", false],
  ["Azure", true],
  ["Azure DevOps", false],
  ["C", false],
  ["C++", false],
  ["CSS", false],
  ["Docker", true],
  ["Express", false],
  ["FastAPI", false],
  ["Git", true],
  ["GitHub", true],
  ["Go", true],
  ["gRPC", false],
  ["HTML", false],
  ["Java", true],
  ["JavaScript", false],
  ["Kubernetes", false],
  ["Linux", true],
  ["MongoDB", true],
  ["Next.js", false],
  ["Node.js", false],
  ["PostgreSQL", true],
  ["Python", false],
  ["React", false],
  ["Rust", false],
  ["Spring Boot", true],
  ["SQL", true],
  ["Swift", false],
  ["TailwindCSS", false],
  ["Terraform", false],
  ["TypeScript", false],
] as const satisfies [string, boolean][];

export const educationAndExperience = [
  {
    title: "First year of University",
    dateBegin: new Date("2022-10-01"),
    dateEnd: new Date("2023-06-26"),
    description:
      "First year of the university study programme for Computer and Information Science at the University of Ljubljana.",
    link: "https://www.fri.uni-lj.si/en",
    reference: undefined,
    icon: React.createElement(FaUniversity),
  },
  {
    title: "iSystem internship",
    dateBegin: new Date("2023-07-11"),
    dateEnd: new Date("2023-09-15"),
    description:
      "Working on an IDE for embedded systems written in C++ and on a testing application for the IDE written in Python and PyQt.",
    link: "https://www.isystemlabs.si/",
    reference: "/references/iSystem-reference.pdf",
    icon: React.createElement(FaMicrochip),
  },
  {
    title: "Second year of University",
    dateBegin: new Date("2023-10-01"),
    dateEnd: new Date("2024-06-12"),
    description:
      "Second year of the university study programme for Computer and Information Science at the University of Ljubljana.",
    link: "https://www.fri.uni-lj.si/en",
    reference: undefined,
    icon: React.createElement(FaUniversity),
  },
  {
    title: "DevRev internship",
    dateBegin: new Date("2024-05-06"),
    dateEnd: new Date("2025-9-30"),
    description: "Working on the backend of DevRev's marketplace using Go.",
    link: "https://devrev.ai/",
    reference: undefined,
    icon: React.createElement(FaServer),
  },
  {
    title: "Third year of University",
    dateBegin: new Date("2024-10-01"),
    dateEnd: new Date("2025-6-13"),
    description:
      "Third year of the university study programme for Computer and Information Science at the University of Ljubljana.",
    link: "https://www.fri.uni-lj.si/en",
    reference: undefined,
    icon: React.createElement(FaUniversity),
  },
  {
    title: "Telosmation",
    dateBegin: new Date("2025-8-30"),
    dateEnd: "present",
    description:
      "Working as an AI automations engineer, focusing on backend development and implementing tailored solutions for clients.",
    link: "https://telosmation.com/",
    reference: undefined,
    icon: React.createElement(FaRobot),
  },
  {
    title: "Bachelor's Thesis",
    dateBegin: new Date("2025-10-01"),
    dateEnd: new Date("2026-08-26"),
    description:
      "Completed my bachelor's thesis, Declarative Generation of Repositories in Go, building Repo-Gen: a Go code generator that cuts hand-written repository code by more than 90%.",
    link: "https://repozitorij.uni-lj.si/IzpisGradiva.php?id=186061&lang=eng",
    reference: undefined,
    icon: React.createElement(FaGraduationCap),
  },
] as const;
