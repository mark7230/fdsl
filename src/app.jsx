import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/home";
import Courses from "./pages/courses";
import CourseIndex from "./pages/CourseIndex";
import Plans from "./pages/Plans";
import CurriculumDemo from "./pages/CurriculumDemo";
import About from "./pages/about";
import AboutNew from "./pages/AboutNew";
import Admission from "./pages/admission";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthLayout from "./layouts/AuthLayout";
import SiteLayout from "./layouts/SiteLayout";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminRoute from "./auth/AdminRoute";
import AdminTest from "./pages/AdminTest";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UsersList from "./pages/admin/UsersList";
import ContactsList from "./pages/admin/ContactsList";
import Enrollments from "./pages/admin/Enrollments";
import UserDashboard from "./pages/UserDashboard";

// Import individual course components
import StatusCorrections from "./components/courses/StatusCorrections";
import SecurePartyCreditor from "./components/courses/SecurePartyCreditor";
import UnincorporatedBusinessTrust from "./components/courses/UnincorporatedBusinessTrust";
import OptimizingPersonalCredit from "./components/courses/OptimizingPersonalCredit";
import OptimizingBusinessCreditProfile from "./components/courses/OptimizingBusinessCreditProfile";
import ReclaimingSecuritiesDebtDischarging from "./components/courses/ReclaimingSecuritiesDebtDischarging";

// Add CSS for hiding scrollbar
const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function App() {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Inject CSS for hiding scrollbar
    const styleSheet = document.createElement("style");
    styleSheet.innerText = scrollbarHideStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    // Debugging: Log when component mounts
    console.log("App component mounted, current path:", location.pathname);

    // Check if we should force show the popup (for testing)
    const urlParams = new URLSearchParams(window.location.search);
    const forcePopup = urlParams.get("showPopup") === "true";

    // Only show popup on home page
    if (location.pathname === "/") {
      // More reliable way to check if user has visited before
      try {
        const hasVisited = localStorage.getItem("hasVisitedFDS");
        console.log("Has visited value:", hasVisited);

        if (!hasVisited || forcePopup) {
          console.log("User is new and on home page, setting up popup timer");
          // Set flag and show popup after a short delay
          if (!forcePopup) {
            localStorage.setItem("hasVisitedFDS", "true");
          }
          console.log("Setting popup to show");
          const timer = setTimeout(() => {
            console.log("Timer fired, showing popup");
            setShowWelcomePopup(true);
          }, 1000);
          return () => clearTimeout(timer);
        } else {
          console.log("User has visited before, not showing popup");
        }
      } catch (error) {
        // Handle cases where localStorage is not available
        console.log("LocalStorage not available, showing popup:", error);
        const timer = setTimeout(() => {
          setShowWelcomePopup(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  // Debugging: Log when showWelcomePopup changes
  useEffect(() => {
    console.log("showWelcomePopup state changed:", showWelcomePopup);
    // Also log to verify it's working
    if (showWelcomePopup) {
      console.log("Popup should be visible now!");
    }
  }, [showWelcomePopup]);

  return (
    <div>
      {/* Manual trigger button for testing - positioned like chatbot but with different icon */}
      {!location.pathname.startsWith("/admin") && (
        <button
          onClick={() => {
            localStorage.removeItem("hasVisitedFDS");
            setShowWelcomePopup(true);
          }}
          className="fixed bottom-4 left-4 z-40 bg-[#315262] text-white p-3 rounded-full shadow-lg hover:bg-[#253d4a] transition-colors animate-pulse"
        >
          <span className="text-xl">📣</span>
        </button>
      )}

      <main id="main">
        <Routes>
          {/* AUTH ROUTES */}
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />

          <Route
            path="/signup"
            element={
              <AuthLayout>
                <Signup />
              </AuthLayout>
            }
          />

          <Route path="/admin/enrollments" element={<Enrollments />} />
          <Route path="/dashboard" element={<UserDashboard />} />

          <Route
            path="/admin/*"
            element={
              <AdminRoute>
                <AdminLayout>
                  <Routes>
                    <Route path="" element={<AdminDashboard />} />
                    <Route path="users" element={<UsersList />} />
                    <Route path="contacts" element={<ContactsList />} />
                  </Routes>
                </AdminLayout>
              </AdminRoute>
            }
          />

          {/* SITE ROUTES */}
          <Route
            path="/*"
            element={
              <SiteLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/course-index" element={<CourseIndex />} />
                  <Route
                    path="/course/statuscorrections"
                    element={<StatusCorrections />}
                  />
                  <Route
                    path="/course/securepartycreditor"
                    element={<SecurePartyCreditor />}
                  />
                  <Route
                    path="/course/unincorporatedbusinesstrust"
                    element={<UnincorporatedBusinessTrust />}
                  />
                  <Route
                    path="/course/creditrepairpersonal"
                    element={<OptimizingPersonalCredit />}
                  />
                  <Route
                    path="/course/creditoptimizationbusiness"
                    element={<OptimizingBusinessCreditProfile />}
                  />
                  <Route
                    path="/course/reclaimingsecuritiesdebtdischarging"
                    element={<ReclaimingSecuritiesDebtDischarging />}
                  />
                  <Route path="/plans" element={<Plans />} />
                  <Route path="/curriculum-demo" element={<CurriculumDemo />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/about-new" element={<AboutNew />} />
                  <Route path="/admission" element={<Admission />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </SiteLayout>
            }
          />
        </Routes>
      </main>

      {/* Welcome Popup for New Users */}
      <AnimatePresence>
        {showWelcomePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
            onClick={() => setShowWelcomePopup(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 50, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, y: 0, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, y: 50, opacity: 0, rotateY: 15 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                mass: 0.8,
              }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 overflow-y-auto max-h-[90vh] scrollbar-hide">
                <div className="flex justify-center items-center mb-6 relative">
                  <motion.h2
                    className="text-3xl font-bold text-[#315262] text-center"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Welcome to Freedom Solutions!
                  </motion.h2>
                  <button
                    onClick={() => setShowWelcomePopup(false)}
                    className="absolute right-0 top-0 text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>

                <motion.div
                  className="text-center mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="inline-block bg-gradient-to-r from-[#315262] to-[#253d4a] text-white px-6 py-3 rounded-full mb-6">
                    <span className="font-bold text-xl">BEGINNER'S PATH</span>
                  </div>
                  <motion.h3
                    className="text-2xl font-bold text-[#315262] mb-4"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  >
                    Start Your Journey to Financial Sovereignty
                  </motion.h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    As a new member, you'll begin with our foundational courses:
                  </p>
                </motion.div>

                <motion.div
                  className="grid md:grid-cols-3 gap-6 mb-8"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#315262] rounded-xl p-6 text-center shadow-lg"
                  >
                    <div className="text-4xl mb-4">📘</div>
                    <h4 className="font-bold text-lg text-[#315262] mb-2">
                      SOV 101
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Introduction to Sovereignty Principles
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#EFAB47] rounded-xl p-6 text-center shadow-lg"
                  >
                    <div className="text-4xl mb-4">🔒</div>
                    <h4 className="font-bold text-lg text-[#315262] mb-2">
                      Become Private
                    </h4>
                    <p className="text-gray-600 text-sm">
                      The Basics of Financial Privacy
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="bg-gradient-to-br from-white to-gray-50 border-2 border-[#315262] rounded-xl p-6 text-center shadow-lg"
                  >
                    <div className="text-4xl mb-4">🗺️</div>
                    <h4 className="font-bold text-lg text-[#315262] mb-2">
                      Road Map Series
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Your Step-by-Step Guide to Success
                    </p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="bg-gradient-to-r from-[#315262] to-[#253d4a] rounded-xl p-6 text-white text-center"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Ready to Begin?</h3>
                  <p className="mb-6 opacity-90 text-white">
                    Join thousands who have started their journey to financial
                    freedom
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowWelcomePopup(false)}
                    className="inline-block py-4 px-10 bg-[#EFAB47] text-[#315262] font-bold rounded-lg hover:bg-[#e6992e] transition-colors text-lg"
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
