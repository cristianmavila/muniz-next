import { getData } from "@/utils";
import qs from "qs";

async function getPortfolios() {
  const data = await getData(
    `/api/portfolios`,
    qs.stringify({
      populate: {
        fields: ["name", "slug"],
      },
      sort: "publishedAt:asc",
      pagination: { limit: 100 },
    })
  );

  return data;
}

export default async function sitemap() {
  const { data } = await getPortfolios();

  const pages = data?.map(({ slug }: any) => {
    // resources is an array containing objects like: {
    //   path: "/blog/some-category/a-blog-post",
    //   type: "node--article",
    //   locale: "en", // or `undefined` if no `locales` requested.
    //   segments: ["blog", "some-category", "a-blog-post"],
    // }
    return {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      lastModified: new Date(),
    };
  });

  const industrias = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/i/industria`,
    lastModified: new Date(),
  };

  const instituicaoEmpresa = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/i/instituicao-empresa`,
    lastModified: new Date(),
  };

  const varejoProduto = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/i/varejo-produto`,
    lastModified: new Date(),
  };

  const conceitosPage = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/conceitos-expertise`,
    lastModified: new Date(),
  };

  const contactPage = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contato`,
    lastModified: new Date(),
  };

  const homePage = {
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    lastModified: new Date(),
  };

  return [
    ...pages,
    industrias,
    instituicaoEmpresa,
    varejoProduto,
    conceitosPage,
    contactPage,
    homePage,
  ];
}
