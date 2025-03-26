import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import hero from "../assets/hero.gif";

const SplitText = ({ text }) => {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const renderWord = (word, index) => {
    return (
      <motion.span
        key={index}
        className="inline-block"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {word}&nbsp;
      </motion.span>
    );
  };

  return (
    <motion.div
      ref={ref}
      className="inline-block w-full"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {words.map(renderWord)}
    </motion.div>
  );
};

const App = () => {
  const paragraphRef = useRef(null);
  const isParagraphInView = useInView(paragraphRef, { once: false });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
          }
          
          @keyframes flicker {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
          }

          .flicker {
            animation: flicker 1s infinite;
          }
        `}
      </style>

      <div className="py-23 w-full flex justify-center text-center">
        <h1
          className="text-white text-5xl md:text-7xl mt-32 font-bold absolute z-10 inset-x-0 w-full px-1 text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow:
              "0 0 100px rgba(0, 0, 0, 0.8), 0 0 300px rgba(0, 0, 0, 0.6)",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="block mx-auto leading-snug ">
            <SplitText text="Unveiling" />
          </div>
          <div className="block mx-auto leading-snug">
            <SplitText text="Hidden Truths" />
          </div>
        </h1>
      </div>

      <div className="w-full text-center py-45 mt-20">
        <motion.div
          className="bg-red-700 text-white text-lg md:text-xl font-bold py-2 px-8 flicker"
          style={{ fontFamily: "Poppins, sans-serif" }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        >
          <span className="block">First 100 get an</span>  
    <span className="block">Early Bird DISCOUNT!</span>  
    <span className="block sm:inline">Use code <strong>TEDxBBAU100</strong> now!</span>
        </motion.div>
      </div>

      <div className="min-h-screen w-full py-15 flex flex-col md:flex-row items-center justify-center text-white relative container mx-auto px-4">
        <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0 md:mt-32">
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
            <div className="relative">
              <img
                src={hero}
                alt="Animation"
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{
                  position: "relative",
                  zIndex: "0",
                  pointerEvents: "none",
                }}
              />

              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.1) 5%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,1) 100%)",
                  zIndex: "1",
                }}
              ></div>
            </div>
          </div>
        </div>

        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            fontFamily: "Poppins, sans-serif",
            maxWidth: "600px",
          }}
        >
          <h1 
            className="text-center text-3xl md:text-5xl font-extrabold text-gray-700 leading-tight"
          >
            Breaking Myths, 
            Unveiling Reality
          </h1>

          <motion.p
            ref={paragraphRef}
            className="text-center mt-4 px-1.5 md:px-6 text-lg md:text-lg leading-loose"
            initial={{ opacity: 0, y: 50 }}
            animate={isParagraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ maxWidth: "700px", textAlign: "justify" }}
          >
            Some truths remain buried, waiting to be discovered. This TED event
            peels back the layers of illusion, shatters misconceptions, and
            reveals the unseen forces shaping our world. Prepare to challenge
            what you know, question the unquestioned, and see reality in a whole
            new light. The truth is out there—are you ready to uncover it?
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default App;
