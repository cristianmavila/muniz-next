import Link from "next/link";

import { Fragment } from "react";

import ChevronLeft from "@/components/ChevronLeft";
import RichText from "@/components/RichText";

import client from "@/libs/apollo-client";
import { gql } from "@apollo/client";

async function getPortfolio(params: { slug: string }) {
  const { data } = await client.query({
    query: gql`
      query GetPostBySlug {
        post(id: "${params.slug}", idType: SLUG) {
          id
          title
          slug
          content
          previousPostSlug
          nextPostSlug
        }
      }
    `,
    fetchPolicy: "no-cache",
  });

  return data.post;
}

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  const project = await getPortfolio(params);
  // console.log(project);
  const categoryProject =
    project?.categories?.nodes.find((item: { name: string }) => item.name !== "home") || null;

  const nextProject = project?.nextPostSlug || null;
  const prevProject = project?.previousPostSlug || null;

  const name = project?.title || "";
  const description = project?.content || "";

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

      {(prevProject || nextProject) && (
        <div className="flex justify-between my-12 relative min-h-[30px]">
          {prevProject && (
            <Link
              href={`/portfolio/${prevProject}`}
              className="flex gap-4 items-center text-[15px] text-titleIndice absolute left-0 top-0"
            >
              <ChevronLeft className="w-[17px] h-[31px]" /> Anterior
            </Link>
          )}
          {nextProject && (
            <Link
              href={`/portfolio/${nextProject}`}
              className="flex gap-4 items-center text-[15px] text-titleIndice absolute top-0 right-0"
            >
              Próximo <ChevronLeft className="w-[17px] h-[31px] rotate-180" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
