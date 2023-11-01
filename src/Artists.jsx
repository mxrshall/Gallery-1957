import Navigacia from "./Navigacia";
import Footer from "./Footer";
import Umelec from "./Umelec";
import Header from "./Header";

import annanaffotey from "./images/annanaffotey.jpeg";
import juwonaderemi from "./images/juwonaderemi.jpg";
import corneliusannor from "./images/corneliusannor.jpg";

function Artists() {
  return (
    <>
      <Navigacia />
      <Header />
      <Umelec image={annanaffotey} />
      <Umelec image={juwonaderemi} />
      <Umelec image={corneliusannor} />
      <Footer />
    </>
  );
}

export default Artists;
