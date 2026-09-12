"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

// react-pdf touches browser-only APIs — load client-only, same reasoning as
// the top-level page.tsx previously did before Certificates moved in here.
const Certificates = dynamic(() => import("@/components/Certificates"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-surface-container rounded-2xl animate-pulse" />,
});

const TABS = [
  { id: "bio", label: "Main Bio", color: "var(--ca-yellow)" },
  { id: "story", label: "Story", color: "var(--ca-magenta)" },
  { id: "work", label: "Work", color: "var(--ca-blue)" },
  { id: "certs", label: "Certificates", color: "var(--ca-mint)" },
];

const STORY = [
  {
    title: "Bridge intelligence and usability",
    body: "The most powerful algorithm is only as good as the interface that presents it. I care as much about a model's accuracy as I do about whether a person actually understands what it's telling them.",
    note: "smart AND simple.",
    color: "var(--ca-cyan)",
  },
  {
    title: "Engineer for real people",
    body: "Computationally robust means nothing if the screen in front of someone is confusing. I build systems that hold up under the hood and still feel obvious to use.",
    note: "no confusing screens.",
    color: "var(--ca-yellow-soft)",
  },
  {
    title: "Never stop iterating",
    body: "Whether I'm training a model or shipping a feature, I keep testing and cutting until only what matters is left. Good work rarely looks finished on the first pass.",
    note: "done is a moving target.",
    color: "var(--ca-mint)",
  },
];

const TIMELINE = [
  { role: "Google Student Ambassador", org: "Google · President University", period: "Apr 2026 – Now" },
  { role: "Vice Officer, Student Welfare & Advocacy", org: "BEM Computer Science", period: "Sep 2025 – Now" },
  { role: "IT Support Specialist", org: "PT. Beritahu Media Digital Teknologi", period: "Jun – Aug 2024" },
  { role: "B.Sc. Informatics (S.Kom.), GPA 3.65", org: "President University · Jababeka Scholar", period: "Sep 2024 – Now" },
  { role: "High School Diploma", org: "Pesantren Hidayatunnajah", period: "Jul 2020 – May 2023" },
];

const SKILLS = [
  { label: "Python & AI/ML", emoji: "🧠", color: "var(--ca-yellow)", dark: false },
  { label: "Full-Stack Web", emoji: "💻", color: "var(--ca-green)", dark: true },
  { label: "Databases", emoji: "🗄️", color: "var(--ca-magenta)", dark: true },
  { label: "Computer Vision", emoji: "👁️", color: "var(--ca-blue)", dark: true },
];

export default function About() {
  const [active, setActive] = useState("bio");

  useEffect(() => {
    const root = document.getElementById("main-scroll") || null;
    const els = TABS.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { root, threshold: [0.2, 0.4, 0.6] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="about" className="relative z-10 w-full snap-start py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-pixel uppercase text-[clamp(36px,7vw,72px)] leading-[1.15] tracking-tight text-on-surface mb-12 md:mb-16"
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-8 lg:gap-16">
          {/* ── Sticky section-nav pills ── */}
          <div className="hidden lg:flex flex-col gap-3 sticky top-28 self-start h-fit">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => scrollTo(t.id)}
                className="text-left px-4 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all"
                style={{
                  background: active === t.id ? t.color : "var(--ca-chrome)",
                  color: "var(--ca-ink)",
                  opacity: active === t.id ? 1 : 0.55,
                  transform: active === t.id ? "translateX(4px) scale(1.03)" : "none",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* ── Content column ── */}
          <div className="flex flex-col gap-24 md:gap-32 min-w-0">

            {/* Main Bio */}
            <motion.div
              id="bio"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-28"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-8" style={{ background: "var(--ca-yellow)", color: "var(--ca-ink)" }}>
                Main Bio
              </span>

              <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-8 items-start">
                <p className="font-hand text-[24px] sm:text-[28px] leading-[1.5] text-on-surface">
                  I&apos;m a computer science student who gets a little too excited about making complicated things feel simple. ✨ I care about the small details, the edge cases everyone forgets, and shipping work that genuinely works end to end.
                </p>

                <div className="relative w-full aspect-[4/5] shrink-0 justify-self-center md:justify-self-end">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-white shadow-xl tape-corner rotate-2">
                    <Image src="/assets/images/foto.jpg" alt="Nabil Fadhlur Rahman" fill className="object-cover" sizes="220px" />
                  </div>
                  <span
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md text-[13px] font-bold uppercase tracking-wide shadow-md rotate-[-2deg]"
                    style={{ background: "var(--ca-yellow)", color: "var(--ca-ink)" }}
                  >
                    Nabil
                  </span>
                </div>
              </div>

              <p className="text-[16px] md:text-[18px] leading-[1.8] text-on-surface-variant mt-8 max-w-[680px]">
                I spend most days between two worlds: training and evaluating <strong className="text-on-surface">AI/ML models</strong>, and shipping the <strong className="text-on-surface">full-stack web apps</strong> that put them in front of real people. A confusing interface makes a good model worthless, so I sit with the parts most people skip — the errors, the empty states, the &quot;what happens if this fails&quot; moments.
              </p>
              <p className="text-[16px] md:text-[18px] leading-[1.8] text-on-surface-variant mt-4 max-w-[680px]">
                Based in <strong className="text-on-surface">Kota Jababeka, Cikarang</strong> — currently reading Informatics at President University, and building things on the side.
              </p>

              <div className="flex flex-wrap gap-2.5 mt-8">
                {SKILLS.map((s) => (
                  <span key={s.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm" style={{ background: s.color, color: s.dark ? "#fff" : "var(--ca-ink)" }}>
                    <span>{s.emoji}</span>
                    {s.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              id="story"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-28"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-8" style={{ background: "var(--ca-magenta)", color: "#fff" }}>
                Story
              </span>

              <div className="flex flex-col gap-10">
                {STORY.map((s, i) => (
                  <div key={s.title} className="flex flex-col sm:flex-row items-start gap-4">
                    <div
                      className="rounded-2xl p-6 md:p-7 shadow-md max-w-[440px]"
                      style={{ background: s.color, transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
                    >
                      <h4 className="font-bold text-[20px] text-on-surface mb-2">{s.title}</h4>
                      <p className="text-[14.5px] leading-[1.65] text-on-surface/80">{s.body}</p>
                    </div>
                    <span className="font-hand text-[18px] text-on-surface-variant mt-2 sm:mt-8 flex items-center gap-2">
                      <svg width="26" height="14" viewBox="0 0 26 14" fill="none" className="shrink-0">
                        <path d="M1 1c6 4 10 10 18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M13 8l6 4-2-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {s.note}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Work + Education */}
            <motion.div
              id="work"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-28"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-8" style={{ background: "var(--ca-blue)", color: "#fff" }}>
                Work
              </span>

              <div className="border border-outline-variant rounded-2xl divide-y divide-outline-variant">
                {TIMELINE.map((t) => (
                  <div key={t.role} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4">
                    <div className="flex items-start gap-3">
                      <span className="w-2.5 h-2.5 rounded-sm mt-1.5 shrink-0" style={{ background: "var(--ca-blue)" }} />
                      <div>
                        <div className="font-bold text-[15px] text-on-surface">{t.role}</div>
                        <div className="text-[13px] text-on-surface-variant">{t.org}</div>
                      </div>
                    </div>
                    <span
                      className="text-[10.5px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md whitespace-nowrap self-start sm:self-center"
                      style={{ background: "var(--ca-blue)", color: "#fff" }}
                    >
                      {t.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certificates */}
            <motion.div
              id="certs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-28"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-8" style={{ background: "var(--ca-mint)", color: "var(--ca-ink)" }}>
                Certificates
              </span>
              <Certificates />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
