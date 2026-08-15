"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Lanyard from "./Lanyard";
import SplitText from "./SplitText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const roles = ["AI Engineer", "Software Developer", "Machine Learning", "Computer Science"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  // Motion values for the dragged card
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Springs for smoother lanyard reaction
  const springX = useSpring(dragX, { stiffness: 200, damping: 20 });
  const springY = useSpring(dragY, { stiffness: 200, damping: 20 });

  // Convert motion values to coordinates for the SVG path
  const [lanyardPath, setLanyardPath] = useState("M 150 0 C 150 100, 150 100, 150 200");

  useMotionValueEvent(springX, "change", (latestX) => updatePath(latestX, springY.get()));
  useMotionValueEvent(springY, "change", (latestY) => updatePath(springX.get(), latestY));

  const updatePath = (x: number, y: number) => {
    // Base start point (top of container, centered)
    const startX = 140; // Center of the 280px relative box, or we can just use 50%
    const startY = 0;
    
    // Narrower offset since card is slightly smaller (300px)
    const endX = 140 + x; 
    const endY = 200 + y;

    // Control point for the curve (for realistic rope sag effect)
    const controlX = (startX + endX) / 2;
    const controlY = startY + (endY - startY) * 0.8; // Pulls the curve down slightly

    setLanyardPath(`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`);
  };

  useEffect(() => {
    updatePath(0, 0); // initial path
  }, []);

  return (
    <section id="home" className="h-[100dvh] pt-0 pb-4 flex relative overflow-hidden snap-start snap-always" ref={containerRef}>
      
      {/* Lanyard Container (Absolute for both Desktop & Mobile) */}
      <div className="absolute top-0 right-0 w-full lg:w-[45%] h-[48vh] lg:h-[100dvh] flex justify-center items-start lg:items-center z-0 pointer-events-none lg:right-[2%]">
        <div className="w-full h-full pointer-events-auto flex items-start lg:items-center justify-center">
          <Lanyard position={[0, 0, 13]} fov={16} gravity={[0, -40, 0]} frontImage="/assets/images/foto.jpg" />
        </div>
      </div>

      {/* Text Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row h-full justify-end lg:justify-start items-start lg:items-center relative z-10 pointer-events-none pb-20 lg:pb-0">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-[55%] flex flex-col z-10 w-full relative xl:pr-12 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-[10px] md:text-[11px] font-semibold tracking-[0.08em] uppercase w-fit mb-3 md:mb-5 mt-auto lg:mt-0"
          >
            <span className="w-2 h-2 bg-[#4caf50] rounded-full animate-pulse" />
            Available for Work
          </motion.div>
          
          <div className="font-display text-[clamp(36px,8vw,88px)] font-black leading-[1.05] tracking-[-0.05em] text-on-surface flex flex-col items-start">
            <SplitText
              text="Nabil Fadhlur"
              className="font-display text-[clamp(36px,8vw,88px)] font-black leading-[1.05] tracking-[-0.05em] text-on-surface text-left m-0 p-0"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
            <SplitText
              text="Rahman."
              className="font-display text-[clamp(36px,8vw,88px)] font-black leading-[1.05] tracking-[-0.05em] text-primary not-italic text-left m-0 p-0"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
          </div>

          <div className="h-[32px] md:h-[40px] mt-4 md:mt-6 overflow-hidden relative flex items-center">
             <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute text-[18px] md:text-[28px] font-bold text-on-surface-variant font-display"
                >
                  {roles[currentRole]}
                </motion.div>
             </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[13px] md:text-[18px] leading-[1.6] md:leading-[1.7] text-on-surface-variant mt-2 md:mt-4 max-w-[640px]"
          >
            I build intelligent systems that bridge Artificial Intelligence and Web Development to solve real-world problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-10"
          >
            <a href="#projects" className="inline-flex items-center gap-2 bg-primary text-on-primary border-none rounded-xl px-8 py-4 text-[11px] font-bold tracking-[0.1em] uppercase shadow-[4px_4px_0_var(--primary-hover)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--primary-hover)] transition-all">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-surface-container-low text-on-surface border-2 border-outline-variant rounded-xl px-8 py-[14px] text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-surface-container-highest hover:border-primary hover:text-primary transition-all">
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden md:grid grid-cols-3 gap-8 mt-14 pt-8 border-t border-outline-variant max-w-[640px]"
          >
            {[
              { num: "3+", label: "Years Exp." },
              { num: "20+", label: "Projects" },
              { num: "100%", label: "Commitment" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-4xl font-extrabold text-primary tracking-[-0.03em]">{stat.num}</div>
                <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-on-surface-variant mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Empty space for flex layout to push left side */}
        <div className="hidden lg:block lg:w-[45%]"></div>
      </div>
    </section>
  );
}
