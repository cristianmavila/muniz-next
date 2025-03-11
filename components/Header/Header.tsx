"use client";

import { cn } from "@/libs/tailwind";
import DesktopMenu from "@/components/DesktopMenu";
import { useTablet } from "@/hooks/useTabletOrMobile";
import HomeMenuMobile from "@/components/HomeMenuMobile";
import HomeFadeImages from "@/components/HomeFadeImages";
import { cva, VariantProps } from "class-variance-authority";
import HomeDesktopMenu from "@/components/HomeDesktopMenu";

const HeaderVariants = cva("flex justify-between", {
  variants: {
    variant: {
      default: "",
      home: "h-svh items-center p-0 min-h-[600px] text-white flex-col justify-center gap-8 relative overflow-hidden",
      conceitos: "min-h-[100px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface HeaderProps extends VariantProps<typeof HeaderVariants> {}

const Header = ({ variant }: HeaderProps) => {
  let menu = [
    {
      href: "/portfolio/i/industria",
      children: "Indústria",
    },
    {
      href: "/portfolio/i/instituicao-empresa",
      children: "Instituição & Empresa",
    },
    {
      href: "/portfolio/i/varejo-produto",
      children: "Varejo & Produto",
    },
    {
      href: "/expertise",
      children: "Expertise",
    },
    {
      href: "/insights",
      children: "Insights",
    },
    {
      href: "/contato",
      children: "Contato",
    },
  ];

  const itsMobile = useTablet();
  const isHome = !!(variant === "home");
  return (
    <header className={cn(HeaderVariants({ variant }))}>
      <div className={cn("relative z-10 w-full", isHome && "w-auto px-4 md:px-0")}>
        {isHome && !itsMobile && <HomeDesktopMenu menu={menu} />}
        {isHome && itsMobile && <HomeMenuMobile menu={menu} />}
        {!isHome && <DesktopMenu menu={menu} logo={"vertical"} />}
      </div>
      {isHome && <HomeFadeImages />}
    </header>
  );
};

export default Header;
