"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MovingNoButton() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveButton = () => {
    const randomX = Math.random()*450-225;
    const randomY = Math.random()*250-125;

    setPosition({
      x: randomX,
      y: randomY,
    });
  };

  return (
    <motion.button
      animate={position}
      transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.8 }}
      onMouseEnter={moveButton}
      className="
      rounded-full
      bg-gray-700
      px-8
      py-3
      text-white
      shadow-lg
      absolute
      "
    >
      No 💔
    </motion.button>
  );
}