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

    setDate(date);
    setTime(time);

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
        bg-[var(--background)]
        px-5
        py-8
        sm:px-6
        sm:py-12
      "
    >

      {/* ================================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================================= */}

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

      {/* ================================================= */}
      {/* PAGE CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-3xl">

        {/* ================================================= */}
        {/* PROGRESS HEADER */}
        {/* ================================================= */}

        <div className="mb-8 px-1 sm:mb-10">

          {/* Top labels */}

          <div className="mb-3 flex items-center justify-between">

            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-yellow-300
                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              Our Little Story
            </p>

            <p
              className="
                text-[10px]
                font-semibold
                tracking-[0.2em]
                text-yellow-300
                sm:text-xs
              "
            >
              40%
            </p>

          </div>

          {/* Progress line */}

          <div className="relative h-[2px] w-full bg-white/20">

            {/* Completed progress */}

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="
                absolute
                left-0
                top-0
                h-[2px]
                bg-gradient-to-r
                from-rose-400
                via-pink-400
                to-yellow-400
                shadow-[0_0_12px_rgba(244,63,94,0.7)]
              "
            />

            {/* Glowing progress dot */}

            <motion.div
              initial={{ left: "0%" }}
              animate={{ left: "40%" }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="
                absolute
                top-1/2
                h-4
                w-4
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-rose-300
                bg-rose-400
                shadow-[0_0_10px_rgba(244,63,94,0.9),0_0_25px_rgba(244,63,94,0.6)]
                sm:h-5
                sm:w-5
              "
            />

          </div>

          {/* Chapter */}

          <div className="mt-5 flex items-center justify-center gap-3">

            <div
              className="
                h-px
                w-12
                bg-gradient-to-r
                from-transparent
                to-yellow-400/60
                sm:w-20
              "
            />

            <span className="text-[10px] text-yellow-400 sm:text-xs">
              ✦
            </span>

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-yellow-300
                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              Chapter Two
            </span>

            <span className="text-[10px] text-yellow-400 sm:text-xs">
              ✦
            </span>

            <div
              className="
                h-px
                w-12
                bg-gradient-to-l
                from-transparent
                to-yellow-400/60
                sm:w-20
              "
            />

          </div>

        </div>


        {/* ================================================= */}
        {/* MAIN CARD */}
        {/* ================================================= */}

        <div
          className="
            relative
            w-full
            rounded-[30px]
            border
            border-[color:var(--gold)]/50
            bg-[color:var(--card)]/80
            p-6
            shadow-[0_0_70px_rgba(212,175,55,0.08)]
            backdrop-blur-xl
            sm:rounded-[32px]
            sm:p-10
          "
        >

          {/* Inner border */}

          <div
            className="
              pointer-events-none
              absolute
              inset-2
              rounded-[26px]
              border
              border-yellow-300/5
              sm:inset-3
              sm:rounded-[28px]
            "
          />

          {/* ================================================= */}
          {/* HEART */}
          {/* ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              mb-4
              text-center
              text-4xl
              sm:text-5xl
            "
          >
            ❤️
          </motion.div>


          {/* ================================================= */}
          {/* HEADING */}
          {/* ================================================= */}

          <h1
            className="
              relative
              mb-3
              text-center
              text-3xl
              font-semibold
              text-[color:var(--gold)]
              sm:text-4xl
              md:text-5xl
            "
          >
            Choose Date & Time
          </h1>

          <p
            className="
              relative
              mb-8
              text-center
              text-sm
              leading-6
              text-[color:var(--muted)]
              sm:mb-9
            "
          >
            Choose a moment that feels perfect for us...
          </p>


          {/* ================================================= */}
          {/* DATE */}
          {/* ================================================= */}

          <div className="relative mb-6">

            <label
              htmlFor="date"
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-300
                sm:text-base
              "
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


          {/* ================================================= */}
          {/* TIME */}
          {/* ================================================= */}

          <div className="relative mb-8">

            <label
              htmlFor="time"
              className="
                mb-2
                block
                text-sm
                font-medium
                text-gray-300
                sm:text-base
              "
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


          {/* ================================================= */}
          {/* PREVIEW */}
          {/* ================================================= */}

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
                relative
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


          {/* ================================================= */}
          {/* CONTINUE BUTTON */}
          {/* ================================================= */}

          <motion.button
            whileHover={isValid ? { scale: 1.02 } : {}}
            whileTap={isValid ? { scale: 0.98 } : {}}
            type="button"
            disabled={!isValid}
            onClick={handleContinue}
            className={`
              relative
              z-20
              w-full
              overflow-hidden
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

            {/* Shine */}

            {isValid && (
              <motion.div
                animate={{
                  x: ["-120%", "120%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-y-0
                  w-20
                  rotate-12
                  bg-white/20
                  blur-md
                "
              />
            )}

            <span className="relative z-10">
              Continue ❤️
            </span>

          </motion.button>


          {/* ================================================= */}
          {/* FOOTER */}
          {/* ================================================= */}

          <div className="mt-6 flex items-center justify-center gap-3">

            <div className="h-px w-10 bg-yellow-400/20" />

            <span className="text-xs text-yellow-400">
              ✦
            </span>

            <span
              className="
                text-center
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-gray-500
              "
            >
              One date · One memory
            </span>

            <span className="text-xs text-yellow-400">
              ✦
            </span>

            <div className="h-px w-10 bg-yellow-400/20" />

          </div>

        </div>

      </div>

    </motion.main>
  );
}