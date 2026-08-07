"use client";

import { motion } from "framer-motion";

export default function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-[10%] left-[15%] h-1 w-1 rounded-full bg-white"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-[20%] left-[60%] h-1 w-1 rounded-full bg-white"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-[35%] left-[40%] h-2 w-2 rounded-full bg-white"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-[55%] left-[80%] h-1 w-1 rounded-full bg-white"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3.2, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-[70%] left-[20%] h-1 w-1 rounded-full bg-white"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      />
    </div>
  );
}