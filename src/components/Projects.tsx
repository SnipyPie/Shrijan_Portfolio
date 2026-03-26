"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AQI Forecasting",
      description: "Designed an end-to-end data pipeline using API integration (Geocoding + Air Pollution APIs) with automated real-time data ingestion. Performed data preprocessing, Exploratory Data Analysis (EDA), feature engineering, and constructed time-series forecasting target. Trained & evaluated supervised regression models (Linear Regression, Random Forest, Gradient Boosting) achieving R² ≈ 0.72 on 2000+ samples.",
      tags: ["Python", "Machine Learning", "Pipeline", "APIs"],
      link: "https://github.com/SnipyPie/air-quality-forecasting-ml",
      bgImage: "/aqi_bg.png"
    },
    {
      title: "Stock Selection Dashboard",
      description: "Engineered an end-to-end ETL pipeline extracting and processing financial data for 200+ stocks from Yahoo Finance API. Developed an interactive Power BI dashboard to deliver actionable data visualizations on returns, volatility, liquidity, and key ETFs. Implemented automated data workflows with 12-hour refresh cycles, supporting data-driven short/long-term investment strategies.",
      tags: ["Python", "Power BI", "Finance", "ETL"],
      link: "#",
      bgImage: "/stock_bg.png"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-[#121212] py-32 px-6 md:px-12 lg:px-24 z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Selected Works
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-white/20 rounded-full origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-3xl flex flex-col overflow-hidden bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] min-h-[500px]"
            >
              {/* Background Map/Wallpaper Element overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 filter grayscale blur-sm group-hover:scale-105 group-hover:filter-none group-hover:opacity-40 transition-all duration-700"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent z-0" />

              <div className="relative flex flex-col flex-1 p-8 md:p-12 z-10 justify-end">
                <motion.h3
                  className="text-3xl font-bold text-white mb-4 drop-shadow-md"
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-300 text-sm md:text-base mb-8 leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-medium text-gray-200 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors w-fit group/btn mt-auto"
                >
                  <span className="text-sm uppercase tracking-wide">View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
