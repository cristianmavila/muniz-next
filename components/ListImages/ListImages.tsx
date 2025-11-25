/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { ImageProps, LinkProps } from "@/components/ProjectItem";
import ConditionalWrapper from "@/components/ConditionalWrapper";
import { cn } from "@/libs/tailwind";

const ListImages = ({
  items,
  imageClassName,
}: {
  imageClassName?: string;
  items: {
    image: ImageProps;
    link?: LinkProps;
    name?: string;
  }[];
}) => {
  return (
    <div className="grid gap-5 mt-5 md:gap-12 md:mt-12">
      {items?.map((project, index) => {
        const { image, link, name } = project;
        return (
          <ConditionalWrapper
            key={index}
            condition={!!link}
            wrapper={(children) => (
              <Link href={`${link?.href}`} target={link?.target}>
                {children}
              </Link>
            )}
          >
            <div className="group overflow-hidden relative">
              <Image
                {...image}
                alt={name || ""}
                width={image.width}
                height={image.height}
                className={cn(
                  "w-full duration-1000 ease-in-out group-hover:scale-[135%] indent-[100%] whitespace-nowrap overflow-hidden",
                  imageClassName
                )}
                quality={100}
              />
              {/* <img
                {...image}
                alt={image.alt || ""}
                width={image.width}
                height={image.height}
                className={cn(
                  "w-full duration-1000 ease-in-out group-hover:scale-[135%] indent-[100%] whitespace-nowrap overflow-hidden",
                  imageClassName
                )}
                loading="lazy"
              /> */}
            </div>
          </ConditionalWrapper>
        );
      })}
    </div>
  );
};

export default ListImages;
