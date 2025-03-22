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
      {/* Centered Header */}
      <div className="py-16 bg-black text-center">
        <h1 className="text-white text-4xl md:text-5xl mt-32 font-bold">
          <SplitText text="First Time In History In BBAU" />
        </h1>
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
        <div className="w-full md:w-1/2 flex justify-center">
          <h1 className="text-3xl md:text-5xl font-bold border-b-4 border-red-500 pb-4">
            Unveiling Hidden Truths
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;