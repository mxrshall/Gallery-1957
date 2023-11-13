import Navigacia from "../Univerzalne/Navigacia";
import Header from "../Univerzalne/Header";
import Novinky from "../HomepageSekcie/Novinky";
import Umelci from "../HomepageSekcie/Umelci";
import Footer from "../Univerzalne/Footer";
import Galeria from "../HomepageSekcie/Galeria";

function Homepage() {
  return (
    <>
      <Navigacia />
      <Header />
      <Novinky />
      <Galeria />
      <Umelci />
      <Footer />
    </>
  );
}

export default Homepage;
