function Umelec(props) {
  return (
    <div id={props.id} className="flex justify-center items-center flex-col">
      <div
        className="w-full h-64 bg-cover grayscale lg:h-[100vh]"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <div className="w-full h-full bg-black opacity-70 pt-10 pl-5 lg:pt-32 lg:pl-20">
          <h1 className="text-white text-xl font-julius pb-2 lg:text-5xl lg:pb-5">
            {props.meno}
          </h1>
          <p className="text-white text-xs font-julius lg:text-lg">
            {props.popis}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Umelec;
