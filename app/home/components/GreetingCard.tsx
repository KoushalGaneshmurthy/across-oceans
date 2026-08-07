"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

export default function GreetingCard() {
  return (
    <GlassCard className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sky-300 text-sm tracking-widest uppercase">
          Welcome Home
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          Welcome Home, Puu ❤️
        </h1>

        <p className="mt-4 text-slate-300 text-lg italic">
          "The moon has been waiting for you."
        </p>
      </motion.div>
    </GlassCard>
  );
}