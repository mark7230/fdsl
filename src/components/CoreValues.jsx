import React from "react";
import { motion } from "framer-motion";

export default function CoreValues() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mt-16 max-w-6xl mx-auto">
      <div className="flex flex-col items-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#ffffff] text-center mb-12"
      >
        Core Values
      </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full"
        >
          {/* Privacy */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-[#fff9f0] to-[#fef5e7] rounded-2xl p-8 shadow-lg border border-[#f0e6d2] flex flex-col h-full"
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#315262] p-3 rounded-xl mr-4">
                <svg className="w-8 h-8 text-[#EFAB47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#315262] text-2xl">Privacy</h4>
            </div>
            <p className="text-[#315262]/80 text-lg">
              Your information and sovereignty are sacred. We prioritize protecting your personal data and privacy rights.
            </p>
          </motion.div>

          {/* Empowerment */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-[#fff9f0] to-[#fef5e7] rounded-2xl p-8 shadow-lg border border-[#f0e6d2] flex flex-col h-full"
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#315262] p-3 rounded-xl mr-4">
                <svg className="w-8 h-8 text-[#EFAB47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#315262] text-2xl">Empowerment</h4>
            </div>
            <p className="text-[#315262]/80 text-lg">
              We equip you with actionable guidance and real strategies to achieve financial independence and sovereignty.
            </p>
          </motion.div>

          {/* Compliance */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-[#fff9f0] to-[#fef5e7] rounded-2xl p-8 shadow-lg border border-[#f0e6d2] flex flex-col h-full"
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#315262] p-3 rounded-xl mr-4">
                <svg className="w-8 h-8 text-[#EFAB47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#315262] text-2xl">Compliance</h4>
            </div>
            <p className="text-[#315262]/80 text-lg">
              Operate responsibly while mastering lawful processes. We emphasize ethical and legally sound practices.
            </p>
          </motion.div>

          {/* Integrity */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-[#fff9f0] to-[#fef5e7] rounded-2xl p-8 shadow-lg border border-[#f0e6d2] flex flex-col h-full"
          >
            <div className="flex items-center mb-4">
              <div className="bg-[#315262] p-3 rounded-xl mr-4">
                <svg className="w-8 h-8 text-[#EFAB47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#315262] text-2xl">Integrity</h4>
            </div>
            <p className="text-[#315262]/80 text-lg">
              Transparent, ethical, and principle-based education. We maintain the highest standards of honesty and accountability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}