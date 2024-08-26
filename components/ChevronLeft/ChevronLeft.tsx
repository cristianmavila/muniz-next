import { cn } from "@/libs/tailwind";

const ChevronLeft = ({ className }: { className?: string }) => {
  return (
    <svg width="69px" height="126px" viewBox="0 0 69 126" className={cn(className)}>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="01..INFO-SETAS-Projeto"
          transform="translate(-507.000000, -720.000000)"
          fill="#727274"
        >
          <polygon
            id="Fill-4"
            points="569.5067 720.578764 507.1965 782.893664 569.5067 845.208564 575.2805 839.434864 518.7434 782.893764 575.2805 726.352464"
          ></polygon>
        </g>
      </g>
    </svg>
  );
};

export default ChevronLeft;
