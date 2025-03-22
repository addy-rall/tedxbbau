import React from "react";
import { motion, useInView } from "framer-motion";
import hero from "../assets/hero.gif";
import backgroundImage from '../assets/herobg.jpg'
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
      <div className="h-screen flex flex-col justify-center bg-black text-center"
         style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="text-white text-4xl md:text-5xl mt-12 font-bold">
          <SplitText text="First Time In History In BBAU" />
        </h1>
        <h1 className="text-red-500 mt-10 text-6xl md:text-7xl font-bold">TEDx<span className="text-white">BBAU</span></h1>
      </div>

      {/* Left Side: GIF | Right Side: Heading */}
      <div className="min-h-screen w-full p-6 flex flex-col md:flex-row items-center justify-center bg-black text-white">
        {/* Left Side - GIF */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Animation"
            className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          />
        </div>

        {/* Right Side - Heading */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-7xl font-bold">Unveiling</h1>
          <h1 className="text-5xl md:text-7xl font-bold text-red-500">Hidden Truths</h1>
        </div>
      </div>
    </>
  );
};

export default App;
