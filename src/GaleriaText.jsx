import galeria1 from "./images/galeria1.jpg";
import galeria2 from "./images/galeria2.webp";
import galeria3 from "./images/galeria3.webp";
import galeria4 from "./images/galeria4.jpg";

export function GaleriaText() {
  return (
    <article>
      Galéria 1957 je galéria súčasného umenia s priestormi v Accre, Ghane a
      Londýne, Spojené kráľovstvo.
      <br />
      <br />
      Svoj program venuje vedeniu medzinárodných výmen medzi umeleckými postupmi
      z týchto komunít a zvyškom sveta, pričom predstavuje umelcov, ktorí
      skúmajú koncepty spolupatričnosti a identity, kultúrnej výmeny a sociálnej
      histórie mimo západných naratívov.
      <img className="w-full h-42 my-5" src={galeria1}></img>
      Galéria 1957, ktorú spustil Marwan Zakhem v roku 2016 na Deň nezávislosti
      Ghany, sa odvtedy rozšírila do troch galérií v Akkre. Pôvodne bola
      založená na propagáciu prítomnosti Ghany a západnej Afriky na umeleckej
      scéne, teraz zahŕňa globálny juh a jeho diaspóru. Londýnsky priestor
      Gallery 1957 bol otvorený v októbri 2020 a poskytuje umelcom ďalšiu
      platformu na budovanie dialógov s jej rastúcou sieťou medzinárodných
      spolupracovníkov.
      <img className="w-full h-42 my-5" src={galeria2}></img>
      Galéria 1957 predstavuje výstavy, inštalácie a predstavenia slávnych
      umelcov, čím podporuje spojenie medzi miestnym a medzinárodným publikom.
      Globálne partnerstvá s galériou a prebiehajúci program umeleckých
      rezidenčných pobytov prilákali do Ghany mnohých medzinárodných umelcov a
      umeleckých profesionálov. Každoročný kultúrny týždeň Galérie v septembri
      slúži ako platforma na podporu hlbšieho zapojenia sa do pulzujúcej
      súčasnej umeleckej scény v Ghane.
      <img className="w-full h-42 my-5" src={galeria3}></img>V roku 2021 Galéria
      1957 uviedla cenu Yaa Asantewaa Art Prize pre ženské umelkyne z Ghany,
      vôbec prvú venovanú umeleckú cenu svojho druhu. Cieľom ceny je ďalej
      posilniť záväzok galérie podporovať a propagovať začínajúcich a
      etablovaných umelcov.
      <img className="w-full h-42 pt-5 pb-12" src={galeria4}></img>
    </article>
  );
}
