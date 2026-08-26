"use client";

import { useEffect, useRef, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function CursorEffects() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sparkleRefs = useRef<Record<number, HTMLSpanElement | null>>({});

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    const handleLeave = () => {
      setPointer({ x: -1000, y: -1000 });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    const interval = window.setInterval(() => {
      setSparkles((current) => {
        if (current.length > 10) {
          current = current.slice(-8);
        }

        return [
          ...current,
          {
            id: Date.now() + Math.random(),
            x: pointer.x + (Math.random() - 0.5) * 36,
            y: pointer.y + (Math.random() - 0.5) * 36,
            size: 3 + Math.random() * 4,
            delay: Math.random() * 0.3,
          },
        ];
      });
    }, 140);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [pointer.x, pointer.y]);

  useEffect(() => {
    if (!sparkles.length) return;

    const timeout = window.setTimeout(() => {
      setSparkles((current) => current.slice(-8));
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [sparkles]);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty("--cursor-x", `${pointer.x}px`);
    containerRef.current.style.setProperty("--cursor-y", `${pointer.y}px`);
  }, [pointer]);

  useEffect(() => {
    sparkles.forEach((sparkle) => {
      const element = sparkleRefs.current[sparkle.id];
      if (!element) return;

      element.style.setProperty("--sparkle-x", `${sparkle.x}px`);
      element.style.setProperty("--sparkle-y", `${sparkle.y}px`);
      element.style.setProperty("--sparkle-size", `${sparkle.size}px`);
      element.style.setProperty("--sparkle-delay", `${sparkle.delay}s`);
    });
  }, [sparkles]);

  return (
    <>
      <div
        ref={containerRef}
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="cursor-spotlight pointer-events-none absolute rounded-full" />

        <div className="cursor-glow pointer-events-none absolute rounded-full" />

        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            ref={(element) => {
              sparkleRefs.current[sparkle.id] = element;
            }}
            className="cursor-sparkle pointer-events-none absolute rounded-full"
          />
        ))}
      </div>
    </>
  );
}
