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
    <div className="h-screen w-full">
      {/* Home menu */}
      {menu && (
        <Menu
          menu={menu}
          variant={"horizontal"}
          orientation="horizontal"
          className="min-h-[100px] lg:flex"
        />
      )}
      <div className={cn("flex flex-col justify-center items-center h-[calc(100%-100px)]")}>
        <div className="flex flex-col justify-center items-center relative">
          <Logo
            {...{
              variant: "horizontal",
              color: "#FFF",
              className: "w-full max-w-[340px]",
              width: 629,
              height: 43,
            }}
          />
          <ChevronDown className="w-[110px] absolute left-1/2 -translate-x-1/2 -bottom-full" />
        </div>
      </div>
    </div>
  );
};

export default HomeDesktopMenu;
