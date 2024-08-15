import Image from "next/image";
import { ImageProps, LinkProps } from "../ProjectItem";

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
        const { image } = project;
        return <Image key={index} {...image} alt={image.alt} className="w-full" />;
      })}
    </div>
  );
};

export default ListImages;
