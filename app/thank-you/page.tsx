"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDateStore } from "@/store/dateStore";

export default function ThankYouPage() {
  const {
    dateType,
    date,
    time,
    location,
  } = useDateStore();

  const [device, setDevice] = useState<"mobile" | "desktop" | null>(null);
  const [sent, setSent] = useState(false);

  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Our special day";

  const formattedTime = time
    ? new Date(`1970-01-01T${time}`).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    : "Our special time";

  const message = `❤️ Our Date Is Confirmed!

Date: ${formattedDate}
Time: ${formattedTime}
Date: ${dateType || "A special date"}
Location: ${location || "A surprise"}

I can't wait to make this a beautiful memory with you. ❤️

Our little story is just beginning...`;

  const handleContact = () => {
    if (device === "mobile") {
      const smsBody = encodeURIComponent(message);

      window.location.href = `sms:?body=${smsBody}`;

      setSent(true);
      return;
    }

    const subject = encodeURIComponent(
      "❤️ Our Date Is Confirmed"
    );

    const body = encodeURIComponent(message);

    window.location.href =
      `mailto:?subject=${subject}&body=${body}`;

    setSent(true);
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    const isMobile =
      /android|iphone|ipad|ipod|mobile/i.test(userAgent);

    const detectedDevice = isMobile
      ? "mobile"
      : "desktop";

    setDevice(detectedDevice);

    // Wait until the romantic animation begins
    const timer = setTimeout(() => {
      if (detectedDevice === "mobile") {
        const smsBody = encodeURIComponent(message);

        window.location.href = `sms:?body=${smsBody}`;
      } else {
        const subject = encodeURIComponent(
          "❤️ Our Date Is Confirmed"
        );

        const body = encodeURIComponent(message);

        window.location.href =
          `mailto:?subject=${subject}&body=${body}`;
      }
    }, 4500);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--background)]
        flex
        items-center
        justify-center
        px-6
      "
    >

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-rose-500/20
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -70, 70, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-0
            top-0
            h-[300px]
            w-[300px]
            rounded-full
            bg-yellow-400/10
            blur-[100px]
          "
        />

      </div>

      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: "110vh",
              x: `${Math.random() * 100}vw`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: "-10vh",
            }}
            transition={{
              duration: 7 + Math.random() * 5,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              text-rose-400/40
              text-lg
            "
          >
            ❤️
          </motion.div>
        ))}

      </div>

      {/* Main card */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.85,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          relative
          z-10
          w-full
          max-w-2xl
          rounded-[40px]
          border
          border-yellow-400/40
          bg-black/40
          p-10
          text-center
          shadow-[0_0_80px_rgba(212,175,55,0.15)]
          backdrop-blur-2xl
          md:p-14
        "
      >

        {/* Heart */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-7 text-7xl"
        >
          ❤️
        </motion.div>

        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="
            mb-3
            text-sm
            uppercase
            tracking-[0.4em]
            text-yellow-300/70
          "
        >
          It's official
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="
            text-5xl
            font-semibold
            text-yellow-200
            md:text-6xl
          "
        >
          Our Date Is Confirmed
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="
            mx-auto
            mt-6
            max-w-lg
            text-lg
            leading-8
            text-gray-300
          "
        >
          And just like that...
          <br />
          we've created our first little plan together. ❤️
        </motion.p>

        {/* Date summary */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.7,
          }}
          className="
            mx-auto
            mt-8
            max-w-md
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            p-6
          "
        >

          <p className="text-sm text-gray-500">
            Our little plan
          </p>

          <div className="mt-4 space-y-3 text-gray-200">

            <p>
              🌹{" "}
              <span className="text-yellow-200">
                {dateType || "Our special date"}
              </span>
            </p>

            <p>
              📅 {formattedDate}
            </p>

            <p>
              🕰️ {formattedTime}
            </p>

            <p>
              📍 {location || "A little surprise"}
            </p>

          </div>

        </motion.div>

        {/* Contact status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-8"
        >

          {device === null ? (
            <p className="text-gray-400">
              Preparing something special... ❤️
            </p>
          ) : device === "mobile" ? (
            <>
              <p className="text-gray-300">
                💌 Opening your messages...
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Your date details will be ready to send.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-300">
                💌 Preparing your confirmation email...
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Your email application will open shortly.
              </p>
            </>
          )}

        </motion.div>

        {/* Manual button */}
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3,
          }}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={handleContact}
          className="
            mt-8
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-rose-400
            via-pink-500
            to-rose-500
            py-4
            font-semibold
            text-white
            shadow-[0_0_30px_rgba(244,63,94,0.3)]
          "
        >
          {device === "mobile"
            ? "Open Messages ❤️"
            : "Open Email ❤️"}
        </motion.button>

        {/* Final quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="
            mt-8
            text-sm
            italic
            text-rose-200/70
          "
        >
          "Maybe this is the beginning of something beautiful."
        </motion.p>

      </motion.div>

    </main>
  );
}