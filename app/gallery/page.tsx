import React from "react";
import GalleryGrid from "@/components/gallerysections/GalleryGrid";

export default function GalleryPage() {
  return (
    <main className="w-full bg-[#f4ebd0] text-[#0d3b2e] min-h-screen">
      
      {/* Hero Header */}
      <section className="relative w-full bg-[#1A1A1A] text-white pt-24 pb-32 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-[#333333]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#DE0B1C_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start">
          <div className="mb-4 inline-block bg-[#DE0B1C] text-[#F2E2D5] text-xs uppercase tracking-widest px-3 py-1.5 rounded-full font-semibold">
            Édition Pizza & Traditions
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight mb-6">
            Galerie Pizza
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl tracking-wide uppercase leading-relaxed">
            Plongez au cœur de l&apos;art de la pizza, des fours à bois flamboyants et des saveurs authentiques de notre festival.
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <GalleryGrid />

    </main>
  );
}