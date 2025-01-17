import client from "@/libs/apollo-client";
import { gql } from "@apollo/client";

import Header from "@/components/Header";
import ListImages from "@/components/ListImages";

async function getHome() {
  const { data } = await client.query({
    query: gql`
      query GetPostsByCategory($first: Int!) {
        posts(
          first: $first
          where: { categoryName: "home", orderby: { field: MENU_ORDER, order: ASC } }
        ) {
          nodes {
            id
            title
            slug
            content
            homeThumbnail
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
    fetchPolicy: "no-cache",
    variables: { first: 50 },
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
