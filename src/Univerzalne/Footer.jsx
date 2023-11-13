import social1 from "./images/social1.png";
import social2 from "./images/social2.png";
import social3 from "./images/social3.png";

function Footer() {
  return (
    <footer className="w-full h-64 bg-black">
      <div className="w-4/5 h-32 pl-3 pt-3 lg:pl-5 lg:pt-5">
        <h1 className="text-white text-xl font-jost lg:text-3xl">
          Galéria 1957
        </h1>
        <p className="text-white text-xs font-julius lg:text-base">
          Galéria súčasného umenia s priestormi v Accre, Ghane a Londýne,
          Spojené kráľovstvo.
        </p>
      </div>
      <div className="w-full h-32 flex flex-row">
        <div className="w-1/2 h-32 pl-3 pt-3 lg:pl-5 ">
          <span className="text-white text-xs font-julius lg:text-base">
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
          <img className="w-1/9 h-4 ml-1 lg:h-6 lg:ml-2" src={social1}></img>
          <img className="w-1/9 h-4 ml-1 lg:h-6 lg:ml-2" src={social2}></img>
          <img className="w-1/9 h-4 ml-1 lg:h-6 lg:ml-2" src={social3}></img>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
