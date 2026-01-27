"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Saya akan segera menghubungi Anda.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 bg-white dark:bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">Contact</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have a question or proposition? I'd love to hear from you. Let's connect!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Let's Talk</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                I'm always open to new opportunities, exciting projects, and interesting collaborations. Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-5">
              {/* Email */}
              <a href="mailto:iindra09323@gmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="grow">
                  <p className="text-sm font-semibold text-blue-600 mb-1">Email</p>
                  <p className="text-slate-900 font-medium hover:text-blue-600 transition">iindra09323@gmail.com</p>
                </div>
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/indra-firmansyah-93885830b/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.756 1.939 1.71 0 .949-.752 1.707-1.982 1.707zm1.582 11.597H3.635V9.859h3.284v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </div>
                <div className="grow">
                  <p className="text-sm font-semibold text-blue-600 mb-1">LinkedIn</p>
                  <p className="text-slate-900 font-medium hover:text-blue-600 transition">linkedin.com/in/indra-firmansyah</p>
                </div>
              </a>
              
              {/* GitHub */}
              <a href="https://github.com/Indraaai" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="grow">
                  <p className="text-sm font-semibold text-blue-600 mb-1">GitHub</p>
                  <p className="text-slate-900 font-medium hover:text-blue-600 transition">github.com/Indraaai</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6  bg-blue-50 dark:bg-blue-50 p-6 rounded-lg shadow-md">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
