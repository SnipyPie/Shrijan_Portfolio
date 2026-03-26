"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 75;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const imagesLoadedRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false); // just to trigger re-renders if needed

  // Track the scroll of the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map progress (0 to 1) to frame index (0 to 74)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all webp images
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameNumber}_delay-0.067s.webp`;
      img.onload = () => {
        // Just trigger a re-render/draw if the loaded frame happens to be the currently active one
        if (i === Math.round(frameIndex.get())) {
          setIsLoaded(prev => !prev); 
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  const drawFrame = (index: number) => {
    const img = imagesRef.current[index];
    if (!canvasRef.current || !img || !img.complete || img.naturalWidth === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Logic for object-fit: cover
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let renderX = 0;
    let renderY = 0;

    if (canvasRatio > imgRatio) {
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      renderY = (canvas.height - renderHeight) / 2;
    } else {
      renderHeight = canvas.height;
      renderWidth = canvas.height * imgRatio;
      renderX = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, renderX, renderY, renderWidth, renderHeight);
  };

  // Initial draw once loaded
  useEffect(() => {
    if (isLoaded && canvasRef.current && imagesRef.current.length > 0) {
      drawFrame(Math.round(frameIndex.get()));
    }
  }, [isLoaded]);

  // Use motion value event and avoid stale closure by using refs
  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawFrame(Math.round(latest));
  });

  // Handle Resize for canvas pixel ratio and drawing
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        // Use devicePixelRatio for sharp rendering
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        drawFrame(Math.round(frameIndex.get()));
      }
    };
    
    handleResize(); // initialize on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        
        {/* Parallax Overlay connected to same scroll progress */}
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
