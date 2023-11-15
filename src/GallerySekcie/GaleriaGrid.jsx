function GaleriaGrid(props) {
  const submit = (data) => {
    props.submitData(data);
  };

  return (
    <>
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-5 lg:hidden">
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
      <div className="hidden w-full h-full lg:grid grid-cols-3 grid-rows-2 gap-5">
        <div
          className="row-span-2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${props.foto1})`,
          }}
        ></div>
        <div className="row-span-2 flex items-center justify-center flex-col font-julius text-3xl cursor-default">
          <p onClick={() => submit(props.foto1)}>{props.nazov1}</p>
          <p onClick={() => submit(props.foto2)}>{props.nazov2}</p>
          <p onClick={() => submit(props.foto3)}>{props.nazov3}</p>
        </div>
        <div
          className="bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${props.foto2})`,
          }}
        ></div>
        <div
          className="col-start-3 row-start-2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${props.foto3})`,
          }}
        ></div>
      </div>
    </>
  );
}

export default GaleriaGrid;