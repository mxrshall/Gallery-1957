function Umelec(props) {
  return (
    <div id={props.id} className="flex justify-center items-center flex-col">
      <div
        className="w-full h-64 bg-cover grayscale"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <div className="w-full h-full bg-black opacity-70 pt-10 pl-5">
          <h1 className="text-white text-xl font-julius pb-2">{props.meno}</h1>
          <p className="text-white text-xs font-julius">{props.popis}</p>
        </div>
      </div>
    </div>
  );
}

export default Umelec;
