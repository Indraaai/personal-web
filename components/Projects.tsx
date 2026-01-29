'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});
  const { ref: titleRef, isVisible: titleVisible } = useInView();
  const { ref: gridRef, isVisible: gridVisible } = useInView();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A Dashboard analysis the purpose of business for e-commerce data with Streamlit.",
      tech: ["Streamlit", "Python", "Pandas"],
      link: "https://eccomercee.streamlit.app/",
      image: "/projects/image.png"
    },
    {
      id: 2,
      title: "TelcoReco",
      description: "Capstone project Tim for final projects at Asah lead by dicoding, Website recommendation products telco.",
      tech: ["React",, "Machine Learning","Flask"],
      link: "https://telcoreco.vercel.app/",
      image: "/projects/image3.png"
    },
    {
      id: 3,
      title: "Template-in Ai",
      description: "Web application to solve student problems in checking academic documents With Ai models Llama 3.1.",
      tech: ["Laravel", "Llama 3.1", "MYSQL", "PHP"],
      link: "https://github.com/Indraaai/Templatein_Ai",
      image: "/projects/picture3.png"
    }
  ];

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className={`text-center mb-12 sm:mb-16 lg:mb-20 ${titleVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-900">Featured Projects</h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-2 sm:px-0">
            A selection of recent projects showcasing my skills in web development and machine learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${gridVisible ? 'stagger-children' : ''}`}>
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full flex flex-col bg-white border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-xl hover-lift transition-all duration-300"
            >
              {/* Project Image Area */}
              <div className="relative h-32 sm:h-40 lg:h-48 bg-linear-to-br from-blue-50 to-blue-100 overflow-hidden shrink-0">
                {!imageErrors[project.id] ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(project.id)}
                    priority={false}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl bg-linear-to-br from-blue-50 to-blue-100 animate-float">
                    📱
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-slate-900 group-hover:text-blue-600 transition duration-300">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 sm:pt-5 border-t border-slate-200">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold border border-blue-200 group-hover:bg-blue-100 group-hover:border-blue-400 group-hover:scale-110 transition duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <div className="mt-4 sm:mt-5 flex items-center text-blue-600 font-semibold text-xs sm:text-sm group-hover:text-blue-700 transition duration-300">
                  View Project
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-2 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center animate-fade-in-up">
          <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">Want to see more of my work?</p>
          <a
            href="https://github.com/Indraaai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-400 hover:bg-blue-500 hover:shadow-lg hover:scale-105 text-white font-semibold text-sm sm:text-base rounded-lg transition duration-300 shadow-md"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Explore on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
