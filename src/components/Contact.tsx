"use client";

import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen bg-[#121212] py-32 px-6 md:px-12 lg:px-24 z-10 border-t border-white/5 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight mb-4">
            Get In Touch
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column: Info & Links */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Let's connect and collaborate on exciting projects! Feel free to reach out through any of these channels.
            </p>

            <div className="flex flex-col gap-4 max-w-md">
              <a
                href="mailto:shrijanusha@gmail.com"
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">shrijanusha@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/SnipyPie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gray-700/50 transition-colors">
                  <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">GitHub</h4>
                  <p className="text-gray-400 text-sm">github.com/SnipyPie</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/shrijan9712/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0077b5]/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-[#0077b5] transition-colors" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">LinkedIn</h4>
                  <p className="text-gray-400 text-sm">linkedin.com/in/shrijan9712</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1">
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-8">Send Me a Message</h3>

              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="@gmail.com"
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project Collaboration"
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-medium py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-purple-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
