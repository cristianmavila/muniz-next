import Link from "next/link";
import { cn } from "@/libs/tailwind";
import Logo, { LogoProps } from "../Logo";
import ChevronDown from "../ChevronDown";
import MenuIcon from "../MenuIcon/MenuIcon";
import HomeFadeImages from "../HomeFadeImages";
import { cva, VariantProps } from "class-variance-authority";

const HeaderVariants = cva("flex justify-between p-5", {
  variants: {
    variant: {
      default: "",
      home: "h-svh items-center p-0 min-h-[600px] text-white flex-col justify-center gap-8 relative overflow-hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface HeaderProps extends VariantProps<typeof HeaderVariants> {}

const Header = ({ variant }: HeaderProps) => {
  const isHome = !!(variant === "home");
  const logoHeader: LogoProps = isHome
    ? {
        variant: "horizontal",
        color: "#FFF",
      }
    : {
        variant: "vertical",
      };
  return (
    <header className={cn(HeaderVariants({ variant }))}>
      <div className="flex gap-4 relative z-10 flex-col justify-center items-center">
        {isHome && <MenuIcon />}

        <Link href="/">
          <Logo {...logoHeader} />
        </Link>
        {isHome && <ChevronDown />}
      </div>
      {isHome && <HomeFadeImages />}
    </header>
  );
};

export default Header;
