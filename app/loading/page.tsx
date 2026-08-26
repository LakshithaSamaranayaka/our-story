"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            router.push("/date-type");
          }, 800);

          return 100;
        }

        return prev + 1;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center px-6"
    >

      <div
        className="
        w-full
        max-w-2xl
        rounded-[40px]
        premium-card
        p-10
        "
      >

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="text-center text-6xl"
        >
          ❤️
        </motion.div>

        <h1 className="text-5xl text-center text-[color:var(--gold)] font-semibold mt-5">
          Preparing Your Perfect Date...
        </h1>

        <p className="text-center text-[color:var(--muted)] mt-4">
          Creating a magical experience just for you.
        </p>

        <div className="mt-10 space-y-4 text-lg">

          <Task
            icon="🌹"
            text="Choosing beautiful flowers..."
            done={progress > 20}
          />

          <Task
            icon="🍽"
            text="Reserving the perfect restaurant..."
            done={progress > 45}
          />

          <Task
            icon="🎵"
            text="Creating the perfect playlist..."
            done={progress > 70}
          />

          <Task
            icon="📅"
            text="Checking the perfect weather..."
            done={progress > 90}
          />

        </div>

        <div className="mt-10">
  <div className="w-full h-4 bg-[color:var(--card)] rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-pink-500 via-rose-400 to-yellow-400 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
      style={{
        transformOrigin: "left",
      }}
    />
  </div>

  <p className="mt-4 text-center text-[color:var(--rose)] font-semibold">
    {progress}%
  </p>
</div>

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-center mt-8 italic text-[color:var(--muted)]"
        >
          "Love is worth waiting for..."
        </motion.p>

      </div>

    </motion.main>
  );
}

function Task({
  icon,
  text,
  done,
}: {
  icon: string;
  text: string;
  done: boolean;
}) {
  return (
    <motion.div
      animate={{
        opacity: done ? 1 : 0.4,
      }}
      className="flex justify-between"
    >
      <span>
        {icon} {text}
      </span>

      <span className="text-green-400">
        {done ? "✓" : ""}
      </span>
    </motion.div>
  );
}