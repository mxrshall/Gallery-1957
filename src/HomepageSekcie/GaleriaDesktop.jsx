import { GaleriaTextDesktop } from "./GaleriaTextDesktop";
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
        <div className="w-1/12 h-64"></div>
        <div
          ref={ref}
          className="w-11/12 h-96 text-xs font-julius text-justify text-white overflow-auto no-scrollbar"
        >
          <GaleriaTextDesktop />
        </div>
        <div className="w-1/12 h-64 flex justify-center">
          <motion.div
            className="w-[0.2rem] h-52 bg-white origin-[0%]"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default GaleriaDesktop;
