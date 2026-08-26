"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import Background from "@/components/Background";
import RomanticCard from "@/components/RomanticCard";
import MovingNoButton from "@/components/MovingNobutton";
import PremiumButton from "@/components/PremiumButton";
import { useState } from "react";
import Confetti from "react-confetti";

export default function QuestionPage() {
  const router = useRouter();
  const [celebrate, setCelebrate] = useState(false);
  return (
    <>
     {celebrate && <Confetti />}
      <Background />

      <motion.main
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen flex justify-center items-center px-6"
      >

        <RomanticCard>

          <motion.h1
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl text-center text-[color:var(--gold)] font-semibold mb-8"
          >
            Would you go on a date with me? ❤️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-neutral-300 mb-12"
          >
            I promise it&apos;ll be filled with smiles,
            laughter and unforgettable memories.
          </motion.p>

          <div className="relative h-40">

            <div className="flex justify-center">

              <PremiumButton
                onClick={() => {
                setCelebrate(true);

                  setTimeout(() => {
                  router.push("/loading");
                  }, 2000);
                }}
              >
                Yes ❤️
              </PremiumButton>

            </div>

            <div className="mt-8 flex justify-center">

              <MovingNoButton />
              <Background/>
              <FloatingHearts/>
            </div>

          </div>

        </RomanticCard>

      </motion.main>
    </>
  );
}