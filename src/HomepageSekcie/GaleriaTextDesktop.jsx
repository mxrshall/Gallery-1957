import galeria1 from "../images/galeria1.jpg";
import galeria2 from "../images/galeria2.webp";
import galeria3 from "../images/galeria3.webp";
import galeria4 from "../images/galeria4.jpg";

export function GaleriaTextDesktop() {
  return (
    <article className="text-base font-julius">
      <div className="w-full flex items-center justify-center my-5">
        <div className="w-1/2">
          Galéria 1957 je galéria súčasného umenia s priestormi v Accre, Ghane a
          Londýne, Spojené kráľovstvo.
          <br />
          <br />
          Svoj program venuje vedeniu medzinárodných výmen medzi umeleckými
          postupmi z týchto komunít a zvyškom sveta, pričom predstavuje umelcov,
          ktorí skúmajú koncepty spolupatričnosti a identity, kultúrnej výmeny a
          sociálnej histórie mimo západných naratívov.
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img className="w-1/2 h-48" src={galeria1}></img>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-5">
        <div className="w-1/2">
          Galéria 1957, ktorú spustil Marwan Zakhem v roku 2016 na Deň
          nezávislosti Ghany, sa odvtedy rozšírila do troch galérií v Akkre.
          Pôvodne bola založená na propagáciu prítomnosti Ghany a západnej
          Afriky na umeleckej scéne, teraz zahŕňa globálny juh a jeho diaspóru.
          Londýnsky priestor Gallery 1957 bol otvorený v októbri 2020 a
          poskytuje umelcom ďalšiu platformu na budovanie dialógov s jej
          rastúcou sieťou medzinárodných spolupracovníkov.
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img className="w-1/2 h-48" src={galeria2}></img>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-5">
        <div className="w-1/2">
          Galéria 1957 predstavuje výstavy, inštalácie a predstavenia slávnych
          umelcov, čím podporuje spojenie medzi miestnym a medzinárodným
          publikom. Globálne partnerstvá s galériou a prebiehajúci program
          umeleckých rezidenčných pobytov prilákali do Ghany mnohých
          medzinárodných umelcov a umeleckých profesionálov. Každoročný kultúrny
          týždeň Galérie v septembri slúži ako platforma na podporu hlbšieho
          zapojenia sa do pulzujúcej súčasnej umeleckej scény v Ghane.
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img className="w-1/2 h-48" src={galeria3}></img>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-5">
        <div className="w-1/2">
          V roku 2021 Galéria 1957 uviedla cenu Yaa Asantewaa Art Prize pre
          ženské umelkyne z Ghany, vôbec prvú venovanú umeleckú cenu svojho
          druhu. Cieľom ceny je ďalej posilniť záväzok galérie podporovať a
          propagovať začínajúcich a etablovaných umelcov.
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img className="w-1/2 h-48" src={galeria4}></img>
        </div>
      </div>
    </article>
  );
}
