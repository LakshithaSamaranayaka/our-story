"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useDateStore } from "@/store/dateStore";

const locations = [
  {
    title: "❤️ Your Favorite Spot",
    description: "Let's visit the place you love the most."
  },
  {
    title: "🌹 My Favorite Spot",
    description: "I have a special place I'd love to share."
  },
  {
    title: "✨ Surprise Me",
    description: "I'll plan everything for you."
  },
  {
    title: "🤝 We'll Decide Together",
    description: "Let's choose our destination together."
  }
];

export default function LocationPage() {

  const router = useRouter();

  const setLocation = useDateStore(
    (state) => state.setLocation
  );

  return (

    <motion.main
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[var(--background)] flex justify-center items-center px-6"
    >

      <div className="max-w-5xl w-full">

        <h1 className="text-5xl text-center text-[color:var(--gold)] mb-12">

          Where Should We Go?

        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {locations.map((item)=>(
            <button

              key={item.title}

              onClick={()=>{
                setLocation(item.title);
                router.push("/contact");
              }}

              className="
              rounded-[32px]
              premium-card
              bg-[color:var(--card)]
              border-[color:var(--gold)]/40
              p-8
              hover:scale-105
              hover:border-pink-400
              transition-all
              "

            >

              <h2 className="text-2xl mb-4">

                {item.title}

              </h2>

              <p className="text-[color:var(--muted)]">

                {item.description}

              </p>

            </button>

          ))}

        </div>

      </div>

    </motion.main>

  );

}