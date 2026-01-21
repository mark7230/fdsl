import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/learn.jpg";
import img2 from "../assets/apply.jpg";
import img3 from "../assets/thrive.jpg";
import coreImg from "../assets/core.png";
import logoImg from "../assets/logo.png";
import CoreValues from "./CoreValues.jsx";
import Approach from "./Approach.jsx";

export default function VisionMission() {
  return (
    <section className="bg-[#315262]/80 py-12 px-6 border-b-4 border-[#829494] font-serif">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <img 
            src={logoImg} 
            alt="Freedom Solutions Logo" 
            className="h-24 w-auto drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]"
          />
        </div>
        <h2 className="text-4xl font-bold text-white tracking-wide">
          Our Vision & Mission
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white opacity-80">
          Empowering individuals with the knowledge and structure needed
          to operate privately, build generational wealth, and thrive
          outside the limitations of public-statutory systems.
        </p>
      </motion.div>

      {/* Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-8 bg-[#315262] border border-[#829494] rounded-2xl p-6 shadow-sm max-w-5xl mx-auto"
      >
        <p className="text-white leading-relaxed text-lg">
          We provide transformative education designed to help individuals
          become private and achieve generational wealth. Our specialized
          curriculum covers status correction, secure party creditor
          processes, establishing unincorporated business trusts, repairing
          & optimizing credit profiles, reclaiming securities, and
          understanding lawful debt discharge.
        </p>

        <p className="mt-6 text-white leading-relaxed text-lg">
          Becoming private gives individuals the ability to operate
          peacefully within public laws and regulations — while gaining the
          freedom and autonomy to build and protect wealth without
          unnecessary constraints.
        </p>
      </motion.div>

      <CoreValues />

      <Approach />

      {/* Vision & Mission */}
      

      {/* Disclaimer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-8 bg-[#315262] border border-[#EFAB47] rounded-xl p-6 max-w-4xl mx-auto"
      >
        <p className="text-white text-md leading-relaxed">
          <strong>Important:</strong> This platform is educational and does not
          provide legal or tax advice. Laws vary by region — always consult
          licensed professionals and follow all jurisdictional requirements.
        </p>
      </motion.div>
    </section>
  );
}