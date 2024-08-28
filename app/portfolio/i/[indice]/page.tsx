import qs from "qs";
import { getData } from "@/utils";
import ListIndice from "@/components/ListIndice";

async function getIndice(params: { indice: string }) {
  const data = await getData(
    `/api/portfolios`,
    qs.stringify({
      populate: {
        fields: ["name", "slug"],
        thumbnail: {
          fields: ["url", "width", "height", "name"],
        },
        category: {
          fields: ["name", "slug"],
        },
      },
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

  const name = (data && data[0]?.category?.name) || "Nenhum projeto encontrado";

  // console.dir(data, { depth: null });

  const mapIndices = data?.map(({ id, name, thumbnail, slug }: any) => ({
    id: id,
    name: name,
    thumbnail: {
      src: (thumbnail.url && `${process.env.NEXT_PUBLIC_API_BASE_URL}${thumbnail.url}`) || "",
      width: thumbnail.width,
      height: thumbnail.height,
      alt: thumbnail.name,
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
