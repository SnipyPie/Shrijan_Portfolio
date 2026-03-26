"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#121212]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div 
          className="text-white font-bold text-2xl tracking-tighter cursor-pointer" 
          onClick={() => scrollTo('home')} 
          role="button"
        >
          Shrijan.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center">
          <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollTo('skills')} className="hover:text-white transition-colors">Skills</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">Projects</button>
          <button onClick={() => scrollTo('achievements')} className="hover:text-white transition-colors">Achievements</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">Contact</button>
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a>
        </div>
      </div>
    </nav>
  );
}
