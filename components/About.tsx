"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-surface-container-low to-surface-container relative z-10 w-full snap-start min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block text-[11px] font-bold tracking-[0.1em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4"
          >
            Behind the Code
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.03em] text-on-surface leading-[1.1]"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-[17px] text-on-surface-variant mt-4 max-w-[520px] mx-auto"
          >
            Building robust and intuitive digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[17px] leading-[1.8] text-on-surface-variant">
              Hi, I&apos;m Nabil. I build <strong className="text-on-surface">fast web applications</strong> using modern frameworks like React and Next.js. My approach focuses on writing clean code and creating simple, effective user interfaces.
            </p>
            <p className="text-[17px] leading-[1.8] text-on-surface-variant">
              I&apos;ve worked on various projects, from dynamic dashboards to scalable platforms. I enjoy adopting new technologies and learning modern web standards to deliver better products.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {['Frontend Architecture', 'UI/UX Interactive', 'Performance Optimization', 'Clean Code'].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant rounded-full text-[12px] font-semibold text-on-surface-variant">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container-highest border border-outline-variant rounded-[20px] p-10 relative overflow-hidden flex flex-col"
          >
            {/* Left Accent Bar instead of a quote */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />

            <h3 className="font-display text-[24px] font-bold text-on-surface mb-4">
              My Engineering Philosophy
            </h3>
            <p className="text-[16px] leading-[1.8] text-on-surface-variant italic mb-6">
              "Great interfaces aren't just seen; they are felt. I believe that motion, deliberate spacing, and robust state management are the differences between an application that works, and an application that people want to use."
            </p>
            
            <div className="mt-auto pt-6 border-t border-outline-variant flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-on-surface text-[14px]">M Nabil</span>
                <span className="text-[11px] font-semibold tracking-[0.05em] uppercase text-primary mt-1">Lead Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
