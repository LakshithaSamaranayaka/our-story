"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useDateStore } from "@/store/dateStore";

export default function SchedulePage() {
  const router = useRouter();

  const setDate = useDateStore((state) => state.setDate);
  const setTime = useDateStore((state) => state.setTime);

  const [date, setSelectedDate] = useState("");
  const [time, setSelectedTime] = useState("");

  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  const isValid = date !== "" && time !== "";

  // Today's date
  const today = new Date().toISOString().split("T")[0];

  const openDatePicker = () => {
    if (dateRef.current) {
      dateRef.current.showPicker?.();
    }
  };

  const openTimePicker = () => {
    if (timeRef.current) {
      timeRef.current.showPicker?.();
    }
  };

  const handleContinue = () => {
    if (!isValid) return;

    // Save to Zustand
    setDate(date);
    setTime(time);

    // Go to next page
    router.push("/location");
  };

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
        px-6
        py-12
        bg-[var(--background)]
      "
    >
      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_65%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-72
          w-72
          rounded-full
          bg-rose-500/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-72
          w-72
          rounded-full
          bg-yellow-400/10
          blur-[120px]
        "
      />

      {/* Card */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-xl
          rounded-[32px]
          border
          border-[color:var(--gold)]/50
          bg-[color:var(--card)]/80
          p-8
          shadow-[0_0_70px_rgba(212,175,55,0.08)]
          backdrop-blur-xl
          md:p-10
        "
      >
        {/* Heart */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-4 text-center text-4xl"
        >
          ❤️
        </motion.div>

        {/* Heading */}

        <h1
          className="
            mb-3
            text-center
            text-4xl
            font-semibold
            text-[color:var(--gold)]
            md:text-5xl
          "
        >
          Choose Date & Time
        </h1>

        <p className="mb-9 text-center text-sm text-[color:var(--muted)]">
          Choose a moment that feels perfect for us...
        </p>

        {/* DATE */}

        <div className="mb-6">
          <label
            htmlFor="date"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Select Date
          </label>

          <div className="relative">
            <input
              ref={dateRef}
              id="date"
              type="date"
              min={today}
              value={date}
              onChange={(e) => setSelectedDate(e.target.value)}
              onClick={openDatePicker}
              className="
                relative
                z-20
                block
                w-full
                cursor-pointer
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-4
                py-4
                text-[color:var(--text)]
                outline-none
                transition-all
                duration-300
                hover:border-[color:var(--gold)]/70
                focus:border-[color:var(--gold)]
                focus:ring-2
                focus:ring-[color:var(--gold)]/20
              "
            />
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Choose a day for our little adventure ❤️
          </p>
        </div>

        {/* TIME */}

        <div className="mb-8">
          <label
            htmlFor="time"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Select Time
          </label>

          <div className="relative">
            <input
              ref={timeRef}
              id="time"
              type="time"
              value={time}
              onChange={(e) => setSelectedTime(e.target.value)}
              onClick={openTimePicker}
              className="
                relative
                z-20
                block
                w-full
                cursor-pointer
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-4
                py-4
                text-[color:var(--text)]
                outline-none
                transition-all
                duration-300
                hover:border-[color:var(--gold)]/70
                focus:border-[color:var(--gold)]
                focus:ring-2
                focus:ring-[color:var(--gold)]/20
              "
            />
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Pick the time when our story begins...
          </p>
        </div>

        {/* PREVIEW */}

        {isValid && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mb-6
              rounded-2xl
              border
              border-[color:var(--gold)]/20
              bg-[color:var(--gold)]/5
              p-4
              text-center
            "
          >
            <p className="text-sm text-gray-300">
              Our date is planned for
            </p>

            <p className="mt-1 text-lg text-[color:var(--gold)]">
              📅 {date}
            </p>

            <p className="mt-1 text-lg text-[color:var(--gold)]">
              🕐 {time}
            </p>
          </motion.div>
        )}

        {/* CONTINUE */}

        <motion.button
          whileHover={isValid ? { scale: 1.02 } : {}}
          whileTap={isValid ? { scale: 0.98 } : {}}
          type="button"
          disabled={!isValid}
          onClick={handleContinue}
          className={`
            w-full
            rounded-2xl
            py-4
            font-semibold
            transition-all
            duration-300
            ${
              isValid
                ? `
                  cursor-pointer
                  bg-gradient-to-r
                  from-rose-400
                  via-pink-500
                  to-rose-500
                  text-white
                  shadow-[0_0_30px_rgba(244,63,94,0.25)]
                  hover:shadow-[0_0_45px_rgba(244,63,94,0.45)]
                `
                : `
                  cursor-not-allowed
                  bg-white/10
                  text-gray-500
                `
            }
          `}
        >
          Continue ❤️
        </motion.button>
      </div>
    </motion.main>
  );
}