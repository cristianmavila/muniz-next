import client from "@/libs/apollo-client";
import Header from "@/components/Header";
import ListImages from "@/components/ListImages";
import { GET_POSTS_HOME } from "@/queries";

async function getHome() {
  const { data } = await client.query({
    query: GET_POSTS_HOME,
    fetchPolicy: "no-cache",
    variables: { first: 50, category: "home" },
  });

  return data;
}

export default async function Home() {
  const data = await getHome();
  const { posts } = data;

  const mapPortfolio = posts?.nodes?.map(({ slug, title, featuredImage, homeThumbnail }: any) => ({
    name: title,
    image:
      homeThumbnail !== undefined && featuredImage
        ? {
            src: `${homeThumbnail}`,
            width: featuredImage.node.mediaDetails.width | 0,
            height: featuredImage.node.mediaDetails.height | 0,
          }
        : {},
    link: slug !== "home-image" && {
      href: `/portfolio/${slug}`,
      children: title,
    },
  }));

  return (
    <div className="bg-black">
      <Header variant={"home"} />
      <div className="container relative overflow-hidden pb-11">
        {mapPortfolio && <ListImages items={mapPortfolio} imageClassName="bg-gray-950" />}
      </div>
    </div>
  );
}
