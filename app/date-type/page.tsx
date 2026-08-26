"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDateStore } from "@/store/dateStore";

const options = [
  "☕ Coffee Date",
  "🍽 Dinner Date",
  "🌳 Park",
  "🌿 Nature Walk",
  "🎮 Gaming Session",
  "🎬 Movie Night",
];

export default function DateTypePage() {
  const router = useRouter();

  const setDateType = useDateStore(
    (state) => state.setDateType
  );

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[var(--background)] flex justify-center items-center px-6"
    >

      <div className="max-w-4xl w-full">

        <h1 className="text-5xl text-center text-[color:var(--gold)] mb-12">
          What Kind of Date?
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {options.map((item) => (
            <button
              key={item}
              onClick={() => {
                setDateType(item);
                router.push("/schedule");
              }}
              className="premium-card rounded-[32px] bg-[color:var(--card)] border-[color:var(--gold)]/40 p-8 hover:border-[color:var(--rose)] transition"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

    </motion.main>
  );
}