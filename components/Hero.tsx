"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SplitText from "./SplitText";

export default function Hero() {
  const roles = ["AI Engineer", "Software Developer", "Machine Learning", "Computer Science"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-[100dvh] pt-28 pb-16 lg:pt-0 lg:pb-4 flex relative overflow-hidden snap-start snap-always">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-6">

        {/* ── Right: Photo collage (scrapbook style, matches the reference) ── */}
        <div className="w-full lg:w-[42%] relative flex justify-center items-center h-[340px] sm:h-[420px] lg:h-[520px] shrink-0">
          <motion.div
            initial={{ opacity: 0, rotate: -14, y: 30 }}
            animate={{ opacity: 1, rotate: -6, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute w-[62%] max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden bg-surface shadow-2xl border-4 border-white tape-corner z-10 -translate-x-6 -translate-y-4 lg:-translate-y-8"
          >
            <Image src="/assets/images/foto.jpg" alt="Nabil Fadhlur Rahman" fill className="object-cover" priority sizes="(max-width: 1024px) 60vw, 280px" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 16, y: 40 }}
            animate={{ opacity: 1, rotate: 7, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="absolute w-[55%] max-w-[240px] aspect-[4/5] rounded-2xl overflow-hidden bg-surface shadow-2xl border-4 border-white tape-corner z-20 translate-x-10 translate-y-16 lg:translate-x-16 lg:translate-y-24"
          >
            <Image src="/assets/images/PUFA Computer Science BEM.jpeg" alt="Nabil at a campus tech event" fill className="object-cover" sizes="(max-width: 1024px) 55vw, 240px" />
          </motion.div>

          {/* Sticky-note style handwritten tags, pinned next to the photos */}
          <motion.div
            initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -8, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden sm:block absolute top-0 right-2 lg:right-0 px-4 py-2 rounded-xl shadow-lg z-30"
            style={{ background: "var(--ca-yellow)", color: "var(--ca-ink)" }}
          >
            <span className="font-hand text-[22px] leading-none">Building with AI ✨</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 5, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hidden sm:block absolute bottom-2 left-0 lg:-left-4 px-4 py-2 rounded-xl shadow-lg z-30"
            style={{ background: "var(--ca-mint)", color: "var(--ca-ink)" }}
          >
            <span className="font-hand text-[22px] leading-none">Loves clean code 🧩</span>
          </motion.div>
        </div>

        {/* ── Left: Text Content ── */}
        <div className="w-full lg:w-[58%] flex flex-col z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-wrap items-center gap-2 mb-4"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-[10px] md:text-[11px] font-semibold tracking-[0.08em] uppercase w-fit">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--ca-green)" }} />
              Available for new work
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-outline-variant rounded-full text-[10px] md:text-[11px] font-mono-accent tracking-[0.05em] text-on-surface-variant">
              📍 Bekasi, Indonesia
            </span>
          </motion.div>

          <span className="font-mono-accent text-[11px] tracking-[0.25em] uppercase text-on-surface-variant mb-1">
            my name is
          </span>

          <div className="font-display uppercase text-[clamp(48px,10vw,110px)] leading-[0.92] tracking-[-0.02em] text-on-surface flex flex-col items-start">
            <SplitText
              text="Nabil"
              className="font-display uppercase text-[clamp(48px,10vw,110px)] leading-[0.92] tracking-[-0.02em] text-on-surface text-left m-0 p-0"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
          </div>
          <div className="font-hand text-[28px] md:text-[34px] text-primary -mt-1 mb-1">
            Fadhlur Rahman
          </div>

          <div className="h-[32px] md:h-[40px] mt-3 md:mt-4 overflow-hidden relative flex items-center">
             <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute text-[18px] md:text-[28px] font-bold text-on-surface-variant font-display normal-case tracking-tight"
                >
                  {roles[currentRole]}
                </motion.div>
             </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[14px] md:text-[19px] leading-[1.6] md:leading-[1.7] text-on-surface-variant mt-2 md:mt-4 max-w-[560px] font-medium"
          >
            I build software that gets out of your way — intelligent systems that bridge AI and web development to solve real problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-10"
          >
            <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-on-primary border-none rounded-xl px-8 py-4 text-[11px] font-bold tracking-[0.1em] uppercase shadow-[4px_4px_0_var(--primary-hover)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--primary-hover)] transition-all">
              Contact Me
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 bg-surface-container-low text-on-surface border-2 border-outline-variant rounded-xl px-8 py-[14px] text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-surface-container-highest hover:border-primary hover:text-primary transition-all">
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14 pt-6 md:pt-8 border-t border-outline-variant max-w-[560px]"
          >
            {[
              { num: "3+", label: "Years Exp." },
              { num: "20+", label: "Projects" },
              { num: "100%", label: "Commitment" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-display text-3xl md:text-4xl text-primary tracking-[-0.03em]">{stat.num}</div>
                <div className="text-[10px] md:text-[11px] font-semibold tracking-[0.08em] uppercase text-on-surface-variant mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
