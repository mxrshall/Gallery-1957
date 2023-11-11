import Nadpis from "./Nadpis";
import Novinka from "./Novinka";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.webp";
import image4 from "./images/image4.jpg";

const imagesmobile = [
  {
    fotka: image1,
    nazov: "ZAK OVÉ AT FRIEZE SCULPTURE 2023",
    popis:
      "Galéria 1957, Londýn s hrdostou predstavuje The Mothership Connection od britsko-trinidadského umelca Zaka Ové (nar. 1966, Londýn. Žije a tvorí v Las Palmas na Kanárskych ostrovoch) na Frieze Sculpture 2023, ktorého kurátorom je Fato Üstek. Socha – devätmetrová viacfarebná futuristická totemová štruktúra, ktorá je prvýkrát verejne vystavená, je doteraz najväcším dielom Ového.",
    datum: "21 SEP 2023",
  },
  {
    fotka: image2,
    nazov: "AFRICA SUPERNOVA COLLECTION CARLA & PIETER SCHULTING",
    popis:
      "Africa Supernova' je rozsiahly prieskum súčasného afrického umenia, ktorý obsahuje diela 125 umelcov z 33 afrických krajín zo zbierky Carla & Pietera Schultinga.",
    datum: "2 SEP 2023",
  },
];

const imagesdesktop = [
  {
    fotka: image1,
    nazov: "ZAK OVÉ AT FRIEZE SCULPTURE 2023",
    popis:
      "Galéria 1957, Londýn s hrdostou predstavuje The Mothership Connection od britsko-trinidadského umelca Zaka Ové (nar. 1966, Londýn. Žije a tvorí v Las Palmas na Kanárskych ostrovoch) na Frieze Sculpture 2023, ktorého kurátorom je Fato Üstek. Socha – devätmetrová viacfarebná futuristická totemová štruktúra, ktorá je prvýkrát verejne vystavená, je doteraz najväcším dielom Ového.",
    datum: "21 SEP 2023",
  },
  {
    fotka: image2,
    nazov: "AFRICA SUPERNOVA COLLECTION CARLA & PIETER SCHULTING",
    popis:
      "Africa Supernova' je rozsiahly prieskum súčasného afrického umenia, ktorý obsahuje diela 125 umelcov z 33 afrických krajín zo zbierky Carla & Pietera Schultinga.",
    datum: "2 SEP 2023",
  },
  {
    fotka: image3,
    nazov: "TIFFANIE DELINE AT THE LIGHTBOX GALLERY, UK",
    popis:
      "„A Spirit Inside“ spája prácu výberu umelkýn z kolekcie Ingram Collection a The Women's Art Collection v Cambridge, aby predstavila umelecké diela, ktoré vznikli zo sily ducha a dotýkajú sa elementárneho, fantastického, duchovného a politického.",
    datum: "20 SEP 2023",
  },
  {
    fotka: image4,
    nazov: "ANNAN AFFOTEY FEATURED IN PORTRAIT OF A TOPBOY",
    popis:
      "Táto pop-up výstava, kurátorom multidisciplinárneho umelca Ronana McKenzieho a prezentovaná spoločnosťou Netflix, pripomína kultúrny vplyv, ktorý mal Top Boy na britskú televíziu, a to tak v predstavovaní života na sídliskách vo východnom Londýne, ako aj v podpore a mentoringu. vznikajúci britský talent.",
    datum: "9 SEP 2023",
  },
];

function Novinky() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Nadpis nadpis="Novinky" color="black" />
      <div className="hidden lg:flex w-full h-80">
        {imagesdesktop.map((image) => (
          <Novinka
            fotka={image.fotka}
            nazov={image.nazov}
            popis={image.popis}
            datum={image.datum}
          />
        ))}
      </div>
      <div className="lg:hidden flex justify-center items-center flex-col">
        {imagesmobile.map((image) => (
          <Novinka
            fotka={image.fotka}
            nazov={image.nazov}
            popis={image.popis}
            datum={image.datum}
          />
        ))}
      </div>
    </div>
  );
}

export default Novinky;
