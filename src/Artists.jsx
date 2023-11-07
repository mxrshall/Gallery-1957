import Navigacia from "./Navigacia";
import Footer from "./Footer";
import Umelec from "./Umelec";
import Header from "./Header";

import annanaffotey from "./images/annanaffotey.jpeg";
import juwonaderemi from "./images/juwonaderemi.jpg";
import corneliusannor from "./images/corneliusannor.jpg";
import gideonappah from "./images/gideonappah.webp";
import ritamawuenabanissan from "./images/ritamawuenabanissan.jpg";

function Artists() {
  return (
    <>
      <Navigacia />
      <Header />
      <Umelec
        id="annan"
        meno="ANNAN AFFOTEY"
        popis="Umelec z Oxfordu Annan Affotey naviguje černošskú identitu prostredníctvom portrétovania. Jeho obrazy sa zameriavajú na farebné ženy a mužov so žiarivou tmavou pokožkou a dušou naplnenými červenými očami. Svoje postavy obklopuje negatívnym priestorom a umožňuje každému subjektu rozprávať svoj vlastný príbeh."
        image={annanaffotey}
      />
      <Umelec
        id="juwon"
        meno="JUWON ADEREMI"
        popis="Juwon Aderemi je umelec narodený v Nigérii. Jeho prax sa primárne sústreďuje okolo surrealistických postáv a abstraktného realizmu na zobrazenie rozhovorov, ktoré sa zaoberajú kultúrou a presvedčením, na ktoré je prevažne zvyknutý. Pracuje v intuitívnom postupe, ktorý je primárne založený na portrétovaní, pričom uprednostňuje svoju nigérijskú kultúru."
        image={juwonaderemi}
      />
      <Umelec
        id="cornelius"
        meno="CORNELIUS ANNOR"
        popis="Cornelius Annor je ghanský umelec, ktorý sa narodil v roku 1990.
        Jeho práca sa v súčasnosti predvádzajú na viacerých miestach, ako je Maruani Mercier v Bruseli. V mnohých kľúčových galériách a múzeách, ako je Opera Gallery v Dubaji, sa v minulosti vystavovali diela Cornelia Annora.
        Dielo Cornelia Annora bolo viackrát ponúkané na aukcii, pričom realizované ceny sa pohybujú od 20 696 USD do 94 500 USD."
        image={corneliusannor}
      />
      <Umelec
        id="gideon"
        meno="GIDEON APPAH"
        popis="Gideon Appah čerpá zo spomienok a snov z detstva, ako aj zo západoafrickej krajiny a populárnej kultúry pre svoje oslnivé, odvážne a drahokamovo tónované maľby. Ako dieťa bolo Appahovým prvým médiom drevené uhlie, ktoré jeho stará mama používala na varenie jedla doma. Jeho rané diela sú ódou na jeho rodné mesto Akkra, hlavné mesto Ghany, a obsahujú obrazy spojené s každodenným životom."
        image={gideonappah}
      />
      <Umelec
        id="rita"
        meno="RITA MAWUENA BANISSAN"
        popis="Rita Mawuena Benissan, ghansko-americká interdisciplinárna umelkyňa, pretvára kráľovský dáždnik. Dáždnik je dobre známy ochranný predmet, ktorý prehodnotila ako symbol ghanskej identity. Vytvára stelesnenie krásy a sily jednotlivcov a komunít prostredníctvom výroby a dizajnu."
        image={ritamawuenabanissan}
      />
      <Footer />
    </>
  );
}

export default Artists;
