"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="h-[100dvh] py-12 bg-gradient-to-br from-surface-container-low to-surface-container relative z-10 w-full snap-start snap-always overflow-y-auto overflow-x-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[17px] leading-[1.8] text-on-surface-variant">
              Hi, I&apos;m Nabil. I specialize in bridging the gap between <strong className="text-on-surface">Artificial Intelligence and Web Development</strong>. My expertise lies in building intelligent, scalable systems from machine learning models to dynamic, high-performance web applications.
            </p>
            <p className="text-[17px] leading-[1.8] text-on-surface-variant">
              With a strong foundation in computer science and data-driven solutions, I enjoy tackling complex problems and transforming them into elegant, user-centric experiences. Whether it&apos;s training algorithms or crafting intuitive interfaces, I&apos;m driven by a passion for continuous innovation.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {['AI & Machine Learning', 'Full-Stack Development', 'Data Engineering', 'System Architecture'].map((tag, i) => (
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
              &quot;True innovation happens at the intersection of intelligence and usability. I believe that the most powerful algorithms are only as effective as the interfaces that present them. My goal is to engineer systems that are not only computationally robust, but also deeply intuitive for the end user.&quot;
            </p>

            <div className="mt-auto pt-6 border-t border-outline-variant flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-on-surface text-[14px]">Nabil</span>
                <span className="text-[11px] font-semibold tracking-[0.05em] uppercase text-primary mt-1">AI & Software Engineer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
