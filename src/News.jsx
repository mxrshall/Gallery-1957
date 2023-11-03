import Navigacia from "./Navigacia";
import Header from "./Header";
import { useSearchParams } from "react-router-dom";

function News() {
  const [searchParams] = useSearchParams();
  const data = searchParams.get("data");

  return (
    <>
      <Navigacia />
      <Header />
      <div className="w-full h-64 bg-black">
        <p className="text-white">{data}</p>
      </div>
    </>
  );
}

export default News;
