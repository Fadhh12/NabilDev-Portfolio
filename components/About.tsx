"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Certificates from "@/components/Certificates";

const SKILLS_ROW1 = [
  { label: "AI Engineering", icon: "✨", bg: "#fef08a", color: "#191510", rot: -2 },
  { label: "Full-Stack Web", icon: "🎨", bg: "#10b981", color: "#ffffff", rot: 1.5 },
];

const SKILLS_ROW2 = [
  { label: "LLMs & RAG", icon: "🧩", bg: "#ec4899", color: "#ffffff", rot: 2 },
  { label: "Computer Vision", icon: "👀", bg: "#2563eb", color: "#ffffff", rot: -1.5 },
  { label: "Interaction Design", icon: "💡", bg: "#f97316", color: "#ffffff", rot: 1 },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 w-full py-20 md:py-28 min-h-[100dvh] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* ── Top handwritten annotation: about me! (Photo 2) ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-4"
        >
          <span className="font-hand text-[26px] text-[#7a7066]">
            about me!
          </span>
        </motion.div>

        {/* ── Center Boxed Heading: what's up (Photo 2) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="border-2 border-[#191510] px-8 py-3 bg-[#f0ece0] shadow-[3px_3px_0_#191510]">
            <h2 className="font-pixel text-[clamp(28px,5vw,48px)] tracking-tight text-[#191510] lowercase">
              what&apos;s up
            </h2>
          </div>
        </motion.div>

        {/* ── Main Bio Row: Left Polaroid + Center Text + Right Polaroid (Photo 2) ──
             Mobile: the two polaroids sit side by side in their own row (fixed
             width, not squeezed by a 50/50 column split), bio text below.
             Desktop: the wrapper collapses (display:contents) so all three
             become siblings again in the original left / text / right order. */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-14">

          <div className="flex flex-row justify-center items-start gap-4 sm:gap-8 lg:contents">

          {/* Left Polaroid with blue tape */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -4 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ type: "spring", damping: 20 }}
            className="lg:order-1 shrink-0 relative cursor-pointer"
          >
            {/* Blue tape top-left */}
            <div
              className="absolute -top-3 -left-3 w-12 h-6 z-20 opacity-85 shadow-sm"
              style={{ background: "#93c5fd", transform: "rotate(-35deg)" }}
            />
            {/* Blue tape bottom-left */}
            <div
              className="absolute -bottom-2 -left-2 w-10 h-5 z-20 opacity-85 shadow-sm"
              style={{ background: "#93c5fd", transform: "rotate(25deg)" }}
            />

            <div className="bg-white p-3 pb-4 shadow-xl border border-black/15 w-[150px] sm:w-[210px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e8e4da]">
                <Image
                  src="/assets/images/poto nabil 1.jpeg"
                  alt="Nabil Fadhlur Rahman"
                  fill
                  className="object-cover"
                  sizes="210px"
                />
              </div>
              <p className="font-hand text-[17px] text-center text-[#191510] mt-3 font-bold">
                2026
              </p>
            </div>
          </motion.div>

          {/* Right Polaroid with blue tape */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 8 }}
            whileInView={{ opacity: 1, x: 0, rotate: 4 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ type: "spring", damping: 20 }}
            className="lg:order-3 shrink-0 relative cursor-pointer"
          >
            {/* Blue tape top-right */}
            <div
              className="absolute -top-3 -right-3 w-12 h-6 z-20 opacity-85 shadow-sm"
              style={{ background: "#93c5fd", transform: "rotate(35deg)" }}
            />
            {/* Blue tape bottom-right */}
            <div
              className="absolute -bottom-2 -right-2 w-10 h-5 z-20 opacity-85 shadow-sm"
              style={{ background: "#93c5fd", transform: "rotate(-25deg)" }}
            />

            <div className="bg-white p-3 pb-4 shadow-xl border border-black/15 w-[150px] sm:w-[210px]">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e8e4da]">
                <Image
                  src="/assets/images/poto nabil.jpeg"
                  alt="Nabil's workspace"
                  fill
                  className="object-cover"
                  sizes="210px"
                />
              </div>
              <p className="font-hand text-[17px] text-center text-[#191510] mt-3 font-bold">
                my workspace
              </p>
            </div>
          </motion.div>

          </div>

          {/* Center Handwritten Bio Text (Photo 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:order-2 flex-1 text-center max-w-[620px] px-2"
          >
            <p className="font-hand text-[clamp(24px,3.8vw,34px)] leading-[1.5] text-[#191510]">
              I&apos;m an <strong className="font-bold text-[#2563eb]">AI engineer &amp; developer</strong> who gets a little too excited about making complicated things feel simple.{" "}
              <motion.span
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="inline-block"
              >
                ✨
              </motion.span>
              <br className="hidden sm:block" />
              I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone&apos;s day easier.{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="inline-block"
              >
                🎨
              </motion.span>
            </p>
            <p className="mt-4 text-[13px] sm:text-[14px] text-[#7a7066] font-mono-accent uppercase tracking-wider">
              President University · Jababeka, Cikarang · GPA 3.65
            </p>
          </motion.div>

        </div>

        {/* ── Bottom Colorful Skill Badges in 2 Rows (Photo 2 exact style) ── */}
        <div className="flex flex-col items-center gap-3 mb-24">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SKILLS_ROW1.map((skill) => (
              <motion.div
                key={skill.label}
                whileHover={{ scale: 1.08, rotate: 0, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex items-center gap-2 px-6 py-3 rounded-md border-2 border-[#191510] shadow-[3px_3px_0_#191510] cursor-pointer select-none"
                style={{ rotate: skill.rot, background: skill.bg, color: skill.color }}
              >
                <span className="font-bold text-[15px] sm:text-[17px] font-mono-accent tracking-tight">
                  {skill.label}
                </span>
                <span className="text-xl">{skill.icon}</span>
              </motion.div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SKILLS_ROW2.map((skill) => (
              <motion.div
                key={skill.label}
                whileHover={{ scale: 1.08, rotate: 0, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex items-center gap-2 px-6 py-3 rounded-md border-2 border-[#191510] shadow-[3px_3px_0_#191510] cursor-pointer select-none"
                style={{ rotate: skill.rot, background: skill.bg, color: skill.color }}
              >
                <span className="font-bold text-[15px] sm:text-[17px] font-mono-accent tracking-tight">
                  {skill.label}
                </span>
                <span className="text-xl">{skill.icon}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Certificates Embedded (Themed to Scrapbook) ── */}
        <div id="certs" className="scroll-mt-16 w-full pt-10 border-t-2 border-[#191510]">
          <div className="text-center mb-10">
            <span className="font-hand text-[22px] text-[#7a7066]">
              validated skills
            </span>
            <h3 className="font-pixel text-[clamp(28px,4.5vw,46px)] text-[#191510] uppercase tracking-tight mt-1">
              Certificates &amp; Badges
            </h3>
          </div>
          <Certificates />
        </div>

      </div>
    </section>
  );
}
