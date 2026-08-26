"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import Background from "@/components/Background";
import RomanticCard from "@/components/RomanticCard";
import PremiumButton from "@/components/PremiumButton";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen overflow-hidden"
    >
      <Background />

      <main className="relative min-h-screen flex items-center justify-center px-6">
        <RomanticCard>

          <PageTitle title="Our Story ❤️" />

          <p className="text-center text-lg text-neutral-300 mb-6">
            Every beautiful love story begins with one simple question.
            <br />
            And today, I'd like to ask you something special...
          </p>

          <p className="romantic-quote text-center text-4xl md:text-5xl mb-10">
            “My heart chose you.”
          </p>

          <div className="flex justify-center">
            <PremiumButton
              onClick={() => router.push("/question")}
            >
              Begin Our Journey ❤️
            </PremiumButton>
          </div>

        </RomanticCard>
      </main>
    </motion.div>
  );
}