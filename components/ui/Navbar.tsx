"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/home", icon: "🏠" },
  { name: "Chat", href: "/chat", icon: "💬" },
  { name: "Journal", href: "/journal", icon: "📖" },
  { name: "Memories", href: "/memories", icon: "📸" },
  { name: "Timeline", href: "/timeline", icon: "❤️" },
  { name: "Letters", href: "/letters", icon: "💌" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl shadow-2xl">

        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link key={link.href} href={link.href}>
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-4 py-2 transition-all duration-300 ${
                  active
                    ? "bg-white text-slate-900"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.name}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}