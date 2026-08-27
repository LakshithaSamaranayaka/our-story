"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDateStore } from "@/store/dateStore";

const options = [
  {
    id: "01",
    icon: "☕",
    title: "Coffee Date",
    description: "Slow conversations over something warm.",
    quote: "A little coffee, a little us.",
  },
  {
    id: "02",
    icon: "🍽️",
    title: "Dinner Date",
    description: "Good food, soft lights and better company.",
    quote: "Tonight deserves something special.",
  },
  {
    id: "03",
    icon: "🌳",
    title: "Park",
    description: "A peaceful walk beneath the evening sky.",
    quote: "Sometimes simple moments mean the most.",
  },
  {
    id: "04",
    icon: "🌿",
    title: "Nature Walk",
    description: "Fresh air, quiet paths and shared moments.",
    quote: "Let's get a little lost together.",
  },
  {
    id: "05",
    icon: "🎮",
    title: "Gaming Session",
    description: "A little competition and lots of laughter.",
    quote: "Winner gets to choose the next date.",
  },
  {
    id: "06",
    icon: "🎬",
    title: "Movie Night",
    description: "A cozy movie and someone special beside you.",
    quote: "One movie. One evening. One memory.",
  },
];

export default function DateTypePage() {
  const router = useRouter();

  const setDateType = useDateStore((state) => state.setDateType);

  const [hovered, setHovered] = useState<string | null>(null);

  /* -------------------------------- */
  /* Mouse position                   */
  /* -------------------------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  /* -------------------------------- */
  /* Select date                      */
  /* -------------------------------- */

  const handleSelect = (title: string) => {
    setDateType(title);
    router.push("/schedule");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080706] text-white">

      {/* ===================================== */}
      {/* BACKGROUND                            */}
      {/* ===================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Dark gradient */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.09),transparent_35%),linear-gradient(135deg,#080706,#11100d,#080706)]
          "
        />

        {/* Rose glow */}
        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-150px]
            top-[10%]
            h-[380px]
            w-[380px]
            rounded-full
            bg-rose-500/10
            blur-[120px]
          "
        />

        {/* Gold glow */}
        <motion.div
          animate={{
            x: [0, -70, 50, 0],
            y: [0, 50, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-150px]
            bottom-[5%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-yellow-500/10
            blur-[130px]
          "
        />

        {/* Top light */}
        <div
          className="
            absolute
            left-1/2
            top-[-180px]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-yellow-400/[0.04]
            blur-[100px]
          "
        />

        {/* Mouse glow */}
        <motion.div
          style={{
            left: smoothX,
            top: smoothY,
          }}
          className="
            fixed
            z-0
            hidden
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-yellow-400/[0.06]
            blur-[90px]
            md:block
          "
        />

        {/* Noise texture */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            mix-blend-overlay
          "
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
          }}
        />

      </div>

      {/* ===================================== */}
      {/* CONTENT                               */}
      {/* ===================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-10 sm:px-8 md:py-14">

        {/* ================================= */}
        {/* PROGRESS                           */}
        {/* ================================= */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 w-full max-w-3xl"
        >

          <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">

            <span className="text-yellow-300/60">
              Our Little Story
            </span>

            <span className="text-yellow-300/60">
              20%
            </span>

          </div>

          <div className="relative h-[2px] w-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "20%" }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="
                absolute
                left-0
                top-0
                h-full
                bg-gradient-to-r
                from-rose-400
                via-pink-400
                to-yellow-300
                shadow-[0_0_12px_rgba(212,175,55,0.6)]
              "
            />

            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                absolute
                left-[20%]
                top-1/2
                h-3
                w-3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-rose-400
                shadow-[0_0_15px_rgba(244,63,94,0.8)]
              "
            />

          </div>

        </motion.div>

        {/* ================================= */}
        {/* HEADER                             */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-12 text-center"
        >

          <div className="mb-5 flex items-center justify-center gap-4">

            <span className="h-px w-10 bg-gradient-to-r from-transparent to-yellow-400/50" />

            <span className="text-sm text-yellow-300/70">
              ✦
            </span>

            <span className="text-sm text-yellow-300/70">
              CHAPTER ONE
            </span>

            <span className="text-sm text-yellow-300/70">
              ✦
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-yellow-400/50" />

          </div>

          <h1
            className="
              font-serif
              text-5xl
              leading-[0.95]
              tracking-wide
              text-yellow-200
              sm:text-6xl
              md:text-7xl
            "
          >
            What Kind of
            <br />
            <span className="text-yellow-300">
              Date?
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
            Every beautiful memory begins with a choice.
            <br />
            So... what should our little story look like?
          </p>

          <p
            className="
              mt-5
              font-serif
              text-xl
              italic
              text-rose-300/80
            "
          >
            "Choose a moment worth remembering."
          </p>

        </motion.div>

        {/* ================================= */}
        {/* DATE CARDS                         */}
        {/* ================================= */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {options.map((option, index) => {

            const isHovered = hovered === option.id;

            return (
              <motion.button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.title)}
                onMouseEnter={() => setHovered(option.id)}
                onMouseLeave={() => setHovered(null)}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  relative
                  min-h-[245px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-yellow-400/20
                  bg-white/[0.035]
                  p-6
                  text-left
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-yellow-300/60
                  hover:bg-yellow-300/[0.045]
                  hover:shadow-[0_15px_60px_rgba(212,175,55,0.12)]
                "
              >

                {/* Card glow */}
                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.12),transparent_60%)]
                  "
                />

                {/* Shine */}
                <motion.div
                  initial={{
                    x: "-130%",
                  }}
                  animate={
                    isHovered
                      ? {
                          x: "130%",
                        }
                      : {
                          x: "-130%",
                        }
                  }
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    w-24
                    rotate-12
                    bg-white/10
                    blur-xl
                  "
                />

                {/* Number */}
                <div className="absolute right-5 top-5">

                  <span className="
                    font-serif
                    text-4xl
                    font-light
                    text-yellow-300/[0.12]
                  ">
                    {option.id}
                  </span>

                </div>

                {/* Icon */}
                <motion.div
                  animate={
                    isHovered
                      ? {
                          scale: 1.12,
                          rotate: -4,
                        }
                      : {
                          scale: 1,
                          rotate: 0,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="
                    relative
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-yellow-400/20
                    bg-gradient-to-br
                    from-yellow-300/10
                    to-rose-400/10
                    text-3xl
                    shadow-[0_0_25px_rgba(212,175,55,0.05)]
                  "
                >
                  {option.icon}
                </motion.div>

                {/* Title */}
                <h2
                  className="
                    relative
                    font-serif
                    text-2xl
                    tracking-wide
                    text-yellow-100
                    transition-colors
                    duration-300
                    group-hover:text-yellow-300
                  "
                >
                  {option.title}
                </h2>

                {/* Description */}
                <p className="
                  relative
                  mt-3
                  max-w-[260px]
                  text-sm
                  leading-6
                  text-white/45
                ">
                  {option.description}
                </p>

                {/* Quote */}
                <p className="
                  relative
                  mt-5
                  font-serif
                  text-sm
                  italic
                  text-rose-300/60
                ">
                  {option.quote}
                </p>

                {/* Bottom action */}
                <div className="
                  relative
                  mt-6
                  flex
                  items-center
                  justify-between
                ">

                  <span className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/25
                    transition-colors
                    group-hover:text-yellow-300/60
                  ">
                    Choose this
                  </span>

                  <motion.span
                    animate={
                      isHovered
                        ? {
                            x: 5,
                            opacity: 1,
                          }
                        : {
                            x: 0,
                            opacity: 0.4,
                          }
                    }
                    className="
                      text-lg
                      text-yellow-300
                    "
                  >
                    →
                  </motion.span>

                </div>

                {/* Bottom gold line */}
                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: isHovered ? "100%" : "0%",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    bg-gradient-to-r
                    from-rose-400
                    via-yellow-300
                    to-transparent
                  "
                />

              </motion.button>
            );
          })}

        </div>

        {/* ================================= */}
        {/* FOOTER                             */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="mt-12 pb-5 text-center"
        >

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-white/10" />

            <span className="text-xs text-rose-300/60">
              ♡
            </span>

            <span className="h-px w-12 bg-white/10" />

          </div>

          <p className="text-xs tracking-[0.2em] text-white/25">
            THE FIRST CHOICE OF OUR LITTLE STORY
          </p>

        </motion.div>

      </div>
    </main>
  );
}