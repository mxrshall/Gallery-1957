import Navigacia from "./Navigacia";
import Footer from "./Footer";
import Header from "./Header";
import GaleriaGrid from "./GaleriaGrid";

import distracted from "./images/distracted.jpeg";
import thejourney from "./images/thejourney.webp";
import widewalls from "./images/widewalls.jpg";
import ajalatravels from "./images/ajalatravels.webp";
import portraitofanartistresting from "./images/portraitofanartistresting.jpg";
import abike from "./images/abike.webp";
import mrjoachim from "./images/mrjoachim.webp";
import venusovermanhattan from "./images/venusovermanhattan.jpeg";
import ghanianlife from "./images/ghanianlife.jpg";

function Gallery() {
  return (
    <>
      <Navigacia />
      <Header />
      <div className="w-full h-full bg-white p-5 lg:h-[100vh]">
        <GaleriaGrid
          foto1={distracted}
          foto2={thejourney}
          foto3={widewalls}
          nazov1="distracted"
          nazov2="the journey"
          nazov3="widewalls"
        />
      </div>
      <div className="w-full h-64 bg-black p-5 text-white lg:h-[100vh]">
        <GaleriaGrid
          foto1={ajalatravels}
          foto2={portraitofanartistresting}
          foto3={abike}
          nazov1="ajalatravels"
          nazov2="portrait of an artist resting"
          nazov3="abike"
        />
      </div>
      <div className="w-full h-64 bg-white p-5 lg:h-[100vh]">
        <GaleriaGrid
          foto1={mrjoachim}
          foto2={venusovermanhattan}
          foto3={ghanianlife}
          nazov1="mr joachim"
          nazov2="venus over manhattan"
          nazov3="ghanian life"
        />
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
