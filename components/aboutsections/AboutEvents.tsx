"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { eventsData } from "@/data/events";

export default function AboutEvents() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#0d3b2e] mb-4"
        >
          Dans tous le pays
        </motion.h2>
        <p className="text-neutral-600 text-sm md:text-base uppercase tracking-wider font-sans">
          Explorez notre festival prochaines stops.
        </p>
      </div>

      {/* Events Grid with wider, landscape cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map((event, idx) => (
          <motion.div
            key={event.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link 
              href={`/events/${event.slug}`}
              className="group relative block h-[260px] rounded-3xl overflow-hidden shadow-xl border border-black/5 cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={event.heroImage}
                alt={event.city}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Overlays for Text Contrast */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Badge (e.g. Next Event) */}
              {event.badge && (
                <div className="absolute top-5 right-5 z-10 bg-[#DE0B1C] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {event.badge}
                </div>
              )}

              {/* Card Footer Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white flex flex-col justify-end">
                <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-tight mb-1 group-hover:text-[#DE0B1C] transition-colors">
                  {event.city}
                </h3>
                <p className="text-xs md:text-sm font-sans uppercase tracking-wider text-white/80">
                  {event.date}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </section>
  );
}