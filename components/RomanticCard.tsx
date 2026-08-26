"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function RomanticCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [shine, setShine] = useState({ x: "50%", y: "50%" });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - y) * 8;
    const rotateY = (x - 0.5) * 8;

    setTilt({ rotateX, rotateY });
    setShine({ x: `${x * 100}%`, y: `${y * 100}%` });

    if (cardRef.current) {
      cardRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
      cardRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
      cardRef.current.style.setProperty("--shine-x", `${x * 100}%`);
      cardRef.current.style.setProperty("--shine-y", `${y * 100}%`);
    }
  };

  const handleLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setShine({ x: "50%", y: "50%" });
    setHovered(false);

    if (cardRef.current) {
      cardRef.current.style.setProperty("--rotate-x", "0deg");
      cardRef.current.style.setProperty("--rotate-y", "0deg");
      cardRef.current.style.setProperty("--shine-x", "50%");
      cardRef.current.style.setProperty("--shine-y", "50%");
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      className="
        premium-card
        card-shell
        relative
        w-full
        max-w-3xl
        overflow-hidden
        rounded-[40px]
        border
        border-[color:var(--gold)]/35
        bg-[color:var(--background)]
        p-12
        shadow-[0_24px_80px_rgba(0,0,0,0.35),0_0_40px_rgba(212,175,55,0.16)]
      "
    >
      <div
        className={`card-glow pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-75"}`}
      />

      <div
        className={`card-shine pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      />

      <div
        className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent p-[1px] transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
      >
        <div className="h-full w-full rounded-[calc(2.5rem-1px)] bg-[rgba(255,255,255,0.04)]" />
      </div>

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}