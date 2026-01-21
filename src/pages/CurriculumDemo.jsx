import React from "react";
import { motion } from "framer-motion";
import CurriculumSection from "../components/CurriculumSection";

const CurriculumDemo = () => {
  // Custom curriculum data for demonstration
  const customCurriculum = [
    {
      week: "Week 1",
      title: "Foundations of Financial Education",
      lessons: [
        "Understanding Personal Finance Principles",
        "Assessment of Current Financial Status",
        "Goal Setting and Planning Framework",
        "Introduction to Investment Basics"
      ]
    },
    {
      week: "Week 2",
      title: "Credit Management Mastery",
      lessons: [
        "Credit Score Fundamentals",
        "Report Analysis Techniques",
        "Dispute Resolution Strategies",
        "Building Positive Credit History"
      ]
    },
    {
      week: "Week 3",
      title: "Investment Portfolio Development",
      lessons: [
        "Asset Allocation Principles",
        "Risk Assessment Methods",
        "Diversification Strategies",
        "Portfolio Rebalancing Techniques"
      ]
    },
    {
      week: "Week 4",
      title: "Tax Optimization Strategies",
      lessons: [
        "Tax Law Fundamentals",
        "Deduction Maximization",
        "Timing Strategies",
        "Advanced Tax Planning"
      ]
    },
    {
      week: "Week 5",
      title: "Wealth Preservation & Legacy Planning",
      lessons: [
        "Estate Planning Essentials",
        "Asset Protection Mechanisms",
        "Succession Planning",
        "Charitable Giving Strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-[#e1e8f0] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#315262] mb-4">Premium Curriculum Showcase</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Experience our professionally designed learning modules
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#315262] mb-4">Modern Curriculum Design</h2>
              <p className="text-gray-600 mb-4">
                Our curriculum sections feature a premium design with smooth animations, 
                clean typography, and intuitive interaction patterns.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#315262] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Expandable week modules with smooth transitions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#315262] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional blue and white color scheme
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#315262] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lesson checkmarks for progress tracking
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#315262] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Calendar integration for scheduling
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                className="bg-gradient-to-br from-[#315262] to-[#253d4a] rounded-2xl p-6 text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold mb-3">Design Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Hover Effects</span>
                    <span className="bg-[#EFAB47] text-[#315262] px-2 py-1 rounded text-sm font-bold">Smooth</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Arrow Animations</span>
                    <span className="bg-[#EFAB47] text-[#315262] px-2 py-1 rounded text-sm font-bold">Rotating</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/20">
                    <span>Open Highlights</span>
                    <span className="bg-[#EFAB47] text-[#315262] px-2 py-1 rounded text-sm font-bold">Blue Tint</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Typography</span>
                    <span className="bg-[#EFAB47] text-[#315262] px-2 py-1 rounded text-sm font-bold">Clean</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CurriculumSection curriculumData={customCurriculum} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
            <svg className="w-6 h-6 text-[#315262] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-semibold text-[#315262]">Premium Learning Experience</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CurriculumDemo;