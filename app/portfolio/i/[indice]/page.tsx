import qs from "qs";
import { getData } from "@/utils";
import ListIndice from "@/components/ListIndice";

async function getIndice(params: { indice: string }) {
  const data = await getData(
    `/api/portfolios`,
    qs.stringify({
      populate: {
        fields: ["name", "slug", "thumbnail"],
        category: {
          fields: ["name", "slug"],
        },
      },
      populate: ["thumbnail", "category"],
      filters: {
        category: {
          slug: {
            $eq: params.indice,
          },
        },
      },
    })
  );

  return data;
}

const IndicePage = async ({ params }: { params: { indice: string } }) => {
  const items = await getIndice(params);
  const { data } = items;

  const name = data[0]?.category?.name || "Nenhum projeto encontrado";

  const mapIndices = data?.map(({ id, name, thumbnail, slug }: any) => ({
    id: id,
    name: name,
    thumbnail: {
      src: `${process.env.NEXT_PUBLIC_API_BASE_URL}${thumbnail.formats.large.url}`,
      width: thumbnail.formats.large.width,
      height: thumbnail.formats.large.height,
      alt: thumbnail.formats.large.name,
    },
    link: {
      href: `/portfolio/${slug}`,
      children: name,
    },
  }));

  return (
    <div className="container mx-auto relative overflow-hidden mb-16">
      <h1 className="text-2xl md:text-3xl text-titleIndice font-medium mt-10 mb-5">{name}</h1>
      {mapIndices && <ListIndice projects={mapIndices} />}
    </div>
  );
};

export default IndicePage;
