import Navigacia from "./Navigacia";
import Header from "./Header";
import Novinky from "./Novinky";
import Umelci from "./Umelci";
import Footer from "./Footer";
import Galeria from "./Galeria";

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
