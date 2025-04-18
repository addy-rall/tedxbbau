import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import bg from "../assets/bg.jpg";

const ThemeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div id="about" ref={sectionRef} className="bg-black text-white overflow-hidden ">
      <div className="flex flex-col items-center justify-center p-8 lg:p-2 max-w-screen-lg mx-auto">
       
        <h1 className="text-5xl sm:text-6xl font-extrabold text-red-600 text-center">
          Theme <span className="text-white">2025</span>
        </h1>
      
        <div className="w-24 h-1 bg-red-700 mx-auto mt-3"></div>

        <motion.p className="mt-6 max-w-3xl text-gray-300 text-center leading-relaxed">
          <motion.span
            initial={{ opacity: 0, x: "-100%" }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "-100%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="block"
          >
            "Unveiling Hidden Truths" is about breaking through myths, questioning what we've always accepted, and uncovering the realities that often stay in the shadows.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: "100%" }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="block mt-2"
          >
            It's about challenging the status quo, looking beyond the surface, and asking: Are we truly free to express ourselves, or is free speech just an illusion?
          </motion.span>
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          <div className="p-6 bg-red-800 rounded-xl shadow-lg md:w-3/5 flex flex-col text-center transition-all duration-300 hover:scale-105 hover:bg-red-900">
            <h2 className="text-lg font-bold text-white">Our Motto</h2>
            <p className="mt-2 text-gray-200 text-sm">"Inspiring Ideas, Igniting Change"</p>
          </div>

          <div className="p-6 bg-red-800 rounded-xl shadow-lg md:w-3/5 flex flex-col text-center transition-all duration-300 hover:scale-105 hover:bg-red-900">
            <h2 className="text-lg font-bold text-white">Our Vision</h2>
            <p className="mt-2 text-gray-200 text-sm">"Shaping a Better Tomorrow Through Innovation and Collaboration"</p>
          </div>
        </div>

        <div className="relative max-w-screen-lg mx-auto mt-9 overflow-hidden">
          <img
            src={bg}
            alt="Background"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default ThemeSection;
