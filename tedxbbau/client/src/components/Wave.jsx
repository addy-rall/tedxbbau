import React from "react";
import { motion } from "framer-motion";

const DNAWave = () => {
  const path =
    "M 0 50 Q 50 0, 100 50 T 200 50 T 300 50 T 400 50 T 500 50 T 600 50"; // DNA wave path

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <svg width="600" height="100" viewBox="0 0 600 100">
        {/* DNA wave path */}
        <path d={path} stroke="white" strokeWidth="2" fill="transparent" />

        {/* Moving point 1 */}
        <motion.circle
          cx="0"
          cy="0"
          r="6"
          fill="red"
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <animateMotion repeatCount="indefinite" dur="3s">
            <mpath href="#wave" />
          </animateMotion>
        </motion.circle>

        {/* Moving point 2 */}
        <motion.circle
          cx="0"
          cy="0"
          r="6"
          fill="cyan"
          animate={{ offsetDistance: ["100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <animateMotion repeatCount="indefinite" dur="3s">
            <mpath href="#wave" />
          </animateMotion>
        </motion.circle>
      </svg>
    </div>
  );
};

export default DNAWave;
