import qs from "qs";
import { getData } from "@/utils";
import Header from "@/components/Header";
import ListImages from "@/components/ListImages";

async function getHome() {
  const data = await getData(
    `/api/homepage`,
    qs.stringify({
      populate: {
        images: {
          fields: ["image"],
          populate: ["image"],
        },
        portfolios: {
          fields: ["name", "slug", "thumb_home"],
          populate: ["thumb_home"],
        },
      },
    })
  );

  return data;
}

export default async function Home() {
  const data = await getHome();
  const { portfolios, images } = data;

  const mapSections = images?.map(({ image }: any) => ({
    image: {
      src: `${image.url}`,
      width: image.width,
      height: image.height,
    },
  }));

  const mapPortfolio = portfolios?.data?.map(({ slug, name, thumb_home }: any) => ({
    name: name,
    image:
      thumb_home.url !== undefined
        ? {
            src: `${thumb_home.url}`,
            width: thumb_home.width | 0,
            height: thumb_home.height | 0,
          }
        : {},
    link: {
      href: `/portfolio/${slug}`,
      children: name,
    },
  }));

  // console.dir(data?.portfolios, { depth: null });
  // console.dir(data?.images, { depth: null });
  // console.log(mapPortfolio, { deep: null });
  // console.log(images, { depth: null });

  return (
    <div className="bg-black">
      <Header variant={"home"} />
      <div className="container relative overflow-hidden pb-11">
        {mapSections && <ListImages items={mapSections} />}
        {mapPortfolio && <ListImages items={mapPortfolio} imageClassName="bg-gray-950" />}
      </div>
    </div>
  );
}
