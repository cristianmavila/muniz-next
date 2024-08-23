"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/libs/tailwind";
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import MenuIcon from "@/components/MenuIcon";
import HomeFadeImages from "@/components/HomeFadeImages";
import { cva, VariantProps } from "class-variance-authority";
import { useTabletOrMobile } from "@/hooks/useTabletOrMobile";
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
  const itsMobile = useTabletOrMobile();
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
                }}
              />
            </Link>
            <button onClick={() => setToggleMenu(true)}>
              <MenuIcon open={toggleMenu} className="size-16 -mr-3" />
            </button>
          </div>
          <SheetContent
            side="left"
            className="flex h-screen w-full !max-w-none flex-col justify-between overflow-y-auto px-8 py-12"
          >
            <SheetTitle className="sr-only">Mobile menu</SheetTitle>
            <div
              className="relative z-20 flex flex-col items-center justify-center h-full"
              onClick={() => setToggleMenu(false)}
            >
              <button
                className="absolute top-0 right-0 size-24"
                onClick={() => setToggleMenu(false)}
              >
                <MenuIcon open={toggleMenu} className="size-24 -mr-3" />
              </button>

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
            }}
          />
        </Link>
        {menu && <Menu menu={menu} orientation="horizontal" />}
      </div>
    )
  );
};

export default DesktopMenu;
