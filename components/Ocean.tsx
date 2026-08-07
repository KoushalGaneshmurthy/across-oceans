"use client";

import { motion } from "framer-motion";

export default function Ocean() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden z-0">

      {/* Back Wave */}
      <motion.div
        animate={{ x: [0, -80, 0] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-[220%] h-56 bg-sky-700 rounded-t-[100%]"
      />

      {/* Middle Wave */}
      <motion.div
        animate={{ x: [0, 60, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-[220%] h-52 bg-sky-800/80 rounded-t-[100%]"
      />

      {/* Front Wave */}
      <motion.div
        animate={{ x: [0, -40, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 w-[220%] h-44 bg-sky-900 rounded-t-[100%]"
      />

    </div>
  );
}