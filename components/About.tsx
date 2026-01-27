export default function About() {

  return (
    <section id="about" className="py-25 sm:py-25 px-4 sm:px-6 bg-white dark:bg-white">
       bg-blue-50 dark:bg-blue-50
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get to know more about my background, experience, and journey in technology
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left - Story */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">My Story</h3>
            <div className="space-y-5">
              <p className="text-base text-slate-600 leading-relaxed">
                I'm a final-year Computer Science student at Universitas Malikussaleh with a passion for web development and machine learning. Every project is an opportunity to learn something new and push my boundaries.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                I believe in creating innovative solutions that solve real-world problems. My approach combines technical expertise with effective communication, ensuring successful collaboration and project outcomes.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                I'm committed to continuous learning and staying updated with the latest technologies. Whether it's building scalable web applications or exploring machine learning, I bring 100% dedication to every project.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="flex flex-col gap-5">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <p className="font-semibold text-slate-900 mb-1">Projects Completed</p>
              <p className="text-sm text-slate-600">Various web and ML projects</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <p className="font-semibold text-slate-900 mb-1">Years Experience</p>
              <p className="text-sm text-slate-600">Web dev & Machine Learning</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="font-semibold text-slate-900 mb-1">Commitment</p>
              <p className="text-sm text-slate-600">To every project I work on</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
