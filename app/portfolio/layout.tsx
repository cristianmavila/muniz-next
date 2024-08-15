import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactElement, ReactNode } from "react";

const LayoutPortfolio = ({ children }: { children: ReactNode | ReactElement | string }) => {
  return (
    <div className="bg-white min-h-screen px-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutPortfolio;
