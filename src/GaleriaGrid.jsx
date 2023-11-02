function GaleriaGrid(props) {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-5">
      <div
        className="row-span-2 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${props.foto1})`,
        }}
      ></div>
      <div
        className="bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${props.foto2})`,
        }}
      ></div>
      <div
        className="col-start-2 row-start-2 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${props.foto3})`,
        }}
      ></div>
    </div>
  );
}

export default GaleriaGrid;
