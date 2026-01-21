import React from "react";
import CurriculumSection from "./CurriculumSection";

/*
 * USAGE EXAMPLES:
 * 
 * 1. Basic usage with sample data:
 * <CurriculumSection />
 * 
 * 2. With custom curriculum data:
 * const myCurriculum = [
 *   {
 *     week: "Module 1",
 *     title: "Introduction",
 *     lessons: [
 *       "Welcome Video",
 *       "Course Overview",
 *       "Getting Started Guide"
 *     ]
 *   },
 *   {
 *     week: "Module 2", 
 *     title: "Core Concepts",
 *     lessons: [
 *       "Lesson 1: Fundamentals",
 *       "Lesson 2: Advanced Techniques",
 *       "Lesson 3: Case Studies"
 *     ]
 *   }
 * ];
 * 
 * <CurriculumSection curriculumData={myCurriculum} />
 */

const CurriculumUsage = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-bold text-[#315262] mb-4">Curriculum Section Usage</h3>
      <p className="text-gray-600 mb-4">
        This component can be easily integrated into any course page or learning module.
      </p>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <pre className="text-sm text-gray-700 overflow-x-auto">
{`// Import the component
import CurriculumSection from "../components/CurriculumSection";

// Use in your JSX
<CurriculumSection curriculumData={yourCurriculumData} />`}
        </pre>
      </div>
      
      <div className="mt-6">
        <h4 className="font-semibold text-[#315262] mb-2">Features:</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Fully responsive design</li>
          <li>Expandable/collapsible modules</li>
          <li>Smooth animations and transitions</li>
          <li>Accessible keyboard navigation</li>
          <li>Customizable with your data</li>
          <li>Professional blue/white color scheme</li>
        </ul>
      </div>
    </div>
  );
};

export default CurriculumUsage;