"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

interface Sponsor {
  name: string;
  logo: string;
}

const sponsors: Sponsor[] = [
  { name: "Spoon & Spice", logo: "https://upload.wikimedia.org/wikipedia/en/5/5f/Boga.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" },
  { name: "Mediterra Feast", logo: "https://chahia.com.tn/media/logo/stores/1/logo-chahia-fr.png" },
  { name: "Carthage Spice Co.", logo: "https://crystalpng.com/wp-content/uploads/2022/06/national-foods-logo.png" },
  { name: "Atlas Culinary", logo: "https://www.snbg.com.tn/wp-content/uploads/2024/10/Logo-viva-square-768x768.png" },
  { name: "MG", logo: "https://mg.tn/img/cms/logo-footer-transparent.png" }
];

export default function SponsorsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-24 overflow-hidden border-t border-[#333333]/10">
      
      {/* Animated Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[2202px] mx-auto px-6 mb-12 text-center"
      >
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] uppercase tracking-tight">
          Official Partners & Sponsors
        </h2>
      </motion.div>

      {/* Infinite Moving Marquee Track with Entrance Fade */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full overflow-hidden flex whitespace-nowrap py-6 group"
      >
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center gap-16 min-w-full shrink-0">
          {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-350 cursor-pointer px-6 group/item"
            >
              <div className="relative w-36 h-16 sm:w-48 sm:h-20">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  sizes="(max-width: 768px) 144px, 192px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}