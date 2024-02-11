import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="mb-5 text-3xl font-semibold capitalize">{children}</h2>;
}
