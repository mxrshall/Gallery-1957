function Nadpis(props) {
  return (
    <div
      className="w-full h-14 text-2xl font-jost flex justify-center items-center lg:text-3xl lg:py-10"
      style={{
        color: `${props.color}`,
      }}
    >
      <h1>{props.nadpis}</h1>
    </div>
  );
}

export default Nadpis;
