import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/about1.jpg";
import image2 from "../assets/about2.jpg";
import image3 from "../assets/about3.jpg";
import image4 from "../assets/apply.jpg";
import step2 from "../assets/step2.jpg";
import step3 from "../assets/step3.jpg";
import portraitImage from "../assets/vision.jpg";

const AboutNew = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E4753] to-[#355A66] font-serif">
      
      {/* ============================================= */}
      {/* ✨ SECTION 1 — PREMIUM INTRO / HERO */}
      {/* ============================================= */}
      <section className="bg-[#315262]/70 rounded-b-[40px] py-24 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            We empower individuals and businesses with the tools, strategies, and clarity needed to thrive in today’s competitive world.
          </motion.p>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-16 left-10 w-6 h-6 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-4 h-4 border border-white/30 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 border-t-2 border-r-2 border-white/30"></div>

        {/* IMAGE GRID */}
        <div className="max-w-7xl mx-auto px-4 mt-20 pb-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[image1, image2, image3, image4].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 + i * 0.1 }}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.04] transition-all duration-300 ${
                  i % 2 !== 0 ? "md:mt-8" : ""
                }`}
              >
                <img src={img} alt="About Section" className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* ✨ SECTION 2 — PREMIUM 3 STEP PROCESS */}
      {/* ============================================= */}
      <section className="py-20 bg-gradient-to-b from-[#F8F9FA] to-[#E8ECEF]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#315262] font-serif">
              We Make Sure Your Idea Is Delivered Properly
            </h2>
            <div className="w-20 h-[3px] bg-[#EFAB47] rounded-full mt-3 mx-auto"></div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-10 relative">

            {/* connector line */}
            <div className="hidden md:block absolute top-16 left-[16%] w-[68%] h-[2px] bg-gray-300"></div>

            {[ 
              {
                
                number: "01",
                title: "Understanding Your Vision",
                text: "We empower individuals and businesses to build growth with clarity and smart systems.",
                image: image1
              },
              {
               
                number: "02",
                title: "Strategic Execution",
                text: "Practical training + strategic insights = flawless execution for your goals.",
                image: step2
              },
              {
                
                number: "03",
                title: "Delivering Results",
                text: "We help navigate business challenges with confidence and proven methods.",
                image: step3
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl rounded-2xl p-8 border border-gray-100 relative overflow-hidden`}
              >
                {step.image && (
                  <div className="absolute inset-0 z-0 opacity-20">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="relative z-10">
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 mb-5">
                    <svg width="26" height="26" viewBox="0 0 24 24" strokeWidth="2" fill="none">
                      {step.icon}
                    </svg>
                  </div>
                  <div className="text-2xl text-gray-800 font-bold mb-1">{step.number}</div>
                  <h3 className="text-xl font-bold text-[#315262] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* ✨ SECTION 3 — BUSINESS OWNER EMPOWERMENT */}
      {/* ============================================= */}
      <section className="py-16 bg-gradient-to-br from-[#315262] to-[#1F3A44]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img src={portraitImage} className="w-full h-96 object-cover" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[white] mb-6">
              We empower small business owners
            </h2>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl  leading-relaxed mb-6">
              <p className="mb-4 text-white">We help entrepreneurs establish strong foundations and build sustainable business systems.</p>
              <p className="text-white" >We train with modern frameworks that drive clarity, confidence, and long-term growth.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <p className="text-lg italic text-gray-700 mb-1">"Making an impact, together"</p>
              <p className="text-gray-500 text-sm">Socially Founder</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================= */}
      {/* ✨ SECTION 4 — BUSINESS GROWTH */}
      {/* ============================================= */}
      <section className="py-20 bg-gradient-to-b from-[#F8F9FA] to-[#E9ECEF]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-[#315262] ">We help businesses grow faster</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our frameworks accelerate business success with tested, strategic methods built for real-world results.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Professional Team",
              text: "Experts with deep knowledge in scaling and business strategy.",
            },
            {
              title: "Target Oriented",
              text: "Focused frameworks designed for maximum growth outcomes.",
            },
            {
              title: "Success Guarantee",
              text: "Systems that consistently deliver measurable results.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl border shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F9E27C33] flex items-center justify-center">
                <svg width="24" height="24" fill="none" stroke="#1A1A1A" strokeWidth="1.5"></svg>
              </div>
              <h3 className="text-xl font-bold text-[#315262]">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutNew;
