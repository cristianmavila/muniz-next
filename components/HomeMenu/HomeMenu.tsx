"use client";

import Link from "next/link";
import { cn } from "@/libs/tailwind";
import React, { useState } from "react";

import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import MenuIcon from "@/components/MenuIcon";
import ChevronDown from "@/components/ChevronDown";
import { LinkProps } from "@/components/ProjectItem";

// shadcn components
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/core/Collapsible";

interface HomeMenuProps {
  menu?: LinkProps[];
}

const HomeMenu = ({ menu }: HomeMenuProps) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <>
      {/* Home menu */}
      <Collapsible
        open={toggleMenu}
        onOpenChange={setToggleMenu}
        className="flex flex-col justify-center items-center gap-2"
      >
        <CollapsibleTrigger>
          <MenuIcon open={toggleMenu} />
        </CollapsibleTrigger>
        <Link href="/">
          <Logo
            {...{
              variant: "horizontal",
              color: "#FFF",
              className: "w-full",
            }}
          />
        </Link>
        <ChevronDown />
        <CollapsibleContent className="w-full">
          {menu && <Menu menu={menu} variant={"home"} orientation="vertical" />}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default HomeMenu;
