import { GaleriaText } from "./GaleriaTextMobil";
import Nadpis from "../Univerzalne/Nadpis";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function GaleriaDesktop() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div className="bg-black">
      <Nadpis nadpis="Galéria 1957" color="white" />
      <div className="flex justify-center items-center flex-row">
        <div className="w-1/12 h-64 bg-green-300"></div>
        <div ref={ref} className="w-11/12 flex">
          <div className="w-1/2 h-64 text-xs bg-red-200 font-julius text-justify text-white overflow-auto no-scrollbar">
            <GaleriaText />
          </div>
          <div className="w-1/2 h-64 text-xs bg-red-200 font-julius text-justify text-white overflow-auto no-scrollbar">
            <GaleriaText />
          </div>
        </div>
        <div className="w-1/12 h-64 bg-green-300 flex justify-center">
          <motion.div
            className="w-1/12 h-52 bg-white origin-[0%]"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default GaleriaDesktop;
