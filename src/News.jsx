import Navigacia from "./Navigacia";
import Header from "./Header";

import { useLocation } from "react-router-dom";

function News() {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <>
      <Navigacia />
      <Header />
      <div className="w-full h-64 bg-black">
        <img src={data.foto}></img>
        <p className="text-white"> {data.name}</p>
        <p className="text-white"> {data.date}</p>
      </div>
    </>
  );
}

export default News;
