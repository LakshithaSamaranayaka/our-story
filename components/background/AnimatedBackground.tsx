"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Sparkles from "@/components/Sparkles";
import RosePetals from "@/components/RosePetals";

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      setMousePosition({
        x: (touch.clientX / window.innerWidth) * 100,
        y: (touch.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => window.removeEventListener("touchmove", handleTouchMove);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-50 overflow-hidden"
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: ((event.clientX - bounds.left) / bounds.width) * 100,
          y: ((event.clientY - bounds.top) / bounds.height) * 100,
        });
      }}
      style={
        {
          "--bg-mouse-x": `${mousePosition.x}%`,
          "--bg-mouse-y": `${mousePosition.y}%`,
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0B] via-[#111111] to-[#161616]" />
      <motion.div
        className="absolute inset-0 opacity-80"
        animate={{ opacity: [0.72, 0.92, 0.72] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 25% 20%, rgba(212,175,55,0.12), transparent 18%), radial-gradient(circle at 80% 15%, rgba(196,69,105,0.1), transparent 20%)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--bg-mouse-x,50%)_var(--bg-mouse-y,50%),rgba(212,175,55,0.18),transparent_15%)] blur-3xl opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent_30%)] opacity-50 pointer-events-none" />
      <div className="absolute inset-0 blur-xl bg-[linear-gradient(180deg,transparent_25%,rgba(0,0,0,0.55)_85%)] pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 film-grain opacity-30" />
      <motion.div
        className="pointer-events-none absolute inset-0 fog-layer"
        animate={{ opacity: [0.06, 0.16, 0.06] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <Sparkles />
      <RosePetals />
      <div className="pointer-events-none absolute inset-0 vignette" />
    </div>
  );
}
