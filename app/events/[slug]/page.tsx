"use client";

import { eventsData } from "@/data/events";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { use } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function EventDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  // Smooth scroll handler without altering the URL hash
  const scrollToEvent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("the-event");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative w-full bg-[#f4ebd0] text-[#0d3b2e] min-h-screen overflow-hidden">
      
      {/* 1. Fullscreen Hero Section */}
      <section className="relative w-full h-[calc(100vh-96px)] min-h-150 flex items-center justify-center overflow-hidden bg-black">
        
        {/* Background Image with Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src={event.heroImage}
            alt={event.city}
            fill
            priority
            className="object-cover brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/30" />
        </div>

        {/* Hero Content with Animations */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center text-white"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 bg-[#DE0B1C] text-white font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg"
          >
            {event.badge || `STREET FEAST ${event.city}`}
          </motion.div>

          <h1 className="font-serif text-7xl md:text-9xl font-bold tracking-tight uppercase leading-none mb-6 drop-shadow-2xl">
            {event.city}
          </h1>

          <div className="space-y-2 mb-10 max-w-2xl">
            <p className="text-white text-base md:text-lg font-semibold tracking-wider uppercase">
              {event.date}, {event.locationText}
            </p>
          </div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#the-event"
              onClick={scrollToEvent}
              className="bg-[#DE0B1C] text-white px-10 py-4 rounded-full uppercase text-sm font-bold tracking-widest hover:bg-[#b20916] transition-all duration-300 shadow-2xl cursor-pointer hover:scale-105 active:scale-95"
            >
              À PROPOS
            </a>
            <Link
              href="/"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full uppercase text-sm font-semibold tracking-wider transition-all hover:scale-105 active:scale-95"
            >
              BACK HOME
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. "The Event" Section */}
      <section id="the-event" className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Stacked Overlapping Images with Scroll Animations */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center items-center py-10"
          >
            {/* Background Landscape Photo */}
            <div className="relative w-[320px] sm:w-100 h-112.5 rounded-3xl overflow-hidden shadow-2xl -rotate-3 border-4 border-white group">
              <Image
                src={event.heroImage}
                alt={`${event.city} landscape`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Foreground Square Close-up Photo */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-2 sm:left-6 w-55 sm:w-65 h-65 rounded-3xl overflow-hidden shadow-2xl rotate-6 border-4 border-white z-10 group"
            >
              <Image
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
                alt="Street food preparation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>

          {/* Right Side: Concise Editorial Text */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#0d3b2e] mb-4">
              The Event
            </h2>

            <h3 className="text-lg sm:text-xl font-semibold text-[#0d3b2e] mb-6 tracking-wide">
              The star of the show, as always, is street culinary excellence.
            </h3>

            <div className="space-y-4 text-neutral-700 font-sans text-base leading-relaxed">
              <p>
                Street Feast is coming to <span className="uppercase font-semibold">{event.city}</span>—a major gathering dedicated to authentic street food and local tradition, set against an exceptional backdrop.
              </p>
              <p>
                {event.description} Visitors can enjoy live music, masterclasses, and an atmosphere brimming with energy, culture, and flavor.
              </p>
            </div>

            {/* Action inside section */}
            <div className="mt-8">
              <button className="bg-[#0d3b2e] text-white px-8 py-3.5 rounded-full uppercase text-xs font-bold tracking-widest hover:bg-[#144f3e] transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95">
                EXPLORE SCHEDULE
              </button>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}