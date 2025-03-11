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
import { menuStore } from "@/stores/menu";

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
  const activeRoute = menuStore((state) => state.active);
  const setActiveMenu = menuStore((state) => state.setActiveMenu);

  return (
    <NavigationMenu orientation={orientation} className={cn(MenuVariants({ variant }), className)}>
      <NavigationMenuList className="">
        {menu?.map((link, index) => (
          <NavigationMenuItem key={index}>
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink
                onClick={() => {
                  setActiveMenu(link.href);
                }}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "font-medium uppercase tracking-widest px-3 cool-link-effect flex flex-col max-lg:text-base text-sm",
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
