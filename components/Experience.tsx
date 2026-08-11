"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

type Tab = "journey" | "activities";

const EXPERIENCES = [
  {
    role: "Google Student Ambassador",
    sub: "Team AI Gemini",
    company: "Google",
    location: "Jakarta",
    date: "Apr 2026 – Sep 2026",
    desc: "Appointed as official Google representative at President University. Drive digital literacy, AI adoption, and modern development practices across the campus community. Design and deliver hands-on technical workshops on Google Workspace, Generative AI tools (Google Gemini), and full-stack web development — reaching 200+ students from diverse backgrounds.",
  },
  {
    role: "IT Support",
    sub: "Infrastructure & Content Delivery",
    company: "PT Beritahu Digital",
    location: "Cikarang",
    date: "Jun 2024 – Aug 2024",
    desc: "Managed infrastructure for high-scale content production: orchestrated 100+ Remote Desktop Protocol (RDP) instances per day, generating 6,000 videos monthly. Monitored and optimised distributed system health — implemented proactive maintenance reducing downtime and improving resource efficiency. Created and distributed audio content across multiple platforms (TikTok, YouTube, Amazon Music, Deezer, Tidal, CapCut).",
  },
];

const EDUCATION = [
  {
    degree: "Candidate for Sarjana Komputer (S.Kom.)",
    school: "President University",
    location: "Jababeka, Bekasi",
    date: "Sep 2024 – Present",
    desc: "GPA: 3.62 / 4.00. Scholarship: Jababeka Scholarship (Dec 2023 – Present). Major: Informatics Technology.",
  },
  {
    degree: "High School Diploma",
    school: "Pesantren Hidayatunnajah",
    location: "Indonesia",
    date: "Jul 2020 – May 2023",
    desc: "Awards: Presenter Scientific Work (Mar 2023). Organization: Student Hidayatunnajah (OSHAN) — Sep 2021.",
  },
];

const ACTIVITIES = [
  {
    role: "PUFA Computer Science (BEM)",
    type: "Campus Organization",
    org: "President University",
    date: "Oct 2025",
    desc: "Active member of the President University Faculty Association (PUFA) Computer Science division within the Executive Board of Students (BEM). Involved in tech-driven campus events, workshops, and community outreach programs.",
    icon: "🏛️",
  },
  {
    role: "Jababeka Scholarship Recipient",
    type: "Scholarship",
    org: "Jababeka Foundation",
    date: "Dec 2023 – Present",
    desc: "Awarded the prestigious Jababeka Scholarship for academic excellence at President University. The scholarship recognizes outstanding academic performance and potential for contributing to the community.",
    icon: "🏅",
  },
  {
    role: "Ocean Young Guards",
    type: "Environmental Volunteering",
    org: "1000 Island Jakarta",
    date: "Feb 2025",
    desc: "Fully-funded participant in a youth-driven volunteer program dedicated to protecting the ocean and its ecosystems. Engaged in beach clean-ups, environmental education, and conservation campaigns to raise awareness about marine pollution.",
    icon: "🌊",
  },
  {
    role: "Organization Student Hidayatunnajah (OSHAN)",
    type: "Student Organization",
    org: "Pesantren Hidayatunnajah",
    date: "Sep 2021",
    desc: "Active participant in the school's student organization, involved in organizing school events, leadership activities, and fostering community values within the pesantren environment.",
    icon: "📚",
  },
  {
    role: "Effective English Conversation Course (EECC)",
    type: "Language Intensive Program",
    org: "Pare Kediri",
    date: "2022",
    desc: "Completed an intensive one-month English conversation course in Pare Kediri. Achieved Speaking A, Writing A, and Grammar B. Gained practical conversational fluency in an immersive English environment.",
    icon: "🗣️",
  },
  {
    role: "IYG #4 — International Youth Gathering",
    type: "Conference & Youth Forum",
    org: "President University",
    date: "2025",
    desc: "Represented President University in the International Youth Gathering (IYG) #4. Engaged with youth delegates from international backgrounds to discuss global challenges, leadership, and social innovation.",
    icon: "🌍",
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>("journey");

  return (
    <section id="experience" className="py-16 md:py-24 bg-surface relative z-10 w-full overflow-hidden snap-start min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block text-[11px] font-bold tracking-[0.1em] uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4"
          >
            Career & Education
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(32px,5vw,48px)] font-bold tracking-[-0.03em] text-on-surface leading-[1.1]"
          >
            My Professional <span className="text-primary">Background</span>
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-surface-container border border-outline-variant rounded-full p-1 gap-1">
            {(["journey", "activities"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "px-6 py-2 rounded-full text-[13px] font-bold tracking-wide transition-all duration-200",
                  activeTab === tab
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {tab === "journey" ? "My Journey" : "My Activities"}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* ─────── JOURNEY TAB ─────── */}
          {activeTab === "journey" && (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              {/* Work Experience */}
              <div>
                <h3 className="text-[18px] font-bold text-on-surface mb-8 flex items-center gap-3">
                  <span className="w-6 h-px bg-primary" />
                  Work Experience
                </h3>
                <div className="relative pl-6 border-l border-outline-variant space-y-12">
                  {EXPERIENCES.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: i * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute -left-[31px] top-1 w-[14px] h-[14px] bg-surface border-[2px] border-primary rounded-full group-hover:bg-primary transition-colors" />
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <div>
                          <h4 className="font-bold text-[17px] text-on-surface">{exp.role}</h4>
                          <div className="text-[12px] font-semibold text-primary">{exp.sub}</div>
                        </div>
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-on-surface-variant whitespace-nowrap mt-0.5">{exp.date}</span>
                      </div>
                      <div className="text-[13px] font-semibold text-on-surface-variant mb-3">{exp.company} — {exp.location}</div>
                      <p className="text-[14px] leading-[1.7] text-on-surface-variant">{exp.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-[18px] font-bold text-on-surface mb-8 flex items-center gap-3">
                  <span className="w-6 h-px bg-primary" />
                  Education
                </h3>
                <div className="relative pl-6 border-l border-outline-variant space-y-12">
                  {EDUCATION.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: i * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute -left-[31px] top-1 w-[14px] h-[14px] bg-surface border-[2px] border-primary rounded-full group-hover:bg-primary transition-colors" />
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <h4 className="font-bold text-[17px] text-on-surface">{edu.degree}</h4>
                        <span className="text-[11px] font-semibold tracking-wider uppercase text-on-surface-variant whitespace-nowrap mt-0.5">{edu.date}</span>
                      </div>
                      <div className="text-[13px] font-semibold text-on-surface-variant mb-3">{edu.school} — {edu.location}</div>
                      <p className="text-[14px] leading-[1.7] text-on-surface-variant">{edu.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ─────── ACTIVITIES TAB ─────── */}
          {activeTab === "activities" && (
            <motion.div
              key="activities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {ACTIVITIES.map((act, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-surface-container border border-outline-variant rounded-[18px] p-6 flex flex-col hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 group"
                >
                  <div className="text-[32px] mb-3">{act.icon}</div>
                  <div className="text-[10px] font-bold tracking-[0.1em] uppercase text-primary mb-1">{act.type}</div>
                  <h4 className="font-bold text-[16px] text-on-surface mb-1 leading-snug group-hover:text-primary transition-colors">{act.role}</h4>
                  <div className="text-[12px] font-semibold text-on-surface-variant mb-3">{act.org} · {act.date}</div>
                  <p className="text-[13px] leading-[1.65] text-on-surface-variant flex-grow">{act.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
