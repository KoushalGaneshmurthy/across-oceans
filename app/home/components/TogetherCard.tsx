"use client";

import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

export default function TogetherCard() {
  return (
    <GlassCard className="p-8 mt-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-pink-300 uppercase tracking-widest text-sm">
          ❤️ Our Journey
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Since 13 December 2021
        </h2>

        <p className="mt-4 text-slate-300">
          Every sunrise,
          <br />
          every sunset,
          <br />
          every memory...
          <br />
          has become part of our story.
        </p>

        <div className="mt-6 rounded-2xl bg-white/5 p-5 border border-white/10">
          <p className="text-slate-400 text-sm">
            Together For
          </p>

          <p className="text-5xl font-bold text-white mt-2">
            1700+
          </p>

          <p className="text-slate-400">
            beautiful days ❤️
          </p>
        </div>
      </motion.div>
    </GlassCard>
  );
}