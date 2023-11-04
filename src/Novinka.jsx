import { useState } from "react";
import { Link } from "react-router-dom";

function Novinka({ fotka, nazov, popis, datum }) {
  const image = fotka;
  const name = nazov;
  const description = popis;
  const date = datum;

  const [data, setData] = useState({
    image: image,
    name: name,
    description: description,
    date: date,
  });

  return (
    <div className="w-3/4 h-52 mb-5">
      <img className="w-full h-36" src={image}></img>
      <div className="text-black text-sm font-julius pt-2">
        <h1>{name}</h1>
      </div>
      <Link to="/news" state={{ data: data }}>
        Go to Page
      </Link>
      <div className="text-black text-xs font-julius pt-2">
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Novinka;
