"use client";

import { motion } from "framer-motion";

export default function IntroHeart() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.25, 1],
      }}
      transition={{
        duration: 1.3,
        repeat: Infinity,
      }}
      className="text-8xl drop-shadow-[0_0_35px_rgba(255,90,120,.6)]"
    >
      ❤️
    </motion.div>
  );
}