import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/learn.jpg";
import img2 from "../assets/apply.jpg";
import img3 from "../assets/thrive.jpg";

export default function Approach() {
  const steps = [
    {
      number: 1,
      title: "Learn",
      description: "Master foundational concepts through structured modules.",
      image: img1,
    },
    {
      number: 2,
      title: "Apply",
      description: "Implement strategies with guided practical exercises.",
      image: img2,
    },
    {
      number: 3,
      title: "Thrive",
      description: "Operate independently with confidence and clarity.",
      image: img3,
    },
  ];

  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white tracking-wide">
            Our Approach
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#315262] border border-[#829494] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-white">{step.title}</h3>
              <p className="text-white opacity-80 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
