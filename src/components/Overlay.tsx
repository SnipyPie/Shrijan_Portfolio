"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: 0% scroll (Center)
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -100]); // parallax up

  // Section 2: 30% scroll (Left aligned)
  const opacity2 = useTransform(progress, [0.15, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.15, 0.3, 0.55], [100, 0, -100]); // parallax up

  // Section 3: 60% scroll (Right aligned)
  const opacity3 = useTransform(progress, [0.45, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.45, 0.6, 0.9], [100, 0, -100]); // parallax up

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-8 md:p-24 h-screen max-w-7xl mx-auto">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center text-center"
      >
        <div className="max-w-2xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 shadow-black/50 drop-shadow-lg">
            Shrijan
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide shadow-black/50 drop-shadow-md">
            Aspiring Data Scientist.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start text-left"
      >
        <div className="max-w-xl px-6 md:px-12 w-full">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white shadow-black/50 drop-shadow-lg">
            I train and build ML models.
          </h2>
          <div className="mt-6 w-20 h-1 bg-white/50 rounded-full" />
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end text-right"
      >
        <div className="max-w-xl px-6 md:px-12 w-full">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white shadow-black/50 drop-shadow-lg leading-tight">
            Bridging Statistics and engineering.
          </h2>
          <div className="mt-6 w-20 h-1 bg-white/50 rounded-full ml-auto" />
        </div>
      </motion.div>
    </div>
  );
}
