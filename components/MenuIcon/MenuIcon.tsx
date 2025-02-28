import { cn } from "@/libs/tailwind";
import { usePathname } from "next/navigation";

interface MenuIconProps {
  open: boolean;
  className?: string;
  color?: string;
}

const MenuIcon = ({ open, className, color }: MenuIconProps) => {
  const pathName = usePathname();
  const colorIcon = pathName === "/" ? "#FFFFFF" : "#8C8C8E";
  return (
    <div className={cn("cursor-pointer", className)}>
      {!open ? (
        <svg
          width="200"
          height="160"
          viewBox="0 0 241 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(className)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M240.704 0.613037H0.6521V21.533H240.704V0.613037ZM240.704 138.414H0.6521V159.335H240.704V138.414ZM240.704 90.434V69.513H0.6521V90.434H240.704Z"
            fill={color ? color : colorIcon}
          />
        </svg>
      ) : (
        <svg width="90px" height="90px" viewBox="0 0 558 457" className={cn(className)}>
          <polygon
            fill={color ? color : colorIcon}
            points="195.612,127.163 279.104,210.657 362.596,127.163 380.043,144.61 296.551,228.104 380.043,311.598 
	362.596,329.046 279.104,245.552 195.612,329.046 178.166,311.598 261.657,228.104 178.166,144.61 "
          />
        </svg>
      )}
    </div>
  );
};

export default MenuIcon;
