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
          className="w-full h-48 bg-cover lg:h-[80vh]"
          style={{
            backgroundImage: `url(${data.image})`,
          }}
        ></div>
        <div className="text-black text-base font-bold font-julius pt-3 pl-2 lg:text-5xl lg:font-normal lg:pt-10 lg:pl-10">
          <h1>{data.name}</h1>
        </div>
        <div className="text-black text-sm font-julius pt-3 pl-2 lg:pt-10 lg:pl-10 lg:text-lg">
          <h1>{data.description}</h1>
        </div>
        <div
          className="text-black text-xs font-julius pt-3
        pb-3 pl-2 lg:pt-5 lg:pl-10 lg:pb-10 lg:text-sm"
        >
          <p>{data.date}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default News;
