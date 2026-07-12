'use client';

import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useInView();
  const { ref: contentRef, isVisible: contentVisible } = useInView();
  const { ref: statsRef, isVisible: statsVisible } = useInView();

  return (
    <section
      id="about"
      className="py-8 sm:py-16 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white border-y-4 border-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header – Neo Brutalist */}
        <div
          ref={titleRef}
          className={`mb-8 sm:mb-16 text-center transition-all duration-500 ${titleVisible ? "animate-fade-in-down" : "opacity-0"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white inline-block border-4 border-black px-8 py-3 shadow-neo bg-[#2D5CFF]">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-black/70 max-w-2xl mx-auto mt-6 font-medium px-4">
            Get to know more about my background, experience, and journey in technology
          </p>
          {/* Decorative line – tebal & hitam */}
          <div className="w-24 h-2 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left – Story (lebar 3 kolom) */}
          <div
            ref={contentRef}
            className={`lg:col-span-3 transition-all duration-500 ${contentVisible ? "animate-fade-in-left" : "opacity-0"
              }`}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-6 flex items-center gap-3">
              <span className="w-3 h-8 bg-[#2D5CFF] inline-block border-2 border-black"></span>
              My Story
            </h3>

            <div className="space-y-5 stagger-children">
              <div className="bg-[#2D5CFF] border-3 border-black p-6 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
                  I&apos;m a final-year Computer Science student at Universitas Malikussaleh with a passion for web development and machine learning. Every project is an opportunity to learn something new and push my boundaries.
                </p>
              </div>
              <div className="bg-white border-3 border-black p-6 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                <p className="text-sm sm:text-base text-[#2D5CFF] leading-relaxed font-medium">
                  I believe in creating innovative solutions that solve real-world problems. My approach combines technical expertise with effective communication, ensuring successful collaboration and project outcomes.
                </p>
              </div>
              <div className="bg-[#2D5CFF] border-3 border-black p-6 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
                <p className="text-sm sm:text-base text-white leading-relaxed font-medium">
                  I&apos;m committed to continuous learning and staying updated with the latest technologies. Whether it&apos;s building scalable web applications or exploring machine learning, I bring 100% dedication to every project.
                </p>
              </div>
            </div>
          </div>

          {/* Right – Stats Cards (lebar 2 kolom) */}
          <div
            ref={statsRef}
            className={`lg:col-span-2 flex flex-col gap-5 transition-all duration-500 ${statsVisible ? "animate-fade-in-right" : "opacity-0"
              }`}
          >
            <div className="bg-white border-4 border-black p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
              <div className="text-4xl sm:text-5xl font-black text-[#2D5CFF]">10+</div>
              <p className="font-black text-[#2D5CFF] mt-2 text-sm sm:text-base">Projects Completed</p>
              <p className="text-xs sm:text-sm text-[#2D5CFF]/80 font-medium mt-1">Various web and ML projects</p>
            </div>
            <div className="bg-[#2D5CFF] border-4 border-black p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
              <div className="text-4xl sm:text-5xl font-black text-white">2+</div>
              <p className="font-black text-white mt-2 text-sm sm:text-base">Years Experience</p>
              <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">Web dev & Machine Learning</p>
            </div>
            <div className="bg-white border-4 border-black p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
              <div className="text-4xl sm:text-5xl font-black text-[#2D5CFF]">100%</div>
              <p className="font-black text-[#2D5CFF] mt-2 text-sm sm:text-base">Commitment</p>
              <p className="text-xs sm:text-sm text-[#2D5CFF]/80 font-medium mt-1">To every project I work on</p>
            </div>

            {/* Decorative Neo Block di bawah stats */}
            <div className="flex gap-3 mt-2">
              <div className="w-10 h-10 bg-[#2D5CFF] border-3 border-black shadow-neo-sm"></div>
              <div className="w-10 h-10 bg-white border-3 border-black shadow-neo-sm"></div>
              <div className="w-10 h-10 bg-[#2D5CFF] border-3 border-black shadow-neo-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}