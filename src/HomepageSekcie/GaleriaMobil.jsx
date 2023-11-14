import { GaleriaText } from "./GaleriaTextMobil";
import Nadpis from "../Univerzalne/Nadpis";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function GaleriaMobil() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div className="bg-black">
      <Nadpis nadpis="Galéria 1957" color="white" />
      <div className="flex justify-center items-center flex-row">
        <div className="w-1/12 h-64"></div>
        <div
          ref={ref}
          className="w-3/4 h-64 text-xs font-julius text-justify text-white overflow-auto no-scrollbar"
        >
          <GaleriaText />
        </div>
        <div className="w-1/12 h-64 flex justify-center">
          <motion.div
            className="w-1/12 h-52 bg-white origin-[0%]"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default GaleriaMobil;
