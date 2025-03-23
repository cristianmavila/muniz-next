/* eslint-disable @next/next/no-img-element */
import { cn } from "@/libs/tailwind";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cva } from "class-variance-authority";

const LayoutExpertise = () => {
  // const grayStyle = cva("text-titleIndice");
  const titleStyle = cva("text-lg md:text-2xl text-brand");

  return (
    <div className="bg-black text-white min-h-screen">
      <Header variant={"conceitos"} />
      <div className="container mx-auto relative overflow-hidden mb-16 text-xl">
        <h1 className="text-2xl md:text-5xl font-medium mt-10 mb-5 sr-only">Expertise</h1>
        <div className="my-8 md:my-14">
          {/* <SliderExpertise /> */}
          <div className="opacity-0 animate-fade min-h-[334px]">
            <img
              width={2500}
              height={1875}
              alt="Expertise image"
              loading="lazy"
              className="w-full mt-8 lg:mt-14 relative indent-[100%] whitespace-nowrap overflow-hidden"
              src="https://blog.jorgemuniz.com.br/wp-content/uploads/2025/03/01-EXPERTISE-Fim-Redux-92.jpg"
            />
          </div>
        </div>
        <div className="grid gap-9 lg:max-w-[650px] w-full md:w-3/4 mx-auto">
          {/* <div className="grid gap-7">
            
            <p className="leading-8">
              Este portfólio está focado no protagonismo das marcas e reúne minha experiência na
              criação de identidades visuais atemporais.
            </p>
            <p className="leading-8">
              Fundamentada nos atributos essenciais da marca: distinção, praticidade, reconhecimento
              e simplicidade, essa abordagem demonstra que a combinação de criatividade, foco e
              estratégia pode gerar legados duradouros.
            </p>
            <p className="leading-8">
              Esses princípios são fundamentais para moldar ações eficazes que garantem o sucesso
              das marcas em um ambiente desafiador e em constante evolução.
            </p>
          </div> */}

          <div>
            <h3 className={cn(titleStyle(), "text-4xl md:text-6xl !leading-normal")}>
              Branding é conhecimento, Branding é experiência
            </h3>
          </div>

          <div className="grid gap-4">
            <p className="text-2xl md:text-4xl lg:text-5xl">+ 1200 Marcas</p>
            <p className="text-2xl md:text-4xl lg:text-5xl">+ 1700 Identidades visuais</p>
            <p className="text-2xl md:text-4xl lg:text-5xl">+ 800 Empresas</p>
            <p className="text-2xl md:text-4xl lg:text-5xl">+ 40 Anos</p>
          </div>

          <div className="text-xl md:text-3xl">
            <p className="leading-relaxed">
              * Análise & Estratégia de Marca
              <br /> * Conceito de Marca
              <br /> * Arquitetura de Marca & Portfólio
              <br /> * Nome & Identidade Verbal
              <br /> * Logo & Identidade Visual
              <br /> * Design de Embalagem
              <br /> * Manual de Normas
            </p>
          </div>

          <h3 className={titleStyle()}>Créditos</h3>

          <div className="grid gap-3">
            <p className="text-xs md:text-[13px] !leading-6">
              <span className="text-brand">GAD DESIGN</span> Alguns projetos foram criados no Gad
              Design entre 1998 e 2001 <span className="text-brand">SPORT CLUB INTERNACIONAL</span>{" "}
              Redesign Jorge Muniz, Sandro Manfredini e Edu Bortolon{" "}
              <span className="text-brand">GERDAU 100 ANOS</span> Design Jorge Muniz e Flavio
              Ferreira <span className="text-brand">JURERÊ INTERNACIONAL</span> Design Jorge Muniz e
              Sheyla Scardoelli <span className="text-brand">FRIGORÍFICO BOA ESPERANÇA</span> Design
              Jorge Muniz e Sheyla Scardoelli <span className="text-brand">PLUGGER</span> Design
              Jorge Muniz e Diego Martinez <span className="text-brand">PROPÓSITOS DO DESIGN</span>{" "}
              Adaptado do texto original de Paul Rand “Forma de Design e Caos”{" "}
              <span className="text-brand">DESIGN SITE</span> Jorge Muniz e Cristian Ávila
            </p>
          </div>
        </div>
      </div>
      <Footer socialLinksClassName="bg-white" />
    </div>
  );
};

export default LayoutExpertise;
