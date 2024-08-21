import Link from "next/link";
import Image from "next/image";
import { ImageProps, LinkProps } from "@/components/ProjectItem";
import ConditionalWrapper from "@/components/ConditionalWrapper";

const ListImages = ({
  items,
}: {
  items: {
    image: ImageProps;
    link?: LinkProps;
  }[];
}) => {
  return (
    <div className="grid gap-5 mt-5 md:gap-12 md:mt-12">
      {items?.map((project, index) => {
        const { image, link } = project;
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
            <Image {...image} alt={image.alt} className="w-full" />
          </ConditionalWrapper>
        );
      })}
    </div>
  );
};

export default ListImages;
