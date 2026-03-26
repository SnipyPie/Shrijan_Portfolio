"use client";

import { motion } from "framer-motion";
import { Briefcase, Code } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Data Science Intern (Virtual)",
      company: "SkillCraft",
      description: "Built customer purchase prediction model using Decision Tree.",
      icon: <Briefcase className="w-6 h-6 text-white" />
    },
    {
      role: "Data Structures & Algorithms (C++) Training",
      company: "Lovely Professional University (LPU)",
      description: "Comprehensive training on core DSA concepts for problem solving and algorithmic efficiency.",
      icon: <Code className="w-6 h-6 text-white" />
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen bg-[#121212] py-32 px-6 md:px-12 lg:px-24 z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Experience & Training
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-white/20 rounded-full origin-left" 
          />
        </div>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#121212] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-110">
                {exp.icon}
              </div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex flex-col gap-1 mb-2">
                  <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                  <span className="text-blue-400 font-medium">{exp.company}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
