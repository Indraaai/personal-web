"use client";

import { useInView } from "@/hooks/useInView";

export default function Journey() {
  const { ref: titleRef, isVisible: titleVisible } = useInView();
  const { ref: educationRef, isVisible: educationVisible } = useInView();
  const { ref: experienceRef, isVisible: experienceVisible } = useInView();

  const educationData = [
    {
      year: "2022 - Now",
      institution: "Malikussaleh University",
      degree: "Bachelor of Computer Science",
    },
    {
      year: "2019 - 2022",
      institution: "SMK Negeri 3 Pematang Siantar",
      degree: "Computer and Network Engineering",
    },
  ];

  const experienceData = [
    {
      year: "juli 2026 - Now",
      company: "Exocloud Indonesia",
      position: "Web Developer (Internship)",
    },
    {
      year: "Mei 2026 - Now",
      company: "Kelas Kampus Indonesia",
      position: "Backend Developer (Internship)",
    },
    {
      year: "April 2026 - Now",
      company: "PT Sinergi Inovasi Tekno",
      position: "Lead Team Laravel Division (Internship)",
    },
    {
      year: "2024 - Now",
      company: "Freelance Projects",
      position: "Full Stack / Machine Learning Projects",
    },
    {
      year: "August 2025 - December 2025",
      company: "Asah lead By dicoding",
      position: "Cohort Machine Learning Engineer",
    },
    {
      year: "June 2025 - January 2026",
      company: "Himpunan Mahasiswa Teknik Informatika Universitas Malikussaleh",
      position: "General Secretary",
    },
    {
      year: "October 2024 - December 2024",
      company: "Dinas Perpustakaan dan Kearsipan Kota Lhokseumawe",
      position: "IT Support Intern",
    },
  ];

  const cardColors = [
    "bg-[#2D5CFF] text-white",   // biru
    "bg-white text-black",       // putih
  ];

  return (
    <section
      id="journey"
      className="py-8 sm:py-12 lg:py-8 px-4 sm:px-6 lg:px-8 bg-white border-y-4 border-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`mb-8 sm:mb-12 text-center transition-all duration-500 ${titleVisible ? "animate-fade-in-down" : "opacity-0"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white inline-block border-4 border-black px-8 py-3 shadow-neo bg-[#2D5CFF]">
            My Journey
          </h2>
          <p className="text-sm sm:text-base text-black/70 max-w-2xl mx-auto mt-6 font-medium">
            A timeline of my education and professional experience
          </p>
          <div className="w-24 h-2 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Education Section */}
        <div ref={educationRef} className="mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#2D5CFF] border-3 border-black flex items-center justify-center shadow-neo-sm">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M12 6.253v13m0-13C6.5 6.253 1 10.998 1 17.931c0 5.4 3.578 9.153 6.817 11.286 1.875 1.138 4.764 2.783 6.183 2.783 1.419 0 4.308-1.645 6.183-2.783 3.239-2.133 6.817-5.886 6.817-11.286 0-6.933-5.5-11.678-11-13.253"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-black">Education</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 stagger-children">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#2D5CFF] border-3 border-black p-5 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
              >
                <p className="text-xs sm:text-sm font-black text-white mb-1">
                  {edu.year}
                </p>
                <h4 className="font-black text-white text-sm sm:text-base mb-1">
                  {edu.institution}
                </h4>
                <p className="text-xs sm:text-sm text-white font-medium">
                  {edu.degree}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div ref={experienceRef}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#2D5CFF] border-3 border-black flex items-center justify-center shadow-neo-sm">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-black">Experience</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
            {experienceData.map((exp, idx) => {
              const colorClass = cardColors[idx % cardColors.length];
              return (
                <div
                  key={idx}
                  className={`border-3 border-black p-5 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 ${colorClass}`}
                >
                  <p className={`text-xs sm:text-sm font-black mb-1 ${colorClass.includes("text-white") ? "text-white" : "text-[#2D5CFF]"
                    }`}>
                    {exp.year}
                  </p>
                  <h4 className="font-black text-sm sm:text-base mb-1">
                    {exp.company}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium">
                    {exp.position}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative Neo Blocks */}
        <div className="flex justify-center gap-3 mt-16">
          <div className="w-8 h-8 bg-[#2D5CFF] border-3 border-black shadow-neo-sm"></div>
          <div className="w-8 h-8 bg-white border-3 border-black shadow-neo-sm"></div>
          <div className="w-8 h-8 bg-[#1A3BCC] border-3 border-black shadow-neo-sm"></div>
        </div>
      </div>
    </section>
  );
}