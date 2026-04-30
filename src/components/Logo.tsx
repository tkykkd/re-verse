import React from "react";
import { motion } from "motion/react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div
        className="relative w-9 h-9 shrink-0"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <svg
          viewBox="0 0 120 70"
          className="w-full h-full fill-none stroke-[5]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="brandInfinity" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7be8e1" />
              <stop offset="55%" stopColor="#0e2f71" />
              <stop offset="100%" stopColor="#48d7ca" />
            </linearGradient>
          </defs>
          <path
            d="M10,35 C18,15 40,15 58,35 C76,55 98,55 110,35 C102,15 80,15 62,35 C44,55 22,55 10,35Z"
            stroke="url(#brandInfinity)"
          />
        </svg>
      </motion.div>

      <span className="font-display text-lg tracking-[0.22em] font-medium text-universe-prism">
        RE-VERSE
      </span>
    </div>
  );
}
