import Nadpis from "./Nadpis";
import Novinka from "./Novinka";

import image1 from "./images/image 1.png";

function Novinky() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Nadpis nadpis="Novinky" />
      <Novinka
        image={image1}
        nazov="ZAK OVÉ AT FRIEZE SCULPTURE 2023"
        datum="21 SEP 2023"
      />
    </div>
  );
}

export default Novinky;
