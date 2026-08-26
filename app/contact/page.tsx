"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDateStore } from "@/store/dateStore";

export default function ContactPage() {

  const router = useRouter();

  const [phone, setPhoneInput] = useState("");
  const [instagram, setInstagramInput] = useState("");
  const isValid = phone.trim() !== "" && instagram.trim() !== "";

  const setPhone = useDateStore((state) => state.setPhone);
  const setInstagram = useDateStore((state) => state.setInstagram);

  return(

<motion.main
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="min-h-screen bg-[var(--background)] flex justify-center items-center"
>

<div className="premium-card w-full max-w-xl rounded-[32px] border-[color:var(--gold)]/40 bg-[color:var(--card)] p-10">

<h1 className="text-4xl text-center text-[color:var(--gold)] mb-10">

How Can I Reach You?

</h1>

<input

placeholder="Phone Number"

value={phone}

onChange={(e)=>setPhoneInput(e.target.value)}

className="w-full mb-5 rounded-xl p-4 bg-[color:var(--card)] border border-white/10 text-[color:var(--text)]"

/>

<input

placeholder="Instagram Username"

value={instagram}

onChange={(e)=>setInstagramInput(e.target.value)}

className="w-full mb-8 rounded-xl p-4 bg-[color:var(--card)] border border-white/10 text-[color:var(--text)]"

/>

<button

className={`w-full rounded-xl py-4 transition ${isValid ? "bg-[color:var(--rose)] hover:bg-[#b53b5d]" : "bg-[#7a3247] cursor-not-allowed"}`}

disabled={!isValid}

onClick={() => {
  if (!isValid) return;
  setPhone(phone);
  setInstagram(instagram);
  router.push("/overview");
}}

>

Continue ❤️

</button>

</div>

</motion.main>

  );

}