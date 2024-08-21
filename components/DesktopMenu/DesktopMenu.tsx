import Link from "next/link";
import { useState } from "react";
import { cn } from "@/libs/tailwind";
import Menu from "@/components/Menu";
import Logo from "@/components/Logo";
import MenuIcon from "@/components/MenuIcon";
import HomeFadeImages from "@/components/HomeFadeImages";
import { cva, VariantProps } from "class-variance-authority";
import { useTabletOrMobile } from "@/hooks/useTabletOrMobile";
import { Sheet, SheetClose, SheetContent, SheetTrigger, SheetTitle } from "@/components/core/Sheet";

const DesktopMenuVariants = cva("xl:container mx-auto flex justify-between items-center w-full", {
  variants: {
    variant: {
      vertical: "flex flex-col",
      horizontal: "",
    },
    logo: {
      vertical: "",
      horizontal: "my-8 mt-3",
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

  if (itsMobile) {
    return (
      <>
        <Sheet open={toggleMenu} onOpenChange={setToggleMenu}>
          <div className={cn(DesktopMenuVariants({ variant, className }))}>
            <Link href="/">
              <Logo
                {...{
                  variant: logo === "horizontal" ? "horizontal" : "vertical",
                  className: DesktopMenuVariants({ logo }),
                }}
              />
            </Link>
            <SheetTrigger asChild>
              <div>
                <MenuIcon open={toggleMenu} className="size-16 -mr-3" />
              </div>
            </SheetTrigger>
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
              <SheetClose asChild>
                <div>
                  <MenuIcon open={toggleMenu} className="size-24 -mr-3" />
                </div>
              </SheetClose>
              {menu && <Menu menu={menu} orientation="vertical" variant={"home"} />}
            </div>
            <HomeFadeImages />
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <div className={cn(DesktopMenuVariants({ variant, className }))}>
      <Link href="/">
        <Logo
          {...{
            variant: logo === "horizontal" ? "horizontal" : "vertical",
            className: DesktopMenuVariants({ logo }),
          }}
        />
      </Link>
      {menu && <Menu menu={menu} orientation="horizontal" />}
    </div>
  );
};

export default DesktopMenu;
