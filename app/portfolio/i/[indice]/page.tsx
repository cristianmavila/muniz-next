import Image from "next/image";
import Link from "next/link";
import ListIndice from "@/components/ListIndice";
import ProjectItem from "@/components/ProjectItem";

const items = [
  {
    thumbnail: {
      src: "https://placehold.co/600x400",
      width: 555,
      height: 345,
      alt: "Image thumbnail",
    },
    name: "Project name",
    link: {
      href: "/portfolio/name",
      children: "Name of the project",
      target: "_parent",
    },
  },
  {
    thumbnail: {
      src: "https://placehold.co/600x400",
      width: 555,
      height: 345,
      alt: "Image thumbnail",
    },
    name: "Project name",
    link: {
      href: "/portfolio/name",
      children: "Name of the project",
      target: "_parent",
    },
  },
  {
    thumbnail: {
      src: "https://placehold.co/600x400",
      width: 555,
      height: 345,
      alt: "Image thumbnail",
    },
    name: "Project name",
    link: {
      href: "/portfolio/name",
      children: "Name of the project",
      target: "_parent",
    },
  },
];

const IndicePage = ({ params }: { params: { indice: string } }) => {
  return (
    <div className="xl:container mx-auto relative overflow-hidden mb-16">
      <h1 className="text-2xl md:text-3xl text-titleIndice font-medium mt-10 mb-5">
        Título do índice
      </h1>
      {params.indice}

      <ListIndice projects={items} />
    </div>
  );
};

export default IndicePage;
