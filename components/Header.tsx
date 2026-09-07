"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { eventsData } from "@/data/events"; // Adjust path if needed

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-[#0d3b2e] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-[2202px] mx-auto px-6 md:px-12 lg:px-20 h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-white">
            Street Feast
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 font-sans text-sm font-semibold uppercase tracking-wider">
          
          {/* Dropdown Menu Wrapper (Dynamic Events) */}
          <div 
            className="relative py-4"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              className="flex items-center gap-1.5 text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#0d3b2e] transition-all cursor-pointer"
            >
              EVENTS <ChevronDown size={16} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Content Box */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-[#0d3b2e] border border-white/10 rounded-2xl shadow-2xl py-3 flex flex-col z-50">
                {eventsData.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/events/${loc.slug}`}
                    className="flex items-center justify-between px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <span className="font-medium">{loc.name}</span>
                    {loc.badge && (
                      <span className="bg-[#DE0B1C] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter shadow-sm animate-pulse">
                        {loc.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#0d3b2e] transition-all">
            ABOUT
          </Link>
          <Link href="/experiences" className="text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#0d3b2e] transition-all">
            Experience
          </Link>
          <Link href="/gallery" className="text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#0d3b2e] transition-all">
            GALLERY
          </Link>
        </nav>

        {/* Action CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            href="/events/tunis" 
            className="bg-[#DE0B1C] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#b20916] transition-all shadow-md"
          >
            TICKET TUNIS
          </Link>
          
          <div className="flex items-center gap-2 pl-4 border-l border-white/20 text-xs">
            <span className="cursor-pointer hover:opacity-80">🇹🇳</span>
            <span className="cursor-pointer font-bold">🇬🇧</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-[#0d3b2e] border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-xl">
          <div className="font-bold text-xs uppercase text-white/50 tracking-wider">Events Menu</div>
          {eventsData.map((loc) => (
            <Link
              key={loc.slug}
              href={`/events/${loc.slug}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-lg font-serif text-white py-2 border-b border-white/10"
            >
              <span>{loc.name}</span>
              {loc.badge && (
                <span className="bg-[#DE0B1C] text-white text-[10px] px-2 py-0.5 rounded-full uppercase">
                  {loc.badge}
                </span>
              )}
            </Link>
          ))}
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-serif text-white">ABOUT</Link>
          <Link href="/specials" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-serif text-white">SPECIALS</Link>
          <Link href="/press-kit" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-serif text-white">PRESS KIT</Link>
        </div>
      )}
    </header>
  );
}