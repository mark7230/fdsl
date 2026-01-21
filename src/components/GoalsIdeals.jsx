import React from "react";
import { motion } from "framer-motion";
import Timeline from "./timeline";

export default function GoalsIdeals() {
  return (
    <section className="py-16 sm:py-20 md:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] text-center mb-6 sm:mb-8 font-serif tracking-wide">
          Goals & Ideals
        </h2>
        
        {/* Centered Paragraph */}
        <p className="text-[#555] text-center text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-3xl mx-auto font-sans">
          Our mission is to empower individuals with the knowledge and tools needed to operate privately, build generational wealth, and thrive outside the limitations of public-statutory systems.
        </p>
        
        {/* Subheading */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A1A1A] text-center mb-3 sm:mb-6 font-serif tracking-wide">
          Sovereignty Path
        </h3>
        
        {/* Subtitle */}
        <p className="text-[#555] text-center text-base sm:text-lg mb-8 sm:mb-12">
          Six steps toward full legal, financial, and spiritual independence.
        </p>
        
        {/* Timeline */}
        <div className="mt-0">
          <Timeline />
        </div>
      </div>
    </section>
  );
}