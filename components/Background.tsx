"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const sparkles = Array.from({ length: 20 }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2,
  delay: Math.random() * 5,
  duration: 4 + Math.random() * 5,
}));

const dustParticles = Array.from({ length: 16 }).map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 8 + Math.random() * 15,
  opacity: 0.06 + Math.random() * 0.14,
  duration: 12 + Math.random() * 14,
  delay: Math.random() * 10,
}));

export default function Background() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const sparkleList = useMemo(() => sparkles, []);
  const dustList = useMemo(() => dustParticles, []);

  return (
    <div
      className="fixed inset-0 -z-50 overflow-hidden"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: ((event.clientX - bounds.left) / bounds.width) * 100,
          y: ((event.clientY - bounds.top) / bounds.height) * 100,
        });
      }}
    >
      <div className="absolute inset-0 bg-[var(--background)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_18%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(212,175,55,0.16),transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(196,69,105,0.12),transparent_24%)]" />
      <motion.div
        className="absolute inset-0 opacity-80"
        animate={{ opacity: [0.7, 0.92, 0.7] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 22% 18%, rgba(212,175,55,0.12), transparent 20%), radial-gradient(circle at 80% 16%, rgba(196,69,105,0.09), transparent 22%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_30%)] mix-blend-screen opacity-50 pointer-events-none" />
      <div className="absolute inset-0 paper-texture opacity-16 pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-35 pointer-events-none" />
      <motion.div
        className="absolute h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.20),transparent_45%)] blur-3xl pointer-events-none"
        animate={{
          left: `${pointer.x - 20}%`,
          top: `${pointer.y - 20}%`,
        }}
        transition={{ ease: "easeOut", duration: 0.14 }}
      />
      <motion.div
        className="absolute h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(196,69,105,0.22),transparent_40%)] blur-3xl pointer-events-none"
        animate={{
          left: `${pointer.x - 15}%`,
          top: `${pointer.y - 15}%`,
        }}
        transition={{ ease: "easeOut", duration: 0.16 }}
      />
      <motion.div
        className="absolute inset-0 fog-layer opacity-0 pointer-events-none"
        animate={{ opacity: [0.06, 0.16, 0.06] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      {sparkleList.map((sparkle, index) => (
        <motion.span
          key={`sparkle-${index}`}
          className="absolute block rounded-full bg-[color:var(--text)]"
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -22, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {dustList.map((dust, index) => (
        <motion.span
          key={`dust-${index}`}
          className="absolute block rounded-full bg-[color:var(--text)]/20"
          style={{
            width: `${dust.size}px`,
            height: `${dust.size}px`,
            left: `${dust.x}%`,
            top: `${dust.y}%`,
          }}
          animate={{
            opacity: [dust.opacity * 0.3, dust.opacity, dust.opacity * 0.3],
            y: [0, 18, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: dust.duration,
            repeat: Infinity,
            delay: dust.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 vignette pointer-events-none" />
    </div>
  );
}