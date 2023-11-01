function Umelec(props) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div
        className="w-full h-64 bg-cover grayscale"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <div className="w-full h-full bg-black opacity-60"></div>
      </div>
    </div>
  );
}

export default Umelec;
