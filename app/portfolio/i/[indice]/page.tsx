import ListIndice from "@/components/ListIndice";

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
  const name = "Título do índice";
  return (
    <div className="xl:container mx-auto relative overflow-hidden mb-16">
      <h1 className="text-2xl md:text-3xl text-titleIndice font-medium mt-10 mb-5">{name}</h1>
      <ListIndice projects={items} />
    </div>
  );
};

export default IndicePage;
