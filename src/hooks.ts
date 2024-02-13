import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  SectionType,
  useActiveSection,
} from "@/context/active-section-context";

export function useSectionInView(section: SectionType, amount: number) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (isInView) {
      setActiveSection(section);
    }
  }, [isInView, setActiveSection, section]);
  return ref;
}
