import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../assets/home.jpg";

import About from "./about";
import Courses from "./courses";
import Admission from "./admission";
import Timeline from "../components/timeline";
import VisionMission from "../components/VisionMission";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66]">
      
      {/* HERO SECTION */}
      <section className="w-full h-[100vh] relative px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeImg})` }}
          aria-hidden="true"
        ></div>

        {/* Enhanced Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#315262]/80 via-[#315262]/40 to-[#315262]/80"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-6xl text-center px-4">
            {/* Updated Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Empower Your Future with <span className="text-[#EFAB47]">Financial Freedom</span>
            </h1>

            {/* Updated Subheadline */}
            <p className="mt-4 text-base sm:text-lg md:text-xl text-[#FBFCFC] leading-relaxed max-w-3xl mx-auto mb-8">
              Join our inclusive community of learners mastering financial sovereignty, credit optimization, 
              and wealth-building strategies. Courses designed for all backgrounds and experience levels.
            </p>

            {/* Updated Buttons */}
            <div className="mt-6 flex justify-center gap-3 sm:gap-4 flex-wrap">
              <Link to="/admission" className="btn-amber text-lg px-8 py-4 rounded-full">
                Apply Now
              </Link>

              <Link to="/about" className="btn-blue text-lg px-8 py-4 rounded-full">
                Request Info
              </Link>
            </div>

            {/* Enhanced Highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <svg className="w-8 h-8 text-[#EFAB47] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-white font-bold text-lg mb-1">6 Core Subjects</h3>
                <p className="text-[#e5e9ea] text-sm">Comprehensive curriculum</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <svg className="w-8 h-8 text-[#EFAB47] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-white font-bold text-lg mb-1">Self-Paced Learning</h3>
                <p className="text-[#e5e9ea] text-sm">Learn on your schedule</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <svg className="w-8 h-8 text-[#EFAB47] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-white font-bold text-lg mb-1">Community Support</h3>
                <p className="text-[#e5e9ea] text-sm">Connect with peers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOALS & IDEALS */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F4A55] text-center mb-6 font-serif tracking-wide">
            Goals & Ideals
          </h2>

          <p className="text-[#2F4A55] text-center text-sm sm:text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Our mission is to empower individuals with the knowledge and tools 
            needed to operate privately, build generational wealth, and thrive 
            outside the limitations of public-statutory systems.
          </p>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2F4A55] text-center mb-4 font-serif tracking-wide">
            Sovereignty Path
          </h3>

          <p className="text-[#2F4A55]/80 text-center text-sm sm:text-lg mb-8">
            Six steps toward full legal, financial, and spiritual independence.
          </p>

          {/* Timeline */}
          <div className="flex justify-center">
            <Timeline />
          </div>
        </div>
      </section>

      

      {/* IMPORTED SECTIONS */}
      <About />
      <Courses />
      <Admission />
    </div>
  );
}