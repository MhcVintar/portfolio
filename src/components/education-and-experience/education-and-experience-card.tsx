"use client";

import { educationAndExperience } from "@/data";
import { HiDocument, HiDocumentArrowDown } from "react-icons/hi2";
import { useState } from "react";

type EducationAndExperienceCardProps = {
  title: (typeof educationAndExperience)[number]["title"];
  description: (typeof educationAndExperience)[number]["description"];
  link: (typeof educationAndExperience)[number]["link"];
  jobReference?: string;
};

export default function EducationAndExperienceCard({
  title,
  description,
  link,
  jobReference,
}: EducationAndExperienceCardProps) {
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);

  return (
    <section className="flex h-60 w-96 flex-col rounded-lg border border-blue-200 bg-blue-100 p-4 text-left">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p>{description}</p>
      <span className="mt-auto flex gap-x-2">
        <a
          href={link}
          target="_blank"
          className="rounded-full border border-amber-300 bg-amber-200 px-3 py-1 transition hover:scale-105 hover:bg-amber-300 hover:text-slate-950"
        >
          Visit webiste
        </a>
        {jobReference && (
          <a
            href={jobReference}
            target="_blank"
            download
            onPointerEnter={() => setIsDownloadHovered(true)}
            onPointerLeave={() => setIsDownloadHovered(false)}
            className="flex items-center justify-center gap-x-2 rounded-full border border-amber-300 bg-amber-200 px-3 py-1 transition hover:scale-105 hover:bg-amber-300 hover:text-slate-950"
          >
            Download reference{" "}
            {isDownloadHovered ? <HiDocumentArrowDown /> : <HiDocument />}
          </a>
        )}
      </span>
    </section>
  );
}
