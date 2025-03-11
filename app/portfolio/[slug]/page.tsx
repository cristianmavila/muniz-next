import { Fragment } from "react";
import RichText from "@/components/RichText";

import client from "@/libs/apollo-client";
import { gql } from "@apollo/client";

import { GET_POST_BY_SLUG } from "@/queries";
import NavigationProject from "@/components/NavigationProject";

async function getPortfolio(params: { slug: string }) {
  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug: params.slug },
    fetchPolicy: "no-cache",
  });

  return data.post;
}

export async function generateStaticParams() {
  const { data } = await client.query({
    query: gql`
      query GetPosts($first: Int!) {
        posts(first: $first) {
          nodes {
            id
            title
            slug
          }
        }
      }
    `,
    fetchPolicy: "no-cache",
    variables: { first: 250 },
  });

  return data?.posts?.nodes?.map((project: { slug: any }) => ({
    slug: String(project.slug),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getPortfolio({ slug: slug });

  const plainTextContent = project.content
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return {
    title: `Muniz Branding - ${project.title}`,
    description: plainTextContent,
  };
}

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  const project = await getPortfolio(params);
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

      <NavigationProject
        {...{
          nextProject,
          prevProject,
          href: `/portfolio/${params.slug}`,
        }}
      />
    </div>
  );
};

export default PortfolioPage;
