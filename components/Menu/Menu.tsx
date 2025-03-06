import Link from "next/link";
import { cn } from "@/libs/tailwind";
import { cva, VariantProps } from "class-variance-authority";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../core/NavigationMenu";
import { LinkProps } from "@/components/ProjectItem";
import { usePathname } from "next/navigation";
import client from "@/libs/apollo-client";
import { GET_POST_BY_SLUG } from "@/queries";
import { useCallback, useEffect, useState } from "react";

const MenuVariants = cva("", {
  variants: {
    variant: {
      vertical:
        "z-10 relative flex-col [&_ul]:flex-col [&_ul]:items-start [&_ul_a]:normal-case text-white flex-none justify-center",
      horizontal: "hidden lg:block",
      home: "[&_ul]:flex-col flex-none [&_ul]:items-start [&_ul_a:hover]:text-brand [&_ul_a]:px-0 [&_ul_a]:flex-col [&_ul_a]:flex text-white max-w-none justify-center max-w-[350px] mx-auto",
    },
  },
  defaultVariants: {
    variant: "horizontal",
  },
});

export interface MenuProps extends VariantProps<typeof MenuVariants> {
  menu: LinkProps[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const Menu = ({ menu, variant = "horizontal", orientation, className }: MenuProps) => {
  const pathName = usePathname();
  const [activeRoute, setActiveRoute] = useState("");

  const activeSlug = useCallback(async (routePath: string) => {
    if (menu.filter((item) => item.href === routePath).length === 0 && routePath !== "/") {
      const projectSlug = routePath?.split("/")[2];
      const { data } = await client.query({
        query: GET_POST_BY_SLUG,
        variables: { slug: projectSlug },
        fetchPolicy: "no-cache",
      });
      const categoryNoHome = data?.post?.categories?.edges.filter(
        (cat: { node: { name: string } }) => cat.node.name !== "home"
      );
      const categoryName = categoryNoHome[0].node.name;
      if (categoryName) return `/portfolio/i/${categoryName}`;
    }
    return ``;
  }, []);

  useEffect(() => {
    const fetchMenuSlug = async () => {
      const active = await activeSlug(pathName);
      setActiveRoute(active);
    };
    fetchMenuSlug();
  }, [pathName]);

  return (
    <NavigationMenu orientation={orientation} className={cn(MenuVariants({ variant }), className)}>
      <NavigationMenuList className="">
        {menu?.map((link, index) => (
          <NavigationMenuItem key={index}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-medium uppercase tracking-widest px-3 cool-link-effect flex flex-col text-sm",
                  (pathName === link.href || link.href === activeRoute) && "text-brand"
                  // "cool-link-effect flex flex-col",
                )}
              >
                {link.children}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
