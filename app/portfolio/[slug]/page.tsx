import { Fragment, ReactElement, ReactNode } from "react";
import { ImageProps, LinkProps } from "@/components/ProjectItem";
import ListImages from "@/components/ListImages";
interface PortfolioPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
  // name: string;
  // description: ReactNode | ReactElement | string;
  // tags?: string[];
  // sections: {
  //   image: ImageProps;
  //   link?: LinkProps;
  // }[];
  children: ReactNode | ReactElement | string;
}

const PortfolioPage = ({ params }: { params: { slug: string } }) => {
  const name = "Project name";
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const tags = ["Nome do projeto", "Redesign de Marca", "Identidade Visual", "Guideline"];
  const sections = [
    {
      image: {
        src: "https://placehold.co/600x400",
        alt: "Image alt",
        width: 555,
        height: 345,
      },
    },
    {
      image: {
        src: "https://placehold.co/600x400",
        alt: "Image alt",
        width: 555,
        height: 345,
      },
    },
    {
      image: {
        src: "https://placehold.co/600x400",
        alt: "Image alt",
        width: 555,
        height: 345,
      },
    },
  ];

  console.log(params);

  return (
    <div className="xl:container relative overflow-hidden mb-16">
      <h1 className="text-[28px] md:text-[45px] font-medium mt-10 mb-5 leading-none">{name}</h1>
      {tags && tags?.length > 0 && (
        <div className="text-sm md:text-lg text-titleIndice mb-5">
          {tags?.map((tag, index) => {
            return (
              <Fragment key={index}>
                {tags.length - 1 === index && tags.length > 1 && " e "}
                <span>{tag}</span>
                {index < tags.length - 2 && ", "}
              </Fragment>
            );
          })}
        </div>
      )}
      <div className="text-lg md:text-2xl leading-6 md:!leading-9">{description}</div>
      <ListImages items={sections} />
    </div>
  );
};

export default PortfolioPage;
