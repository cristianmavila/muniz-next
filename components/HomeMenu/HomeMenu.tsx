"use client";

import Link from "next/link";
import { cn } from "@/libs/tailwind";
import React, { useState } from "react";

import Logo from "../Logo";
import ChevronDown from "../ChevronDown";
import MenuIcon from "../MenuIcon/MenuIcon";

// shadcn components
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/core/Collapsible";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/core/NavigationMenu";

interface HomeMenuProps {
  menu?: {
    href: string;
    children: string;
    target?: string;
  }[];
}

const HomeMenu = ({ menu }: HomeMenuProps) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <>
      {/* Home menu */}
      <Collapsible
        open={toggleMenu}
        onOpenChange={setToggleMenu}
        className="flex flex-col justify-center items-center gap-6"
      >
        <CollapsibleTrigger>
          <MenuIcon open={toggleMenu} />
        </CollapsibleTrigger>
        <Link href="/">
          <Logo
            {...{
              variant: "horizontal",
              color: "#FFF",
            }}
          />
        </Link>
        <ChevronDown />
        <CollapsibleContent className="w-full">
          <NavigationMenu orientation="vertical" className="w-full">
            <NavigationMenuList className="flex-col items-start">
              {menu?.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "flex flex-col px-0 cool-link-effect"
                      )}
                    >
                      {link.children}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default HomeMenu;
