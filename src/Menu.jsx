function Menu() {
  return (
    <div
      className="w-1/2 flex justify-center items-center flex-col"
      onClick={() => console.log("Test")}
    >
      <div className="bg-white w-full h-0.5"></div>
      <div className="bg-white w-full h-0.5 my-1"></div>
      <div className="bg-white w-full h-0.5"></div>
    </div>
  );
}

export default Menu;
