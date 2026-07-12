"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { ref: titleRef, isVisible: titleVisible } = useInView();
  const { ref: contactRef, isVisible: contactVisible } = useInView();
  const { ref: formRef, isVisible: formVisible } = useInView();

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
    <section id="contact" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-white border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`mb-16 sm:mb-20 text-center transition-all duration-500 ${titleVisible ? "animate-fade-in-down" : "opacity-0"
            }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white inline-block border-4 border-black px-8 py-3 shadow-neo bg-[#2D5CFF]">
            Contact
          </h2>
          <p className="text-sm sm:text-base text-black/70 max-w-2xl mx-auto mt-6 font-medium px-2">
            Have a question or proposition? I&apos;d love to hear from you. Let&apos;s connect!
          </p>
          <div className="w-24 h-2 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side – Contact Info */}
          <div
            ref={contactRef}
            className={`space-y-6 stagger-children ${contactVisible ? "" : ""}`}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-3 flex items-center gap-3">
                <span className="w-3 h-8 bg-[#2D5CFF] inline-block border-2 border-black"></span>
                Let&apos;s Talk
              </h3>
              <p className="text-sm sm:text-base text-black/70 leading-relaxed font-medium">
                I&apos;m always open to new opportunities, exciting projects, and interesting
                collaborations. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:iindra09323@gmail.com"
                className="flex items-start gap-3 bg-white border-3 border-black p-4 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className="w-10 h-10 bg-[#2D5CFF] border-2 border-black flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="grow">
                  <p className="text-xs font-black text-[#2D5CFF] mb-1">Email</p>
                  <p className="text-black font-bold text-sm break-all">iindra09323@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/indra-firmansyah-93885830b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white border-3 border-black p-4 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className="w-10 h-10 bg-[#2D5CFF] border-2 border-black flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.659 1.191-1.599 2.897-1.599 2.117 0 3.704 1.385 3.704 4.362v5.519zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.756 1.939 1.71 0 .949-.752 1.707-1.982 1.707zm1.582 11.597H3.635V9.859h3.284v10.593zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </div>
                <div className="grow">
                  <p className="text-xs font-black text-[#2D5CFF] mb-1">LinkedIn</p>
                  <p className="text-black font-bold text-sm">linkedin.com/in/indra-firmansyah</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Indraaai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white border-3 border-black p-4 shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <div className="w-10 h-10 bg-[#2D5CFF] border-2 border-black flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="grow">
                  <p className="text-xs font-black text-[#2D5CFF] mb-1">GitHub</p>
                  <p className="text-black font-bold text-sm">github.com/Indraaai</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side – Contact Form */}
          <div
            ref={formRef}
            className={formVisible ? "animate-fade-in-right" : "opacity-0"}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white border-3 border-black p-6 sm:p-8 shadow-neo"
            >
              <div>
                <label className="block text-sm font-black text-black mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full border-3 border-black p-3 bg-white text-black font-medium placeholder:text-black/40 focus:outline-none focus:ring-0 focus:border-[#2D5CFF] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-black mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full border-3 border-black p-3 bg-white text-black font-medium placeholder:text-black/40 focus:outline-none focus:ring-0 focus:border-[#2D5CFF] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-black mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  className="w-full border-3 border-black p-3 bg-white text-black font-medium placeholder:text-black/40 focus:outline-none focus:ring-0 focus:border-[#2D5CFF] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2D5CFF] text-white font-black text-sm border-3 border-black py-3 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
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