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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2D5CFF] border-b-4 border-black shadow-neo">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-2 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 bg-[#2D5CFF] border-3 border-black flex items-center justify-center shadow-neo-sm group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all duration-200">
            <span className="text-white font-black text-lg">IF</span>
          </div>
          <span className="text-xl sm:text-2xl font-black text-white group-hover:translate-x-1 transition-all duration-200">
            Indra
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm md:text-base font-black items-center">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="relative px-3 py-1.5 border-2 border-transparent text-white hover:text-black hover:bg-white hover:border-black hover:shadow-neo-sm transition-all duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#home"
              className="inline-block px-6 py-2.5 bg-white text-black font-black text-sm border-3 border-black shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              Home
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 border-3 border-black shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-1 bg-white transition-all duration-200 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`w-6 h-1 bg-white transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-1 bg-white transition-all duration-200 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-black bg-white shadow-neo-sm">
          <ul className="flex flex-col gap-1 text-sm font-black px-4 py-3 sm:px-6 sm:py-4 stagger-children">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-3 border-2 border-transparent text-[#2D5CFF] hover:text-white hover:bg-[#2D5CFF] hover:border-black transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 bg-[#2D5CFF] text-white font-black text-center border-3 border-black shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
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