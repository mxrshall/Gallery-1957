import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function GaleriaGrid(props) {
  const submit = (data) => {
    props.submitData(data);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();

  const left = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const right = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const mid = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-5 lg:hidden">
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="row-span-2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${props.foto1})`,
          }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${props.foto2})`,
          }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="col-start-2 row-start-2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${props.foto3})`,
          }}
        ></motion.div>
      </div>
      <div
        ref={ref}
        className="hidden w-full h-full lg:grid grid-cols-3 grid-rows-2 gap-5"
      >
        <motion.div
          variants={left}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="row-span-2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${props.foto1})`,
          }}
        ></motion.div>
        <motion.div
          variants={mid}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.6, delay: 1 }}
          className="row-span-2 flex items-center justify-center flex-col font-julius text-3xl cursor-default"
        >
          <p onClick={() => submit(props.foto1)}>{props.nazov1}</p>
          <p onClick={() => submit(props.foto2)}>{props.nazov2}</p>
          <p onClick={() => submit(props.foto3)}>{props.nazov3}</p>
        </motion.div>
        <motion.div
          variants={right}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${props.foto2})`,
          }}
        ></motion.div>
        <motion.div
          variants={right}
          initial="hidden"
          animate={control}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="col-start-3 row-start-2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${props.foto3})`,
          }}
        ></motion.div>
      </div>
    </>
  );
}

export default GaleriaGrid;
