import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseGate from "../CourseGate";
import { motion } from "framer-motion";
import CurriculumSection from "../CurriculumSection";
import EnrollButton from "../EnrollButton";
import course4 from "../../assets/course4.jpg";

const courseData = {
  id: 4,
  slug: "credit-repair-personal",
  title: "Optimizing Personal Credit",
  level: "Foundational",
  duration: "3 weeks",
  price: 500,
  summary:
    "Remedy Now - Dispute mechanics, profile hygiene, and scoring optimization.",
  description:
    "Transform your personal credit profile with our specialized course on credit repair and optimization. This foundational program teaches dispute mechanics, profile hygiene, and scoring optimization techniques that can help improve your credit standing and unlock better financial opportunities.",
  category: "credit",
  features: ["Dispute Mechanics", "Profile Hygiene", "Scoring Optimization"],
  imageUrl: course4,
  curriculum: [
    {
      week: "Week 1",
      topics: [
        "Credit Report Analysis",
        "Dispute Identification",
        "Documentation Gathering",
      ],
    },
    {
      week: "Week 2",
      topics: [
        "Dispute Submission Process",
        "Negotiation Techniques",
        "Response Management",
      ],
    },
    {
      week: "Week 3",
      topics: [
        "Profile Enhancement",
        "Scoring Strategies",
        "Maintenance Protocols",
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

export default function OptimizingPersonalCredit() {
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