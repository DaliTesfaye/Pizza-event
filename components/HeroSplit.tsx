"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { eventsData } from "@/data/events";

interface HeroColumnProps {
  title: string;
  slug: string;
  imageBg: string;
  days: string;
  hours: string;
  minutes: string;
  ctaText: string;
  index: number;
}

function HeroColumn({ title, slug, imageBg, days, hours, minutes, ctaText, index }: HeroColumnProps) {
  return (
    <div 
      className="relative flex-1 min-h-[80vh] flex flex-col justify-between items-center text-center p-8 lg:p-16 overflow-hidden group"
    >
      {/* Background Image with Smooth Hover Scale Animation */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${imageBg})` }}
      />

      {/* Dark overlays for text contrast */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-350 group-hover:bg-black/50" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      {/* Top Tag Animation */}
      <motion.span 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 * index }}
        className="relative z-10 text-white/90 uppercase tracking-widest text-sm md:text-base font-semibold pt-6"
      >
        UPCOMING EVENT
      </motion.span>

      {/* Massive Editorial Title & Timers Container with Fade-in Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 * index }}
        className="relative z-10 my-auto"
      >
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-normal tracking-tight uppercase leading-none">
          {title}
        </h1>

        {/* Countdown Timers */}
        <div className="flex justify-center gap-6 md:gap-10 mt-8 text-white font-mono">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold">{days}</span>
            <span className="text-xs uppercase tracking-widest text-white/80 mt-1">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold">{hours}</span>
            <span className="text-xs uppercase tracking-widest text-white/80 mt-1">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold">{minutes}</span>
            <span className="text-xs uppercase tracking-widest text-white/80 mt-1">Minutes</span>
          </div>
        </div>
      </motion.div>

      {/* CTA Button with Smooth Entrance */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 * index }}
        className="relative z-10 pb-6"
      >
        <Link
          href={`/events/${slug}`}
          className="inline-block bg-[#DE0B1C] text-white border border-white/30 rounded-full px-8 py-4 uppercase text-sm font-semibold tracking-wider hover:bg-[#b20916] transition-all duration-350 shadow-none hover:scale-105 active:scale-95"
        >
          {ctaText}
        </Link>
      </motion.div>
    </div>
  );
}

export default function HeroSplit() {
  const countdowns: Record<string, { days: string; hours: string; minutes: string }> = {
    tunis: { days: "14", hours: "09", minutes: "42" },
    nabeul: { days: "21", hours: "01", minutes: "07" },
  };

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-80px)] border-b border-[#333333]/20 overflow-hidden">
      {eventsData.map((event, idx) => {
        const timer = countdowns[event.slug] || { days: "00", hours: "00", minutes: "00" };
        
        return (
          <HeroColumn 
            key={event.slug}
            index={idx}
            title={event.name} 
            slug={event.slug}
            imageBg={event.heroImage}
            days={timer.days}
            hours={timer.hours}
            minutes={timer.minutes}
            ctaText={`DISCOVER ${event.name}`}
          />
        );
      })}
    </section>
  );
}