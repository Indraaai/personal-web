import Image from "next/image";

export default function Certifications() {
  const certifications = [
    {
      title: "Membangun Sistem Machine Learning",
      issuer: "Dicoding",
      date: "December 2025",
      description: "Menguasai konsep Ml Ops, Deployment dan monitoring model machine learning di lingkungan produksi",
      image: "/cert-1.jpg",
      link: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "December 2023",
      description: "Komprehensif full stack development menggunakan Node.js, Express, MongoDB dan React",
      image: "/cert-2.jpg",
      link: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
    },
    {
      title: "JavaScript Advanced",
      issuer: "Pluralsight",
      date: "November 2023",
      description: "Memahami konsep lanjutan JavaScript seperti async/await, closure, dan design patterns",
      image: "/cert-3.jpg",
      link: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 px-4 sm:px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900">Certifications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Sertifikasi dan kredensial profesional yang telah saya peroleh</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-blue-200 group"
            >
              {/* Image Section */}
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition text-center"
                  >
                    View Certificate
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900">{cert.title}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-1">{cert.issuer}</p>
                <p className="text-xs text-slate-500 mb-4">{cert.date}</p>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
