"use client";

import React from "react";
import { motion } from "motion/react";

export default function ExperienceHero() {
  return (
    <section className="relative w-full bg-[#1A1A1A] text-white pt-24 pb-32 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-[#333333]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DE0B1C_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-[2202px] mx-auto flex flex-col items-start"
      >
        <div className="mb-4 inline-block bg-[#DE0B1C] text-[#F2E2D5] text-xs uppercase tracking-widest px-3 py-1.5 rounded-full font-semibold">
          Préparez Votre Visite
        </div>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight mb-6">
          L&apos;Expérience
        </h1>
        <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl tracking-wide uppercase leading-relaxed">
          Tout ce que vous devez savoir pour goûter, explorer et profiter pleinement du grand rassemblement de street food en plein air.
        </p>
      </motion.div>
    </section>
  );
}