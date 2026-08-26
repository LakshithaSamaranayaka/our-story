"use client";

import { motion } from "framer-motion";

interface PremiumButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function PremiumButton({
  children,
  onClick,
  className = "",
}: PremiumButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.03,
        y: -2,
        boxShadow: "0 0 36px rgba(255,90,120,.65)",
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.8 }}
      className={
        `
        rounded-full
        px-10
        py-4
        bg-gradient-to-r
        from-rose-500
        to-pink-500
        text-white
        font-semibold
        shadow-lg
      ` + ` ${className}`
      }
    >
      {children}
    </motion.button>
  );
}