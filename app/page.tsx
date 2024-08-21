import Header from "@/components/Header";
import ListImages from "@/components/ListImages";

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
    link: {
      href: "#here",
      children: "link test",
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

export default function Home() {
  return (
    <div className="bg-black">
      <Header variant={"home"} />
      <div className="container relative overflow-hidden pb-11">
        <ListImages items={sections} />
      </div>
    </div>
  );
}
