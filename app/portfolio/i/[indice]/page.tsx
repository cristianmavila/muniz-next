import client from "@/libs/apollo-client";
import { gql } from "@apollo/client";

import ListIndice from "@/components/ListIndice";

async function getIndice(params: { indice: string }) {
  const { data } = await client.query({
    query: gql`
      query GetPostsByCategory($first: Int!) {
        posts(first: $first, where: { categoryName: "${params.indice}", orderby: { field:IN, order: ASC } }) {
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
    fetchPolicy: "no-cache",
    variables: { first: 35 },
  });

  return data;
}

const getCategoryName = (indice: string) => {
  if (indice === "industria") {
    return "Indústria";
  } else if (indice === "instituicao-empresa") {
    return "Instituição & Empresa";
  } else {
    return "Varejo & Produto";
  }
};

const IndicePage = async ({ params }: { params: { indice: string } }) => {
  const items = await getIndice(params);
  const { posts } = items;

  const name = getCategoryName(params.indice) || "Nenhum projeto encontrado";

  // console.dir(data, { depth: null });

  const mapIndices = posts.nodes?.map(({ id, title, featuredImage, slug }: any) => ({
    id: id,
    name: title,
    thumbnail:
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

  return (
    <div className="container mx-auto relative overflow-hidden mb-16 animate-fadeIn">
      <h1 className="text-2xl lg:text-3xl text-titleIndice font-medium mt-10 mb-5">{name}</h1>
      {mapIndices && <ListIndice projects={mapIndices} />}
    </div>
  );
};

export default IndicePage;
