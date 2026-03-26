"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University Punjab, India",
      score: "CGPA: 7.5",
      type: "University",
      icon: <GraduationCap className="w-10 h-10 text-white/20" />
    },
    {
      degree: "Intermediate",
      institution: "Touch Wood School, Dehradun Uttarakhand",
      score: "Percentage: 68.25%",
      type: "School",
      icon: <BookOpen className="w-10 h-10 text-white/20" />
    },
    {
      degree: "Matriculation",
      institution: "Touch Wood School, Dehradun Uttarakhand",
      score: "Percentage: 92%",
      type: "School",
      icon: <BookOpen className="w-10 h-10 text-white/20" />
    }
  ];

  return (
    <section id="education" className="relative bg-[#121212] py-24 px-6 md:px-12 lg:px-24 z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-white/20 rounded-full origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03, translateY: -5 }}
              className="relative overflow-hidden bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-all"
            >
              <div className="absolute -bottom-4 -right-4 pointer-events-none">
                {edu.icon}
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">{edu.type}</span>
                <h3 className="text-xl font-bold text-white mb-4">{edu.degree}</h3>
                <div className="mt-auto">
                  <p className="text-gray-300 font-medium mb-1">{edu.institution}</p>
                  <p className="text-green-400 text-sm">{edu.score}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
