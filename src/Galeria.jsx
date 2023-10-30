import Nadpis from "./Nadpis";
import image1 from "./images/image1.png";

function Galeria() {
  return (
    <div className="bg-black flex justify-center items-center flex-col">
      <Nadpis nadpis="Galéria" color="white" />
      <div className="w-3/4 h-64 text-xs font-julius text-justify text-white overflow-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in
        <img className="w-full h-42 py-5" src={image1}></img>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in
        <img className="w-full h-42 py-5" src={image1}></img>
      </div>
    </div>
  );
}

export default Galeria;
