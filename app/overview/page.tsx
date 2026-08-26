"use client";

import { motion } from "framer-motion";
import { useDateStore } from "@/store/dateStore";

export default function OverviewPage() {
  const {
    dateType,
    date,
    time,
    location,
    phone,
    instagram,
  } = useDateStore();

  // Convert date into a nicer format
  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not selected";

  // Convert time into 12-hour format
  const formattedTime = time
    ? new Date(`1970-01-01T${time}`).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    : "Not selected";

  // Confirm date and open WhatsApp
  const handleConfirm = () => {
    const message = `
❤️ OUR DATE IS CONFIRMED ❤️

Someone just said YES to a little adventure together. 🌹

🌹 Date Type:
${dateType || "Not selected"}

📅 Date:
${formattedDate}

🕰️ Time:
${formattedTime}

📍 Location:
${location || "Not selected"}

📱 Phone:
${phone || "Not provided"}

📸 Instagram:
${instagram || "Not provided"}

━━━━━━━━━━━━━━

✨ The little story is officially beginning.

I can't wait to make this a beautiful memory with you. ❤️
`;

    /*
      IMPORTANT:
      Replace this with YOUR WhatsApp number.

      Example:
      +94 77 123 4567

      becomes:
      94771234567

      Do NOT include:
      +
      spaces
      -
      brackets
    */

    const whatsappNumber = "94787045693";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.location.href = whatsappUrl;
  };

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
        py-12
      "
    >

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Rose glow */}

        <motion.div
          animate={{
            x: [0, 80, -60, 0],
            y: [0, -50, 70, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-120px]
            top-[-100px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-rose-500/10
            blur-[100px]
          "
        />

        {/* Gold glow */}

        <motion.div
          animate={{
            x: [0, -70, 60, 0],
            y: [0, 60, -50, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-120px]
            bottom-[-100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-yellow-500/10
            blur-[110px]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(212,175,55,0.08),transparent_70%)]
            blur-3xl
          "
        />

      </div>

      {/* =========================================
          FLOATING HEARTS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: "110vh",
              x: `${Math.random() * 100}vw`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: "-10vh",
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="
              absolute
              text-xl
              text-rose-400/30
            "
          >
            ❤️
          </motion.div>
        ))}

      </div>

      {/* =========================================
          MAIN CARD
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
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
          z-10
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[36px]
          border
          border-yellow-400/40
          bg-black/35
          p-8
          shadow-[0_0_60px_rgba(212,175,55,0.12)]
          backdrop-blur-xl
          md:p-10
        "
      >

        {/* =========================================
            GOLD INNER BORDER
        ========================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-3
            rounded-[28px]
            border
            border-yellow-300/10
          "
        />

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="relative text-center">

          {/* Heart */}

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
              mb-4
              text-6xl
            "
          >
            ❤️
          </motion.div>

          {/* Small heading */}

          <p
            className="
              mb-2
              text-sm
              uppercase
              tracking-[0.35em]
              text-yellow-300/70
            "
          >
            A little plan for us
          </p>

          {/* Main heading */}

          <h1
            className="
              text-4xl
              font-semibold
              tracking-wide
              text-yellow-200
              md:text-5xl
            "
          >
            Our Date
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-md
              text-sm
              leading-7
              text-gray-300
            "
          >
            Everything is ready.
            <br />
            All that's left is to make the memory. ❤️
          </p>

        </div>

        {/* =========================================
            DIVIDER
        ========================================= */}

        <div className="my-8 flex items-center gap-4">

          <div
            className="
              h-px
              flex-1
              bg-gradient-to-r
              from-transparent
              to-yellow-400/40
            "
          />

          <span className="text-yellow-300">
            ✦
          </span>

          <div
            className="
              h-px
              flex-1
              bg-gradient-to-l
              from-transparent
              to-yellow-400/40
            "
          />

        </div>

        {/* =========================================
            DATE INFORMATION
        ========================================= */}

        <div className="relative space-y-4">

          {/* Date Type */}

          <InfoCard
            icon="🌹"
            label="Date Type"
            value={dateType || "Not selected"}
          />

          {/* Date */}

          <InfoCard
            icon="📅"
            label="Date"
            value={formattedDate}
          />

          {/* Time */}

          <InfoCard
            icon="🕰️"
            label="Time"
            value={formattedTime}
          />

          {/* Location */}

          <InfoCard
            icon="📍"
            label="Location"
            value={location || "Not selected"}
          />

          {/* Phone */}

          <InfoCard
            icon="📱"
            label="Phone"
            value={phone || "Not provided"}
          />

          {/* Instagram */}

          <InfoCard
            icon="📸"
            label="Instagram"
            value={instagram || "Not provided"}
          />

        </div>

        {/* =========================================
            ROMANTIC MESSAGE
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="
            relative
            my-8
            rounded-2xl
            border
            border-rose-400/20
            bg-rose-500/5
            px-6
            py-5
            text-center
          "
        >

          <p
            className="
              text-lg
              italic
              text-rose-200
            "
          >
            "Some memories are worth making."
          </p>

          <p
            className="
              mt-2
              text-xs
              text-gray-400
            "
          >
            And I think this could be one of them. ❤️
          </p>

        </motion.div>

        {/* =========================================
            CONFIRM BUTTON
        ========================================= */}

        <motion.button
          type="button"
          onClick={handleConfirm}
          whileHover={{
            scale: 1.03,
            boxShadow:
              "0 0 45px rgba(244,63,94,0.45)",
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            relative
            w-full
            overflow-hidden
            rounded-2xl
            bg-gradient-to-r
            from-rose-400
            via-pink-500
            to-rose-500
            py-4
            text-lg
            font-semibold
            text-white
            shadow-[0_0_30px_rgba(244,63,94,0.3)]
            transition-all
          "
        >

          {/* Button shine */}

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

          {/* Button text */}

          <span className="relative z-10">
            Confirm Our Date ❤️
          </span>

        </motion.button>

        {/* =========================================
            FOOTER
        ========================================= */}

        <p
          className="
            mt-5
            text-center
            text-xs
            tracking-wide
            text-gray-500
          "
        >
          Made with a little courage & a lot of love ✦
        </p>

      </motion.div>

    </main>
  );
}


/* =========================================
   INFORMATION CARD
========================================= */

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        borderColor:
          "rgba(212,175,55,0.35)",
      }}
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/[0.035]
        px-5
        py-4
        transition-all
      "
    >

      {/* Icon */}

      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-yellow-400/20
          bg-yellow-400/5
          text-xl
        "
      >
        {icon}
      </div>

      {/* Text */}

      <div className="min-w-0 flex-1">

        <p
          className="
            text-xs
            uppercase
            tracking-wider
            text-gray-500
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            break-words
            text-sm
            font-medium
            text-gray-200
          "
        >
          {value}
        </p>

      </div>

    </motion.div>
  );
}