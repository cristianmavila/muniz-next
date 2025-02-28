"use client";

import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import ChevronDown from "@/components/ChevronDown";
import { LinkProps } from "@/components/ProjectItem";
import { cn } from "@/libs/tailwind";

interface HomeMenuProps {
  menu?: LinkProps[];
}

const HomeDesktopMenu = ({ menu }: HomeMenuProps) => {
  return (
    <div className="h-screen w-full py-6">
      {/* Home menu */}
      {menu && <Menu menu={menu} variant={"horizontal"} orientation="horizontal" />}
      <div className={cn("flex flex-col justify-center items-center gap-28 h-full")}>
        <Logo
          {...{
            variant: "horizontal",
            color: "#FFF",
            className: "w-full max-w-[340px]",
            width: 629,
            height: 43,
          }}
        />

        <ChevronDown className="w-[130px]" />
      </div>
    </div>
  );
};

export default HomeDesktopMenu;
