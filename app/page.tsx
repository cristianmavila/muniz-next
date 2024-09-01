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
  const { portfolios } = data;
  const mapPortfolio = portfolios?.data?.map(({ slug, name, thumb_home }: any) => ({
    name: name,
    image: {
      src: `${process.env.NEXT_PUBLIC_API_BASE_URL}${thumb_home.url}`,
      width: thumb_home.width,
      height: thumb_home.height,
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
