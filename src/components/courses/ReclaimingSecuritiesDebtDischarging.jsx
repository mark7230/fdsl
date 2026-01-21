import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseGate from "../CourseGate";
import { motion } from "framer-motion";
import CurriculumSection from "../CurriculumSection";
import EnrollButton from "../EnrollButton";
import course6 from "../../assets/course6.jpg";

const courseData = {
  id: 6,
  slug: "reclaiming-securities-debt-discharging",
  title: "Reclaiming Securities & Debt Discharging",
  level: "Advanced",
  duration: "6 weeks",
  price: 800,
  summary: "Advanced techniques for securities reclamation and debt discharge.",
  description:
    "Master the advanced art of securities reclamation and debt discharging with our comprehensive course. This advanced-level program delves deep into sophisticated legal and financial strategies for reclaiming your securities and properly discharging debts, providing you with the expertise needed to navigate complex financial landscapes with confidence and precision.",
  category: "finance",
  features: ["Securities Reclamation", "Debt Discharge", "Advanced Strategies"],
  imageUrl: course6,
  curriculum: [
    {
      week: "Week 1",
      topics: [
        "Securities Fundamentals",
        "Legal Framework",
        "Ownership Rights",
      ],
    },
    {
      week: "Week 2",
      topics: [
        "Reclamation Processes",
        "Documentation Requirements",
        "Filing Procedures",
      ],
    },
    {
      week: "Week 3",
      topics: ["Debt Analysis", "Discharge Mechanisms", "Legal Precedents"],
    },
    {
      week: "Week 4",
      topics: ["Advanced Reclamation", "Complex Scenarios", "Case Studies"],
    },
    {
      week: "Week 5",
      topics: [
        "Debt Discharge Strategies",
        "Negotiation Tactics",
        "Settlement Techniques",
      ],
    },
    {
      week: "Week 6",
      topics: [
        "Implementation Workshop",
        "Risk Management",
        "Ongoing Maintenance",
      ],
    },
  ],
};

// Difficulty config
const difficultyConfig = {
  Foundational: {
    label: "Beginner",
    color: "bg-green-100 text-green-800",
  },
  Intermediate: {
    label: "Intermediate",
    color: "bg-yellow-100 text-yellow-800",
  },
  Advanced: {
    label: "Advanced",
    color: "bg-red-100 text-red-800",
  },
};

export default function ReclaimingSecuritiesDebtDischarging() {
  const [openWeek, setOpenWeek] = useState(null);

  const difficulty =
    difficultyConfig[courseData.level] || difficultyConfig["Foundational"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back to Courses */}
        <div className="mb-6">
          <Link
            to="/courses"
            className="inline-flex items-center text-white hover:text-[#EFAB47]"
          >
            ← Back to All Courses
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Hero */}
          <div
            className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${courseData.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#315262] via-[#315262]/70 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <h1 className="text-3xl font-bold mb-2">
                {courseData.title}
              </h1>
              <div className="flex flex-wrap gap-4">
                <span
                  className={`px-3 py-1 rounded-full font-semibold ${difficulty.color}`}
                >
                  {difficulty.label}
                </span>
                <span>{courseData.duration}</span>
                <span>${courseData.price}</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-6">
            <p className="text-lg text-[#444444] mb-8">
              {courseData.description}
            </p>

            {/* What You'll Learn */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#315262] mb-4">
                What You’ll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {courseData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="mr-3 text-[#EFAB47]">✔</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 🔒 COURSE ACCESS GATING */}
            <CourseGate>
              {/* Curriculum */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#315262] mb-4">
                  Curriculum
                </h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CurriculumSection
                    curriculumData={courseData.curriculum}
                  />
                </motion.div>
              </div>

              {/* Enroll */}
              <div className="text-center pt-6">
                <EnrollButton
                  courseSlug={courseData.slug}
                  price={courseData.price}
                />
                <p className="mt-3 text-sm text-[#444444]">
                  Secure your spot in this comprehensive course
                </p>
              </div>
            </CourseGate>
          </div>
        </div>
      </div>
    </div>
  );
}