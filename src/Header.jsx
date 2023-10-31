function Header() {
  return (
    <div>
      <div className="bg-black flex flex-row w-full h-96">
        <div className="w-1/3 h-96"></div>
        <div className="w-2/3 h-96">
          <div className="bg-black w-full h-96 flex justify-center items-center pb-15 ">
            <span className="bg-clip-text text-transparent text-[12rem] leading-[9rem] bg-[url('./images/background.png')] font-jost">
              19
              <br />
              57
            </span>
          </div>
        </div>
        <div className="w-full h-96 absolute flex items-end pl-8 pb-12 z-0">
          <span className="text-white text-xl font-julius">
            Galéria predstavuje
            <br />
            predných umelcov
            <br />
            pracujúcich v západanej
            <br />
            afrike
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
