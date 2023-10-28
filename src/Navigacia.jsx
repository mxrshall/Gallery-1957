import Menu from "./Menu";

function Navigacia() {
  return (
    <nav className="flex flex-row w-full h-10 fixed">
      <div className="w-10/12 h-10"></div>
      <div className="w-2/12 h-10 flex justify-center items-center">
        <Menu />
      </div>
    </nav>
  );
}

export default Navigacia;
