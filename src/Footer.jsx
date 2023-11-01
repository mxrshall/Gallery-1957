import social1 from "./images/social1.png";
import social2 from "./images/social2.png";
import social3 from "./images/social3.png";

function Footer() {
  return (
    <footer className="w-full h-64 bg-black">
      <div className="w-4/5 h-32 pl-3 pt-3">
        <h1 className="text-white text-xl font-jost">Galéria 1957</h1>
        <p className="text-white text-xs font-julius">
          Galéria súčasného umenia s priestormi v Accre, Ghane a Londýne,
          Spojené kráľovstvo.
        </p>
      </div>
      <div className="w-full h-32 flex flex-row">
        <div className="w-1/2 h-32 pl-3 pt-3">
          <span className="text-white text-xs font-julius">
            Gallery 1957, London
            <br />
            1 Hyde Park Gate
            <br />
            London
            <br />
            london@gallery1957.com
          </span>
        </div>
        <div className="w-1/2 h-32 flex justify-end items-end pr-3 pb-3">
          <img className="w-1/9 h-4 ml-1" src={social1}></img>
          <img className="w-1/9 h-4 ml-1" src={social2}></img>
          <img className="w-1/9 h-4 ml-1" src={social3}></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
