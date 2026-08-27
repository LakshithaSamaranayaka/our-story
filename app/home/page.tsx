"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Heart, Sparkles } from "lucide-react";

import Background from "@/components/Background";

export default function Home() {
  const router = useRouter();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--background)]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <Background />

      {/* Gold center glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_68%)]
          blur-3xl
        "
      />

      {/* Rose glow */}

      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -50, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          z-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-rose-500/10
          blur-[120px]
        "
      />

      {/* Gold glow */}

      <motion.div
        animate={{
          x: [0, -60, 50, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          z-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-yellow-500/10
          blur-[120px]
        "
      />

      {/* =====================================================
          FLOATING GOLD PARTICLES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

        <motion.span
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[15%]
            top-[20%]
            h-1.5
            w-1.5
            rounded-full
            bg-yellow-300
            shadow-[0_0_12px_rgba(212,175,55,0.8)]
          "
        />

        <motion.span
          animate={{
            y: [0, 35, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[18%]
            top-[30%]
            h-1
            w-1
            rounded-full
            bg-yellow-200
            shadow-[0_0_12px_rgba(212,175,55,0.8)]
          "
        />

        <motion.span
          animate={{
            y: [0, -25, 0],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[25%]
            left-[22%]
            h-1
            w-1
            rounded-full
            bg-rose-300
            shadow-[0_0_12px_rgba(244,63,94,0.7)]
          "
        />

        <motion.span
          animate={{
            y: [0, 30, 0],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[20%]
            right-[20%]
            h-1.5
            w-1.5
            rounded-full
            bg-yellow-300
            shadow-[0_0_12px_rgba(212,175,55,0.8)]
          "
        />

      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-5
          py-12
        "
      >

        {/* =================================================
            PREMIUM CARD
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-xl
            overflow-hidden
            rounded-[38px]
            border
            border-yellow-400/40
            bg-black/35
            px-7
            py-10
            shadow-[0_0_80px_rgba(212,175,55,0.12)]
            backdrop-blur-2xl
            sm:px-10
            sm:py-12
          "
        >

          {/* Inner gold border */}

          <div
            className="
              pointer-events-none
              absolute
              inset-3
              rounded-[32px]
              border
              border-yellow-300/10
            "
          />

          {/* Top glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-40
              w-72
              -translate-x-1/2
              rounded-full
              bg-yellow-400/10
              blur-[70px]
            "
          />

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative z-10">

            {/* Small label */}

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              className="
                mb-6
                flex
                items-center
                justify-center
                gap-3
              "
            >

              <div className="h-px w-10 bg-gradient-to-r from-transparent to-yellow-400/60" />

              <Sparkles
                size={15}
                className="text-yellow-300"
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-yellow-300/70
                "
              >
                Our Little Story
              </span>

              <Sparkles
                size={15}
                className="text-yellow-300"
              />

              <div className="h-px w-10 bg-gradient-to-l from-transparent to-yellow-400/60" />

            </motion.div>

            {/* =================================================
                HEART
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.55,
                duration: 0.7,
                type: "spring",
                stiffness: 180,
              }}
              className="
                mb-5
                flex
                justify-center
              "
            >

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  bg-rose-500/10
                  shadow-[0_0_45px_rgba(244,63,94,0.18)]
                "
              >

                {/* Heart glow */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-rose-500/10
                    blur-xl
                  "
                />

                <Heart
                  size={54}
                  fill="currentColor"
                  strokeWidth={1.4}
                  className="
                    relative
                    z-10
                    text-rose-400
                    drop-shadow-[0_0_18px_rgba(244,63,94,0.6)]
                  "
                />

              </motion.div>

            </motion.div>

            {/* =================================================
                TITLE
            ================================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="
                text-center
                font-serif
                text-5xl
                font-medium
                tracking-wide
                text-[#f5f5f5]
                sm:text-6xl
              "
            >
              Our Story

              <span className="ml-2 text-rose-400">
                ❤️
              </span>
            </motion.h1>

            {/* Gold divider */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                delay: 0.9,
                duration: 0.7,
              }}
              className="
                mx-auto
                my-6
                flex
                max-w-xs
                items-center
                gap-3
              "
            >

              <div
                className="
                  h-px
                  flex-1
                  bg-gradient-to-r
                  from-transparent
                  to-yellow-400/50
                "
              />

              <span className="text-sm text-yellow-300">
                ✦
              </span>

              <div
                className="
                  h-px
                  flex-1
                  bg-gradient-to-l
                  from-transparent
                  to-yellow-400/50
                "
              />

            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.7,
              }}
              className="
                mx-auto
                max-w-md
                text-center
                text-base
                leading-8
                text-gray-300
                sm:text-lg
              "
            >
              Every beautiful love story begins
              <br />
              with one simple question.
              <br />
              And today, I'd like to ask you
              <br />
              something special...
            </motion.p>

            {/* =================================================
                ROMANTIC QUOTE
            ================================================== */}

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
                delay: 1.2,
                duration: 0.8,
              }}
              className="my-8 text-center"
            >

              <p
                className="
                  romantic-quote
                  text-3xl
                  leading-relaxed
                  text-yellow-300
                  sm:text-4xl
                "
              >
                “My heart chose you.”
              </p>

              <div
                className="
                  mx-auto
                  mt-3
                  h-px
                  w-16
                  bg-gradient-to-r
                  from-transparent
                  via-yellow-400/50
                  to-transparent
                "
              />

            </motion.div>

            {/* =================================================
                BUTTON
            ================================================== */}

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
                delay: 1.4,
                duration: 0.7,
              }}
              className="flex justify-center"
            >

              <motion.button
                type="button"
                onClick={() => router.push("/question")}
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 0 45px rgba(244,63,94,0.45)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  relative
                  w-full
                  max-w-sm
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-rose-500
                  via-pink-500
                  to-rose-500
                  px-8
                  py-4
                  text-base
                  font-semibold
                  text-white
                  shadow-[0_0_30px_rgba(244,63,94,0.25)]
                  transition-all
                  duration-300
                  sm:text-lg
                "
              >

                {/* Button shine */}

                <motion.span
                  animate={{
                    x: ["-150%", "150%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-16
                    rotate-12
                    bg-white/20
                    blur-md
                  "
                />

                <span className="relative z-10">
                  Begin Our Journey
                  <span className="ml-2">
                    ❤️
                  </span>
                </span>

              </motion.button>

            </motion.div>

            {/* =================================================
                FOOTER
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.7,
                duration: 0.7,
              }}
              className="
                mt-7
                text-center
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-gray-500
              "
            >
              A little courage · A little love · A beautiful beginning
            </motion.p>

          </div>

        </motion.div>

      </section>
    </motion.main>
  );
}