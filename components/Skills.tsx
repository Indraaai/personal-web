type ColorKey = "blue";

interface SkillCategory {
  category: string;
  bgColor: string;
  borderColor: string;
  description: string;
  skills: Array<{ name: string; level: number }>;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      bgColor: "bg-white",
      borderColor: "border-blue-200",
      description: "Membangun interface yang responsif dan user-friendly",
      skills: [
        { name: "React", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      category: "Backend",
      bgColor: "bg-white",
      borderColor: "border-blue-200",
      description: "Mengembangkan API, server yang Scalable dan Efisien",
      skills: [
        { name: "Flask", level: 85 },
        { name: "Laravel", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Golang", level: 65 }
      ]
    },
    {
      category: "Tools & DevOps",
      bgColor: "bg-white",
      borderColor: "border-blue-200",
      description: "Tools dan platform untuk development workflow",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 80 },
        { name: "Vercel", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">Kompetensi</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-slate-900">Skills & Keahlian</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Teknologi dan skill yang saya kuasai untuk mengembangkan solusi digital yang inovatif dan berkualitas tinggi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category} className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border ${cat.borderColor}`}>
              {/* Category Header */}
              <div className="bg-blue-500 p-6 text-white">
                <h3 className="text-2xl font-bold">{cat.category}</h3>
                <p className="text-sm mt-1 text-white/90">{cat.description}</p>
              </div>

              {/* Skills List */}
              <div className="p-8 space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-slate-800">{skill.name}</span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-500 h-2.5 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Keunggulan Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Keunggulan Saya</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-all hover:border-blue-400 group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-100 text-blue-600 mb-4 group-hover:shadow-lg transition-all">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Cepat Belajar</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Mampu mempelajari teknologi baru dengan cepat dan menerapkannya secara efektif dalam project</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-all hover:border-blue-400 group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-100 text-blue-600 mb-4 group-hover:shadow-lg transition-all">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Problem Solving</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Analitis dalam mengidentifikasi masalah dan menciptakan solusi yang efisien serta scalable</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-blue-200 hover:shadow-lg transition-all hover:border-blue-400 group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-100 text-blue-600 mb-4 group-hover:shadow-lg transition-all">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v2h2v-2zm0-6h-2v4h2v-4zm0-6h-2v4h2V5z"/>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Inovasi</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Selalu mencari pendekatan baru dan meningkatkan kualitas dengan best practices terbaru</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
