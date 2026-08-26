"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { useDateStore } from "@/store/dateStore";
import PremiumButton from "@/components/PremiumButton";

export default function OverviewPage(){

const router=useRouter();

const{

dateType,

date,

time,

location,

phone,

instagram

}=useDateStore();

const handleConfirm = () => {
  router.push("/thank-you");
};

return(
    
<motion.main
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="min-h-screen bg-[var(--background)] flex justify-center items-center px-6"
>

<div className="premium-card max-w-xl w-full rounded-[32px] bg-[color:var(--card)] border-[color:var(--gold)]/40 p-10">

<h1 className="text-5xl text-[color:var(--gold)] text-center mb-10">

Our Date ❤️

</h1>

<div className="space-y-5">

<p><strong>Date Type:</strong> {dateType}</p>

<p><strong>Date:</strong> {date}</p>

<p><strong>Time:</strong> {time}</p>

<p><strong>Location:</strong> {location}</p>

<p><strong>Phone:</strong> {phone}</p>

<p><strong>Instagram:</strong> {instagram}</p>

</div>

<div className="mt-10 flex justify-center">
  <PremiumButton onClick={handleConfirm} className="w-full max-w-md">
    Confirm Our Date ❤️
  </PremiumButton>
</div>

</div>

</motion.main>

);

}