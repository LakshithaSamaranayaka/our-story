"use client";

import { motion } from "framer-motion";
import { AtSign, Heart, Phone } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDateStore } from "@/store/dateStore";

export default function ContactPage() {
  const router = useRouter();

  const [phone, setPhoneInput] = useState("");
  const [instagram, setInstagramInput] = useState("");

  const setPhone = useDateStore((state) => state.setPhone);
  const setInstagram = useDateStore((state) => state.setInstagram);

  const isValid =
    phone.trim() !== "" &&
    instagram.trim() !== "";

  const handleContinue = () => {
    if (!isValid) return;

    setPhone(phone.trim());
    setInstagram(instagram.trim());

    router.push("/overview");
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

      {/* Rose glow */}
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

      {/* Gold glow */}
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

      <div className="relative z-10 mx-auto w-full max-w-3xl">

        {/* ================================================= */}
        {/* STORY PROGRESS BAR - DESKTOP */}
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
              80%
            </p>

          </div>

          {/* Progress line */}

          <div className="relative h-[2px] w-full bg-white/20">

            {/* Completed progress */}

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80%" }}
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
              animate={{ left: "80%" }}
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
              Chapter four
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
          className="mb-10 text-center md:mb-14"
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
            How Can I
            <br />
            <span className="text-yellow-300">
              Reach You?
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
            Just so I know where to find you
            <br className="sm:hidden" />
            when our little plan begins... ❤️
          </p>

        </motion.div>

        {/* ================================================= */}
        {/* CONTACT CARD */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-yellow-400/30
            bg-white/[0.035]
            p-6
            shadow-[0_0_60px_rgba(212,175,55,0.08)]
            backdrop-blur-xl
            sm:p-9
            md:p-12
          "
        >

          {/* Inner border */}

          <div
            className="
              pointer-events-none
              absolute
              inset-3
              rounded-[30px]
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
              w-60
              -translate-x-1/2
              rounded-full
              bg-yellow-400/5
              blur-[70px]
            "
          />

          <div className="relative">

            {/* ================================================= */}
            {/* HEART */}
            {/* ================================================= */}

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mb-6
                flex
                justify-center
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-rose-400/20
                  bg-rose-500/5
                  shadow-[0_0_30px_rgba(244,63,94,0.12)]
                "
              >
                <Heart
                  size={32}
                  fill="currentColor"
                  className="
                    text-rose-400
                    drop-shadow-[0_0_15px_rgba(244,63,94,0.45)]
                  "
                />
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* PHONE */}
            {/* ================================================= */}

            <div className="mb-7">

              <label
                htmlFor="phone"
                className="
                  mb-3
                  block
                  text-sm
                  font-medium
                  text-gray-300
                "
              >
                Phone Number
              </label>

              <div className="group relative">

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-2xl
                    bg-yellow-400/0
                    blur-xl
                    transition-all
                    duration-500
                    group-focus-within:bg-yellow-400/5
                  "
                />

                <Phone
                  size={20}
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-1/2
                    z-10
                    -translate-y-1/2
                    text-yellow-300/80
                    transition-colors
                    duration-300
                    group-focus-within:text-yellow-300
                  "
                />

                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+94 77 123 4567"
                  value={phone}
                  onChange={(e) =>
                    setPhoneInput(e.target.value)
                  }
                  className="
                    relative
                    z-20
                    block
                    w-full
                    rounded-2xl
                    border
                    border-white/15
                    bg-white/[0.06]
                    px-14
                    py-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    transition-all
                    duration-300
                    hover:border-yellow-400/40
                    focus:border-yellow-400/70
                    focus:bg-white/[0.08]
                    focus:ring-2
                    focus:ring-yellow-400/10
                  "
                />

              </div>

              <p className="mt-2 text-xs text-gray-600">
                So I know where to reach you when the
                adventure begins.
              </p>

            </div>

            {/* ================================================= */}
            {/* INSTAGRAM */}
            {/* ================================================= */}

            <div className="mb-8">

              <label
                htmlFor="instagram"
                className="
                  mb-3
                  block
                  text-sm
                  font-medium
                  text-gray-300
                "
              >
                Instagram Username
              </label>

              <div className="group relative">

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-2xl
                    bg-yellow-400/0
                    blur-xl
                    transition-all
                    duration-500
                    group-focus-within:bg-yellow-400/5
                  "
                />

                <AtSign
                  size={20}
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-1/2
                    z-10
                    -translate-y-1/2
                    text-yellow-300/80
                    transition-colors
                    duration-300
                    group-focus-within:text-yellow-300
                  "
                />

                <input
                  id="instagram"
                  type="text"
                  autoComplete="username"
                  placeholder="yourusername"
                  value={instagram}
                  onChange={(e) =>
                    setInstagramInput(e.target.value)
                  }
                  className="
                    relative
                    z-20
                    block
                    w-full
                    rounded-2xl
                    border
                    border-white/15
                    bg-white/[0.06]
                    px-14
                    py-4
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    transition-all
                    duration-300
                    hover:border-yellow-400/40
                    focus:border-yellow-400/70
                    focus:bg-white/[0.08]
                    focus:ring-2
                    focus:ring-yellow-400/10
                  "
                />

              </div>

              <p className="mt-2 text-xs text-gray-600">
                Just in case I need to send you a little
                message. 📸
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
                transition={{
                  duration: 0.4,
                }}
                className="
                  mb-7
                  rounded-2xl
                  border
                  border-yellow-400/15
                  bg-yellow-400/[0.03]
                  px-5
                  py-4
                  text-center
                "
              >

                <p className="text-xs uppercase tracking-[0.2em] text-yellow-300/50">
                  Almost there
                </p>

                <p className="mt-2 text-sm text-gray-300">
                  I'll know how to find you ❤️
                </p>

              </motion.div>
            )}

            {/* ================================================= */}
            {/* CONTINUE BUTTON */}
            {/* ================================================= */}

            <motion.button
              type="button"
              disabled={!isValid}
              onClick={handleContinue}
              whileHover={
                isValid
                  ? {
                      scale: 1.02,
                    }
                  : {}
              }
              whileTap={
                isValid
                  ? {
                      scale: 0.97,
                    }
                  : {}
              }
              className={`
                group
                relative
                w-full
                overflow-hidden
                rounded-2xl
                py-4
                text-base
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
                      hover:shadow-[0_0_50px_rgba(244,63,94,0.45)]
                    `
                    : `
                      cursor-not-allowed
                      bg-white/[0.06]
                      text-gray-600
                    `
                }
              `}
            >

              {/* Button shine */}

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
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    w-20
                    rotate-12
                    bg-white/20
                    blur-md
                  "
                />
              )}

              <span className="relative z-10 flex items-center justify-center gap-2">

                Continue

                <Heart
                  size={18}
                  fill="currentColor"
                  className={`
                    transition-transform
                    duration-300
                    ${
                      isValid
                        ? "group-hover:scale-125"
                        : ""
                    }
                  `}
                />

              </span>

            </motion.button>

          </div>

        </motion.div>

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
            delay: 1,
            duration: 0.8,
          }}
          className="mt-10 text-center"
        >

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-yellow-400/20" />

            <span className="text-xs text-yellow-300/50">
              ♥
            </span>

            <span className="h-px w-12 bg-yellow-400/20" />

          </div>

          <p className="text-xs tracking-wide text-gray-500">
            One more little step...
          </p>

        </motion.div>

      </div>

    </motion.main>
  );
}