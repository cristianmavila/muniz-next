import { create } from "zustand";

const menuIndustrias = [
  {
    children: "Koller",
    href: "/portfolio/koller",
    category: "industria",
  },
  {
    children: "Thonart",
    href: "/portfolio/thonart",
    category: "industria",
  },
  {
    children: "Grupo Renner",
    href: "/portfolio/grupo-renner",
    category: "industria",
  },
  {
    children: "Oderich",
    href: "/portfolio/oderich",
    category: "industria",
  },
  {
    children: "Minerva Marcas",
    href: "/portfolio/minerva-marcas",
    category: "industria",
  },
  {
    children: "Minerva Subsidiárias",
    href: "/portfolio/minerva-subsidiarias",
    category: "industria",
  },
  {
    children: "Minerva",
    href: "/portfolio/minerva",
    category: "industria",
  },
  {
    children: "Minerva Foods",
    href: "/portfolio/minerva-foods",
    category: "industria",
  },
  {
    children: "Koch",
    href: "/portfolio/koch",
    category: "industria",
  },
  {
    children: "Kepler Weber",
    href: "/portfolio/kepler-weber",
    category: "industria",
  },
  {
    children: "Gerdau",
    href: "/portfolio/gerdau",
    category: "industria",
  },
  {
    children: "Excelsior",
    href: "/portfolio/excelsior",
    category: "industria",
  },
  {
    children: "Eleva",
    href: "/portfolio/eleva",
    category: "industria",
  },
  {
    children: "CPFL",
    href: "/portfolio/cpfl",
    category: "industria",
  },
  {
    children: "Cielo Azul",
    href: "/portfolio/cielo-azul",
    category: "industria",
  },
  {
    children: "Caracol",
    href: "/portfolio/caracol",
    category: "industria",
  },
  {
    children: "Callegaro",
    href: "/portfolio/callegaro",
    category: "industria",
  },
  {
    children: "Azaleia",
    href: "/portfolio/azaleia",
    category: "industria",
  },
  {
    children: "Randon",
    href: "/portfolio/randon",
    category: "industria",
  },
  {
    children: "Pampeano",
    href: "/portfolio/pampeano",
    category: "industria",
  },
  {
    children: "Renner Têxtil",
    href: "/portfolio/renner-textil",
    category: "industria",
  },
  {
    children: "Via Marte",
    href: "/portfolio/via-marte",
    category: "industria",
  },
  {
    children: "Marruá",
    href: "/portfolio/marrua",
    category: "industria",
  },
  {
    children: "Mundial",
    href: "/portfolio/mundial",
    category: "industria",
  },
  {
    children: "Gaucho Breeding Trust",
    href: "/portfolio/gaucho-breeding-trust",
    category: "industria",
  },
  {
    children: "Boa Esperança",
    href: "/portfolio/boa-esperanca",
    category: "industria",
  },
  {
    children: "Digitel",
    href: "/portfolio/digitel",
    category: "industria",
  },
  {
    children: "Prinz",
    href: "/portfolio/prinz",
    category: "industria",
  },
];

const menuInstituicao = [
  {
    children: "Zaffari Participações",
    href: "/portfolio/zaffari-participacoes",
    category: "instituicao-empresa",
  },
  {
    children: "TSB",
    href: "/portfolio/tsb",
    category: "instituicao-empresa",
  },
  {
    children: "Tantan",
    href: "/portfolio/tantan",
    category: "instituicao-empresa",
  },
  {
    children: "Stafe",
    href: "/portfolio/stafe",
    category: "instituicao-empresa",
  },
  {
    children: "Quality",
    href: "/portfolio/quality",
    category: "instituicao-empresa",
  },
  {
    children: "PGA",
    href: "/portfolio/pga",
    category: "instituicao-empresa",
  },
  {
    children: "Olimpíada da PF",
    href: "/portfolio/olimpiada-da-pf",
    category: "instituicao-empresa",
  },
  {
    children: "Internacional",
    href: "/portfolio/internacional",
    category: "instituicao-empresa",
  },
  {
    children: "Fundação Zaffari",
    href: "/portfolio/fundacao-zaffari",
    category: "instituicao-empresa",
  },
  {
    children: "Fundacine",
    href: "/portfolio/fundacine",
    category: "instituicao-empresa",
  },
  {
    children: "Federasul",
    href: "/portfolio/federasul",
    category: "instituicao-empresa",
  },
  {
    children: "EstimaPar",
    href: "/portfolio/estimapar",
    category: "instituicao-empresa",
  },
  {
    children: "Cubo",
    href: "/portfolio/cubo",
    category: "instituicao-empresa",
  },
  {
    children: "Bit",
    href: "/portfolio/bit",
    category: "instituicao-empresa",
  },
  {
    children: "Casper",
    href: "/portfolio/casper",
    category: "instituicao-empresa",
  },
  {
    children: "AS",
    href: "/portfolio/as-arquitetura-hospitalar",
    category: "instituicao-empresa",
  },
  {
    children: "Aniam",
    href: "/portfolio/aniam",
    category: "instituicao-empresa",
  },
  {
    children: "ADVB",
    href: "/portfolio/advb",
    category: "instituicao-empresa",
  },
  {
    children: "Allkance Arquitetura",
    href: "/portfolio/allkance-arquitetura",
    category: "instituicao-empresa",
  },
  {
    children: "Serrazul",
    href: "/portfolio/serrazul",
    category: "instituicao-empresa",
  },
  {
    children: "JointBee",
    href: "/portfolio/jointbee",
    category: "instituicao-empresa",
  },
  {
    children: "Jurerê",
    href: "/portfolio/jurere",
    category: "instituicao-empresa",
  },
  {
    children: "Claro",
    href: "/portfolio/claro",
    category: "instituicao-empresa",
  },
  {
    children: "Laje de Pedra",
    href: "/portfolio/laje-de-pedra",
    category: "instituicao-empresa",
  },
  {
    children: "Valor",
    href: "/portfolio/valor",
    category: "instituicao-empresa",
  },
  {
    children: "Fundação Sirotsky",
    href: "/portfolio/fundacao-sirotsky",
    category: "instituicao-empresa",
  },
  {
    children: "Meridional",
    href: "/portfolio/meridional",
    category: "instituicao-empresa",
  },
  {
    children: "Unisinos",
    href: "/portfolio/unisinos",
    category: "instituicao-empresa",
  },
  {
    children: "Dotto",
    href: "/portfolio/dotto",
    category: "instituicao-empresa",
  },
  {
    children: "PortoSul",
    href: "/portfolio/portosul",
    category: "instituicao-empresa",
  },
];

const menuVarejo = [
  {
    children: "Bourbon “Hiper”",
    href: "/portfolio/bourbon-hiper",
    category: "varejo-produto",
  },
  {
    children: "Zaffari “Super”",
    href: "/portfolio/zaffari-super",
    category: "varejo-produto",
  },
  {
    children: "Wagyu",
    href: "/portfolio/wagyu",
    category: "varejo-produto",
  },
  {
    children: "Viva Baixo Carbono",
    href: "/portfolio/viva-baixo-carbono",
    category: "varejo-produto",
  },
  {
    children: "Supreme",
    href: "/portfolio/supreme",
    category: "varejo-produto",
  },
  {
    children: "SGD",
    href: "/portfolio/sgd",
    category: "varejo-produto",
  },
  {
    children: "Save The King",
    href: "/portfolio/save-the-king",
    category: "varejo-produto",
  },
  {
    children: "Pul Organic",
    href: "/portfolio/pul-organic",
    category: "varejo-produto",
  },
  {
    children: "Plugger",
    href: "/portfolio/plugger",
    category: "varejo-produto",
  },
  {
    children: "Pampeira",
    href: "/portfolio/pampeira",
    category: "varejo-produto",
  },
  {
    children: "Montana",
    href: "/portfolio/montana",
    category: "varejo-produto",
  },
  {
    children: "Majesty",
    href: "/portfolio/majesty",
    category: "varejo-produto",
  },
  {
    children: "Haiti",
    href: "/portfolio/haiti",
    category: "varejo-produto",
  },
  {
    children: "El Puesto",
    href: "/portfolio/el-puesto",
    category: "varejo-produto",
  },
  {
    children: "America",
    href: "/portfolio/america",
    category: "varejo-produto",
  },
  {
    children: "Alathea",
    href: "/portfolio/alathea",
    category: "varejo-produto",
  },
  {
    children: "Viva Carbono Neutro",
    href: "/portfolio/viva-carbono-neutro",
    category: "varejo-produto",
  },
  {
    children: "GreenView",
    href: "/portfolio/greenview",
    category: "varejo-produto",
  },
  {
    children: "Gran Prado",
    href: "/portfolio/gran-prado",
    category: "varejo-produto",
  },
  {
    children: "La Pradera",
    href: "/portfolio/la-pradera",
    category: "varejo-produto",
  },
  {
    children: "Dux",
    href: "/portfolio/dux",
    category: "varejo-produto",
  },
  {
    children: "Pulsa",
    href: "/portfolio/pulsa",
    category: "varejo-produto",
  },
];

const itemsPortfolio = [...menuIndustrias, ...menuInstituicao, ...menuVarejo];

const checkActiveSlug = (href: string) => {
  return `/portfolio/i/${itemsPortfolio.find((portfolio) => portfolio.href === href)?.category}`;
};

type menuStoreProps = {
	active: string;
	setActiveMenu: (menuItem:string) => void;
}

export const menuStore = create<menuStoreProps>((set) => ({
	active: "",
	setActiveMenu: (menuItem:string) => {
		set(() => ({ active: checkActiveSlug(menuItem)}))
	}
}))