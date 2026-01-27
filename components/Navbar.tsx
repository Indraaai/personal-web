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
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-50/95 backdrop-blur-lg border-b border-blue-200 dark:border-blue-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition">
            <span className="text-xs font-mono font-bold">&lt;/&gt;</span>
          </div>
          <span className="text-2xl font-bold text-blue-500 font-sans group-hover:text-blue-600 transition">
            Indra
          </span>
        </a>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-600 items-center">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a 
                href={link.href} 
                className="relative group font-sans text-slate-700 dark:text-slate-600 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#home" 
              className="px-6 py-2.5 rounded-full bg-blue-400 text-white font-semibold shadow-md hover:shadow-lg hover:bg-blue-500 transition-all duration-300 font-sans"
            >
              Home
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        >
          <span className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-600 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-600 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-600 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-blue-200 dark:border-blue-200 bg-white dark:bg-slate-50 animate-fade-in">
          <ul className="flex flex-col gap-0 text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-600 px-6 py-4">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-2 text-slate-700 dark:text-slate-600 hover:text-blue-500 dark:hover:text-blue-400 border-b border-blue-100 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a 
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2.5 rounded-full bg-blue-400 text-white font-semibold shadow-md hover:shadow-lg hover:bg-blue-500 transition-all duration-300 text-center"
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
