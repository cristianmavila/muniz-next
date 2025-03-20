"use client";

import Link from "next/link";
import React, { useState } from "react";

import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import MenuIcon from "@/components/MenuIcon";
import ChevronDown from "@/components/ChevronDown";
import { LinkProps } from "@/components/ProjectItem";
import { useTablet } from "@/hooks/useTabletOrMobile";

// shadcn components
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/core/Collapsible";
import { cn } from "@/libs/tailwind";

interface HomeMenuProps {
  menu?: LinkProps[];
}

const HomeMenuMobile = ({ menu }: HomeMenuProps) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const itsMobile = useTablet();
  return (
    <>
      {/* Home menu */}
      <Collapsible
        open={toggleMenu}
        onOpenChange={setToggleMenu}
        className={cn("flex flex-col justify-center items-start gap-4")}
      >
        <div
          className={cn(
            "flex flex-col max-w-[220px] justify-center items-center gap-14",
            toggleMenu && "hidden"
          )}
        >
          <div className={cn("w-[70px] flex justify-center h-[110px]", toggleMenu && "h-auto")}>
            <CollapsibleTrigger className="lg:hidden">
              <MenuIcon
                className={cn("w-[40px] h-[50px]", toggleMenu && " w-[65px] h-[50px]")}
                open={toggleMenu}
              />
            </CollapsibleTrigger>
          </div>
          <Link href="/">
            <Logo
              {...{
                variant: toggleMenu && itsMobile ? "vertical" : "horizontal",
                color: "#FFF",
                className: "w-[220px]",
                width: 220,
                height: 147,
              }}
            />
          </Link>
          <ChevronDown className="w-[110px]" />
        </div>
        <CollapsibleContent className="w-full">
          <CollapsibleTrigger className="lg:hidden">
            <MenuIcon
              className={cn("w-[40px] h-[50px]", toggleMenu && " w-[65px] h-[50px]")}
              open={toggleMenu}
            />
          </CollapsibleTrigger>
          <Link href="/">
            <Logo
              {...{
                variant: toggleMenu && itsMobile ? "vertical" : "horizontal",
                color: "#FFF",
                className: !toggleMenu ? "w-full max-w-[220px]" : "w-[75px]",
                width: 74,
                height: 74,
              }}
            />
          </Link>
          {menu && <Menu menu={menu} variant={"home"} orientation="vertical" />}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default HomeMenuMobile;
