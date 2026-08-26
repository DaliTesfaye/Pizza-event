import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 lg:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[2202px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Creative overlapping image layout */}
        <div className="lg:col-span-6 relative w-full h-112.5 sm:h-137.5 flex items-center justify-center">
          
          {/* Background Decorative Chip Badge */}
          <div className="absolute -top-4 left-4 z-20 bg-[#DE0B1C] text-[#F2E2D5] font-sans text-xs uppercase tracking-widest px-4 py-2 rounded-chip font-semibold">
            Heritage & Flavor
          </div>

          {/* Primary Main Image */}
          <div className="absolute left-0 top-0 w-[75%] h-[80%] rounded-xl overflow-hidden shadow-lg border border-[#333333]/15">
            <Image
              src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80"
              alt="Tunisian street food spread"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Overlapping Secondary Image */}
          <div className="absolute right-0 bottom-0 w-[60%] h-[60%] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10">
            <Image
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80"
              alt="Traditional culinary preparation"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right Side: Informational Text */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-widest text-[#DE0B1C] font-bold bg-[#F2E2D5] px-3 py-1.5 rounded-chip">
              About The Festival
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] uppercase tracking-tight leading-none mb-6">
            The Ultimate Gathering of Tunisian Street Food.
          </h2>

          <p className="font-sans text-[#333333] text-lg leading-relaxed opacity-85 mb-8">
            Step into a vibrant celebration where every corner smells of toasted spices, artisanal harissa, freshly baked brik, and sizzling local delicacies. Our event brings together the finest culinary tradition of Tunisia, showcasing authentic street recipes from every region under one roof.
          </p>

          {/* Feature highlights grid */}
          <div className="grid grid-cols-2 gap-6 mb-10 pt-4 border-t border-[#333333]/10">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#DE0B1C] mb-1">100%</h3>
              <p className="text-sm uppercase tracking-wider text-[#333333]/80 font-medium">Authentic Recipes</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#DE0B1C] mb-1">50+</h3>
              <p className="text-sm uppercase tracking-wider text-[#333333]/80 font-medium">Master Chefs</p>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <a
              href="#explore-more"
              className="inline-flex items-center justify-center bg-[#DE0B1C] text-[#F2E2D5] rounded-pill px-8 py-4 uppercase text-sm font-semibold tracking-wider hover:bg-[#B20916] transition-all duration-350"
            >
              Discover The Menu
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}