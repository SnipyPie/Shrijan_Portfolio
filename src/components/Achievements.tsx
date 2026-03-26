"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Code2, Trophy } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Prompt Design in Vertex AI",
      issuer: "Google Cloud",
      icon: <Award className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Database and SQL",
      issuer: "Coursera",
      icon: <CheckCircle className="w-8 h-8 text-green-400" />
    },
    {
      title: "300+ Problems Solved",
      issuer: "Leetcode & GeeksforGeeks",
      description: "Enhancing analytical and problem-solving skills.",
      icon: <Code2 className="w-8 h-8 text-orange-400" />
    },
    {
      title: "Regional Level Clear",
      issuer: "All India SAP Hackathon",
      description: "Demonstrated teamwork and technical execution.",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />
    }
  ];

  return (
    <section id="achievements" className="relative bg-[#121212] py-24 px-6 md:px-12 lg:px-24 z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Achievements & Certificates
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-white/20 rounded-full origin-center mx-auto" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.05] transition-all flex flex-col items-center text-center shadow-lg"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-colors">
                {ach.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{ach.title}</h3>
              <p className="text-blue-300 font-medium mb-2">{ach.issuer}</p>
              {ach.description && (
                <p className="text-gray-400 text-sm mt-auto">{ach.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
