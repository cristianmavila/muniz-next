import { cn } from "@/libs/tailwind";
import Logo, { LogoProps } from "../Logo";
import ChevronDown from "../ChevronDown";
import HomeFadeImages from "../HomeFadeImages";
import { cva, VariantProps } from "class-variance-authority";
import MenuIcon from "../MenuIcon/MenuIcon";

const HeaderVariants = cva("flex justify-center p-5", {
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
      <MenuIcon />
      <Logo {...logoHeader} />
      <ChevronDown />

      {isHome && <HomeFadeImages />}
    </header>
  );
};

export default Header;
