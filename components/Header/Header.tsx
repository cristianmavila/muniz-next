"use client";

import { cn } from "@/libs/tailwind";
import HomeMenu from "@/components/HomeMenu";
import HomeFadeImages from "@/components/HomeFadeImages";
import { cva, VariantProps } from "class-variance-authority";
import DesktopMenu from "../DesktopMenu";

const HeaderVariants = cva("flex justify-between py-5", {
  variants: {
    variant: {
      default: "",
      home: "h-svh items-center p-0 min-h-[600px] text-white flex-col justify-center gap-8 relative overflow-hidden",
      conceitos: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface HeaderProps extends VariantProps<typeof HeaderVariants> {}

const menu = [
  {
    href: "/portfolio/i/industria/",
    children: "Indústria",
  },
  {
    href: "/portfolio/i/instituicao-empresa/",
    children: "Instituição & Empresa",
  },
  {
    href: "/portfolio/i/varejo-produto/",
    children: "Varejo & Produto",
  },
  {
    href: "/conceitos-expertise/",
    children: "Conceitos & Expertise",
  },
  {
    href: "/contato",
    children: "Contato",
  },
];

const Header = ({ variant }: HeaderProps) => {
  const isHome = !!(variant === "home");

  return (
    <header className={cn(HeaderVariants({ variant }))}>
      <div className={cn("relative z-10 w-full", isHome && "w-auto px-4 md:px-0")}>
        {isHome && <HomeMenu menu={menu} />}
        {!isHome && variant !== "conceitos" && <DesktopMenu menu={menu} logo={"vertical"} />}
        {variant === "conceitos" && (
          <div>
            <DesktopMenu menu={menu} variant={"vertical"} logo={"horizontal"} />
          </div>
        )}
      </div>
      {isHome && <HomeFadeImages />}
    </header>
  );
};

export default Header;
