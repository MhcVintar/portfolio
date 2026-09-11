import { ReactNode } from "react";

type TimelineCardLinkProps = {
  text: string;
  icon: ReactNode;
  link: string;
};

export default function TimelineCardLink({
  text,
  icon,
  link,
}: TimelineCardLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="group/reference flex w-fit items-center gap-x-2 rounded-full border border-amber-300 bg-amber-200 px-3 py-0.5 text-slate-900 transition outline-none hover:scale-105 hover:bg-amber-300 hover:text-slate-950 focus:scale-105 focus:bg-amber-300"
    >
      {text}
      {icon}
    </a>
  );
}
