"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDateStore } from "@/store/dateStore";

export default function SchedulePage() {
  const router = useRouter();

  const setDate = useDateStore((state) => state.setDate);
  const setTime = useDateStore((state) => state.setTime);

  const [date, setSelectedDate] = useState("");
  const [time, setSelectedTime] = useState("");
  const isValid = date !== "" && time !== "";

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[var(--background)] flex justify-center items-center"
    >

      <div className="premium-card rounded-[32px] bg-[color:var(--card)] border-[color:var(--gold)]/40 p-10 w-full max-w-xl">

        <h1 className="text-4xl text-[color:var(--gold)] text-center mb-8">
          Choose Date & Time
        </h1>

        <label
         htmlFor="date"
        className="block mb-2 text-gray-300"
        >
           Select Date
        </label>

        <input
          id="date"
          type="date"
          className="w-full mb-5 p-3 rounded-xl bg-[color:var(--card)] border border-white/10 text-[color:var(--text)]"
          value={date}
         onChange={(e) => setSelectedDate(e.target.value)}
        />

        <label
          htmlFor="time"
          className="block mb-2 text-[color:var(--muted)]"
        >
           Select Time
        </label>

        <input
          id="time"
          type="time"
          className="w-full mb-8 p-3 rounded-xl bg-[color:var(--card)] border border-white/10 text-[color:var(--text)]"
          value={time}
          onChange={(e) => setSelectedTime(e.target.value)}
          />

        <button
          className={`w-full rounded-xl py-3 transition ${isValid ? "bg-[color:var(--rose)] hover:bg-[#b53b5d]" : "bg-[#7a3247] cursor-not-allowed"}`}
          disabled={!isValid}
          onClick={() => {
            if (!isValid) return;
            setDate(date);
            setTime(time);
            router.push("/location");
          }}
        >
          Continue ❤️
        </button>

      </div>

    </motion.main>
  );
}