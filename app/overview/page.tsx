"use client";

import { motion } from "framer-motion";
import { CalendarDays, Camera, Clock3, Heart, MapPin, Phone, Sparkles } from "lucide-react";
import { useMemo } from "react";
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

  // -----------------------------------------
  // Floating heart positions
  // -----------------------------------------

  const hearts = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, index) => ({
        id: index,
        left: `${8 + ((index * 17) % 86)}%`,
        delay: (index % 5) * 1.1,
        duration: 8 + (index % 4),
        size: 14 + (index % 3) * 4,
      })),
    []
  );

  // -----------------------------------------
  // Format date
  // -----------------------------------------

  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not selected";

  // -----------------------------------------
  // Format time
  // -----------------------------------------

  const formattedTime = time
    ? new Date(`1970-01-01T${time}`).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    : "Not selected";

  // -----------------------------------------
  // WhatsApp confirmation
  // -----------------------------------------

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

    // YOUR WhatsApp number
    // Sri Lanka +94 78 704 5693
    // Format: 94787045693
    const whatsappNumber = "94787045693";

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--background)]
        px-5
        py-8
        md:px-8
        md:py-12
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main radial glow */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.09),transparent_65%)]
          "
        />

        {/* Rose glow */}

        <motion.div
          animate={{
            x: [0, 70, -50, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-160px]
            top-[-100px]
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
            x: [0, -60, 50, 0],
            y: [0, 50, -40, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-140px]
            right-[-130px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-yellow-400/10
            blur-[130px]
          "
        />

      </div>


      {/* =====================================================
          FLOATING HEARTS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              opacity: 0,
              y: "110vh",
            }}
            animate={{
              opacity: [0, 0.35, 0],
              y: "-10vh",
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "linear",
            }}
            style={{
              left: heart.left,
              fontSize: heart.size,
            }}
            className="
              absolute
              text-rose-400/30
            "
          >
            ❤️
          </motion.div>
        ))}

      </div>


      {/* =====================================================
          STORY PROGRESS
      ====================================================== */}

      <div className="relative z-10 mx-auto mb-8 w-full max-w-2xl">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div
              className="
                h-3
                w-3
                rounded-full
                bg-rose-400
                shadow-[0_0_15px_rgba(244,63,94,0.8)]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-yellow-300
              "
            >
              Our Little Story
            </span>

          </div>

          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.25em]
              text-yellow-300/70
            "
          >
            100%
          </span>

        </div>


        {/* Progress line */}

        <div
          className="
            relative
            mt-3
            h-px
            w-full
            bg-white/10
          "
        >

          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="
              absolute
              left-0
              top-0
              h-px
              bg-gradient-to-r
              from-rose-400
              via-pink-400
              to-yellow-300
              shadow-[0_0_12px_rgba(244,63,94,0.7)]
            "
          />

          {/* Progress dot */}

          <motion.div
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="
              absolute
              top-1/2
              h-3
              w-3
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-rose-400
              shadow-[0_0_18px_rgba(244,63,94,0.8)]
            "
          />

        </div>


        <div className="mt-3 flex justify-between">

          <span className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
            Chapter One
          </span>

          <span className="text-[9px] uppercase tracking-[0.25em] text-yellow-300/60">
            Final Chapter
          </span>

        </div>

      </div>


      {/* =====================================================
          MAIN CARD
      ====================================================== */}

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
          mx-auto
          w-full
          max-w-2xl
          overflow-hidden
          rounded-[36px]
          border
          border-yellow-400/40
          bg-black/40
          p-6
          shadow-[0_0_70px_rgba(212,175,55,0.10)]
          backdrop-blur-xl
          sm:p-8
          md:p-10
        "
      >

        {/* Inner border */}

        <div
          className="
            pointer-events-none
            absolute
            inset-3
            rounded-[29px]
            border
            border-yellow-300/10
          "
        />


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="relative text-center">

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
              mb-5
              flex
              justify-center
            "
          >

            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                border
                border-rose-400/30
                bg-rose-500/10
                shadow-[0_0_40px_rgba(244,63,94,0.18)]
              "
            >

              <Heart
                size={38}
                fill="currentColor"
                className="text-rose-400"
              />

            </div>

          </motion.div>


          <p
            className="
              mb-2
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-yellow-300/70
            "
          >
            Chapter Final
          </p>


          <h1
            className="
              text-4xl
              font-medium
              tracking-wide
              text-yellow-200
              md:text-5xl
            "
          >
            Our Date
          </h1>


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


        {/* =====================================================
            DIVIDER
        ====================================================== */}

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

          <Sparkles
            size={15}
            className="text-yellow-300"
          />

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


        {/* =====================================================
            DATE SUMMARY
        ====================================================== */}

        <div className="relative space-y-3">

          <InfoCard
            icon={<Heart size={19} />}
            label="Date Type"
            value={dateType || "Not selected"}
          />

          <InfoCard
            icon={<CalendarDays size={19} />}
            label="Date"
            value={formattedDate}
          />

          <InfoCard
            icon={<Clock3 size={19} />}
            label="Time"
            value={formattedTime}
          />

          <InfoCard
            icon={<MapPin size={19} />}
            label="Location"
            value={location || "Not selected"}
          />

          <InfoCard
            icon={<Phone size={19} />}
            label="Phone"
            value={phone || "Not provided"}
          />

          <InfoCard
            icon={<Camera size={19} />}
            label="Instagram"
            value={instagram || "Not provided"}
          />

        </div>


        {/* =====================================================
            ROMANTIC MESSAGE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="
            relative
            my-7
            overflow-hidden
            rounded-2xl
            border
            border-rose-400/20
            bg-gradient-to-br
            from-rose-500/[0.08]
            to-yellow-400/[0.03]
            px-5
            py-6
            text-center
          "
        >

          <div
            className="
              absolute
              left-1/2
              top-0
              h-px
              w-1/2
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-rose-400/50
              to-transparent
            "
          />

          <p className="text-lg italic text-rose-200">
            "Some memories are worth making."
          </p>

          <p className="mt-2 text-xs leading-6 text-gray-400">
            And I think this could be one of them. ❤️
          </p>

        </motion.div>


        {/* =====================================================
            WHATSAPP BUTTON
        ====================================================== */}

        <motion.button
          type="button"
          onClick={handleConfirm}
          whileHover={{
            scale: 1.025,
            boxShadow: "0 0 45px rgba(244,63,94,0.45)",
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
            text-base
            font-semibold
            text-white
            shadow-[0_0_30px_rgba(244,63,94,0.25)]
            transition-all
            md:text-lg
          "
        >

          {/* Shine animation */}

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

          <span className="relative z-10 flex items-center justify-center gap-2">

            Confirm Our Date

            <Heart
              size={18}
              fill="currentColor"
            />

          </span>

        </motion.button>


        {/* =====================================================
            SMALL NOTE
        ====================================================== */}

        <p
          className="
            mt-4
            text-center
            text-[10px]
            leading-5
            tracking-wide
            text-gray-500
          "
        >
          Tapping confirm will open WhatsApp with our date details. ❤️
        </p>


        {/* =====================================================
            FOOTER
        ====================================================== */}

        <div className="mt-6 flex items-center justify-center gap-3">

          <div className="h-px w-12 bg-yellow-400/20" />

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-gray-600
            "
          >
            Made with courage & love
          </p>

          <div className="h-px w-12 bg-yellow-400/20" />

        </div>

      </motion.div>

    </motion.main>
  );
}


/* =========================================================
   INFORMATION CARD
========================================================= */

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        borderColor: "rgba(212,175,55,0.35)",
      }}
      className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/[0.035]
        px-4
        py-4
        transition-all
        sm:px-5
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
          text-yellow-200
        "
      >
        {icon}
      </div>


      {/* Information */}

      <div className="min-w-0 flex-1">

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.18em]
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
            sm:text-base
          "
        >
          {value}
        </p>

      </div>

    </motion.div>
  );
}