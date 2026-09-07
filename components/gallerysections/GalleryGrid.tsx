"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, Image as ImageIcon, Film } from "lucide-react";

// Mock gallery data focused exclusively on pizza and pizza-making
const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "Artisanal Wood-Fired Crust",
    category: "Pizzas",
    url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "The Master Pizzaiolo Craft",
    category: "Masterclass",
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    videoDuration: "0:45",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    type: "image",
    title: "Fresh Mozzarella & Basil",
    category: "Ingrédients",
    url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    type: "image",
    title: "Festival Evening Glow",
    category: "Ambiance",
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    type: "video",
    title: "The Wood Oven Flames",
    category: "Cuisson",
    url: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=1200&q=80",
    videoDuration: "1:20",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
  {
    id: 6,
    type: "image",
    title: "Classic Margherita Perfection",
    category: "Tradition",
    url: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeFilter);

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      
      {/* Section Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#DE0B1C] mb-2 block">
            Immersion Visuelle
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#0d3b2e]">
            La Galerie Pizza
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 bg-[#1A1A1A]/5 p-1.5 rounded-full border border-black/10 w-fit">
          {[
            { id: "all", label: "Tout" },
            { id: "image", label: "Photos" },
            { id: "video", label: "Vidéos" },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-[#DE0B1C] text-white shadow-md"
                  : "text-[#0d3b2e] hover:bg-black/5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group ${item.span}`}
            >
              <Image
                src={item.url}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              {/* Type Icon Indicator */}
              <div className="absolute top-5 right-5 z-10 bg-black/40 backdrop-blur-md border border-white/20 text-white p-2.5 rounded-full shadow-lg">
                {item.type === "video" ? <Film size={16} /> : <ImageIcon size={16} />}
              </div>

              {/* Video duration badge if applicable */}
              {item.type === "video" && (
                <div className="absolute top-5 left-5 z-10 bg-[#DE0B1C] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Play size={10} fill="white" /> {item.videoDuration}
                </div>
              )}

              {/* Card Footer Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white flex flex-col justify-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DE0B1C] mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal for Preview */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors cursor-pointer border border-white/20"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.url}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
              
              {selectedItem.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-20 h-20 bg-[#DE0B1C] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Play size={32} fill="white" className="text-white ml-1" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#DE0B1C] mb-2 block">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif text-3xl md:4xl font-bold uppercase tracking-tight">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}