"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/libs/tailwind";
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import MenuIcon from "@/components/MenuIcon";
import HomeFadeImages from "@/components/HomeFadeImages";
import { cva, VariantProps } from "class-variance-authority";
import { useTablet } from "@/hooks/useTabletOrMobile";
import { Sheet, SheetContent, SheetTitle } from "@/components/core/Sheet";

const DesktopMenuVariants = cva("container mx-auto flex justify-between items-center w-full", {
  variants: {
    variant: {
      vertical: "flex flex-col",
      horizontal: "",
      conceitos: "flex flex-col-reverse md:flex-col",
    },
    logo: {
      vertical: "",
      horizontal: "",
    },
  },
  defaultVariants: {
    variant: "horizontal",
    logo: "horizontal",
  },
});

interface DesktopMenuProps extends VariantProps<typeof DesktopMenuVariants> {
  menu?: {
    href: string;
    children: string;
    target?: string;
  }[];
  className?: string;
}

const DesktopMenu = ({ menu, variant, className, logo = "horizontal" }: DesktopMenuProps) => {
  const itsMobile = useTablet();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (itsMobile && mounted) {
    return (
      <>
        <Sheet open={toggleMenu} onOpenChange={setToggleMenu}>
          <div className="container flex w-full justify-between items-center relative">
            <Link href="/">
              <Logo
                {...{
                  variant: logo === "horizontal" ? "horizontal" : "vertical",
                  className: "w-[65px]",
                }}
              />
            </Link>
            <button onClick={() => setToggleMenu(true)} className={cn(toggleMenu && "opacity-0")}>
              <MenuIcon className={cn("w-[40px] h-[50px]")} open={toggleMenu} />
            </button>
          </div>
          <SheetContent
            side="left"
            className="flex h-screen w-full !max-w-none flex-col justify-between items-center overflow-y-auto px-8 py-12"
          >
            <SheetTitle className="sr-only">Mobile menu</SheetTitle>
            <div
              className={cn(
                "relative opacity-0 z-20 flex flex-col items-center justify-center h-full transition-all duration-500 delay-500 animate-fadeIn",
                toggleMenu && "opacity-100 flex flex-col justify-center items-start gap-4"
              )}
              onClick={() => setToggleMenu(false)}
            >
              <div className={cn("w-[70px] flex justify-center")}>
                <MenuIcon className={cn("w-[65px] h-[50px]")} open={toggleMenu} color="#FFF" />
              </div>
              <Link href="/">
                <Logo
                  {...{
                    variant: "vertical",
                    color: "#FFF",
                    className: "w-[75px]",
                    width: 629,
                    height: 43,
                  }}
                />
              </Link>
              {/* <div className="absolute top-0 left-0 px-4">
                <Logo
                  {...{
                    variant: logo === "horizontal" ? "horizontal" : "vertical",
                    className: "w-[65px]",
                  }}
                />
              </div> */}
              {/* <button
                className="absolute top-0 right-0 size-24"
                onClick={() => setToggleMenu(false)}
              >
                <MenuIcon
                  className={cn("w-[65px] h-[50px] -mr-3")}
                  open={toggleMenu}
                  color="#FFFFFF"
                />
              </button> */}

              {menu && <Menu menu={menu} orientation="vertical" variant={"home"} />}
            </div>
            <HomeFadeImages />
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    mounted && (
      <div className={cn(DesktopMenuVariants({ variant, className }))}>
        <Link href="/" passHref>
          <Logo
            {...{
              variant: logo === "horizontal" ? "horizontal" : "vertical",
              className: "w-[65px]",
            }}
          />
        </Link>
        {menu && <Menu menu={menu} orientation="horizontal" />}
      </div>
    )
  );
};

export default DesktopMenu;
