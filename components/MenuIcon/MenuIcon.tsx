import { cn } from "@/libs/tailwind";

interface MenuIconProps {
  open: boolean;
  className?: string;
}

const MenuIcon = ({ open, className }: MenuIconProps) => {
  return (
    <div className={cn(className)}>
      {!open ? (
        <svg width="90px" height="90px" viewBox="0 0 558 457" className={cn(className)}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#8C8C8E"
            d="M420.652,240.441v-24.674H137.557v24.674H420.652z M420.652,297.03
	H137.557v24.675h283.096V297.03z M420.652,134.504H137.557v24.674h283.096V134.504z"
          />
        </svg>
      ) : (
        <svg width="90px" height="90px" viewBox="0 0 558 457" className={cn(className)}>
          <polygon
            fill="#8C8C8E"
            points="195.612,127.163 279.104,210.657 362.596,127.163 380.043,144.61 296.551,228.104 380.043,311.598 
	362.596,329.046 279.104,245.552 195.612,329.046 178.166,311.598 261.657,228.104 178.166,144.61 "
          />
        </svg>
      )}
    </div>
  );
};

export default MenuIcon;
