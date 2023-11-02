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
        popis="Umelec z Oxfordu Annan Affotey naviguje černošskú identitu prostredníctvom portrétovania. Jeho obrazy sa zameriavajú na farebné ženy a mužov so žiarivou tmavou pokožkou a dušou naplnenými červenými očami. Svoje postavy obklopuje negatívnym priestorom a umožňuje každému subjektu rozprávať svoj vlastný príbeh."
        image={annanaffotey}
      />
      <Umelec
        meno="JUWON ADEREMI"
        popis="Juwon Aderemi je umelec narodený v Nigérii. Jeho prax sa primárne sústreďuje okolo surrealistických postáv a abstraktného realizmu na zobrazenie rozhovorov, ktoré sa zaoberajú kultúrou a presvedčením, na ktoré je prevažne zvyknutý. Pracuje v intuitívnom postupe, ktorý je primárne založený na portrétovaní, pričom uprednostňuje svoju nigérijskú kultúru."
        image={juwonaderemi}
      />
      <Umelec
        meno="CORNELIUS ANNOR"
        popis="Cornelius Annor je ghanský umelec, ktorý sa narodil v roku 1990.
        Jeho práca sa v súčasnosti predvádzajú na viacerých miestach, ako je Maruani Mercier v Bruseli. V mnohých kľúčových galériách a múzeách, ako je Opera Gallery v Dubaji, sa v minulosti vystavovali diela Cornelia Annora.
        Dielo Cornelia Annora bolo viackrát ponúkané na aukcii, pričom realizované ceny sa pohybujú od 20 696 USD do 94 500 USD."
        image={corneliusannor}
      />
      <Footer />
    </>
  );
}

export default Artists;
