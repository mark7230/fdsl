import React, { useState } from "react";
import CourseCard from "../components/coursecard";
import ApplyNowButton from "../components/ApplyNowButton";
import RequestInfoButton from "../components/RequestInfoButton";
import course1 from '../assets/course1.jpg';
import course2 from '../assets/course2.jpg';
import course3 from '../assets/course3.jpg';
import course4 from '../assets/course4.jpg';
import course5 from '../assets/course5.jpg';
import course6 from '../assets/course6.jpg';


export default function Courses() {
  const [filter, setFilter] = useState("all");

  // Courses data with images & button links
  const courses = [
    {
      title: "Status Corrections",
      level: "Foundational",
      duration: "4 weeks",
      summary:
        "Core principles, documentation workflows, and compliance considerations.",
      category: "legal",
      features: ["Principles", "Workflows", "Compliance"],
      imageUrl: course1,
      slug: "statuscorrections"
    },
    {
      title: "SPC Secured Party Creditor",
      level: "Intermediate",
      duration: "5 weeks",
      summary:
        "Understanding frameworks, filings, and risk management.",
      category: "legal",
      features: ["Frameworks", "Risk Management", "Compliance"],
      imageUrl: course2,
      slug: "securepartycreditor"
    },
    {
      title: "Business Trust",
      level: "Intermediate",
      duration: "4 weeks",
      summary:
        " Establishing and operating private trust structures with expertise. ",
      category: "business",
      features: ["Private Trusts", "Operating Structures","Creditor Rights"],
      imageUrl: course3,
      slug: "unincorporatedbusinesstrust"
    },
    {
      title: "Optimizing Personal Credit",
      level: "Foundational",
      duration: "3 weeks",
      summary:
        "Remedy Now - Dispute mechanics, profile hygiene, and scoring optimization.",
      category: "credit",
      features: [
        "Dispute Mechanics",
        "Profile Hygiene",
        "Scoring Optimization"
      ],
      imageUrl: course4,
      slug: "creditrepairpersonal"
    },
    {
      title: "Optimizing Business Credit Profile",
      level: "Intermediate",
      duration: "3 weeks",
      summary:
        "Vendor tiers , trade lines, and underwriting signals.",
      category: "credit",
      features: ["Vendor Tiers", "Trade Lines", "Underwriting Signals"],
      imageUrl: course5,
      slug: "creditoptimizationbusiness"
    },
    {
      title: "Reclaiming Securities & Debt Discharging",
      level: "Advanced",
      duration: "6 weeks",
      summary:
        "Advanced processes, reconciliation, and documentation review.",
      category: "finance",
      features: [
        "Advanced Processes",
        "Reconciliation",
        "Documentation Review"
      ],
      imageUrl: course6,
      slug: "reclaimingsecuritiesdebtdischarging"
    }
  ];

  // Apply filter
  const visible = courses.filter(
    (c) => filter === "all" || c.category === filter
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
      
        {/* Header + Filter Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-[#829494] pb-4 mb-8 gap-4 md:gap-0">

  <h1 className="text-4xl font-bold text-[#315262]">
    All Courses
  </h1>

  <div className="text-left md:text-right w-full md:w-auto">
    <label className="block text-[#315262] text-sm">
      Filter by category
    </label>

    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="mt-1 bg-white text-[#315262] border border-[#829494] rounded px-3 py-2 
                 focus:ring focus:ring-[#315262]/40 transition w-full md:w-auto"
    >
      <option value="all">All</option>
      <option value="legal">Legal Foundation</option>
      <option value="business">Business Strategy</option>
      <option value="credit">Credit Optimization</option>
      <option value="finance">Financial Strategy</option>
    </select>
  </div>

</div>


        {/* Course Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((c) => (
            <CourseCard
              key={c.title}
              title={c.title}
              level={c.level}
              duration={c.duration}
              summary={c.summary}
              category={c.category}
              features={c.features}
              imageUrl={c.imageUrl}
              buttonLink={`/course/${c.slug}`}
            />
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="mt-8 text-center flex justify-center gap-4">
          <ApplyNowButton />
          <RequestInfoButton />
        </div>

      {/* Disclaimer */}
      <p className="mt-8 text-[#315262] text-center text-sm max-w-3xl mx-auto leading-relaxed">
        Educational disclaimer: These courses present educational materials only.
        Outcomes depend on individual circumstances and jurisdiction. Consult qualified professionals.
      </p>
      </div>
    </div>
  );
}