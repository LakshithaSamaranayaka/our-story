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
      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_65%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-[10%]
          z-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-rose-500/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-150px]
          right-[-100px]
          z-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-yellow-400/10
          blur-[120px]
        "
      />

      {/* =========================
          CONTACT CARD
      ========================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          z-50
          w-full
          max-w-xl
          rounded-[32px]
          border
          border-[color:var(--gold)]/50
          bg-[color:var(--card)]/90
          p-8
          shadow-[0_0_80px_rgba(212,175,55,0.08)]
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
          className="mb-4 flex justify-center"
        >
          <Heart
            size={42}
            fill="currentColor"
            className="
              text-rose-400
              drop-shadow-[0_0_20px_rgba(244,63,94,0.45)]
            "
          />
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
          How Can I Reach You?
        </h1>

        <p
          className="
            mb-10
            text-center
            text-sm
            text-[color:var(--muted)]
          "
        >
          Just so I know where to find you when our little plan begins...
          ❤️
        </p>

        {/* =========================
            PHONE
        ========================== */}

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-300
            "
          >
            Phone Number
          </label>

          <div className="relative">
            <Phone
              size={20}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                z-10
                -translate-y-1/2
                text-yellow-200
              "
            />

            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+94 77 123 4567"
              value={phone}
              onChange={(e) => setPhoneInput(e.target.value)}
              className="
                relative
                z-20
                block
                w-full
                cursor-text
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-12
                py-4
                text-white
                placeholder:text-gray-500
                outline-none
                transition-all
                duration-300
                hover:border-[color:var(--gold)]/60
                focus:border-[color:var(--gold)]
                focus:ring-2
                focus:ring-[color:var(--gold)]/20
              "
            />
          </div>
        </div>

        {/* =========================
            INSTAGRAM
        ========================== */}

        <div className="mb-8">
          <label
            htmlFor="instagram"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-gray-300
            "
          >
            Instagram Username
          </label>

          <div className="relative">
            <AtSign
              size={20}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                z-10
                -translate-y-1/2
                text-yellow-200
              "
            />

            <input
              id="instagram"
              type="text"
              autoComplete="username"
              placeholder="@yourusername"
              value={instagram}
              onChange={(e) => setInstagramInput(e.target.value)}
              className="
                relative
                z-20
                block
                w-full
                cursor-text
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-12
                py-4
                text-white
                placeholder:text-gray-500
                outline-none
                transition-all
                duration-300
                hover:border-[color:var(--gold)]/60
                focus:border-[color:var(--gold)]
                focus:ring-2
                focus:ring-[color:var(--gold)]/20
              "
            />
          </div>
        </div>

        {/* =========================
            CONTINUE
        ========================== */}

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
                  scale: 0.98,
                }
              : {}
          }
          className={`
            relative
            z-20
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
          Continue
          <Heart
            size={18}
            fill="currentColor"
            className="inline ml-2"
          />
        </motion.button>
      </motion.div>
    </motion.main>
  );
}