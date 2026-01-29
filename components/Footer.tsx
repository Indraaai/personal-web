export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/Indraaai", 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/iindrafirmansyahhh", 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/indra-firmansyah-93885830b", 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.756 1.939 1.71 0 .949-.752 1.707-1.982 1.707zm1.582 11.597H3.635V9.859h3.284v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-white text-slate-900 py-20 sm:py-24 border-t border-slate-200 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 stagger-children">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2 mb-6 group hover-scale">
              <div className="w-12 h-12 rounded-lg bg-blue-400 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:scale-105 transition">
                <span className="text-sm font-mono font-bold">&lt;/&gt;</span>
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900 group-hover:text-blue-400 transition">
                  Indra
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-600 leading-relaxed mt-4">
              Full Stack Developer crafting innovative and user-friendly web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-5">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-slate-600 hover:text-blue-400 transition duration-300 text-sm hover:translate-x-1 inline-block hover-glow"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-5">Social</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-400 transition duration-300 flex items-center gap-3 group text-sm hover-scale"
                >
                  <span className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition">
                    {social.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition inline-block">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-5">Contact</h3>
            <a
              href="mailto:iindra09323@gmail.com"
              className="flex items-start gap-3 group"
            >
              <div className="w-10 h-10 shrink-0 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition mt-0.5">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="grow">
                <p className="text-xs font-semibold text-blue-600 mb-1">Email</p>
                <p className="text-sm text-slate-900 hover:text-blue-400 transition break-all">
                  iindra09323@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            © {currentYear} Indra Firmansyah. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-blue-400 text-sm transition duration-300 hover:translate-x-0.5 inline-block">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-600 hover:text-blue-400 text-sm transition duration-300 hover:translate-x-0.5 inline-block">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
