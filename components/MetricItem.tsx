import React from "react";

interface MetricItemProps {
  value: string;
  label: string;
}

function MetricItem({ value, label }: MetricItemProps) {
  return (
    <div className="flex flex-col items-center justify-center text-white py-6">
      <span className="font-serif text-4xl lg:text-5xl font-bold tracking-tight mb-1">
        {value}
      </span>
      <span className="text-xs uppercase tracking-widest text-white/90 font-sans">
        {label}
      </span>
    </div>
  );
}

export default function BurgerSection() {
  const marqueeText = "TASTE · CRUNCH · BURGER · TASTE · CRUNCH · BURGER · TASTE · CRUNCH · BURGER · ";

  return (
    <section className="w-full bg-[#F2E2D5] flex flex-col overflow-hidden border-t border-[#333333]/10">
      
      {/* 1. Top Marquee Banner */}
      <div className="w-full bg-[#DE0B1C] py-4 overflow-hidden whitespace-nowrap flex">
        <div className="animate-marquee flex items-center text-white font-serif tracking-widest text-xl uppercase font-bold">
          <span>{marqueeText}{marqueeText}</span>
        </div>
      </div>

      {/* 2. Middle Content Showcase Area */}
      <div className="relative w-full max-w-[2202px] mx-auto min-h-125 lg:min-h-137.5 flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
        
        {/* Background Graphic / Original Food Imagery Texture */}
        <div className="absolute inset-0 flex items-center justify-center opacity-90 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=80" 
            alt="Artisanal Burger background texture" 
            className="w-full h-full object-cover mix-blend-multiply opacity-20 scale-105"
          />
        </div>

        {/* Central Bold Heading */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1B4D3E] uppercase tracking-tight leading-tight">
            BURGER FIRST. CALORIES DOPO.
          </h2>
          <p className="font-sans text-[#333333] text-lg mt-4 max-w-xl mx-auto opacity-80">
            Celebrating the ultimate craft smash burgers, secret sauces, and high-energy culinary culture.
          </p>
        </div>
      </div>

      {/* 3. Bottom Metrics Footer Bar */}
      <div className="w-full bg-[#DE0B1C] grid grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-8 border-t border-white/10">
        <MetricItem value="5M+" label="FOODIES" />
        <MetricItem value="18" label="CITIES" />
        <MetricItem value="40K" label="PATTIES GRILLED" />
        <MetricItem value="350" label="CHEF BATTLES" />
      </div>

    </section>
  );
}