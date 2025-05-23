import { cn } from "@/libs/tailwind";

const ChevronDown = ({ className }: { className?: string }) => {
  return (
    <svg className={cn("", className)} viewBox="0 0 558 457">
      <polygon
        points="358.48,192.006 279.104,271.368 199.729,192.006 206.895,184.841 279.104,257.038 351.314,184.841 "
        fill="currentColor"
      />
    </svg>
  );
};

export default ChevronDown;
