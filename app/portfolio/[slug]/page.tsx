const PortfolioPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="xl:container mx-auto relative overflow-hidden mb-16">
      <h1 className="text-[28px] md:text-[45px] font-medium mt-10 mb-5 leading-none">
        Título do projeto
      </h1>
      <div className="text-sm md:text-lg text-titleIndice mb-5">
        Nome do projeto, Redesign de Marca, Identidade Visual e Guideline
      </div>
      <div className="text-lg md:text-2xl leading-6 md:!leading-9">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</div>
    </div>
  );
};

export default PortfolioPage;
