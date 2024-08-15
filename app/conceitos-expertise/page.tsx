import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cva } from "class-variance-authority";

const LayoutConceitos = () => {
  const grayStyle = cva("text-titleIndice");
  const titleStyle = cva("text-lg md:text-2xl text-brand");

  return (
    <div className="bg-black text-white min-h-screen px-4">
      <Header />
      <div className="xl:container mx-auto relative overflow-hidden mb-16 text-sm md:text-xl [&_p]:leading-8">
        <div className="grid gap-9 max-w-[810px] mx-auto">
          <h1 className="text-2xl md:text-5xl font-medium mt-10 mb-5">Conceitos & Expertise</h1>
          <div className="grid gap-3">
            <h3 className={titleStyle()}>Propósitos do design</h3>
            <p className={grayStyle()}>
              Design pode ser arte. O design pode ser pura estética. O design é muito simples, por
              isso que é tão complicado. PAUL RAND
            </p>
            <p>
              O design estabelece valor, dá sentido ou simplesmente é prazer em ver. É um modo de
              vida, ponto de vista e maneira de ser relevante provocando relacionamento através do
              esclarecimento, da capacidade de síntese, da dramatização de uma palavra ou imagem. O
              bom design envolve um conjunto de fatores relacionados a estética, conhecimento
              técnico, economia, ergonomia, tecnologia e psicologia que se manifesta com a correta
              interpretação dessas particularidades.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Design é função</h3>
            <p className={grayStyle()}>A forma segue a função. LOUIS H. SULLIVAN</p>
            <p>
              Antes da forma o design é função, seu norte. Design é consequência da interpretação
              prática dos objetivos a serem alcançados e só vai surgir naturalmente quando o
              espírito desejado está consolidado, em harmonia com sua função. A simbiose potente
              entre forma e função é o que faz a solidez do design.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Presente pensado para o futuro</h3>
            <p>
              Sem apego a tendências passageiras, um projeto de branding deve ser construído com
              leitura universal fundamentado em conceitos verdadeiros. A solução deve ser sólida e
              focada para que em futuro próximo não tenha que ser totalmente ajustado ou refeito.
              Devem ser entendidos e traduzidos os atributos que definem a intenção para criar uma
              imagem de marca com personalidade competitiva, não datada, que represente um
              posicionamento consistente.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Simplicidade impecável</h3>
            <p className={grayStyle()}>
              A simplicidade é o último grau de sofisticação. LEONARDO DA VINCI
            </p>
            <p>
              A simplicidade é o principal atributo da marca, sem ela os objetivos do branding não
              são alcançados. Simplicidade é a qualidade do que não representa dificuldade ou
              obstáculo, é naturalidade, espontaneidade, elegância, sem elementos estranhos ao que
              realmente importa. A busca pela simplicidade requer perseverança e conhecimento e é
              caminho seguro para atingir o impacto visual necessário a uma imagem de marca para
              projetá-la através do tempo. De todas as seis principais qualidades que uma marca deve
              ter é de longe a mais importante porque sem subterfúgios, busca somente o que é
              relevante para criar atenção. Observando as marcas mais poderosas e bem construídas do
              mundo podemos ver melhor esta qualidade, são marcas facilmente reconhecíveis por sua
              “simplicidade impecável”.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Marca emocional</h3>
            <p className={grayStyle()}>
              As vezes não se vê nada na superfície, mas debaixo dela tudo está ardente. YUSUF
              BILYARTA MANGUNWIJAYA
            </p>
            <p>
              Se uma marca consegue ter um espírito emocional metade do caminho para sua
              consolidação já foi traçado. Esse espírito emocional cria relacionamento e faz com que
              a imagem de marca se instale com naturalidade na mente do observador. Design de marca
              é essencialmente empatia e emoção, ao instigar seu entendimento através de formas,
              sensações ou cores o observador se torna partícipe da concepção desta imagem criando
              um elo emocional que associado à simplicidade, leva a marca ao seu objetivo final, ser
              lembrada
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Leituras da marca</h3>
            <p>
              Entender as motivações da forma não é o mais importante e sim que ela não provoque
              ruídos na sua percepção. Por outro lado, se esta forma oferecer várias leituras,
              potencializa e enriquece seu conceito ampliando os sentimentos percebidos, assim a
              marca pode ser qualquer coisa, pode se deslocar com maior naturalidade para funções
              diversas na ampliação de um portfólio desde que exista um elo conceitual que una
              empresas ou produtos de um mesmo grupo.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Marca atemporal X marca da moda</h3>
            <p className={grayStyle()}>
              Os estilos vêm e vão, o bom design é uma linguagem, não um estilo. MASSIMO VIGNELLI
            </p>
            <p>
              A moda é inimiga da marca porque, ao cair na tentação fácil de estilos e tendências
              temporais, reduz drásticamente seu tempo de vida. Para fugir desta armadilha o
              presente não é relevante em tudo que mostra e diz mas, o que a marca pretende mostrar
              e dizer. Assim, a imagem de marca pode se estender pelo tempo necessitando somente de
              ajustes pontuais futuros para permanecer viva.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Empresa X Produto</h3>
            <p>
              A marca de uma empresa ou instituição deve desconsiderar tendências que não se
              sustentam e imaginar o futuro para criar uma imagem resistente ao tempo porém, esse
              conceito não é relevante para a construção de uma marca de produto que deve focalizar
              sua atenção no presente, com o que está acontecendo nos mercados para manter-se viva e
              atualizada aos olhos do consumidor.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Cultura branding</h3>
            <p>
              Clique na imagem abaixo para acessar o arquivo PDF e conhecer mais sobre branding e as
              premissas básicas de construção de marca.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Portfólio</h3>
            <p>
              Este portfólio focado no protagonismo das marcas é uma síntese de minha experiência na
              busca por soluções gráficas conceituais descoladas do tempo. Essa filosofia é
              demonstrada por alguns projetos desenvolvidos há mais de 30 anos que ainda são jovens,
              fundamentados nos “principais atributos da marca”, sua distinção, praticidade,
              reconhecimento, simplicidade, mensagem única e apropriada.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Evolução ou involução?</h3>
            <p>
              Todas as marcas deste portfólio são originais onde algumas nos tempos atuais sofreram
              involuções significativas porque alteradas de forma inapropriada, sem a competência
              necessária que um projeto de Branding exige. Dar um passo atrás quando já existe um
              “conceito sólido e apropriado” compromete todos os esforços investidos na marca, danos
              acentuados quando se abandona todo e qualquer conceito, principal característica
              destas involuções. Esses retrocessos que normalmente visam a criação de um “fato novo”
              podem gerar um “fato adverso” significativo, a sensação tangível de que a marca perdeu
              sua essência e capacidade de comunicação.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Caminhos do redesign</h3>
            <p>
              Se já existe um “conceito sólido e apropriado”, o redesign de marca deve focar somente
              na atualização e aprimoramento do design existente mas, se houve uma mudança de
              posicionamento e ela já não representa seus principais objetivos e ações, deve ser
              integralmente repensada.
            </p>
          </div>

          <div className="grid gap-3">
            <h3 className={titleStyle()}>Expertise</h3>
            <p className="text-4xl">Mais de 1200 construções de marca</p>
            <p>
              * Análise & Estratégia de Marca
              <br /> * Conceito de Marca
              <br /> * Arquitetura de Marca
              <br /> * Nome & Identidade Verbal
              <br /> * Logo & Identidade Visual
              <br /> * Design de Embalagem
              <br /> * Manual de Normas
            </p>
          </div>

          <div className="grid gap-3">
            <h3>Créditos de Projeto</h3>
            <p className="text-[13px] !leading-6">
              <span className="text-brand">GAD DESIGN</span> Alguns projetos foram criados no Gad
              Design entre 1998 e 2001 <span className="text-brand">SPORT CLUB INTERNACIONAL</span>{" "}
              Redesign Jorge Muniz, Sandro Manfredini e Edu Bortolon{" "}
              <span className="text-brand">GERDAU 100 ANOS</span> Design Jorge Muniz e Flavio
              Ferreira Design do Lettering 100 Anos Flavio Ferreira{" "}
              <span className="text-brand">JURERÊ INTERNACIONAL</span> Design Jorge Muniz e Sheyla
              Scardoelli <span className="text-brand">FRIGORÍFICO BOA ESPERANÇA</span> Design Jorge
              Muniz e Sheyla Scardoelli <span className="text-brand">SAVE THE KING</span> Design
              Jorge Muniz e Naming Daniel Martinez <span className="text-brand">PLUGGER</span>
              &nbsp;Design Jorge Muniz e Diego Martinez{" "}
              <span className="text-brand">PROPÓSITOS DO DESIGN</span> Adaptado do texto original de
              Paul Rand “Forma de Design e Caos” <span className="text-brand">DESIGN SITE</span>{" "}
              Jorge Muniz <span className="text-brand">CONSTRUÇÃO SITE</span> Cristian Ávila
            </p>
          </div>
        </div>
      </div>
      <Footer socialLinksClassName="bg-white" />
    </div>
  );
};

export default LayoutConceitos;
