"use client";

import { motion } from "framer-motion";

export default function VintageBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-[#080606]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_26%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(196,69,105,0.12),transparent_28%)]" />
      <motion.div
        className="absolute inset-0 opacity-80"
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 20% 16%, rgba(255,255,255,0.06), transparent 18%), radial-gradient(circle at 78% 18%, rgba(212,175,55,0.08), transparent 20%)",
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[1.5px]" />
      <div className="absolute inset-0 film-grain opacity-22 pointer-events-none" />
      <div className="absolute inset-0 vignette pointer-events-none" />
    </div>
  );
}