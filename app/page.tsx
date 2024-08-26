import qs from "qs";
import { getData } from "@/utils";
import Header from "@/components/Header";
import ListImages from "@/components/ListImages";

async function getHome() {
  const data = await getData(
    `/api/homepage`,
    qs.stringify({
      populate: {
        portfolios: {
          fields: ["name", "thumbnail", "slug"],
          populate: ["thumbnail"],
        },
      },
    })
  );

  return data;
}

export default async function Home() {
  const data = await getHome();
  const { portfolios } = data;
  const mapPortfolio = portfolios?.data?.map(({ slug, name, thumbnail }: any) => ({
    name: name,
    image: {
      src: `${process.env.NEXT_PUBLIC_API_BASE_URL}${thumbnail.url}`,
      width: thumbnail.width,
      height: thumbnail.height,
    },
    link: {
      href: `/portfolio/${slug}`,
      children: name,
    },
  }));

  //console.dir(data?.portfolios, { depth: null });

  // console.log(mapPortfolio, { deep: null });

  return (
    <div className="bg-black">
      <Header variant={"home"} />
      <div className="container relative overflow-hidden pb-11">
        {mapPortfolio && <ListImages items={mapPortfolio} />}
      </div>
    </div>
  );
}
