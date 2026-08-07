"use client";

import GlassCard from "@/components/ui/GlassCard";

export default function ChatHeader() {
  return (
    <GlassCard className="p-5 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="relative">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-sky-400 to-cyan-600 flex items-center justify-center text-2xl">
            🐋
          </div>

          <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-400 border-2 border-slate-900" />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-white">
            Cocu
          </h2>

          <p className="text-green-400 text-sm">
            🌙 Home
          </p>

        </div>

      </div>

      <div className="text-right">

        <p className="text-slate-400 text-sm">
          London ↔ India
        </p>

        <p className="text-white font-semibold">
          Across Oceans ❤️
        </p>

      </div>

    </GlassCard>
  );
}