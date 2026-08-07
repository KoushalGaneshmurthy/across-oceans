"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTitleProps {
  title: string;
  subtitle?: ReactNode;
}

export default function PageTitle({
  title,
  subtitle,
}: PageTitleProps) {
  return (
    <div className="mb-10 text-center">

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-white"
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 text-slate-300 text-lg"
        >
          {subtitle}
        </motion.p>
      )}

    </div>
  );
}