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
    <div className="w-3/4 h-52 mb-10 lg:w-1/4 lg:px-2">
      <img className="w-full h-36 lg:h-48" src={image}></img>
      <div className="w-full h-12 text-black text-sm font-semibold font-julius pt-2 lg:text-lg lg:h-16">
        <h1>{name}</h1>
      </div>
      <Link
        to="/news"
        state={{ data: data }}
        className="text-black text-sm underline underline-offset-2 font-julius mt-5"
      >
        Cítat viac
      </Link>
      <div className="text-black text-xs font-julius pt-2 mb-5">
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Novinka;
