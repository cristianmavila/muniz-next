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
        className={cn(
          "flex flex-col justify-center items-start gap-4",
          !toggleMenu && "gap-14 items-center"
        )}
      >
        <div className={cn("w-[70px] flex justify-center", !toggleMenu && "h-[110px]")}>
          {itsMobile && (
            <CollapsibleTrigger>
              <MenuIcon
                className={cn("w-[65px] h-[50px]", !toggleMenu && "w-[40px] h-[50px]")}
                open={toggleMenu}
              />
            </CollapsibleTrigger>
          )}
        </div>
        <Link href="/">
          <Logo
            {...{
              variant: toggleMenu && itsMobile ? "vertical" : "horizontal",
              color: "#FFF",
              className: !toggleMenu ? "w-full max-w-[220px]" : "w-[75px]",
              width: 629,
              height: 43,
            }}
          />
        </Link>
        {!toggleMenu && <ChevronDown className="w-[110px]" />}
        <CollapsibleContent className="w-full">
          {menu && <Menu menu={menu} variant={"home"} orientation="vertical" />}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default HomeMenuMobile;
