"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Stars from "./Stars";
import Ocean from "./Ocean";

export default function Hero() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#050816] via-[#071b3a] to-[#123d6b]">

      <Stars />
      <Ocean />

      {/* Moon */}
      <div className="absolute top-16 right-20 h-40 w-40">
        <div className="absolute inset-0 rounded-full bg-white/30 blur-3xl" />

        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white via-gray-100 to-gray-300 shadow-[0_0_70px_rgba(255,255,255,0.6)]" />

        <div className="absolute top-12 left-10 h-4 w-4 rounded-full bg-gray-300 opacity-50" />
        <div className="absolute top-20 left-24 h-3 w-3 rounded-full bg-gray-300 opacity-40" />
        <div className="absolute top-24 left-14 h-2 w-2 rounded-full bg-gray-300 opacity-40" />

        {/* Reflection */}
        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scaleX: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-40 h-80 w-16 -translate-x-1/2 bg-gradient-to-b from-white/35 via-white/10 to-transparent blur-2xl"
        />
      </div>

      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold text-white"
        >
          Across Oceans
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-2xl text-slate-300"
        >
          Distance measures miles,
          <br />
          never love.
        </motion.p>

        <Link href="/home">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-12 rounded-full bg-white px-10 py-5 text-xl font-semibold text-slate-900 shadow-2xl"
  >
    Enter Our Home ❤️
  </motion.button>
</Link>
      </div>

    </main>
  );
}