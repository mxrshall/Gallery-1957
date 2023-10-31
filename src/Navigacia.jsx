import Menu from "./Menu";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";

function Navigacia() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-row w-full h-10 fixed z-50">
      <div className="w-10/12 h-10"></div>
      <div
        className="w-2/12 h-10 flex justify-center items-center relative z-40"
        onClick={() => setOpen(!open)}
      >
        <Menu />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="w-full h-32 bg-black bg-opacity-90 fixed z-3 flex justify-center items-center flex-col text-white text-base font-julius"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "30vh", opacity: 1 }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { ease: "easeInOut", duration: 0.3 },
            }}
          >
            <Link to="/home">Domov</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigacia;
