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
      <Umelec
        meno="ANNAN AFFOTEY"
        popis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        image={annanaffotey}
      />
      <Umelec
        meno="JUWON ADEREMI"
        popis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        image={juwonaderemi}
      />
      <Umelec
        meno="CORNELIUS ANNOR"
        popis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
        image={corneliusannor}
      />
      <Footer />
    </>
  );
}

export default Artists;
