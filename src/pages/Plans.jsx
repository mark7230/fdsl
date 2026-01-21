import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import untitledProject from "../assets/Untitled Project.jpg";

export default function Plans() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Membership Plans</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Choose the plan that best fits your financial education journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Monthly Membership */}
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#315262] mb-4">Monthly Membership</h2>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-[#315262]">$55</span>
                <span className="text-gray-500 ml-2 text-xl">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#EFAB47] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444444]">Access to all course materials</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#EFAB47] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444444]">Community support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#EFAB47] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444444]">Monthly Q&A sessions</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowModal(true)}
                className="block w-full py-4 bg-[#315262] text-white font-bold rounded-lg hover:bg-[#253d4a] transition-colors text-center text-lg"
              >
                Get Started
              </button>
            </div>
          </motion.div>
          
          {/* The Freedom Package */}
          <motion.div 
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-[#315262] to-[#253d4a] rounded-2xl shadow-xl overflow-hidden text-white relative"
          >
            <div className="absolute top-0 right-0 bg-[#EFAB47] text-[#315262] px-6 py-2 font-bold rounded-bl-lg">
              MOST POPULAR
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">The Freedom Package</h2>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold">$2000</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#EFAB47] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All courses included</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#EFAB47] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#EFAB47] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly live Q&A sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#EFAB47] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Certificate of completion</span>
                </li>
              </ul>
              <button 
                onClick={() => setShowModal(true)}
                className="block w-full py-4 bg-[#EFAB47] text-[#315262] font-bold rounded-lg hover:bg-[#e6992e] transition-colors text-center text-lg"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Combo Courses */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="p-5">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-[#315262]">Combo Courses</h2>
              <span className="bg-[#E9B24E] text-[#315262] px-6 py-2 rounded-full font-bold text-lg shadow-md">
                20% OFF
              </span>
            </div>
            
            {/* Further Reduced Course Bundle Image */}
            <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
              <div className="md:w-1/3">
                <div className="rounded-2xl overflow-hidden border-4 border-[#315262]/10 shadow-xl bg-gradient-to-br from-white to-gray-50 p-3 transition-all duration-300 hover:shadow-2xl mx-auto">
                  <div className="relative">
                    <img 
                      src={untitledProject} 
                      alt="Digital Course Bundle" 
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="flex flex-wrap items-baseline gap-4 mb-4">
                  <span className="text-3xl font-bold text-[#315262]">The Freedom Solution Package</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl text-gray-500 line-through">$3125</span>
                    <span className="text-4xl font-bold text-[#315262]">$2500</span>
                  </div>
                </div>
                <p className="text-[#444444] mb-6 text-lg">
                  Get all courses with exclusive content and personalized mentoring sessions.
                </p>
                <button 
                  onClick={() => setShowModal(true)}
                  className="inline-block py-4 px-8 bg-[#315262] text-white font-bold rounded-lg hover:bg-[#253d4a] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg"
                >
                  Get the Bundle
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nightly Live Q&A Sessions */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-[#315262] mb-6">Nightly Live Q&A Sessions</h2>
            <p className="text-[#444444] mb-6 text-lg">
              Join our expert instructors for daily live sessions to get your questions answered in real-time.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center">
                <svg className="w-8 h-8 text-[#EFAB47] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xl font-semibold  text-[#315262] px-2 rounded">Daily at 7:00 PM EST</span>
              </div>
              <div className="flex items-center">
                <svg className="w-8 h-8 text-[#EFAB47] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xl font-semibold bg-white text-[#315262] px-2 rounded">Virtual Classroom</span>
              </div>
            </div>
            <button 
              onClick={() => setShowModal(true)}
              className="inline-block py-4 px-10 bg-[#EFAB47] text-[#315262] font-bold rounded-lg hover:bg-[#e6992e] transition-colors text-lg"
            >
              Register for Sessions
            </button>
          </div>
        </div>
      </div>
      
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
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
                  <h2 className="text-3xl font-bold text-[#315262]">Special Enrollment Offer</h2>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="text-center mb-8">
                  <div className="inline-block bg-gradient-to-r from-[#EFAB47] to-[#D4AF37] text-white px-6 py-3 rounded-full mb-4">
                    <span className="font-bold text-xl">LIMITED TIME OFFER</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#315262] mb-4">Join Today and Get Exclusive Benefits!</h3>
                  <p className="text-gray-600 mb-6">
                    As a thank you for your interest, we're offering special bonuses for new members who enroll this week.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <div className="text-blue-500 text-4xl mb-4">🎁</div>
                    <h4 className="font-bold text-lg text-[#315262] mb-2">Free Resource Library</h4>
                    <p className="text-gray-600 text-sm">
                      Instant access to our exclusive collection of templates, guides, and worksheets.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <div className="text-green-500 text-4xl mb-4">👥</div>
                    <h4 className="font-bold text-lg text-[#315262] mb-2">Priority Support</h4>
                    <p className="text-gray-600 text-sm">
                      Get faster responses to your questions from our expert team.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <div className="text-purple-500 text-4xl mb-4">📅</div>
                    <h4 className="font-bold text-lg text-[#315262] mb-2">Early Access</h4>
                    <p className="text-gray-600 text-sm">
                      Be the first to access new courses and content before public release.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#315262] to-[#253d4a] rounded-xl p-6 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Financial Future?</h3>
                  <p className="mb-6 opacity-90">
                    Join thousands of students who have already started their journey to financial sovereignty.
                  </p>
                  <Link 
                    to="/admission" 
                    onClick={() => setShowModal(false)}
                    className="inline-block py-4 px-10 bg-[#EFAB47] text-[#315262] font-bold rounded-lg hover:bg-[#e6992e] transition-colors text-lg"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}