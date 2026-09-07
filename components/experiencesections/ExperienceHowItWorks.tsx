"use client";

import React from "react";
import { motion } from "motion/react";
import { Ticket, CreditCard, UtensilsCrossed } from "lucide-react";

export default function ExperienceHowItWorks() {
  return (
    <section className="bg-[#1A1A1A] text-white py-24 px-6 md:px-16 lg:px-24 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Comment Ça Marche
          </h2>
          <p className="text-white/70 text-sm md:text-base uppercase tracking-wider">
            Votre guide pratique pour naviguer facilement sur le site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              icon: <Ticket size={28} className="text-white" />,
              title: "Accès Gratuit & Pass",
              desc: "L'entrée générale aux zones publiques est totalement libre. Obtenez un pass VIP pour un accès prioritaire aux files de dégustation."
            },
            {
              step: "02",
              icon: <CreditCard size={28} className="text-white" />,
              title: "Paiement Sans Contact",
              desc: "Oubliez la monnaie encombrante. Scannez simplement votre bracelet ou votre carte à n'importe quel food truck ou stand."
            },
            {
              step: "03",
              icon: <UtensilsCrossed size={28} className="text-white" />,
              title: "Mélangez & Dégustez",
              desc: "Installez-vous sur une longue table en bois, goûtez aux spécialités de différents créateurs régionaux et profitez de l'ambiance."
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-start backdrop-blur-sm relative group hover:border-[#DE0B1C]/50 transition-colors"
            >
              <span className="absolute top-6 right-6 font-serif text-3xl font-bold text-white/10 group-hover:text-[#DE0B1C]/30 transition-colors">
                {item.step}
              </span>
              <div className="p-3 bg-[#DE0B1C] rounded-2xl mb-6 shadow-md">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-bold uppercase tracking-wide mb-3">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm font-sans leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}