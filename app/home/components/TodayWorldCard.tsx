"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

export default function TodayWorldCard() {
  return (
    <GlassCard className="p-8 mt-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-sky-300 uppercase tracking-widest text-sm">
          🌍 Today In Our World
        </p>

        <div className="mt-6 space-y-5">

          <div className="flex items-center justify-between">
            <span className="text-white text-lg">
              💙 Cocu is feeling
            </span>

            <span className="text-green-300 font-semibold">
              😊 Happy
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white text-lg">
              📖 Journal
            </span>

            <span className="text-slate-300">
              Updated today
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white text-lg">
              📸 Memories
            </span>

            <span className="text-slate-300">
              1 New
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white text-lg">
              💌 Letters
            </span>

            <span className="text-pink-300">
              Waiting ❤️
            </span>
          </div>

        </div>
      </motion.div>
    </GlassCard>
  );
}