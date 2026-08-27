"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import IntroHeart from "@/components/IntroHeart";
import Sparkles from "@/components/Sparkles";
import RosePetals from "@/components/RosePetals";
import VintageBackground from "@/components/VintageBackground";

const messages = [
  {
    chapter: "CHAPTER ONE",
    text: "Every heartbeat has a story.",
  },
  {
    chapter: "CHAPTER ONE",
    text: "Every smile has a reason.",
  },
  {
    chapter: "CHAPTER TWO",
    text: "Every beautiful memory...",
  },
  {
    chapter: "CHAPTER TWO",
    text: "Starts with a single moment.",
  },
  {
    chapter: "CHAPTER THREE",
    text: "Tonight...",
  },
  {
    chapter: "CHAPTER THREE",
    text: "I'd like to create one with you.",
  },
  {
    chapter: "THE BEGINNING",
    text: "Welcome...",
  },
  {
    chapter: "OUR LITTLE STORY",
    text: "To Our Little Story ❤️",
  },
];

export default function IntroPage() {
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [introLoaded, setIntroLoaded] = useState(false);

  const currentMessage = messages[index];

  const progress = Math.round(
    ((index + 1) / messages.length) * 100
  );

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIntroLoaded(true);
    }, 100);

    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    const duration =
      index < messages.length - 1 ? 3200 : 4000;

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
      animate={{
        opacity: introLoaded ? 1 : 0,
      }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =====================================================
          VINTAGE BACKGROUND
      ====================================================== */}

      <VintageBackground />

      {/* Existing effects */}

      <Sparkles />

      <RosePetals />

      {/* =====================================================
          CINEMATIC OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.13),transparent_45%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.08),transparent_35%)]
        "
      />

      {/* Dark cinematic edges */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.72)_100%)]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-30
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-6
          pb-12
          pt-28
        "
      >

        {/* =================================================
            DECORATIVE TOP ELEMENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="
            mb-8
            flex
            items-center
            gap-4
          "
        >

          <div className="h-px w-10 bg-gradient-to-r from-transparent to-yellow-400/50" />

          <span
            className="
              text-sm
              text-yellow-300/80
            "
          >
            ✦
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-yellow-300/60
            "
          >
            A little beginning
          </span>

          <span
            className="
              text-sm
              text-yellow-300/80
            "
          >
            ✦
          </span>

          <div className="h-px w-10 bg-gradient-to-l from-transparent to-yellow-400/50" />

        </motion.div>

        {/* =================================================
            HEART AREA
        ================================================= */}

        <div
          className="
            relative
            mb-12
            flex
            h-44
            w-44
            items-center
            justify-center
            md:mb-14
            md:h-52
            md:w-52
          "
        >

          {/* Outer gold ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              rounded-full
              border
              border-yellow-400/20
            "
          />

          {/* Second decorative ring */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-4
              rounded-full
              border
              border-dashed
              border-rose-400/15
            "
          />

          {/* Gold dots */}

          <div className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-yellow-300/70 shadow-[0_0_12px_rgba(212,175,55,0.8)]" />

          <div className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-yellow-300/50" />

          <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-yellow-300/50" />

          <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-rose-300/50 shadow-[0_0_10px_rgba(244,63,94,0.5)]" />

          {/* Heart glow */}

          <motion.div
            animate={{
              scale: [0.9, 1.12, 0.9],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-32
              w-32
              rounded-full
              bg-rose-500/20
              blur-[45px]
            "
          />

          {/* Heart */}

          <motion.div
            animate={{
              scale: [0.94, 1.07, 0.94],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              drop-shadow-[0_0_35px_rgba(244,63,94,0.45)]
            "
          >
            <IntroHeart />
          </motion.div>

        </div>

        {/* =================================================
            MESSAGE
        ================================================= */}

        <div
          className="
            relative
            flex
            min-h-[190px]
            w-full
            max-w-4xl
            items-center
            justify-center
            text-center
          "
        >

          {/* Decorative vertical lines */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-1/2
              hidden
              h-20
              w-px
              -translate-y-1/2
              bg-gradient-to-b
              from-transparent
              via-yellow-400/30
              to-transparent
              md:block
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-1/2
              hidden
              h-20
              w-px
              -translate-y-1/2
              bg-gradient-to-b
              from-transparent
              via-yellow-400/30
              to-transparent
              md:block
            "
          />

          <AnimatePresence
            mode="wait"
            initial={false}
          >
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -35,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                px-4
              "
            >

              <h1
                className="
                  max-w-3xl
                  font-serif
                  text-4xl
                  font-normal
                  leading-[1.25]
                  tracking-wide
                  text-yellow-200
                  drop-shadow-[0_0_20px_rgba(212,175,55,0.12)]
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                {currentMessage.text}
              </h1>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* =================================================
            BOTTOM DECORATION
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="
            mt-10
            flex
            flex-col
            items-center
            gap-3
          "
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400/30" />

            <span className="text-xs text-yellow-300/60">
              ◆
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400/30" />

          </div>

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-white/25
            "
          >
            Stay for the story
          </p>

        </motion.div>

      </div>

      {/* =====================================================
          BOTTOM CORNER DETAILS
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-7
          left-7
          z-40
          hidden
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-white/20
          md:block
        "
      >
        EST. TONIGHT
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-7
          right-7
          z-40
          hidden
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-white/20
          md:block
        "
      >
        WITH LOVE ✦
      </div>

    </motion.main>
  );
}