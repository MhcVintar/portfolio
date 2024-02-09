import { educationAndExperience } from "@/data";

type IconContainerProps = {
  icon: (typeof educationAndExperience)[number]["icon"];
};

export default function IconContainer({ icon }: IconContainerProps) {
  return (
    <div className="relative h-[54px] w-[105px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="105"
        height="54"
        className="relative"
      >
        <circle
          cx="78"
          cy="27"
          r="25"
          strokeWidth="4"
          stroke="#fcd34d"
          fill="#fde68a"
        />
        <line x1="53" y1="27" x2="0" y2="27" strokeWidth="4" stroke="#fcd34d" />
      </svg>
      <span className="absolute right-[12px] top-[12px] text-3xl">{icon}</span>
    </div>
  );
}
