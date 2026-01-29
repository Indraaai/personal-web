"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group shrink-0 hover-scale">
          <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl group-hover:glow transition">
            <span className="text-xs font-mono font-bold">&lt;/&gt;</span>
          </div>
          <span className="text-lg sm:text-2xl font-bold text-blue-500 group-hover:text-blue-600 transition hidden sm:inline">
            Indra
          </span>
        </a>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-sm md:text-base lg:text-lg font-semibold text-slate-700 items-center">
          {navLinks.map((link, idx) => (
            <li key={idx} className={`animate-fade-in-delay-${(idx + 1) * 100}`}>
              <a 
                href={link.href} 
                className="relative group text-slate-700 hover:text-blue-500 transition duration-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
          <li className="animate-fade-in-delay-300">
            <a 
              href="#home" 
              className="px-4 sm:px-6 py-2.5 rounded-full bg-blue-400 text-white font-semibold shadow-md hover:shadow-lg hover:bg-blue-500 hover:scale-110 transition-all duration-300 text-sm md:text-sm whitespace-nowrap"
            >
              Home
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 -mr-2 hover-scale"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white animate-fade-in-down">
          <ul className="flex flex-col gap-0 text-sm font-semibold text-slate-700 px-4 py-3 sm:px-6 sm:py-4">
            {navLinks.map((link, idx) => (
              <li key={idx} className={`animate-fade-in-up-delay-${idx * 100}`}>
                <a 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 px-2 text-slate-700 hover:text-blue-500 border-b border-slate-100 hover:bg-blue-50 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="py-2.5 animate-fade-in-up-delay-300">
              <a 
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block px-2 py-2 bg-blue-400 text-white rounded-lg font-semibold text-center hover:bg-blue-500 hover:shadow-lg transition"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
