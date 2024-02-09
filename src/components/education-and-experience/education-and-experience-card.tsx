import { educationAndExperience } from "@/data";

type EducationAndExperienceCardProps = {
  title: (typeof educationAndExperience)[number]["title"];
  description: (typeof educationAndExperience)[number]["description"];
};

export default function EducationAndExperienceCard({
  title,
  description,
}: EducationAndExperienceCardProps) {
  return (
    <section className="h-48 rounded-lg border border-blue-200 bg-blue-100 p-4 text-left">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p>{description}</p>
    </section>
  );
}
