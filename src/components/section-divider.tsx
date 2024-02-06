import Image from "next/image";
import sectionDividerSvg from "@public/section-divider.svg";

export default function SectionDivider() {
  return <Image src={sectionDividerSvg} alt="section divider" />;
}
