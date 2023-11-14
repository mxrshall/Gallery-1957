import Navigacia from "../Univerzalne/Navigacia";
import Header from "../Univerzalne/Header";
import Novinky from "../HomepageSekcie/Novinky";
import Umelci from "../HomepageSekcie/Umelci";
import Footer from "../Univerzalne/Footer";
import GaleriaDesktop from "../HomepageSekcie/GaleriaDesktop";
import GaleriaMobil from "../HomepageSekcie/GaleriaMobil";

function Homepage() {
  return (
    <>
      <Navigacia />
      <Header />
      <Novinky />
      <div className="lg:hidden">
        <GaleriaMobil />
      </div>
      <div className="hidden lg:inline">
        <GaleriaDesktop />
      </div>
      <Umelci />
      <Footer />
    </>
  );
}

export default Homepage;
