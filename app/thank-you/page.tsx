"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useDateStore } from "@/store/dateStore";

export default function ThankYouPage(){
  const { dateType, date, time, location, phone, instagram } = useDateStore();

  useEffect(() => {
    const message = `Hi ❤️ I accepted your date invitation! Here are my choices:\n\n☕ Date Type: ${dateType}\n📅 Date: ${date}\n🕒 Time: ${time}\n📍 Location: ${location}\n\nPhone: ${phone}\nInstagram: ${instagram}\n\nI can't wait! ❤️`;

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const openMessageApp = () => {
      if (isMobile) {
        window.location.href =
          `sms:+94787045693?body=${encodeURIComponent(message)}`;
      } else {
        window.location.href =
          `mailto:samaranayakal95@email.com?subject=${encodeURIComponent(
            "Our Date ❤️"
          )}&body=${encodeURIComponent(message)}`;
      }
    };

    const timer = setTimeout(openMessageApp, 3000);
    return () => clearTimeout(timer);
  }, [dateType, date, time, location, phone, instagram]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen overflow-hidden"
    >
      <Confetti />

      <main className="min-h-screen bg-[var(--background)] flex justify-center items-center px-6">
        <div className="premium-card max-w-2xl rounded-[32px] border-[color:var(--gold)]/40 bg-[color:var(--card)] p-12 text-center">
          <h1 className="text-6xl mb-8">❤️</h1>

          <h2 className="text-5xl text-[color:var(--gold)] mb-8">Thank You</h2>

          <p className="text-xl text-[color:var(--muted)] leading-9">
            Thank you for saying YES.
            <br />
            I can't wait to spend this beautiful day with you.
            <br />
            This is only the beginning of many wonderful memories together.
            <br />
            See you soon ❤️
          </p>
        </div>
      </main>
    </motion.div>
  );
}
