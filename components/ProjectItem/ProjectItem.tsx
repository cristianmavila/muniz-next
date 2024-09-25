/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
// import Image from "next/image";

export interface ProjectItemProps {
  id?: number;
  thumbnail?: ImageProps;
  name: string;
  link: {
    href: string;
    children: string;
    target?: string;
    title?: string;
  };
}

export interface ImageProps {
  src: string;
  target?: string;
  alt: string;
  width: number;
  height: number;
}

export interface LinkProps {
  href: string;
  children: string;
  target?: string;
  title?: string;
}

const ProjectItem = ({ thumbnail, name, link }: ProjectItemProps) => {
  const { href, title, target } = link;
  return (
    <Link {...{ href, title, target }} className="w-full group">
      <h2 className="text-3xl lg:text-[40px] pt-7 pb-5 font-medium group-hover:text-brand">
        {name}
      </h2>
      <div className="w-full overflow-hidden relative">
        {thumbnail && thumbnail.src && (
          // <Image
          //   src={thumbnail.src}
          //   alt={thumbnail.alt}
          //   width={thumbnail.width}
          //   height={thumbnail.height}
          //   quality={100}
          //   className="w-full duration-500 ease-in-out hover:scale-[112%] group-hover:scale-[112%] bg-slate-100"
          // />
          <img
            src={thumbnail.src}
            alt={thumbnail.alt}
            width={thumbnail.width}
            height={thumbnail.height}
            className="w-full duration-500 ease-in-out hover:scale-[112%] group-hover:scale-[112%] bg-slate-100 indent-[100%] whitespace-nowrap overflow-hidden"
            loading="lazy"
          />
        )}
      </div>
    </Link>
  );
};

export default ProjectItem;
