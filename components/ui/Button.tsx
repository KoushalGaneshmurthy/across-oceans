"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(255,255,255,0.25)",
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      className={`
        rounded-full
        px-8
        py-4
        bg-white
        text-slate-900
        font-semibold
        shadow-xl
        transition-all
        duration-300
        hover:bg-slate-100
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}