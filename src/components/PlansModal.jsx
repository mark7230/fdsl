import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PlansModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleEnroll = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-[#315262]">Membership Plans</h2>
                <button 
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Monthly Membership */}
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="border-2 border-[#315262] rounded-xl p-6 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
                >
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#EFAB47] rounded-full opacity-20"></div>
                  <h3 className="text-2xl font-bold text-[#315262] mb-2">Monthly Membership</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-[#315262]">$55</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#EFAB47] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Access to all course materials</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#EFAB47] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Community support</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#EFAB47] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Monthly Q&A sessions</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => handleEnroll('/admission')}
                    className="w-full py-3 bg-[#315262] text-white font-bold rounded-lg hover:bg-[#253d4a] transition-colors"
                  >
                    Get Started
                  </button>
                </motion.div>
                
                {/* The Freedom Package */}
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="border-2 border-[#EFAB47] rounded-xl p-6 bg-gradient-to-br from-[#315262] to-[#253d4a] text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-[#EFAB47] text-[#315262] px-4 py-1 font-bold rounded-bl-lg">
                    POPULAR
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#EFAB47] rounded-full opacity-20"></div>
                  <h3 className="text-2xl font-bold mb-2">The Freedom Package</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">$2000</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#EFAB47] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>All courses included</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#EFAB47] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#EFAB47] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Weekly live Q&A sessions</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#EFAB47] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => handleEnroll('/admission')}
                    className="w-full py-3 bg-[#EFAB47] text-[#315262] font-bold rounded-lg hover:bg-[#e6992e] transition-colors"
                  >
                    Enroll Now
                  </button>
                </motion.div>
              </div>
              
              {/* Combo Courses */}
              <div className="bg-gradient-to-r from-[#315262] to-[#253d4a] rounded-xl p-6 text-white mb-8 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#EFAB47] rounded-full opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold">Combo Courses</h3>
                    <span className="bg-[#EFAB47] text-[#315262] px-4 py-1 rounded-full font-bold">
                      20% OFF
                    </span>
                  </div>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">The Freedom Solution Package</span>
                    <span className="text-2xl font-bold ml-4 line-through opacity-75">$3125</span>
                    <span className="text-4xl font-bold ml-4">$2500</span>
                  </div>
                  <p className="mb-6 opacity-90">
                    Get all courses with exclusive content and personalized mentoring sessions.
                  </p>
                  <button 
                    onClick={() => handleEnroll('/admission')}
                    className="w-full sm:w-auto py-3 px-8 bg-[#EFAB47] text-[#315262] font-bold rounded-lg hover:bg-[#e6992e] transition-colors"
                  >
                    Get the Bundle
                  </button>
                </div>
              </div>
              
              {/* Nightly Live Q&A Sessions */}
              <div className="border border-gray-200 rounded-xl p-6 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-2xl font-bold text-[#315262] mb-4">Nightly Live Q&A Sessions</h3>
                <p className="text-gray-600 mb-4">
                  Join our expert instructors for daily live sessions to get your questions answered in real-time.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-[#EFAB47] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Daily at 7:00 PM EST</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-[#EFAB47] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Virtual Classroom</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}