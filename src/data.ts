import musifyImage from "@public/projects/musify.png";
import dockerImage from "@public/projects/docker-compose.jpg";
import kubernetesImage from "@public/projects/microk8s.png";
import sudokuImage from "@public/projects/sudoku.png";

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
