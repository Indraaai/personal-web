'use client';

import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useInView();
  const { ref: contentRef, isVisible: contentVisible } = useInView();
  const { ref: statsRef, isVisible: statsVisible } = useInView();

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className={`mb-12 sm:mb-16 lg:mb-20 text-center transition-all duration-700 ${titleVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">About Me</h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-2 sm:px-0">
            Get to know more about my background, experience, and journey in technology
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          {/* Left - Story */}
          <div ref={contentRef} className={`transition-all duration-700 ${contentVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">My Story</h3>
            <div className="space-y-4 sm:space-y-5 stagger-children">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                I'm a final-year Computer Science student at Universitas Malikussaleh with a passion for web development and machine learning. Every project is an opportunity to learn something new and push my boundaries.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                I believe in creating innovative solutions that solve real-world problems. My approach combines technical expertise with effective communication, ensuring successful collaboration and project outcomes.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                I'm committed to continuous learning and staying updated with the latest technologies. Whether it's building scalable web applications or exploring machine learning, I bring 100% dedication to every project.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div ref={statsRef} className={`flex flex-col gap-4 sm:gap-5 stagger-children transition-all duration-700 ${statsVisible ? '' : ''}`}>
            <div className="bg-blue-50 p-5 sm:p-6 rounded-xl border border-blue-100 hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">10+</div>
              <p className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Projects Completed</p>
              <p className="text-xs sm:text-sm text-slate-600">Various web and ML projects</p>
            </div>
            <div className="bg-blue-50 p-5 sm:p-6 rounded-xl border border-blue-100 hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">2+</div>
              <p className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Years Experience</p>
              <p className="text-xs sm:text-sm text-slate-600">Web dev & Machine Learning</p>
            </div>
            <div className="bg-blue-50 p-5 sm:p-6 rounded-xl border border-blue-100 hover:shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">100%</div>
              <p className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Commitment</p>
              <p className="text-xs sm:text-sm text-slate-600">To every project I work on</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
