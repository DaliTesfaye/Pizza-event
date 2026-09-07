"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";

export default function ExperienceVibe() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0d3b2e] mb-4">
          L&apos;Atmosphère
        </h2>
        <p className="text-neutral-600 text-sm md:text-base uppercase tracking-wider font-sans">
          Des dégustations ensoleillées de l&apos;après-midi à l&apos;énergie nocturne électrisante.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Daytime Vibe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-black/5 group flex flex-col justify-end p-8 text-white"
        >
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
            alt="Ambiance diurne du festival"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="relative z-10">
            <div className="p-3 bg-[#DE0B1C] w-fit rounded-2xl mb-4 shadow-md">
              <Sun size={24} className="text-white" />
            </div>
            <h3 className="font-serif text-3xl font-bold uppercase tracking-tight mb-2">
              Énergie de Jour
            </h3>
            <p className="text-sm font-sans text-white/80 leading-relaxed">
              Horaires adaptés aux familles, espaces de détente en plein air, démonstrations culinaires et marchés d&apos;artisans baignés de soleil.
            </p>
          </div>
        </motion.div>

        {/* Nighttime Vibe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-black/5 group flex flex-col justify-end p-8 text-white"
        >
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
            alt="Ambiance nocturne du festival"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="relative z-10">
            <div className="p-3 bg-[#DE0B1C] w-fit rounded-2xl mb-4 shadow-md">
              <Moon size={24} className="text-white" />
            </div>
            <h3 className="font-serif text-3xl font-bold uppercase tracking-tight mb-2">
              Nocturne & Rythmes
            </h3>
            <p className="text-sm font-sans text-white/80 leading-relaxed">
              À la tombée de la nuit, les lumières s&apos;illuminent. Esthétique néon, sets de DJ live, concerts acoustiques et foule animée profitant de collations tardives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}