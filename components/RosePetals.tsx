"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const initialPetals = Array.from({ length: 18 }).map(() => ({
  x: `${Math.random() * 100}vw`,
  duration: 10 + Math.random() * 8,
  delay: Math.random() * 6,
}));

export default function RosePetals() {
  const [petals] = useState(initialPetals);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">

      {petals.map((petal, i) => (

        <motion.div
          key={i}
          className="absolute text-2xl"

          initial={{
            y: "-10vh",
            x: petal.x,
            rotate: 0,
          }}

          animate={{
            y: "110vh",
            rotate: 360,
          }}

          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
          }}
        >
          🌹
        </motion.div>

      ))}

    </div>
  );
}