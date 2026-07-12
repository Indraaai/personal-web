"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";
import projects from "@/data/projects";
import type { Project } from "@/data/projects";

function renderClampedDescription(text: string, lines = 2) {
  const style: CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <p
      style={style}
      className="text-xs sm:text-sm lg:text-base text-black/70 mb-4 sm:mb-6 leading-relaxed font-medium"
    >
      {text}
    </p>
  );
}

export default function Projects() {
  const [imageErrors, setImageErrors] = useState<{
    [key: number]: boolean;
  }>({});
  const { ref: titleRef, isVisible: titleVisible } = useInView();
  const { ref: gridRef, isVisible: gridVisible } = useInView();

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="projects"
      className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-white border-y-4 border-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`mb-8 sm:mb-12 text-center transition-all duration-500 ${titleVisible ? "animate-fade-in-down" : "opacity-0"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white inline-block border-4 border-black px-8 py-3 shadow-neo bg-[#2D5CFF]">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-black/70 max-w-2xl mx-auto mt-6 font-medium px-2">
            A selection of recent projects showcasing my skills in web
            development and machine learning.
          </p>
          <div className="w-24 h-2 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${gridVisible ? "stagger-children" : ""
            }`}
        >
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="group h-full flex flex-col bg-white border-3 border-black shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              {/* Project Image Area */}
              <div className="relative h-32 sm:h-40 lg:h-48 bg-[#2D5CFF] border-b-3 border-black overflow-hidden shrink-0">
                {!imageErrors[project.id] ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl bg-[#2D5CFF] animate-float">
                    📱
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2 sm:mb-3 text-black group-hover:text-[#2D5CFF] transition-colors duration-200">
                  {project.title}
                </h3>

                {renderClampedDescription(project.description, 2)}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 sm:pt-5 border-t-3 border-black">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white text-black border-2 border-black text-xs font-black shadow-neo-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <Link
                    href={`/project/${project.id}`}
                    className="text-[#2D5CFF] font-black text-xs sm:text-sm inline-flex items-center gap-1 border-b-2 border-transparent hover:border-[#2D5CFF] transition-all"
                  >
                    View Details
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-black text-xs sm:text-sm border-b-2 border-black hover:text-[#2D5CFF] hover:border-[#2D5CFF] transition-colors"
                  >
                    External
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center animate-fade-in-up">
          <p className="text-black/70 mb-4 text-sm sm:text-base font-medium">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/Indraaai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-3 border-black shadow-neo text-black font-black text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Explore on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}