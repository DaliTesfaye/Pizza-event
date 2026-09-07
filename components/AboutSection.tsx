"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[2202px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Creative overlapping image layout with subtle slide-in */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 relative w-full h-112.5 sm:h-137.5 flex items-center justify-center"
        >
          {/* Background Decorative Chip Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -top-4 left-4 z-20 bg-[#DE0B1C] text-[#F2E2D5] font-sans text-xs uppercase tracking-widest px-4 py-2 rounded-full font-semibold shadow-md"
          >
            Heritage & Wood-Fired Craft
          </motion.div>

          {/* Primary Main Image */}
          <div className="absolute left-0 top-0 w-[75%] h-[80%] rounded-2xl overflow-hidden shadow-lg border border-[#333333]/15 group">
            <Image
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
              alt="Authentic wood-fired pizza preparation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Overlapping Secondary Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute right-0 bottom-0 w-[60%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=80"
              alt="Fresh artisanal pizza close-up"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </motion.div>

        {/* Right Side: Informational Text with Fade-up Stagger */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-widest text-[#DE0B1C] font-bold bg-[#F2E2D5] px-3 py-1.5 rounded-full">
              About The Pizza Festival
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] uppercase tracking-tight leading-none mb-6">
            The Ultimate Gathering of Neapolitan Pizza & Tradition.
          </h2>

          <p className="font-sans text-[#333333] text-lg leading-relaxed opacity-85 mb-8">
            Step into a vibrant celebration where every corner smells of wood-fired crusts, bubbling San Marzano tomatoes, fresh basil, and melting Fior di Latte mozzarella. Our event brings together the finest masters of pizza-making, showcasing authentic Italian recipes and craft baking traditions under one roof.
          </p>

          {/* Feature highlights grid */}
          <div className="grid grid-cols-2 gap-6 mb-10 pt-4 border-t border-[#333333]/10">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#DE0B1C] mb-1">100%</h3>
              <p className="text-sm uppercase tracking-wider text-[#333333]/80 font-medium">Authentic Dough</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#DE0B1C] mb-1">50+</h3>
              <p className="text-sm uppercase tracking-wider text-[#333333]/80 font-medium">Master Pizzaiolos</p>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <a
              href="/about"
              className="inline-flex items-center justify-center bg-[#DE0B1C] text-[#F2E2D5] rounded-full px-8 py-4 uppercase text-sm font-semibold tracking-wider hover:bg-[#B20916] transition-all duration-350 shadow-md hover:scale-105 active:scale-95"
            >
              Explore Plus
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}