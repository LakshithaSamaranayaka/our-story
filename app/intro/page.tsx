"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import IntroHeart from "@/components/IntroHeart";
import Sparkles from "@/components/Sparkles";
import RosePetals from "@/components/RosePetals";
import VintageBackground from "@/components/VintageBackground";

const messages = [
  "Every heartbeat has a story.",
  "Every smile has a reason.",
  "Every beautiful memory...",
  "Starts with a single moment.",
  "Tonight...",
  "I'd like to create one with you.",
  "Welcome...",
  "To Our Little Story ❤️",
];

export default function IntroPage() {
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [introLoaded, setIntroLoaded] = useState(false);
  const currentMessage = messages[index];

  useEffect(() => {
    const loadTimer = setTimeout(() => setIntroLoaded(true), 100);
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    const duration = index < messages.length - 1 ? 3200 : 3600;

    const timer = setTimeout(() => {
      if (index < messages.length - 1) {
        setIndex((current) => current + 1);
      } else {
        router.replace("/home");
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [index, router]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: introLoaded ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      <VintageBackground />
      <Sparkles />
      <RosePetals />

      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,.12),transparent_70%)]" />

      <motion.div
        animate={{
          scale: [0.95, 1.15, 0.95],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-24 text-7xl"
      >
        <IntroHeart />
      </motion.div>

      <div className="relative w-full max-w-4xl px-10 text-center h-48 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-[color:var(--gold)] leading-relaxed">
              {currentMessage}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.main>
  );
}