import React, { useEffect, useRef } from 'react';
import SovImage from '../assets/Sov.jpg';

const Timeline = () => {
  // Features data for the new layout
  const features = [
    {
      id: 1,
      icon: 'shield',
      title: 'Becoming Private',
      description: 'Step out of the public system and operate as a private, living man or woman.'
    },
    {
      id: 2,
      icon: 'briefcase',
      title: 'Private Business Trust',
      description: 'Protect assets, separate liability, and establish generational structure.'
    },
    {
      id: 3,
      icon: 'credit-card',
      title: 'Optimise Credit',
      description: 'Strengthen personal and business credit to access better funding.'
    },
    {
      id: 4,
      icon: 'stamp',
      title: 'Secure Party Creditor',
      description: 'Reclaim your legal standing and access commercial remedies.'
    },
    {
      id: 5,
      icon: 'document',
      title: 'Reclaim Your Securities',
      description: 'Identify and bring key instruments back under private control.'
    },
    {
      id: 6,
      icon: 'bank',
      title: 'Become Your Own Banker',
      description: 'Circulate value privately and fund your ventures independently.'
    }
  ];

  // Split features into left and right columns
  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3, 6);

  // Reference for fade-in animation
  const sectionRef = useRef(null);

  // Simple icon representations using SVG paths
  const renderIcon = (iconType) => {
    const iconProps = {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };

    switch (iconType) {
      case 'shield':
        return (
          <svg {...iconProps}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case 'briefcase':
        return (
          <svg {...iconProps}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        );
      case 'credit-card':
        return (
          <svg {...iconProps}>
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        );
      case 'stamp':
        return (
          <svg {...iconProps}>
            <path d="M5 22h14" />
            <path d="M17 2h-2a1 1 0 0 0-1 1v17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 0-1-1H5" />
          </svg>
        );
      case 'document':
        return (
          <svg {...iconProps}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      case 'bank':
        return (
          <svg {...iconProps}>
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Add fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full py-8 lg:py-10 bg-gradient-to-b from-white to-gray-50">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 fade-in-element"
      >
        {/* Three-column layout for desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left column */}
          <div className="space-y-8 lg:space-y-10">
            {leftFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="group flex items-start space-x-4 p-6 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-gray-100"
              >
                <div className="flex-shrink-0 mt-1">
                  {/* Soft shadow background behind each step icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EFAB47]/20 to-[#D4AF37]/10 rounded-xl blur-md opacity-70"></div>
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#EFAB47]/15 to-[#D4AF37]/15 flex items-center justify-center text-[#EFAB47] group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {renderIcon(feature.icon)}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F3A48] mb-2">{feature.title}</h3>
                  <p className="text-[#1F3A48]/80 text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center column with image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Larger center image with smooth gradient border */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-[#EFAB47] via-[#D4AF37] to-[#315262] p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img
                    src={SovImage}
                    alt="Sovereignty Path"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8 lg:space-y-10">
            {rightFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="group flex items-start space-x-4 p-6 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-gray-100"
              >
                <div className="flex-shrink-0 mt-1">
                  {/* Soft shadow background behind each step icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EFAB47]/20 to-[#D4AF37]/10 rounded-xl blur-md opacity-70"></div>
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#EFAB47]/15 to-[#D4AF37]/15 flex items-center justify-center text-[#EFAB47] group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {renderIcon(feature.icon)}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F3A48] mb-2">{feature.title}</h3>
                  <p className="text-[#1F3A48]/80 text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stacked layout for mobile */}
        <div className="md:hidden space-y-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group flex items-start space-x-4 p-6 rounded-2xl bg-white backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex-shrink-0 mt-1">
                {/* Soft shadow background behind each step icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EFAB47]/20 to-[#D4AF37]/10 rounded-xl blur-md opacity-70"></div>
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#EFAB47]/15 to-[#D4AF37]/15 flex items-center justify-center text-[#EFAB47] group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {renderIcon(feature.icon)}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F3A48] mb-2">{feature.title}</h3>
                <p className="text-[#1F3A48]/80 text-base leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;