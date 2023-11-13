import { GaleriaText } from "./GaleriaText";
import Nadpis from "../Univerzalne/Nadpis";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Galeria() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div className="bg-black">
      <Nadpis nadpis="Galéria 1957" color="white" />
      <div className="flex justify-center items-center flex-row">
        <div className="w-1/12 h-64 lg:h-96"></div>
        <div
          ref={ref}
          className="w-3/4 h-64 text-xs font-julius text-justify text-white overflow-auto no-scrollbar lg:w-1/3 lg:h-96 lg:text-base"
        >
          <GaleriaText />
        </div>
        <div className="w-1/12 h-64 flex justify-center lg:h-96">
          <motion.div
            className="w-1/12 h-52 bg-white origin-[0%] lg:h-[46.5vh] lg:w-[2%]"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default Galeria;
