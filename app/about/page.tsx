import React from "react";
import AboutHero from "@/components/aboutsections/AboutHero";
import AboutStory from "@/components/aboutsections/AboutStory";
import AboutEvents from "@/components/aboutsections/AboutEvents";

export default function AboutPage() {
  return (
    <main className="w-full bg-[#f4ebd0] text-[#0d3b2e] min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutEvents />
    </main>
  );
}