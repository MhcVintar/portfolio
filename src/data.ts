import musifyImage from "@public/projects/musify.png";
import sudokuImage from "@public/projects/sudoku.png";
import portfolioImage from "@public/projects/portfolio.png";
import povImage from "@public/projects/pov.png";
import { FaUniversity } from "react-icons/fa";
import { FaMicrochip, FaServer } from "react-icons/fa6";
import React from "react";

export const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education & Experience", href: "#education-and-experience" },
  { name: "Contact", href: "#contact" }
] as const;

export const projects = [
  {
    title: "Musify",
    description:
      "A web app for users to exchange music files with random people globally. " +
      "They can easily upload, download, and share their favorite tracks. " +
      "The deployment is automated using Docker, Docker Compose, and " +
      " Kubernetes, with continuous integration using GitHub Actions.",
    tags: [
      "React", "Express", "PostgreSQL", "MinIO", "Docker", "Nginx", "Kubernetes"
    ],
    image: musifyImage
  },
  {
    title: "CLI Sudoku",
    description:
      "A terminal-based sudoku game written in Go. User can choose " +
      "between multiple difficulty levels and the game generates a new " +
      "sudoku puzzle every time. When the puzzle is solved, the user can " +
      "see their time and the number of mistakes they made.",
    tags: ["Go"],
    image: sudokuImage
  },
  {
    title: "Portfolio",
    description:
      "A modern and responsive web app that showcases my frontend " +
      "abilities and my other computer science accomplishments.",
    tags: ["TypeScript", "React", "Next.js", "Framer Motion", "Tailwind"],
    image: portfolioImage
  },
  {
    title: "POV",
    description:
      "Effortlessly turn 4:3 footage into 16:9 or 9:16 with intelligent " +
      "reframing and adaptive transformation for any screen to make your " +
      "POV footage shine.",
    tags: [
      "Swift",
      "Metal"
    ],
    image: povImage
  }
] as const;

export const skills = [
  "Python",
  "Java",
  "Spring",
  "Go",
  "C",
  "C++",
  "HTML",
  "CSS",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "React",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Git",
  "Docker",
  "gRPC",
  "REST"
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
    icon: React.createElement(FaUniversity)
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
    icon: React.createElement(FaMicrochip)
  },
  {
    title: "Second year of University",
    dateBegin: new Date("2023-10-01"),
    dateEnd: new Date("2024-06-12"),
    description:
      "Second year of the university study programme for Computer and " +
      "Information Science at the University of Ljubljana.",
    link: "https://www.fri.uni-lj.si/en",
    reference: undefined,
    icon: React.createElement(FaUniversity)
  },
  {
    title: "DevRev internship",
    dateBegin: new Date("2024-05-06"),
    dateEnd: "present",
    description: "Working on the backend of DevRev's marketplace using Go.",
    link: "https://devrev.ai/",
    reference: undefined,
    icon: React.createElement(FaServer)
  },
  {
    title: "Third year of University",
    dateBegin: new Date("2024-10-01"),
    dateEnd: "present",
    description:
      "Third year of the university study programme for Computer and " +
      "Information Science at the University of Ljubljana.",
    link: "https://www.fri.uni-lj.si/en",
    reference: undefined,
    icon: React.createElement(FaUniversity)
  }
] as const;
