import Navigacia from "./Navigacia";
import Header from "./Header";
import Footer from "./Footer";

import { useLocation } from "react-router-dom";

function News() {
  const location = useLocation();
  const data = location.state.data;

  return (
    <>
      <Navigacia />
      <Header />
      <div className="w-full bg-white">
        <div
          className="w-full h-48 bg-cover"
          style={{
            backgroundImage: `url(${data.image})`,
          }}
        ></div>
        <div className="text-black text-base font-bold font-julius pt-3 pl-2">
          <h1>{data.name}</h1>
        </div>
        <div className="text-black text-sm font-julius pt-3 pl-2">
          <h1>{data.description}</h1>
        </div>
        <div
          className="text-black text-xs font-julius pt-3
        pb-3 pl-2"
        >
          <p>{data.date}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
