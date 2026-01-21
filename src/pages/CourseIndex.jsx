import React from "react";
import { Link } from "react-router-dom";
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";
import course6 from "../assets/course6.jpg";

const courseData = [
  {
    id: 1,
    slug: "status-corrections",
    title: "Status Corrections",
    level: "Foundational",
    duration: "4 weeks",
    price: 500,
    summary: "Core principles, documentation workflows, and compliance considerations.",
    category: "legal",
    features: ["Principles", "Workflows", "Compliance"],
    imageUrl: course1
  },
  {
    id: 2,
    slug: "secure-party-creditor",
    title: "SPC Secured Party Creditor",
    level: "Intermediate",
    duration: "5 weeks",
    price: 700,
    summary: "Understanding frameworks, filings, and risk management.",
    category: "legal",
    features: ["Frameworks", "Risk Management", "Compliance"],
    imageUrl: course2
  },
  {
    id: 3,
    slug: "unincorporated-business-trust",
    title: "Business Trust",
    level: "Intermediate",
    duration: "4 weeks",
    price: 500,
    summary: "Establishing and operating private trust structures with expertise.",
    category: "business",
    features: ["Private Trusts", "Operating Structures", "Creditor Rights"],
    imageUrl: course3
  },
  {
    id: 4,
    slug: "credit-repair-personal",
    title: "Optimizing Personal Credit",
    level: "Foundational",
    duration: "3 weeks",
    price: 500,
    summary: "Remedy Now - Dispute mechanics, profile hygiene, and scoring optimization.",
    category: "credit",
    features: ["Dispute Mechanics", "Profile Hygiene", "Scoring Optimization"],
    imageUrl: course4
  },
  {
    id: 5,
    slug: "credit-optimization-business",
    title: "Optimizing Business Credit Profile",
    level: "Intermediate",
    duration: "3 weeks",
    price: 500,
    summary: "Vendor tiers, trade lines, and underwriting signals.",
    category: "credit",
    features: ["Vendor Tiers", "Trade Lines", "Underwriting Signals"],
    imageUrl: course5
  },
  {
    id: 6,
    slug: "reclaiming-securities-debt-discharge",
    title: "Reclaiming Securities & Debt Discharging",
    level: "Advanced",
    duration: "6 weeks",
    price: 800,
    summary: "Advanced processes, reconciliation, and documentation review.",
    category: "finance",
    features: ["Advanced Processes", "Reconciliation", "Documentation Review"],
    imageUrl: course6
  }
];

// Map difficulty levels to colors and labels
const difficultyConfig = {
  'Foundational': { 
    label: 'Beginner', 
    color: 'bg-green-100 text-green-800',
    textColor: 'text-green-600'
  },
  'Intermediate': { 
    label: 'Intermediate', 
    color: 'bg-yellow-100 text-yellow-800',
    textColor: 'text-yellow-600'
  },
  'Advanced': { 
    label: 'Advanced', 
    color: 'bg-red-100 text-red-800',
    textColor: 'text-red-600'
  }
};

export default function CourseIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E4A56] to-[#355A66] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Courses</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Comprehensive educational programs designed to empower you with financial sovereignty knowledge
          </p>
        </div>
        
        {/* Key Features */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-[#315262] mb-6 text-center">Why Our Courses?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-[#EFAB47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#EFAB47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-[#315262] mb-2">Expert Instruction</h3>
              <p className="text-[#444444] text-sm">Learn from industry professionals with real-world experience</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-[#EFAB47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#EFAB47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#315262] mb-2">Value-Focused</h3>
              <p className="text-[#444444] text-sm">Comprehensive content at competitive pricing</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-[#EFAB47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#EFAB47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#315262] mb-2">Actionable</h3>
              <p className="text-[#444444] text-sm">Practical skills you can implement immediately</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-[#EFAB47]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#EFAB47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-[#315262] mb-2">Lifetime Access</h3>
              <p className="text-[#444444] text-sm">Continuous updates and community support</p>
            </div>
          </div>
        </div>
        
        {/* Course Overview */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#315262]">Course Overview</h2>
            <p className="text-[#444444] mt-2">
              Explore our comprehensive curriculum designed to build your financial sovereignty knowledge progressively
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courseData.map((course) => {
                  const difficulty = difficultyConfig[course.level] || difficultyConfig['Foundational'];
                  return (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div 
                              className="h-10 w-10 rounded-md bg-cover bg-center"
                              style={{ backgroundImage: `url(${course.imageUrl})` }}
                            ></div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{course.title}</div>
                            <div className="text-sm text-gray-500">{course.summary}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${difficulty.color}`}>
                          {difficulty.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${course.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link to={`/course/${course.slug}`} className="text-[#EFAB47] hover:text-[#315262]">
                          View Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/admission" 
            className="inline-block px-8 py-4 bg-[#EFAB47] text-white font-bold rounded-xl shadow-lg hover:bg-[#d69235] transition duration-300 text-lg"
          >
            Enroll in a Course Today
          </Link>
          <p className="mt-4 text-white/80">
            Take the first step toward financial sovereignty
          </p>
        </div>
      </div>
    </div>
  );
}