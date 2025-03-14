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
      <div className="container mx-auto relative overflow-hidden pb-16 text-xl">
        <div className="grid gap-9 lg:max-w-[670px] w-full md:w-3/4 mx-auto text-white my-20 md:my-32 text-xl md:text-3xl">
          <div className="mx-auto grid gap-9">
            <p className="leading-relaxed">
              DESIGN e estratégias
              <br />
              de marca eficazes criam
              <br />
              conexões emocionais
              <br />
              profundas, orientam
              <br />
              os objetivos empresariais,
              <br /> aumentam a visibilidade
              <br /> e expandem mercados
            </p>
            <p className="leading-relaxed">
              Com uma abordagem
              <br />
              integrada, levam
              <br />
              ao sucesso sustentável
              <br />e transformam a maneira
              <br /> como as pessoas
              <br />
              interagem com a marca
            </p>
          </div>
        </div>
        {mapPortfolio && <ListImages items={mapPortfolio} imageClassName="bg-gray-950" />}
      </div>
    </div>
  );
}
