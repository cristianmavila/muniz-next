"use client";

import Link from "next/link";
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
        className="flex flex-col justify-center items-center gap-8"
      >
        <CollapsibleTrigger>
          <MenuIcon className="w-[120px] h-[120px] lg:w-24 lg:h-24" open={toggleMenu} />
        </CollapsibleTrigger>
        <Link href="/">
          <Logo
            {...{
              variant: "horizontal",
              color: "#FFF",
              className: "w-full w-[320px] h-[41px] md:w-[629px] md:h-[43px]",
              width: 629,
              height: 43,
            }}
          />
        </Link>
        <ChevronDown className="w-48 lg:w-48" />
        <CollapsibleContent className="w-full">
          {menu && <Menu menu={menu} variant={"home"} orientation="vertical" />}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default HomeMenu;
