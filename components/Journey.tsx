export default function Journey() {
  const educationData = [
    {
      year: "2022 - Now",
      institution: "Malikussaleh University",
      degree: "Bachelor of Computer Science"
    },
    {
      year: "2019 - 2022",
      institution: "SMK Negeri 3 Pematang Siantar",
      degree: "Computer and Network Engineering"
    }
  ];

  const experienceData = [
    {
      year: "2024 - Now",
      company: "Freelance Projects",
      position: "Full Stack / Machine Learning Projects"
    },
    {
      year: "August 2025 - December 2025",
      company: "Asah lead By dicoding",
      position: "Cohort Machine Learning Engineer"
    },
    {
      year: "June 2025 - January 2026",
      company: "Himpunan Mahasiswa Teknik Informatika Universitas Malikussaleh",
      position: "General Secretary"
    },
    {
      year: "October 2024 - December 2024",
      company: "Dinas Perpustakaan dan Kearsipan Kota Lhokseumawe",
      position: "It Support Intern"
    }
  ];

  return (
    <section id="journey" className="py-20 sm:py-24 px-4 sm:px-6 bg-white dark:bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center">My Journey</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 1 10.998 1 17.931c0 5.4 3.578 9.153 6.817 11.286 1.875 1.138 4.764 2.783 6.183 2.783 1.419 0 4.308-1.645 6.183-2.783 3.239-2.133 6.817-5.886 6.817-11.286 0-6.933-5.5-11.678-11-13.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>
            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 bg-blue-400 rounded-full border-4 border-white"></div>
                  {/* Timeline line */}
                  {idx !== educationData.length - 1 && (
                    <div className="absolute left-1.5 top-6 w-0.5 h-12 bg-blue-200"></div>
                  )}
                  
                  <div className="bg-blue-50 rounded-lg p-5 border border-blue-200 hover:shadow-md transition">
                    <p className="text-sm font-semibold text-blue-600 mb-1">{edu.year}</p>
                    <h4 className="font-semibold text-slate-900 text-base mb-1">{edu.institution}</h4>
                    <p className="text-sm text-slate-600">{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Experience</h3>
            </div>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 bg-blue-400 rounded-full border-4 border-white"></div>
                  {/* Timeline line */}
                  {idx !== experienceData.length - 1 && (
                    <div className="absolute left-1.5 top-6 w-0.5 h-12 bg-blue-200"></div>
                  )}
                  
                  <div className="bg-blue-50 rounded-lg p-5 border border-blue-200 hover:shadow-md transition">
                    <p className="text-sm font-semibold text-blue-600 mb-1">{exp.year}</p>
                    <h4 className="font-semibold text-slate-900 text-base mb-1">{exp.company}</h4>
                    <p className="text-sm text-slate-600">{exp.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
