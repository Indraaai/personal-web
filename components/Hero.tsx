"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref: textRef, isVisible: textVisible } = useInView();
  const { ref: imageRef, isVisible: imageVisible } = useInView();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-6 py-6 sm:py-24 lg:py-16 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Side – Text Content */}
          <div
            ref={textRef}
            className={`space-y-6 ${textVisible ? "animate-fade-in-left" : "opacity-0"
              }`}
          >
            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight">
                Halo, saya{" "}
                <span className="text-[#2D5CFF] bg-primary px-2 inline-block border-3 border-black shadow-neo-sm">
                  Indra
                  <br className="sm:hidden" /> Firmansyah
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-black/80 font-bold">
                Web Developer & ML Enthusiast
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-black/70 leading-relaxed max-w-xl">
              Mahasiswa Teknik Informatika di Universitas Malikussaleh yang
              bersemangat membangun solusi web inovatif dan menjelajahi machine
              learning.
            </p>

            {/* CTA Buttons – Biru dengan teks putih */}
            {/* CTA Buttons – 3 tombol sejajar di mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
              <a
                href="https://drive.google.com/file/d/1XWRuFEXXsb4n3UojUzBYO-LO8yx1jORI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-2 sm:px-6 py-2.5 sm:py-3 bg-[#2D5CFF] text-white font-bold text-xs sm:text-sm border-3 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
              >
                Resume
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-2 sm:px-6 py-2.5 sm:py-3 bg-[#2D5CFF] text-white font-bold text-xs sm:text-sm border-3 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
              >
                Proyek
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1C4VdmU23wB7T-GUIydrcxtorAw8jc8go?usp=sharing"
                className="inline-flex items-center justify-center px-2 sm:px-6 py-2.5 sm:py-3 bg-[#2D5CFF] text-white font-bold text-xs sm:text-sm border-3 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
              >
                Sertifikat
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4 stagger-children">
              <a
                href="https://github.com/Indraaai"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#2D5CFF] border-3 border-black shadow-neo-sm group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  <svg
                    className="w-5 h-5 text-white group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/indra-firmansyah-93885830b"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#2D5CFF] border-3 border-black shadow-neo-sm group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  <svg
                    className="w-5 h-5 text-white group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.756 1.939 1.71 0 .949-.752 1.707-1.982 1.707zm1.582 11.597H3.635V9.859h3.284v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </div>
              </a>
              <a
                href="https://www.instagram.com/iindrafirmansyahhh"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="Instagram"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#2D5CFF] border-3 border-black shadow-neo-sm group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  <svg
                    className="w-5 h-5 text-white group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Decorative Line */}
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          {/* Right Side – Photo */}
          <div
            ref={imageRef}
            className={`flex justify-center lg:justify-end mt-8 lg:mt-0 ${imageVisible ? "animate-fade-in-right" : "opacity-0"
              }`}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Decorative geometric blocks – kini dengan warna biru */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#2D5CFF] border-3 border-black shadow-neo-sm z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#2D5CFF] border-3 border-black z-0"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-[#2D5CFF] border-3 border-black z-0"></div>

              {/* Image Container */}
              <div className="relative z-10 border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-300">
                <Image
                  src="/image.jpeg"
                  alt="Indra Firmansyah"
                  width={450}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator – Ikon biru */}
        <div className="flex justify-center mt-16 lg:mt-20">
          <div className="border-3 border-black p-2 shadow-neo-sm animate-bounce">
            <svg
              className="w-6 h-6 text-[#2D5CFF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}