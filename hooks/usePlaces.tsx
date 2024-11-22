import { useState, useEffect } from "react";

type PlaceType = "restaurant" | "atraction" | "route";

export type Place = {
  id: number;
  name: string;
  description: string;
  image: string;
  type: PlaceType[];
};

export default function usePlaces() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const simulatedData: Place[] = [
      {
        id: 1,
        name: "Vinícola Aurora",
        description: "Experiência completa em vinhos.",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgF3wIso-oVhr5DYzKsrHYYFV40GSp55W698AUsanwYDUEnvTm6KJnYbqeDKNoPNspdQFImvzwzd4LJG-8WzXk3rNlXWmJSuLiFA1hZbPSVCG4Ewf5vc9fGlzEuJaaTZgd3gEL8giwBa14g/s640/blog-Apaixonados-por-Viagens-Vin%25C3%25ADcola-Aurora-RS+%252825%2529.jpg",
        type: ["restaurant", "atraction"],
      },
      {
        id: 2,
        name: "Caminhos de Pedra",
        description: "Imersão na cultura italiana.",
        image:
          "https://sitearquivos.s3-us-west-2.amazonaws.com/1590/Conteudos/5369/7qrvrw4wlzp8zf4hmcx0_65.jpg",
        type: ["route"],
      },
      {
        id: 3,
        name: "Parque Nacional Aparados da Serra",
        description: "Natureza exuberante.",
        image:
          "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/images/trilha-do-rio-do-boi-parque-nacional-aparados-da-serra-sc-rs-clube-candeias.jpeg",
        type: ["atraction", "route"],
      },
      {
        id: 4,
        name: "Snowland",
        description: "Primeiro parque de neve indoor das Américas.",
        image: "https://imgmd.net/images/v1/guia/1704889/snowland.jpg",
        type: ["atraction"],
      },
      {
        id: 5,
        name: "Vinícola Miolo",
        description:
          "Degustação de vinhos premium no coração do Vale dos Vinhedos.",
        image:
          "https://cdn.api.wine-locals.com/guide/images/large_IMG_4925_ea73005095.webp",
        type: ["restaurant", "atraction"],
      },
      {
        id: 6,
        name: "Casa Valduga",
        description: "Experiência enogastronômica inesquecível.",
        image:
          "https://www.melhoresdestinos.com.br/wp-content/uploads/2022/01/vinicola-casa-valduga-capa.jpg",
        type: ["restaurant", "atraction"],
      },
      {
        id: 7,
        name: "Epopeia Italiana",
        description: "Passeio cultural e histórico em Bento Gonçalves.",
        image:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgajxfpo3UBbPLsCqGzAtr23cS4lzxQ32XWQOneenOvGp4LS11WEqkMzFX96kGw0I9I0CYA6fSyeuNDM6bBbDN2v34S94AQo3Ec2GDQLNujFsW7TuRtc093qeraNECOLpeCNgOL4Xz52u0J/s1600/epopeia+italiana+3.jpg",
        type: ["atraction"],
      },
      {
        id: 8,
        name: "Café Colonial Bela Vista",
        description: "Uma imersão nos sabores da culinária colonial.",
        image:
          "https://belavista.tur.br/wp-content/uploads/2019/06/loja-gramado-2.jpg",
        type: ["restaurant"],
      },
      {
        id: 9,
        name: "Mundo a Vapor",
        description: "Parque temático com miniaturas de máquinas a vapor.",
        image:
          "https://media.ondeir.com.br/2024/02/RHU_933322-scaled.webp?1709251564",
        type: ["atraction"],
      },
      {
        id: 10,
        name: "Gramado Café Colonial",
        description: "O autêntico café colonial da Serra Gaúcha.",
        image:
          "https://conciergegramado.com.br/images/produto/fotos/produto-561/01.jpg",
        type: ["restaurant"],
      },
      {
        id: 11,
        name: "Hotel & Spa do Vinho",
        description:
          "Hospitalidade, vinoterapia, restaurante e eventos no coração do Vale dos Vinhedos.",
        image:
          "https://www.tasteandfly.com.br/wp-content/uploads/2019/07/HOTEL-SPA-DO-VINHO1.jpg",
        type: ["atraction", "route"],
      },
      {
        id: 12,
        name: "Parque Estadual do Caracol",
        description: "Natureza e trilhas na famosa Cascata do Caracol.",
        image:
          "https://www.gramadosublime.com/image/d235/cachoeira-parque-do-caracol-5cae7cb661787000108b022c?ver=bcc0&width=1200&height=800",
        type: ["atraction", "route"],
      },
      {
        id: 13,
        name: "Cuca e Marmellata",
        description:
          "Encantamento em meio a natureza, com brunchs, cucas e local ao ar livre.",
        image:
          "https://valedosvinhedos.wordpress.com/wp-content/uploads/2024/01/6.jpeg",
        type: ["restaurant", "atraction"],
      },
      {
        id: 14,
        name: "Maria Fumaça - Vinhos e História",
        description:
          "Conheça o legado dos imigrantes italianos em uma viagem histórica na Maria Fumaça.",
        image:
          "https://www.mariafumacaemgramado.com.br/wp-content/uploads/2020/09/maria-fumaca-em-gramado-rs-compressed.jpg",
        type: ["atraction", "route"],
      },
      {
        id: 15,
        name: "Hard Rock Café Gramado",
        description: "Gastronomia e música em um ambiente icônico.",
        image:
          "https://cafe.hardrock.com/gramado/pt/files/5562/10084147_ImageLargeWidth.jpg",
        type: ["restaurant", "atraction"],
      },
      {
        id: 16,
        name: "Praça das Etnias",
        description:
          "Cultura e história em um espaço dedicado às etnias formadoras da região.",
        image:
          "https://viajantesemfim.com.br/wp-content/uploads/2023/02/IMG_8926_jpg-scaled.jpg",
        type: ["atraction"],
      },
      {
        id: 17,
        name: "Vinícola Salton",
        description: "Uma das maiores e mais tradicionais vinícolas do Brasil.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vinhos_salton_bento_goncalves.jpg/1200px-Vinhos_salton_bento_goncalves.jpg",
        type: ["restaurant", "atraction"],
      },
      {
        id: 18,
        name: "Cervejaria Edelbrau",
        description: "Produção de cervejas artesanais no estilo alemão.",
        image:
          "https://sebraers.com.br/wp-content/uploads/2022/06/cervejaria-edelbrau-e-destaque-em-evento-de-turismo-em-sao-paulo-19.png",
        type: ["restaurant", "atraction"],
      },
      {
        id: 19,
        name: "Parque Terra Mágica Florybal",
        description: "Diversão para toda a família com atrações temáticas.",
        image:
          "https://blog.lacadordeofertas.com.br/wp-content/uploads/2022/08/50591254822_ef9597df8c_o-scaled.jpg",
        type: ["atraction"],
      },
      {
        id: 20,
        name: "Ristorante Nonna Metilde",
        description:
          "Sabores autênticos da culinária italiana em um ambiente acolhedor e familiar.",
        image:
          "https://revistasaboresdosul.com.br/wp-content/uploads/2022/12/nonna-metilde1.jpg",
        type: ["atraction"],
      },
    ];
    setPlaces(simulatedData);
  }, []);

  return { places };
}
