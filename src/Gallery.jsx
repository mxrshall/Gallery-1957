import Navigacia from "./Navigacia";
import Footer from "./Footer";
import Header from "./Header";
import GaleriaGrid from "./GaleriaGrid";

import distracted from "./images/distracted.jpeg";
import thejourney from "./images/thejourney.webp";
import widewalls from "./images/widewalls.jpg";

function Gallery() {
  return (
    <>
      <Navigacia />
      <Header />
      <div className="w-full h-64 p-5">
        <GaleriaGrid foto1={distracted} foto2={thejourney} foto3={widewalls} />
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
