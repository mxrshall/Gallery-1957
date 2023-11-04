import Nadpis from "./Nadpis";
import Novinka from "./Novinka";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

function Novinky() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Nadpis nadpis="Novinky" color="black" />
      <Novinka
        fotka={image1}
        nazov="ZAK OVÉ AT FRIEZE SCULPTURE 2023"
        popis="Galéria 1957, Londýn s hrdostou predstavuje The Mothership Connection od britsko-trinidadského umelca Zaka Ové (nar. 1966, Londýn. Žije a tvorí v Las Palmas na Kanárskych ostrovoch) na Frieze Sculpture 2023, ktorého kurátorom je Fato Üstek. Socha – devätmetrová viacfarebná futuristická totemová štruktúra, ktorá je prvýkrát verejne vystavená, je doteraz najväcším dielom Ového."
        datum="21 SEP 2023"
      />
      <Novinka
        fotka={image2}
        nazov="AFRICA SUPERNOVA COLLECTION CARLA & PIETER SCHULTING"
        popis="Africa Supernova' je rozsiahly prieskum súčasného afrického umenia, ktorý obsahuje diela 125 umelcov z 33 afrických krajín zo zbierky Carla & Pietera Schultinga."
        datum="2 SEP 2023"
      />
    </div>
  );
}

export default Novinky;
