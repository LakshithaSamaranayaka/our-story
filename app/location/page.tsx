"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDateStore } from "@/store/dateStore";

const locations = [
  {
    icon: "❤️",
    title: "Your Favorite Spot",
    description: "Let's visit the place you love the most.",
  },
  {
    icon: "🌹",
    title: "My Favorite Spot",
    description: "I have a special place I'd love to share.",
  },
  {
    icon: "✨",
    title: "Surprise Me",
    description: "I'll plan everything for you.",
  },
  {
    icon: "🤝",
    title: "We'll Decide Together",
    description: "Let's choose our destination together.",
  },
];

export default function LocationPage() {
  const router = useRouter();

  const setLocation = useDateStore((state) => state.setLocation);

  const handleLocation = (location: string) => {
    setLocation(location);
    router.push("/contact");
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--background)]
        px-5
        py-10
        sm:px-8
        md:px-10
      "
    >
      {/* ===================================================== */}
      {/* BACKGROUND EFFECTS */}
      {/* ===================================================== */}

      {/* Main gold glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.12),transparent_55%)]
        "
      />

      {/* Left rose glow */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-32
          top-40
          h-80
          w-80
          rounded-full
          bg-rose-500/10
          blur-[120px]
        "
      />

      {/* Right gold glow */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-80
          w-80
          rounded-full
          bg-yellow-400/10
          blur-[120px]
        "
      />

      {/* ===================================================== */}
      {/* FLOATING PARTICLES */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(14)].map((_, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: "110vh",
              x: `${(index * 73) % 100}vw`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: "-10vh",
            }}
            transition={{
              duration: 9 + (index % 5),
              repeat: Infinity,
              delay: index * 0.7,
              ease: "linear",
            }}
            className="
              absolute
              text-xs
              text-yellow-400/30
            "
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* ===================================================== */}
      {/* PAGE CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* ================================================= */}
        {/* STORY PROGRESS BAR */}
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
              60%
            </p>

          </div>

          {/* Progress line */}

          <div className="relative h-[2px] w-full bg-white/20">

            {/* Completed progress */}

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
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
              animate={{ left: "60%" }}
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
              Chapter Three
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
        {/* HEADER */}
        {/* ================================================= */}

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
          className="mb-12 text-center md:mb-16"
        >

         

          <h1
            className="
              text-5xl
              leading-[1.1]
              text-[color:var(--gold)]
              sm:text-6xl
              md:text-7xl
            "
          >
            Where Should
            <br />
            <span className="text-yellow-300">
              We Go?
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-[color:var(--muted)]
              sm:text-base
            "
          >
            Maybe somewhere familiar...
            <br className="sm:hidden" />
            or somewhere we've never been before. ❤️
          </p>

        </motion.div>

        {/* ================================================= */}
        {/* LOCATION CARDS */}
        {/* ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            md:gap-7
          "
        >

          {locations.map((item, index) => (

            <motion.button
              key={item.title}
              type="button"
              onClick={() => handleLocation(item.title)}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.025,
                y: -5,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-yellow-400/30
                bg-white/[0.035]
                px-7
                py-9
                text-center
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-yellow-400/70
                hover:bg-white/[0.055]
                hover:shadow-[0_0_45px_rgba(212,175,55,0.10)]
                sm:px-10
                sm:py-12
              "
            >

              {/* Card glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-0
                  h-32
                  w-32
                  -translate-x-1/2
                  rounded-full
                  bg-yellow-400/5
                  blur-[50px]
                  transition-all
                  duration-500
                  group-hover:bg-yellow-400/10
                "
              />

              {/* Top shine */}

              <motion.div
                initial={{
                  x: "-120%",
                }}
                whileHover={{
                  x: "120%",
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-24
                  rotate-12
                  bg-white/5
                  blur-xl
                "
              />

              {/* Icon */}

              <motion.div
                whileHover={{
                  scale: 1.15,
                  rotate: 4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 12,
                }}
                className="
                  relative
                  mx-auto
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-yellow-400/25
                  bg-yellow-400/5
                  text-3xl
                  shadow-[0_0_25px_rgba(212,175,55,0.08)]
                  sm:h-20
                  sm:w-20
                  sm:text-4xl
                "
              >
                {item.icon}
              </motion.div>

              {/* Title */}

              <h2
                className="
                  relative
                  text-2xl
                  font-medium
                  tracking-wide
                  text-gray-100
                  transition-colors
                  duration-300
                  group-hover:text-yellow-200
                  sm:text-3xl
                "
              >
                {item.title}
              </h2>

              {/* Description */}

              <p
                className="
                  relative
                  mx-auto
                  mt-4
                  max-w-md
                  text-sm
                  leading-7
                  text-gray-400
                  transition-colors
                  duration-300
                  group-hover:text-gray-300
                  sm:text-base
                "
              >
                {item.description}
              </p>

              {/* Bottom arrow */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                whileHover={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  relative
                  mt-6
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-rose-300
                "
              >
                Choose this ✦
              </motion.div>

            </motion.button>

          ))}

        </div>

        {/* ================================================= */}
        {/* BOTTOM MESSAGE */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
          className="mt-12 text-center md:mt-16"
        >

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-yellow-400/20" />

            <span className="text-xs text-yellow-300/50">
              ♥
            </span>

            <span className="h-px w-12 bg-yellow-400/20" />

          </div>

          <p className="text-xs tracking-wide text-gray-500">
            The destination is only part of the story...
          </p>

        </motion.div>

      </div>
    </motion.main>
  );
}