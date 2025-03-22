import React from "react";
import { motion, useInView } from "framer-motion";
import hero from "../assets/hero.gif";

const SplitText = ({ text }) => {
  const words = text.split(" ");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.span
      ref={ref}
      className="inline-block"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
};

const App = () => {
  return (
    <>
      {/* TEDxBBAU Heading */}
      <motion.div 
        className="min-h-[50vh] flex flex-col justify-center bg-black text-center"
      >
        <h1 className="text-white text-4xl md:text-5xl mt-12 font-bold">
          <SplitText text="First Time In History In BBAU" />
        </h1>
        <div className="relative overflow-hidden w-full">
          <motion.h1 
            className="text-red-500 mt-10 text-6xl md:text-7xl font-bold inline-block"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            TED
          </motion.h1>
            <h1             className="text-red-500 mt-10 text-6xl md:text-7xl font-bold inline-block"
>x</h1>
          <motion.h1 
            className="text-white mt-10 text-6xl md:text-7xl font-bold inline-block"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            BBAU
          </motion.h1>
        </div>
      </motion.div>

      {/* Left Side: GIF | Right Side: Heading */}
      <motion.div
        className="min-h-[50vh] w-full p-6 flex flex-col md:flex-row items-center justify-center bg-black text-white"
      >
        {/* Left Side - GIF */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={hero}
            alt="Animation"
            className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Right Side - Heading */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-center"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold">Unveiling</h1>
          <h1 className="text-5xl md:text-7xl font-bold text-red-500">Hidden Truths</h1>
        </motion.div>
      </motion.div>
    </>
  );
};

export default App;