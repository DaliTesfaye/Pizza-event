"use client";

import React from "react";
import Link from "next/link";
import { Share2, MessageCircle, Send, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white border-t border-[#333333] pt-16 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Main Grid Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[2202px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10"
      >
        
        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col items-start">
          <Link href="/" className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-white mb-4">
            Street Feast <span className="text-[#DE0B1C]">·</span> TN
          </Link>
          <p className="font-sans text-sm text-white/70 leading-relaxed mb-6">
            The premier festival celebrating the vibrant culture, rich flavors, and incredible diversity of Tunisian street cuisine.
          </p>
          <div className="inline-block bg-[#DE0B1C] text-[#F2E2D5] text-xs uppercase tracking-widest px-3 py-1.5 rounded-full font-semibold shadow-sm">
            Edition 2026
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="flex flex-col">
          <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-white mb-4">
            Get In Touch
          </h3>
          <ul className="space-y-3 text-sm text-white/80 font-sans">
            <li>
              <a href="mailto:info@streetfeast.tn" className="hover:text-[#DE0B1C] transition-colors">
                info@streetfeast.tn
              </a>
            </li>
            <li>
              <a href="tel:+21671000000" className="hover:text-[#DE0B1C] transition-colors">
                +216 71 000 000
              </a>
            </li>
            <li>
              <span className="text-white/50">Tunis, Avenue Habib Bourguiba</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Compliance Pages */}
        <div className="flex flex-col">
          <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-white mb-4">
            Legal & Policy
          </h3>
          <ul className="space-y-3 text-sm text-white/80 font-sans">
            <li>
              <Link href="/privacy-policy" className="hover:text-[#DE0B1C] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-[#DE0B1C] transition-colors">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-[#DE0B1C] transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="hover:text-[#DE0B1C] transition-colors">
                Accessibility Statement
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Social & Links */}
        <div className="flex flex-col">
          <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-white mb-4">
            Follow The Vibe
          </h3>
          <div className="flex items-center gap-4 mb-6">
            {[
              { href: "https://facebook.com", icon: <Share2 size={18} />, label: "Share" },
              { href: "https://instagram.com", icon: <MessageCircle size={18} />, label: "Community" },
              { href: "https://twitter.com", icon: <Send size={18} />, label: "Channel" },
              { href: "https://streetfeast.tn", icon: <Globe size={18} />, label: "Website" },
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#DE0B1C] transition-colors duration-300 shadow-md"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

      </motion.div>

      {/* Sub-footer: Copyright & Language Flags */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-[2202px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-sans"
      >
        <p>
          © 2026 Street Feast. — TUNISIA STREET CULINARY SRL — P.IVA 10464611218
        </p>

        {/* Language Switcher */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <span className="text-base">🇹🇳</span> <span className="font-semibold text-white">AR / FR</span>
          </button>
          <span className="text-white/20">|</span>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <span className="text-base">🇬🇧</span> <span>EN</span>
          </button>
        </div>
      </motion.div>
    </footer>
  );
}