import qs from "qs";
import Link from "next/link";
import { getData } from "@/utils";

import { Fragment } from "react";
import parse from "html-react-parser";

import ListImages from "@/components/ListImages";
import ChevronLeft from "@/components/ChevronLeft";
import { ImageProps, LinkProps } from "@/components/ProjectItem";

import RichText from "@/components/RichText";

import client from "@/libs/apollo-client";
import { gql } from "@apollo/client";

// const projectQuery = (params: { slug: string }) =>
//   qs.stringify({
//     populate: {
//       fields: ["name", "description", "slug", "publishedAt"],
//       tags: {
//         fields: ["name"],
//       },
//       categories: {
//         fields: ["id", "slug"],
//       },
//       section: {
//         fields: ["link", "image"],
//         populate: ["image"],
//       },
//       images: {
//         fields: ["url", "width", "height", "name"],
//         sort: "name:ASC",
//       },
//     },
//     filters: {
//       slug: {
//         $eq: params.slug,
//       },
//     },
//     sort: "publishedAt:desc",
//     pagination: { limit: 2 },
//   });

// const projectsQuery = qs.stringify({
//   populate: {
//     fields: ["slug"],
//   },
// });

// export async function generateStaticParams() {
//   const projects = await getData("/api/portfolios", projectsQuery);

//   return projects.data.map((project: any) => ({
//     slug: project.slug,
//   }));
// }

async function getPortfolio(params: { slug: string }) {
  const { data } = await client.query({
    query: gql`
      query GetPostBySlug {
        post(id: "${params.slug}", idType: SLUG) {
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
    `,
    fetchPolicy: "no-cache",
  });

  return data.post;
}

// async function getPrevProject(publishedAt: string, category: string) {
//   const data = await getData(
//     "/api/portfolios",
//     qs.stringify({
//       populate: {
//         fields: ["slug", "publishedAt"],
//       },
//       filters: {
//         publishedAt: {
//           $lt: publishedAt,
//         },
//         categories: {
//           slug: {
//             $eq: category,
//           },
//         },
//       },
//       sort: "publishedAt:desc",
//       pagination: { limit: 1 },
//     })
//   );

//   if (data?.data[0]) return data?.data[0];

//   return null;
// }

// async function getNextProject(publishedAt: string, category: string) {
//   const data = await getData(
//     "/api/portfolios",
//     qs.stringify({
//       populate: {
//         fields: ["slug", "publishedAt"],
//       },
//       filters: {
//         publishedAt: {
//           $gt: publishedAt,
//         },
//         categories: {
//           slug: {
//             $eq: category,
//           },
//         },
//       },
//       sort: "publishedAt:asc",
//       pagination: { limit: 1 },
//     })
//   );
//   if (data?.data[0]) return data?.data[0];

//   return null;
// }

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  const project = await getPortfolio(params);
  // const categoryProject = project?.categories?.data[0] && project?.categories?.data[0]?.slug;
  // const prevProject = await getPrevProject(project?.publishedAt, categoryProject);
  // const nextProject = await getNextProject(project?.publishedAt, categoryProject);

  const nextProject = "";
  const prevProject = "";

  // console.dir(project, { depth: null });
  // console.dir(prevProject, { depth: null });
  // console.dir(nextProject, { depth: null });

  const name = project?.title || "";
  const description = project?.content || "";
  // let sections: { image: ImageProps; link?: LinkProps }[] =
  //   project?.images?.data?.map((project: any) => ({
  //     image: {
  //       src: (project.url && `${project.url}`) || "",
  //       width: project.width,
  //       height: project.height,
  //       alt: project.name,
  //     },
  //   })) || [];

  // sections = sections?.sort((a: any, b: any) => {
  //   let na = Number(a?.image?.alt.split("-")[0]);
  //   let nb = Number(b?.image?.alt.split("-")[0]);
  //   if (na < nb) {
  //     return -1;
  //   }

  //   if (na > nb) {
  //     return 1;
  //   }
  //   return 0;
  // });

  const tags: string[] = project?.tags?.edges?.map((tag: any) => tag?.node?.name) || [];

  return (
    <div className="container relative overflow-hidden md:mb-16 animate-fadeIn">
      <h1 className="text-[28px] md:text-[45px] font-medium mt-10 mb-5 leading-none">{name}</h1>
      {tags && tags?.length > 0 && (
        <div className="text-sm md:text-lg text-titleIndice mb-5">
          {tags?.map((tag: any, index: number) => {
            return (
              <Fragment key={index}>
                {tags.length - 1 === index && tags.length > 1 && " e "}
                <span>{tag}</span>
                {index < tags.length - 2 && ", "}
              </Fragment>
            );
          })}
        </div>
      )}
      {description && (
        <div className="grid gap-5 mt-5 md:gap-12 md:mt-5">
          <RichText>{description}</RichText>
        </div>
      )}

      {/* { sections && <ListImages items={sections} />} */}
      {/* {(prevProject || nextProject) && (
        <div className="flex justify-between my-12 relative min-h-[30px]">
          {prevProject && (
            <Link
              href={`/portfolio/${prevProject.slug}`}
              className="flex gap-4 items-center text-[15px] text-titleIndice absolute left-0 top-0"
            >
              <ChevronLeft className="w-[17px] h-[31px]" /> Anterior
            </Link>
          )}
          {nextProject && (
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="flex gap-4 items-center text-[15px] text-titleIndice absolute top-0 right-0"
            >
              Próximo <ChevronLeft className="w-[17px] h-[31px] rotate-180" />
            </Link>
          )}
        </div>
      )} */}
    </div>
  );
};

export default PortfolioPage;
