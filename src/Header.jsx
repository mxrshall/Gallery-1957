function Header() {
  return (
    <div>
      <div className="bg-black flex flex-row w-full h-96 lg:h-[100vh]">
        <div className="w-1/3 h-96 lg:h-[100vh]"></div>
        <div className="w-2/3 h-96 lg:h-[100vh] lg:pl-[20rem]">
          <div className="bg-black w-full h-96 flex justify-center items-center pb-15 lg:h-[100vh]">
            <span className="bg-clip-text text-transparent text-[12rem] leading-[9rem] bg-[url('./images/background.png')] font-jost lg:text-[30rem] lg:leading-[50vh]">
              19
              <br />
              57
            </span>
          </div>
        </div>
        <div className="w-full h-96 absolute flex items-end z-10 pl-8 pb-12 lg:h-[100vh]">
          <span className="text-white text-xl font-julius lg:text-[5rem] lg:leading-[10vh]">
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
