import { motion } from "framer-motion";

function Header() {
  return (
    <div>
      <div className="bg-black flex flex-row w-full h-96 lg:h-[100vh]">
        <div className="w-1/3 h-96 lg:h-[100vh]"></div>
        <div className="w-2/3 h-96 lg:h-[100vh] lg:pl-[20rem]">
          <div className="bg-black w-full h-96 flex justify-center items-center pb-15 lg:h-[100vh]">
            <motion.span
              className="bg-clip-text text-transparent text-[12rem] leading-[9rem] bg-[url('./images/background.png')] font-jost bg-fixed lg:text-[30rem] lg:leading-[50vh]"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              19
              <br />
              57
            </motion.span>
          </div>
        </div>
        <div className="w-full h-96 absolute flex items-end z-10 pl-8 pb-12 lg:h-[100vh]">
          <motion.span
            className="text-white text-xl font-julius lg:text-[5rem] lg:leading-[10vh]"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -25, opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Galéria predstavuje
            <br />
            predných umelcov
            <br />
            pracujúcich v západanej
            <br />
            afrike
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default Header;
