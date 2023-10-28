import Nadpis from "./Nadpis";
import Novinka from "./Novinka";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";

function Novinky() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Nadpis nadpis="Novinky" />
      <Novinka
        image={image1}
        nazov="ZAK OVÉ AT FRIEZE SCULPTURE 2023"
        datum="21 SEP 2023"
      />
      <Novinka
        image={image2}
        nazov="AFRICA SUPERNOVA COLLECTION CARLA & PIETER SCHULTING"
        datum="2 SEP 2023"
      />
    </div>
  );
}

export default Novinky;
