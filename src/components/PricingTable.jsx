import React from "react";
import { Link } from "react-router-dom";

const pricingData = [
  {
    id: 1,
    title: "Status Corrections",
    price: 500,
    level: "Foundational",
    duration: "4 weeks",
    features: [
      "Core principles",
      "Documentation workflows",
      "Compliance considerations",
      "Personal consultation",
      "Resource library access"
    ],
    popular: false,
    slug: "status-corrections"
  },
  {
    id: 2,
    title: "SPC Secured Party Creditor",
    price: 700,
    level: "Intermediate",
    duration: "5 weeks",
    features: [
      "Framework understanding",
      "Filing procedures",
      "Risk management",
      "Advanced applications",
      "Case study analysis"
    ],
    popular: true,
    slug: "secure-party-creditor"
  },
  {
    id: 3,
    title: "Business Trust",
    price: 500,
    level: "Intermediate",
    duration: "4 weeks",
    features: [
      "Trust establishment",
      "Operational guidelines",
      "Compliance obligations",
      "Optimization techniques",
      "Troubleshooting scenarios"
    ],
    popular: false,
    slug: "unincorporated-business-trust"
  },
  {
    id: 4,
    title: "Optimizing Personal Credit",
    price: 500,
    level: "Foundational",
    duration: "3 weeks",
    features: [
      "Dispute mechanics",
      "Profile hygiene",
      "Scoring optimization",
      "Remedy Now strategies",
      "Maintenance protocols"
    ],
    popular: false,
    slug: "credit-repair-personal"
  },
  {
    id: 5,
    title: "Optimizing Business Credit Profile",
    price: 500,
    level: "Intermediate",
    duration: "3 weeks",
    features: [
      "Vendor tiers",
      "Trade lines",
      "Underwriting signals",
      "Business strategy session",
      "Template library"
    ],
    popular: false,
    slug: "credit-optimization-business"
  },
  {
    id: 6,
    title: "Reclaiming Securities & Debt Discharging",
    price: 800,
    level: "Advanced",
    duration: "6 weeks",
    features: [
      "Advanced processes",
      "Reconciliation techniques",
      "Documentation review",
      "Legal framework analysis",
      "Case study workshops"
    ],
    popular: true,
    slug: "reclaiming-securities-debt-discharge"
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

export default function PricingTable() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#315262] mb-4">Course Pricing</h2>
          <p className="text-[#444444] max-w-2xl mx-auto">
            Invest in your financial future with our comprehensive course offerings. 
            Each program is designed to provide practical knowledge and actionable strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((course) => {
            const difficulty = difficultyConfig[course.level] || difficultyConfig['Foundational'];
            
            return (
              <div 
                key={course.id} 
                className={`
                  rounded-xl overflow-hidden shadow-lg bg-white 
                  border-2 ${course.popular ? 'border-[#EFAB47]' : 'border-[#829494]'}
                  hover:border-[#EFAB47] transition-all duration-300
                  flex flex-col h-full
                  relative
                `}
              >
                {/* Popular Tag */}
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-[#EFAB47] text-[#315262] text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center">
                      <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-bold text-xl text-[#315262] mb-2">{course.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficulty.color}`}>
                        {difficulty.label}
                      </span>
                      <span className="text-xs text-[#444444] flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {course.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-[#315262]">${course.price}</span>
                    </div>
                  </div>
                  
                  <ul className="mb-6 space-y-2 flex-grow">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-3 text-[#EFAB47]">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#444444] text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={`/course/${course.slug}`}
                    className="
                      block w-full py-3 px-4 text-center 
                      text-[#315262] font-bold rounded-lg
                      bg-gray-100 hover:bg-gray-200
                      transition-all duration-300
                      mt-auto
                    "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[#444444] max-w-2xl mx-auto">
            <strong>Note:</strong> All courses include lifetime access to materials, community support, 
            and quarterly updates. Prices are subject to change. Early bird discounts may be available.
          </p>
        </div>
      </div>
    </div>
  );
}