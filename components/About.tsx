"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PRINCIPLES = [
  {
    title: "Bridge intelligence and usability",
    body: "The most powerful algorithm is only as good as the interface that presents it. I care as much about the model's accuracy as I do about whether a person actually understands what it's telling them.",
    note: "smart AND simple.",
    color: "var(--ca-yellow)",
  },
  {
    title: "Engineer for real people",
    body: "Computationally robust means nothing if the screen in front of someone is confusing. I build systems that hold up under the hood and still feel obvious to use.",
    note: "no confusing screens.",
    color: "var(--ca-mint)",
  },
  {
    title: "Never stop iterating",
    body: "Whether I'm training a model or refining a UI, I keep testing and cutting until only what matters is left. Good work rarely looks finished on the first pass.",
    note: "done is a moving target.",
    color: "var(--ca-pink-soft)",
  },
];

const WORK = [
  { role: "Google Student Ambassador", company: "Google · Team AI Gemini", period: "Apr 2026 – Sep 2026" },
  { role: "IT Support", company: "PT Beritahu Digital", period: "Jun 2024 – Aug 2024" },
];

const EDUCATION = [
  { role: "Candidate for S.Kom. (Informatics)", company: "President University · GPA 3.62/4.00", period: "Sep 2024 – Present" },
  { role: "High School Diploma", company: "Pesantren Hidayatunnajah", period: "Jul 2020 – May 2023" },
];

const SKILLS = [
  { label: "AI & Machine Learning", color: "var(--ca-yellow)", dark: false },
  { label: "Full-Stack Development", color: "var(--ca-green)", dark: true },
  { label: "Data Engineering", color: "var(--ca-magenta)", dark: true },
  { label: "System Architecture", color: "var(--ca-blue)", dark: true },
];

export default function About() {
  return (
    <section id="about" className="min-h-[100dvh] py-20 md:py-28 relative z-10 w-full overflow-x-hidden snap-start snap-always flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              what&apos;s up
            </span>
            <span className="font-mono-accent text-[11px] tracking-[0.15em] uppercase text-on-surface-variant">
              about me!
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display uppercase text-[clamp(40px,7vw,84px)] leading-[0.95] tracking-[-0.02em] text-on-surface"
          >
            About
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
          {/* Left: body + story + principles */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-5"
            >
              <p className="text-[16px] md:text-[19px] leading-[1.75] text-on-surface font-medium">
                I&apos;m a product-minded engineer who gets a little too excited about making complicated things feel simple. I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone&apos;s day easier.
              </p>
              <p className="text-[15px] md:text-[17px] leading-[1.8] text-on-surface-variant">
                I specialize in bridging the gap between <strong className="text-on-surface">Artificial Intelligence and Web Development</strong> — from training models to crafting the dynamic, high-performance interfaces people actually use. With a strong foundation in computer science and data-driven solutions, I enjoy tackling complex problems and turning them into elegant, user-centric experiences.
              </p>
            </motion.div>

            {/* Callout — pulled from his own engineering philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl p-6 md:p-8"
              style={{ background: "var(--ca-ink)", color: "var(--ca-lime)" }}
            >
              <span className="font-hand text-[26px] leading-tight block">
                &quot;True innovation happens at the intersection of intelligence and usability.&quot;
              </span>
              <p className="text-[13px] md:text-[14px] leading-[1.7] mt-3 opacity-80">
                I believe the most powerful algorithms are only as effective as the interfaces that present them — so I engineer systems that are computationally robust and deeply intuitive at the same time.
              </p>
            </motion.div>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -2 : 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface border border-outline-variant rounded-2xl p-5 shadow-sm flex flex-col gap-2"
                >
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded-full text-[13px] font-bold shrink-0"
                    style={{ background: p.color, color: "var(--ca-ink)" }}
                  >
                    {i + 1}
                  </span>
                  <h4 className="font-display text-[14px] uppercase tracking-tight text-on-surface leading-snug mt-1">
                    {p.title}
                  </h4>
                  <p className="text-[12.5px] leading-[1.6] text-on-surface-variant">{p.body}</p>
                  <span className="font-hand text-[17px] text-primary mt-1">{p.note}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: photos + work timeline + skills */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-[220px] sm:h-[260px]"
            >
              <div className="absolute left-0 top-0 w-[62%] aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white shadow-xl tape-corner -rotate-3 z-10">
                <Image src="/assets/images/foto.jpg" alt="Nabil" fill className="object-cover" sizes="45vw" />
              </div>
              <div className="absolute right-0 bottom-0 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl tape-corner rotate-3 z-20">
                <Image src="/assets/images/WhatsApp Image 2026-04-11 at 22.47.17 (1).jpeg" alt="Scholarship day" fill className="object-cover" sizes="45vw" />
              </div>
              <span
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-hand text-[16px] px-3 py-1 rounded-md shadow-md z-30 rotate-2"
                style={{ background: "var(--ca-lime)", color: "var(--ca-lime-ink)" }}
              >
                scholarship day
              </span>
            </motion.div>

            {/* Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="font-mono-accent text-[11px] tracking-[0.15em] uppercase text-on-surface-variant mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-primary" /> Work
              </h3>
              <div className="flex flex-col gap-4">
                {WORK.map((w) => (
                  <div key={w.role} className="flex items-start justify-between gap-3 pb-4 border-b border-outline-variant last:border-0">
                    <div>
                      <div className="font-bold text-[14px] text-on-surface">{w.role}</div>
                      <div className="text-[12.5px] text-on-surface-variant">{w.company}</div>
                    </div>
                    <span className="text-[10.5px] font-semibold uppercase tracking-wide text-on-surface-variant whitespace-nowrap mt-0.5">{w.period}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="font-mono-accent text-[11px] tracking-[0.15em] uppercase text-on-surface-variant mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-primary" /> Education
              </h3>
              <div className="flex flex-col gap-4">
                {EDUCATION.map((w) => (
                  <div key={w.role} className="flex items-start justify-between gap-3 pb-4 border-b border-outline-variant last:border-0">
                    <div>
                      <div className="font-bold text-[14px] text-on-surface">{w.role}</div>
                      <div className="text-[12.5px] text-on-surface-variant">{w.company}</div>
                    </div>
                    <span className="text-[10.5px] font-semibold uppercase tracking-wide text-on-surface-variant whitespace-nowrap mt-0.5">{w.period}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="font-mono-accent text-[11px] tracking-[0.15em] uppercase text-on-surface-variant mb-4 flex items-center gap-2">
                <span className="w-6 h-px bg-primary" /> Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((s) => (
                  <span
                    key={s.label}
                    className="px-4 py-2 rounded-full text-[12.5px] font-semibold shadow-sm"
                    style={{ background: s.color, color: s.dark ? "#fff" : "var(--ca-ink)" }}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
