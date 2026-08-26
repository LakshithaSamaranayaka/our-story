"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const initialSparkles = Array.from({ length: 35 }).map(() => ({
  x: `${Math.random() * 100}vw`,
  y: `${Math.random() * 100}vh`,
  duration: 2 + Math.random() * 4,
  delay: Math.random() * 5,
}));

export default function Sparkles() {
  const [sparkles] = useState(initialSparkles);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-yellow-300"
          initial={{
            x: sparkle.x,
            y: sparkle.y,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
          }}
        />
      ))}
    </div>
  );
}