import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CurriculumSection = ({ curriculumData }) => {
  const [openWeek, setOpenWeek] = useState(null);

  const toggleWeek = (weekIndex) => {
    setOpenWeek(openWeek === weekIndex ? null : weekIndex);
  };

  // Transform curriculum data to match our component structure
  const transformCurriculum = (data) => {
    if (!data || !Array.isArray(data)) return [];
    
    return data.map((item, index) => ({
      week: item.week || `Week ${index + 1}`,
      title: item.title || item.week || "Curriculum Module",
      lessons: item.topics || item.lessons || []
    }));
  };

  // Sample curriculum data structure
  const sampleCurriculum = [
    {
      week: "Week 1",
      title: "Introduction to Financial Sovereignty",
      lessons: [
        "Understanding Financial Privacy Principles",
        "Legal Framework Overview",
        "Setting Personal Objectives",
        "Initial Documentation Setup"
      ]
    },
    {
      week: "Week 2",
      title: "Credit Optimization Fundamentals",
      lessons: [
        "Credit Report Analysis",
        "Dispute Identification Techniques",
        "Strategic Filing Processes",
        "Monitoring and Verification"
      ]
    },
    {
      week: "Week 3",
      title: "Asset Protection Strategies",
      lessons: [
        "Trust Formation Basics",
        "Entity Selection Criteria",
        "Implementation Timeline",
        "Compliance Requirements"
      ]
    },
    {
      week: "Week 4",
      title: "Advanced Structuring Techniques",
      lessons: [
        "Multi-Jurisdictional Planning",
        "Estate Preservation Methods",
        "Tax Optimization Strategies",
        "Succession Planning"
      ]
    },
    {
      week: "Week 5",
      title: "Implementation and Maintenance",
      lessons: [
        "Execution Roadmap",
        "Ongoing Compliance",
        "Periodic Reviews",
        "Advanced Troubleshooting"
      ]
    }
  ];

  // Use provided curriculum data or fallback to sample
  const curriculum = transformCurriculum(curriculumData) || sampleCurriculum;

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="space-y-5">
        {curriculum.map((week, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
              openWeek === index 
                ? 'border-[#315262] bg-blue-50 shadow-md' 
                : 'border-gray-200 hover:border-[#315262]/50 hover:shadow-sm'
            }`}
          >
            {/* Week Header */}
            <button
              onClick={() => toggleWeek(index)}
              className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center">
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#315262] flex items-center justify-center mr-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-bold">{index + 1}</span>
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg text-[#315262]">{week.week}: {week.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{week.lessons.length} Lessons</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 hidden sm:block">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <motion.svg 
                  className={`w-6 h-6 text-[#315262] transition-transform duration-300 ${
                    openWeek === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: openWeek === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </div>
            </button>

            {/* Expanded Content */}
            <AnimatePresence>
              {openWeek === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100 bg-white/80 overflow-hidden"
                >
                  <div className="p-5">
                    <ul className="space-y-4">
                      {week.lessons.map((lesson, lessonIndex) => (
                        <motion.li 
                          key={lessonIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: lessonIndex * 0.1 }}
                        >
                          <div className="flex-shrink-0 mt-1 mr-3">
                            <motion.div 
                              className="w-6 h-6 rounded-full bg-[#315262]/10 flex items-center justify-center"
                              whileHover={{ scale: 1.1 }}
                            >
                              <svg className="w-4 h-4 text-[#315262]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.div>
                          </div>
                          <span className="text-gray-700">{lesson}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-600">
          <span className="font-semibold text-[#315262]">Total:</span> {curriculum.length} Weeks • {curriculum.reduce((total, week) => total + week.lessons.length, 0)} Lessons
        </p>
      </div>
    </div>
  );
};

export default CurriculumSection;