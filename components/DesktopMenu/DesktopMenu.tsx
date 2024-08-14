import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/core/NavigationMenu";
import { cn } from "@/libs/tailwind";
import Link from "next/link";
import Logo from "@/components/Logo";

interface DesktopMenuProps {
  menu?: {
    href: string;
    children: string;
    target?: string;
  }[];
}

const DesktopMenu = ({ menu }: DesktopMenuProps) => {
  return (
    <div className="xl:container mx-auto flex justify-between items-center w-full">
      <Link href="/">
        <Logo
          {...{
            variant: "vertical",
          }}
        />
      </Link>
      <NavigationMenu orientation="horizontal" className="hidden lg:block">
        <NavigationMenuList className="">
          {menu?.map((link, index) => (
            <NavigationMenuItem key={index}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "uppercase text-sm font-normal px-2 cool-link-effect flex flex-col"
                  )}
                >
                  {link.children}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopMenu;
