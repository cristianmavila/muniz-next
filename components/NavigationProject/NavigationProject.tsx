"use client";

import Link from "next/link";
import { useEffect } from "react";
import { menuStore } from "@/stores/menu";
import { ChevronLeft } from "lucide-react";

const NavigationProject = ({
  prevProject = "",
  nextProject = "",
  href,
}: {
  prevProject?: string;
  nextProject?: string;
  href: string;
}) => {
  const setActiveMenu = menuStore((state) => state.setActiveMenu);

  useEffect(() => {
    setActiveMenu(href);
  }, []);

  return (
    <>
      <div className="flex justify-between my-12 relative min-h-[30px]">
        {prevProject && (
          <Link
            href={`/portfolio/${prevProject}`}
            className="flex gap-4 items-center text-[15px] text-titleIndice absolute left-0 top-0"
          >
            <ChevronLeft className="w-[17px] h-[31px]" /> Anterior
          </Link>
        )}
        {nextProject && (
          <Link
            href={`/portfolio/${nextProject}`}
            className="flex gap-4 items-center text-[15px] text-titleIndice absolute top-0 right-0"
          >
            Próximo <ChevronLeft className="w-[17px] h-[31px] rotate-180" />
          </Link>
        )}
      </div>
    </>
  );
};

export default NavigationProject;
