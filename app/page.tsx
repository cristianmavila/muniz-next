// import qs from "qs";
// import { getData } from "@/utils";

import client from "@/libs/apollo-client";
import { gql } from "@apollo/client";

import Header from "@/components/Header";
import ListImages from "@/components/ListImages";

async function getHome() {
  // const data = await getData(
  //   `/api/homepage`,
  //   qs.stringify({
  //     populate: {
  //       images: {
  //         fields: ["image"],
  //         populate: ["image"],
  //       },
  //       portfolios: {
  //         fields: ["name", "slug", "thumb_home"],
  //         populate: ["thumb_home"],
  //       },
  //     },
  //   })
  // );

  const { data } = await client.query({
    query: gql`
      query GetPostsByCategory {
        posts(where: { categoryName: "industria" }) {
          nodes {
            id
            title
            slug
            content
            featuredImage {
              node {
                altText
                sourceUrl
                mediaDetails {
                  file
                  height
                  width
                }
              }
            }
            tags {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    `,
  });

  console.log(data.posts.nodes);

  return data;
}

export default async function Home() {
  const data = await getHome();
  const { posts } = data;

  // const mapSections = images?.map(({ image }: any) => ({
  //   image: {
  //     src: `${image.url}`,
  //     width: image.width,
  //     height: image.height,
  //   },
  // }));

  const mapPortfolio = posts?.nodes?.map(({ slug, title, featuredImage }: any) => ({
    name: title,
    image:
      featuredImage.node.sourceUrl !== undefined
        ? {
            src: `${featuredImage.node.sourceUrl}`,
            width: featuredImage.node.mediaDetails.width | 0,
            height: featuredImage.node.mediaDetails.height | 0,
          }
        : {},
    link: {
      href: `/portfolio/${slug}`,
      children: title,
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
        {/* {mapSections && <ListImages items={mapSections} />} */}
        {mapPortfolio && <ListImages items={mapPortfolio} imageClassName="bg-gray-950" />}
      </div>
    </div>
  );
}
