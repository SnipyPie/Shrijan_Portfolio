"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Binary, TerminalSquare, Globe, LayoutTemplate, Database, LineChart, PieChart, Table2, Hexagon, ScatterChart, Code2, Server } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Java", "Python"],
      bgIcons: (
        <div className="absolute -bottom-6 -right-6 flex gap-2 text-white/5 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:text-blue-500/10">
          <Binary strokeWidth={1} className="w-32 h-32" />
          <TerminalSquare strokeWidth={1} className="w-24 h-24 absolute -top-12 -left-16" />
        </div>
      )
    },
    {
      title: "Data Science & ML",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      bgIcons: (
        <div className="absolute -bottom-6 -right-6 flex gap-2 text-white/5 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:text-orange-500/10">
          <ScatterChart strokeWidth={1} className="w-32 h-32" />
          <PieChart strokeWidth={1} className="w-20 h-20 absolute -top-10 -left-12" />
        </div>
      )
    },
    {
      title: "Tools/Platforms",
      skills: ["Git", "VS Code", "GitHub", "Jupyter Notebook"],
      bgIcons: (
        <div className="absolute -bottom-6 -right-6 flex gap-2 text-white/5 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:text-red-500/10">
          <Code2 strokeWidth={1} className="w-32 h-32" />
          <Hexagon strokeWidth={1} className="w-20 h-20 absolute -top-12 -left-16" />
        </div>
      )
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript (basic)"],
      bgIcons: (
        <div className="absolute -bottom-6 -right-6 flex gap-2 text-white/5 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:text-purple-500/10">
          <Globe strokeWidth={1} className="w-28 h-28" />
          <LayoutTemplate strokeWidth={1} className="w-24 h-24 absolute -top-8 -left-16" />
        </div>
      )
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL", "MySQL"],
      bgIcons: (
        <div className="absolute -bottom-6 -right-6 flex gap-2 text-white/5 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-500/10">
          <Database strokeWidth={1} className="w-32 h-32" />
          <Server strokeWidth={1} className="w-24 h-24 absolute -top-8 -left-16" />
        </div>
      )
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures & Algorithms", "OOP", "DBMS"],
      bgIcons: (
        <div className="absolute -bottom-6 -right-6 flex gap-2 text-white/5 pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:text-yellow-500/10">
          <Table2 strokeWidth={1} className="w-32 h-32" />
          <LineChart strokeWidth={1} className="w-24 h-24 absolute top-12 -left-20" />
        </div>
      )
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-[#121212] py-32 px-6 md:px-12 lg:px-24 z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-white/20 rounded-full origin-left" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -5, scale: 1.02 }}
               className="group relative overflow-hidden bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors"
             >
               {category.bgIcons}
               <div className="relative z-10">
                 <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
                 <div className="flex flex-wrap gap-3">
                   {category.skills.map((skill, j) => (
                     <motion.span 
                       key={j} 
                       whileHover={{ scale: 1.1 }}
                       transition={{ type: "spring", stiffness: 300 }}
                       className="px-4 py-2 text-sm text-gray-300 bg-[#121212]/50 backdrop-blur-md rounded-lg border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                     >
                       {skill}
                     </motion.span>
                   ))}
                 </div>
               </div>
             </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-32 flex flex-col items-center justify-center">
          <h3 className="text-2xl text-gray-400 mb-8 font-light tracking-wide">Connect with me</h3>
          <div className="flex gap-6">
            <a 
              href="https://github.com/SnipyPie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shrijan9712/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-transparent hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
