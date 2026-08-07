"use client";

import { motion } from "framer-motion";

export default function MessageInput() {
  return (
    <div className="mt-6 flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

      <button className="text-2xl hover:scale-110 transition">
        😊
      </button>

      <button className="text-2xl hover:scale-110 transition">
        📷
      </button>

      <input
        type="text"
        placeholder="Message Cocu..."
        className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-400 px-2"
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="rounded-full bg-sky-500 p-3 text-xl shadow-lg"
      >
        ➤
      </motion.button>

    </div>
  );
}