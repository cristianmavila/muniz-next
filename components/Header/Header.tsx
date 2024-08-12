import React from "react";
import Logo, { LogoProps } from "../Logo";

interface HeaderProps {
  isHome?: boolean;
}

const Header = ({ isHome }: HeaderProps) => {
  const logoHeader: LogoProps = isHome
    ? {
        variant: "horizontal",
        color: "#FFF",
      }
    : {
        variant: "vertical",
      };
  return (
    <div className="flex justify-center p-5">
      <Logo {...logoHeader} />
    </div>
  );
};

export default Header;
