function Novinka(props) {
  return (
    <div className="w-3/4 h-52 mb-5">
      <img className="w-full h-36" src={props.image}></img>
      <div className="text-black text-sm font-julius pt-2">
        <h1>{props.nazov}</h1>
      </div>
      <div className="text-black text-xs font-julius pt-2">
        <p>{props.datum}</p>
      </div>
    </div>
  );
}

export default Novinka;
