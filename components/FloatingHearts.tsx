"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FloatingHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      duration: 8 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 text-xl"
          style={{ left: `${heart.left}vw` }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.8, 0] }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}