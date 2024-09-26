/* eslint-disable @next/next/no-img-element */
import { cn } from "@/libs/tailwind";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cva } from "class-variance-authority";
import SliderExpertise from "@/components/SliderExpertise";

const LayoutExpertise = () => {
  const grayStyle = cva("text-titleIndice");
  const titleStyle = cva("text-lg md:text-2xl text-brand");

  return (
    <div className="bg-black text-white min-h-screen">
      <Header variant={"conceitos"} />
      <div className="container mx-auto relative overflow-hidden mb-16 text-sm md:text-xl">
        <h1 className="text-2xl md:text-5xl font-medium mt-10 mb-5 sr-only">Insights</h1>
        <div className="my-8 md:my-14">
          {/* Heading images */}
          <img
            width={2500}
            height={1875}
            alt="Insights luz"
            loading="lazy"
            className="w-full mt-14 relative indent-[100%] whitespace-nowrap overflow-hidden transition-all animate-fade"
            src="https://res.cloudinary.com/df2y7qdjr/image/upload/v1727215823/LUZ-Insights_o52nqa.jpg"
          />
          <div className="duration-300 animate-fadeIn">
            <img
              width={2500}
              height={1877}
              alt="Insights title image"
              loading="lazy"
              className="w-full mt-14 relative indent-[100%] whitespace-nowrap overflow-hidden lg:px-36 mx-auto hover:scale-[112%] duration-500 ease-in-out"
              src="https://res.cloudinary.com/df2y7qdjr/image/upload/v1727266473/Title-INSIGHTS_ygd2xy.png"
            />
          </div>
        </div>
        {/* Sections of text */}
        <div className="grid gap-9 lg:max-w-[650px] w-10/12 md:w-3/4 mx-auto text-base [&_p]:leading-8">
          <h2 className="text-3xl md:text-5xl">Insights</h2>
          <h3 className="text-brand text-xl md:text-3xl">Design</h3>
          <p className={cn(grayStyle())}>
            “Design pode ser arte. O design pode ser pura estética. O design é muito simples, por
            isso que é tão complicado”. PAUL RAND
          </p>
          <p>
            O design estabelece valor, dá sentido ou simplesmente proporciona prazer visual. É um
            modo de vida, um ponto de vista e uma maneira de ser relevante, provocando
            relacionamentos através do esclarecimento, da capacidade de síntese e da dramatização de
            palavras ou imagens. O bom design envolve um conjunto de fatores relacionados à
            estética, conhecimento técnico, economia, ergonomia, tecnologia e
            psicologia,manifestando-se na correta interpretação dessas particularidades.
          </p>
          <h3 className="text-brand text-xl md:text-3xl">Design é função</h3>
          <p className={cn(grayStyle())}>
            &quot;A forma segue a função&quot;. LOUIS HENRY SULLIVAN
          </p>
          <p>
            No design, a função é o princípio orientador. Antes de considerar a estética, é
            essencial entender que o design deve responder de forma prática às necessidades a serem
            atendidas. Ele surge naturalmente quando o espírito desejado está alinhado com sua
            função, criando uma simbiose entre forma e utilidade que confere solidez ao projeto.
          </p>
          <div>
            <h3 className="text-brand text-lg">Interpretação Prática</h3>
            <p>
              O design não é apenas aparência; é uma interpretação das necessidades do usuário. Cada
              elemento deve servir a um propósito claro, garantindo que a forma seja visualmente
              atraente e funcional. Essa abordagem prática é fundamental para criar experiências que
              ressoem com o público.
            </p>
          </div>
          <div>
            <h3 className="text-brand text-lg">Harmonia entre Forma e Função</h3>
            <p>
              A verdadeira força do design está na integração entre forma e função. Quando esses
              aspectos se complementam, o resultado é um design que se destaca no mercado,
              oferecendo uma experiência satisfatória e memorável.
            </p>
          </div>
          <div>
            <h3 className="text-brand text-lg">Além da estética</h3>
            <p>
              O design vai além da estética; é uma ferramenta para resolver problemas e atender às
              necessidades dos usuários. A função deve ser o norte do design, e a verdadeira beleza
              surge quando forma e função estão em harmonia, garantindo que a marca permaneça
              relevante e eficaz ao longo do tempo.
            </p>
          </div>
          <h3 className="text-brand text-xl md:text-3xl">Presente pensado para o futuro</h3>
          <p>
            Um projeto de branding bem-sucedido deve ser desenvolvido com uma visão de longo prazo,
            sem se prender a tendências efêmeras. Para alcançar essa longevidade, é essencial
            construir sobre uma base universal, fundamentada em conceitos verdadeiros e duradouros.
          </p>
          <div>
            <h3 className="text-brand text-lg">Solidez e Foco</h3>
            <p>
              A solução de branding deve ser sólida e focada, de modo que, mesmo com o passar do
              tempo, não precise ser completamente ajustada ou refeita. Essa solidez garante que a
              marca mantenha sua relevância e se adapte às mudanças do mercado sem perder sua
              essência.
            </p>
          </div>
          <div>
            <h3 className="text-brand text-lg">Entendendo a Intenção</h3>
            <p>
              Para criar uma imagem de marca competitiva e atemporal, é fundamental entender e
              traduzir os atributos que definem a intenção da marca. Isso envolve identificar os
              valores, a personalidade e o posicionamento que a marca deseja transmitir, e então
              incorporá-los de forma coerente em todos os seus elementos.
            </p>
          </div>
          <div>
            <h3 className="text-brand text-lg">Posicionamento Consistente</h3>
            <p>
              Um projeto de branding bem-sucedido representa um posicionamento consistente, que não
              se deixa levar por modismos passageiros. Essa consistência é essencial para construir
              uma imagem de marca forte e reconhecível, que se destaque em meio à concorrência.
            </p>
          </div>
          <div>
            <h3 className="text-brand text-lg">Adaptabilidade</h3>
            <p>
              Embora a essência da marca deva permanecer constante, isso não significa que o design
              não possa evoluir com o tempo. Um bom projeto de branding deve ser adaptável,
              permitindo atualizações e refinamentos sem perder sua integridade. Essa flexibilidade
              permite que a marca se mantenha relevante e atraente para diferentes públicos e em
              diferentes épocas.
            </p>
          </div>
          <p>
            Desenvolver um projeto de branding pensando no futuro requer uma abordagem estratégica e
            visionária. Ao construir sobre uma base sólida de conceitos universais, manter o foco e
            a consistência, e ainda assim permitir a adaptação, as marcas podem criar uma imagem
            duradoura e competitiva, que resista às mudanças do mercado e às tendências passageiras.
          </p>
          <h3 className="text-brand text-xl md:text-3xl">Simplicidade impecável</h3>
          <p className={cn(grayStyle())}>
            &quot;A simplicidade é o último grau de sofisticação&quot;. LEONARDO DA VINCI
          </p>
          <p>
            A simplicidade é o atributo essencial de uma marca. Sem ela, os objetivos do branding
            tornam-se inatingíveis. Simplicidade refere-se à qualidade de algo que não apresenta
            dificuldades ou obstáculos; é sinônimo de naturalidade, espontaneidade e elegância,
            desprovida de elementos que desviem a atenção do que realmente importa.
          </p>
          <div>
            <h3 className="text-brand text-lg">A Busca pela Simplicidade</h3>
            <p>
              A busca pela simplicidade exige perseverança e profundo conhecimento. Esse caminho
              seguro permite alcançar o impacto visual necessário a uma imagem de marca que perdure
              ao longo do tempo, pois busca apenas o que é relevante para captar a atenção do
              público.
            </p>
          </div>
          <div>
            <h3 className="text-brand text-lg">Simplicidade poderosa</h3>
            <p>
              Ao observar as marcas mais poderosas e bem construídas do mundo, é possível perceber
              essa qualidade em ação: são marcas facilmente reconhecíveis por sua &quot;simplicidade
              impecável&quot;. Essas marcas conseguem comunicar sua essência de forma clara e
              direta, estabelecendo uma conexão imediata com os consumidores.
            </p>
          </div>

          <div>
            <h3 className="text-brand text-lg">Não é estratégia, é filosofia</h3>
            <p>
              A simplicidade não é apenas uma estratégia de design, mas uma filosofia que deve
              permear todas as ações de branding.
            </p>
          </div>

          <p>
            Ao priorizar a simplicidade, as marcas não apenas se tornam memoráveis, mas também criam
            experiências significativas para seus consumidores, garantindo sua relevância
          </p>

          <h3 className="text-brand text-xl md:text-3xl">Marca emocional</h3>

          <p className={cn(grayStyle())}>
            &quot;As vezes não se vê nada na superfície, mas debaixo dela tudo está ardente&quot;.
            YUSUF BILYARTA MANGUNWIJAYA
          </p>

          <p>
            Quando uma marca consegue cultivar um espírito emocional, ela já percorreu metade do
            caminho rumo à sua consolidação. Esse espírito emocional é fundamental para estabelecer
            relacionamentos profundos com os consumidores, permitindo que a imagem da marca se fixe
            de forma natural na mente do público.
          </p>

          <h3 className="text-brand text-xl md:text-3xl">A Importância do Design Emocional</h3>

          <p>
            O design de uma marca é, em essência, uma expressão de empatia e emoção. Ao provocar
            entendimento por meio de formas, sensações e cores, o design convida o observador a
            participar da construção da imagem da marca. Essa participação gera um vínculo emocional
            que, aliado à simplicidade, leva a marca a alcançar seu objetivo primordial: ser
            lembrada.
          </p>

          <h3 className="text-brand text-xl md:text-3xl">Níveis do Design Emocional</h3>

          <div>
            <h3 className="text-brand text-lg">Visceral</h3>
            <p>
              Relaciona-se à primeira impressão que um produto causa, influenciada por aspectos como
              aparência, textura e cor. É nesse nível que as emoções mais imediatas são despertadas.
            </p>
          </div>

          <div>
            <h3 className="text-brand text-lg">Comportamental</h3>
            <p>
              Refere-se à satisfação ou frustração que o usuário experimenta ao interagir com o
              produto. Aqui, a experiência prática se torna crucial.
            </p>
          </div>

          <div>
            <h3 className="text-brand text-lg">Reflexivo</h3>
            <p>
              Envolve a avaliação consciente que o consumidor faz sobre o produto, considerando sua
              utilidade, valor e a personalidade que ele representa.
            </p>
          </div>

          <p>
            Esses níveis demonstram que um design não deve ser apenas funcional ou esteticamente
            agradável; ele deve também evocar emoções positivas que ressoem com o consumidor.
          </p>

          <div>
            <h3 className="text-brand text-lg">Conexão Emocional e Fidelização</h3>
            <p>
              Marcas que conseguem estabelecer uma conexão emocional com seus clientes tendem a se
              destacar no mercado. Essa conexão não apenas aumenta a satisfação e a lealdade dos
              consumidores, mas também diminui os custos de aquisição de novos clientes e fortalece
              o branding.
            </p>
          </div>

          <p>
            A construção de uma marca emocional é um processo que vai além do simples apelo visual.
            Envolve a criação de experiências que toquem o coração dos consumidores e que sejam
            memoráveis. Ao integrar empatia e emoção no design, as marcas não apenas se tornam mais
            relevantes, mas também se posicionam como companheiras na jornada do consumidor,
            estabelecendo relações que perduram ao longo do tempo.
          </p>

          <h3 className="text-brand text-xl md:text-3xl">Leituras da marca</h3>

          <p>
            Entender as motivações por trás da forma de uma marca não é o aspecto mais crucial; o
            que realmente importa é que essa forma não crie ruídos na percepção do público. Se essa
            forma permitir diversas interpretações, ela enriquece e potencializa o conceito da
            marca, ampliando as emoções que ela pode evocar. Dessa maneira, a marca pode assumir
            diferentes significados e se adaptar com maior fluidez a funções variadas dentro de um
            portfólio. Isso é possível desde que exista um elo conceitual que conecte as empresas ou
            produtos pertencentes a um mesmo grupo. Essa conexão é fundamental para garantir que a
            diversidade de leituras não comprometa a identidade da marca, mas, ao contrário, a
            fortaleça e a torne mais relevante no mercado.
          </p>

          <h3 className="text-brand text-xl md:text-3xl">Empresa x produto</h3>

          <p>
            A marca de uma empresa ou instituição deve desconsiderar tendências que não se sustentam
            e imaginar o futuro para criar uma imagem resistente ao tempo. Porém, esse conceito não
            é relevante para a construção de uma marca de produto, que deve focalizar sua atenção no
            presente, com o que está acontecendo nos mercados, para manter-se viva e atualizada aos
            olhos do consumidor.
          </p>

          <h3 className="text-brand text-xl md:text-3xl">Os riscos da involução no redesign</h3>

          <p>
            Dar um passo atrás quando já existe um &quot;conceito sólido e apropriado&quot; pode
            comprometer todos os esforços investidos na construção da marca. Abandonar a essência do
            conceito original, na busca de um &quot;fato novo&quot;, pode levar à percepção de que a
            marca perdeu sua identidade e capacidade de comunicação.
          </p>

          <p>
            Por outro lado, o redesign pode ser uma oportunidade de evolução positiva. Quando
            realizado de forma estratégica e alinhada aos valores da empresa, ele pode revitalizar a
            identidade visual, atrair novos públicos e fortalecer a conexão com os consumidores. A
            chave é garantir que a evolução não se torne involução, preservando a essência enquanto
            se adapta às novas demandas do mercado. Assim, um redesign bem-sucedido moderniza a
            marca e fortalece sua relevância e autenticidade no cenário competitivo.
          </p>

          <h3 className="text-brand text-xl md:text-3xl">O caminho correto para o redesign</h3>

          <p>
            Marcas precisam evoluir com o tempo; se não se adaptarem, correm o risco de ficar para
            trás. Quando já existe um “conceito sólido e apropriado”, o redesign deve focar na
            atualização e aprimoramento do design existente. Se houver uma mudança de posicionamento
            e a marca não representa mais seus objetivos, é essencial que ela seja integralmente
            repensada.
          </p>

          <p>
            O redesign vai além de uma simples atualização estética; deve refletir inovações do
            mercado e expectativas dos consumidores. É uma oportunidade para reavaliar a identidade
            da marca e garantir uma conexão significativa com o público-alvo. Essa abordagem
            proativa permite que as marcas permaneçam relevantes e competitivas em um ambiente
            dinâmico.
          </p>
        </div>
      </div>
      <Footer socialLinksClassName="bg-white" />
    </div>
  );
};

export default LayoutExpertise;
