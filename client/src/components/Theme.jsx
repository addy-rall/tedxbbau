import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bg from '../assets/bg.jpg';

const ThemeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("theme-section");
    const rect = section.getBoundingClientRect();
    setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Theme Section */}
      <div id="theme-section" className="flex flex-col md:flex-row items-center justify-between p-8 shadow-lg">
        {/* Left Side: Motto and Vision */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-red-800 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold">Our Motto</h2>
            <p className="mt-2 text-gray-300">"Inspiring Ideas, Igniting Change"</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 bg-red-800 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold">Our Vision</h2>
            <p className="mt-2 text-gray-300">"Shaping a Better Tomorrow Through Innovation and Collaboration"</p>
          </motion.div>
        </div>

        {/* Right Side: Theme 2025 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-8 md:mt-0 md:w-1/2 text-center"
        >
          <h1 className="text-4xl font-extrabold text-red-500">Theme 2025</h1>
          <p className="mt-4 text-gray-300">
            "Unveiling Hidden Truths" is about breaking through myths, questioning what we've always accepted, and uncovering the realities
            that often stay in the shadows. It's about challenging the status quo, looking beyond the surface, and asking: Are we truly free 
            to express ourselves, or is free speech just an illusion? Is our education system preparing us for the real world, or is it just 
            a ritual we follow? At TEDxBBAU, we aim to create a space where ideas collide, perspectives shift, and deep conversations happen. 
          </p>
        </motion.div>
      </div>

      {/* Background Image Section */}
      <div className="w-full">
        <img src={bg} alt="Background" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default ThemeSection;
