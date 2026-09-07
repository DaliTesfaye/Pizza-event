"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function AboutStory() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left: Stacked Overlapping Images */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center py-10"
        >
          <div className="relative w-[320px] sm:w-100 h-120 rounded-3xl overflow-hidden shadow-2xl -rotate-3 border-4 border-white group">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
              alt="Street Feast festival atmosphere"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -left-2 sm:left-6 w-55 sm:w-65 h-65 rounded-3xl overflow-hidden shadow-2xl rotate-6 border-4 border-white z-10 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
              alt="Tunisian street food"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>

        {/* Right: Editorial Story */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#0d3b2e] mb-4">
            Culture & Tradition
          </h2>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0d3b2e] mb-6 tracking-wide">
            The star of the show, as always, is street culinary excellence.
          </h3>
          <div className="space-y-4 text-neutral-700 font-sans text-base leading-relaxed">
            <p>
              Street Feast brings together the finest local artisans, master chefs, and culinary creators across Tunisia. From historic city avenues to bustling open-air plazas, we transform iconic locations into vibrant hubs of gastronomic celebration.
            </p>
            <p>
              Beyond exceptional food, visitors immerse themselves in live musical performances, interactive cooking masterclasses, and an electric atmosphere brimming with energy, culture, and flavor.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-[#DE0B1C] text-white px-8 py-4 rounded-full uppercase text-xs font-bold tracking-widest hover:bg-[#b20916] transition-all shadow-md hover:scale-105 active:scale-95"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}