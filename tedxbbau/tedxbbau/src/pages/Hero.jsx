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
        visible: { transition: { staggerChildren: 0.2 } },
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
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          @keyframes flicker {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
          }

          .flicker {
            animation: flicker 1s infinite;
          }

          /* Safari-specific adjustments */
          @supports (-webkit-touch-callout: none) {
            .safari-fix {
              /* Fix for iOS Safari 100vh issue */
              min-height: -webkit-fill-available;
            }
          }
        `}
      </style>

      <div className=" w-full flex justify-center text-center sm:py-60 md:py-40  ">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mt-32 font-bold absolute z-10 inset-x-0 w-full px-1 text-center"
          style={{
            fontFamily: "Poppins, sans-serif",
            textShadow:
              "0 0 100px rgba(0, 0, 0, 0.8), 0 0 300px rgba(0, 0, 0, 0.6)",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="block mx-auto leading-snug">
            <SplitText text="Unveiling" />
          </div>
          <div className="block text-red-700 mx-auto leading-snug">
            <SplitText text="Hidden Truths" />
          </div>

          <div className="absolute inset-x-0 bottom-0 w-full">
            <div className="w-24 mx-auto mt-2 border-b-4 border-white opacity-50 transform transition-all duration-300 hover:w-32 hover:opacity-100"></div>
          </div>
        </h1>
      </div>

      <div className="w-full text-center mt-20 mb-6">
        <motion.div
          className="bg-red-700 text-white text-base sm:text-lg md:text-xl lg:mt-[170px] font-bold py-2 px-8 flicker"
          style={{ fontFamily: "Poppins, sans-serif" }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        >
          <span className="block">First 100 members get an</span>  
          <span className="block">Early Bird DISCOUNT!</span>  
          <span className="block sm:inline">Use code <strong>TEDXBBAU100</strong> now!</span>
        </motion.div>
      </div>

      <div className="min-h-screen safari-fix w-full py-10 flex flex-col md:flex-row items-center justify-center text-white container mx-auto px-4">

        <div className="w-full md:w-1/2 flex items-center justify-center md:mt-24 lg:mt-40">
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-full mt-8">
            <img
              src={hero}
              alt="Animation"
              className="w-full h-full object-cover rounded-lg"
              style={{ 
                pointerEvents: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            />
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%)',
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '600px' }}
        >
          <h1 className="text-center text-2xl sm:text-3xl md:text-5xl lg:text-3xl z-10 font-extrabold text-gray-100 leading-tight">
            Breaking <span className="text-red-700">Myths,</span> <br />
            <span className="text-red-700">Unveiling</span> Reality
          </h1>

          <motion.p
            ref={paragraphRef}
            className="text-center mt-4 px-4 md:px-6 text-base sm:text-lg leading-loose"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ 
              maxWidth: '700px', 
              textAlign: 'justify',
              WebkitHyphens: 'auto',
              hyphens: 'auto'
            }}
          >
            Some truths remain buried, waiting to be discovered. This TED event peels back the layers of illusion, shatters misconceptions, and reveals the unseen forces shaping our world. Prepare to challenge what you know, question the unquestioned, and see reality in a whole new light. The truth is out there—are you ready to uncover it?
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default App;
