"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Image from "next/image";

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
    desc: "Active member of the PUFA Computer Science division within the Executive Board of Students (BEM). Involved in tech-driven campus events, workshops, and community outreach programs.",
    emoji: "🏛️",
    image: "/assets/images/PUFA Computer Science BEM.jpeg",
    fit: "cover"
  },
  {
    role: "Jababeka Scholarship Recipient",
    type: "Scholarship",
    org: "Jababeka Foundation",
    date: "Dec 2023 – Present",
    desc: "Awarded the prestigious Jababeka Scholarship for academic excellence at President University. Recognizes outstanding academic performance and potential for contributing to the community.",
    emoji: "🎓",
    image: "/assets/images/WhatsApp Image 2026-04-11 at 22.47.17 (1).jpeg",
    fit: "contain"
  },
  {
    role: "Ocean Young Guards",
    type: "Environmental Volunteering",
    org: "1000 Island Jakarta",
    date: "Feb 2025",
    desc: "Fully-funded participant in a youth-driven volunteer program dedicated to protecting the ocean. Engaged in beach clean-ups, environmental education, and conservation campaigns to raise awareness about marine pollution.",
    emoji: "🌊",
    image: "/assets/images/Ocean Young Guards.png",
    fit: "cover"
  },
  {
    role: "Organization Student Hidayatunnajah (OSHAN)",
    type: "Student Organization",
    org: "Pesantren Hidayatunnajah",
    date: "Sep 2021",
    desc: "Active participant in the school's student organization, involved in organizing school events, leadership activities, and fostering community values within the pesantren environment.",
    emoji: "🤝",
    image: "/assets/images/Organization Student Hidayatunnajah OSHAN.jpeg",
    fit: "cover"
  },
  {
    role: "Effective English Conversation Course (EECC)",
    type: "Language Intensive Program",
    org: "Pare Kediri",
    date: "2022",
    desc: "Completed an intensive one-month English conversation course in Pare Kediri. Achieved Speaking A, Writing A, and Grammar B. Gained practical conversational fluency in an immersive English environment.",
    emoji: "🗣️",
    image: "/assets/images/Effective English Conversation Course EECC.jpeg",
    fit: "cover"
  },
  {
    role: "IYG #4 — International Youth Gathering",
    type: "Conference & Youth Forum",
    org: "President University",
    date: "2025",
    desc: "Represented President University in the International Youth Gathering (IYG) #4. Engaged with youth delegates from international backgrounds to discuss global challenges, leadership, and social innovation.",
    emoji: "🌍",
    image: "/assets/images/International Youth Gathering.jpeg",
    fit: "cover"
  },
];

type Activity = (typeof ACTIVITIES)[number];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>("journey");
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedActivity) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedActivity]);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedActivity(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="experience" className="min-h-[100dvh] py-10 bg-surface relative z-10 w-full overflow-y-auto overflow-x-hidden snap-start snap-always flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-6">
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
        <div className="flex justify-center mb-10 sticky top-[80px] z-50">
          <div className="inline-flex items-center bg-surface-container-highest/90 backdrop-blur-md border border-outline-variant rounded-full p-1.5 gap-2 shadow-md">
            {(["journey", "activities"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "px-5 sm:px-8 py-2.5 rounded-full text-[13px] sm:text-[14px] font-bold tracking-wide transition-all duration-300",
                  activeTab === tab
                    ? "bg-on-surface text-surface shadow-md"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
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
                <div className="relative pl-6 border-l border-outline-variant space-y-6">
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
                <div className="relative pl-6 border-l border-outline-variant space-y-6">
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {ACTIVITIES.map((act, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setSelectedActivity(act)}
                  className="bg-surface border border-outline-variant rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image Thumbnail */}
                  <div className="relative w-full h-44 overflow-hidden bg-surface-container/50">
                    {/* Blurred backdrop */}
                    <Image
                      src={act.image}
                      alt=""
                      fill
                      className="object-cover opacity-50 blur-xl scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Main Image */}
                    <Image
                      src={act.image}
                      alt={act.role}
                      fill
                      className={clsx(
                        "group-hover:scale-105 transition-transform duration-500 relative z-10",
                        act.fit === "cover" ? "object-cover" : "object-contain"
                      )}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none" />
                    {/* Emoji badge */}
                    <div className="absolute top-3 right-3 text-2xl bg-white/20 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center border border-white/30 z-30 shadow-lg">
                      {act.emoji}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-on-surface-variant mb-2 block">
                      {act.type}
                    </span>
                    <h4 className="font-display font-bold text-[16px] text-on-surface mb-1 leading-snug">
                      {act.role}
                    </h4>
                    <div className="text-[12px] font-medium text-primary mb-3">
                      {act.org} • {act.date}
                    </div>
                    <p className="text-[13px] leading-[1.65] text-on-surface-variant line-clamp-3">
                      {act.desc}
                    </p>

                    {/* Click hint */}
                    <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-primary tracking-wide group-hover:gap-2.5 transition-all">
                      <span>View Details</span>
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile: Back to top */}
        <div className="flex justify-center mt-8 md:hidden">
          <button
            onClick={() => {
              const el = document.getElementById('experience');
              if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-surface-container-highest border border-outline-variant rounded-full text-[11px] font-bold uppercase tracking-wider text-on-surface-variant hover:text-on-surface hover:border-primary transition-all shadow-sm"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>

      {/* ─────── ACTIVITY MODAL ─────── */}
      <AnimatePresence>
        {selectedActivity && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedActivity(null)}
              className="fixed inset-0 z-[2000] bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 40 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="fixed inset-0 z-[2001] flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="pointer-events-auto bg-surface rounded-3xl overflow-hidden w-full max-w-lg shadow-2xl border border-outline-variant/40"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Image */}
                <div className="relative w-full h-64 sm:h-72 bg-surface-container/50 overflow-hidden">
                  {/* Blurred Backdrop */}
                  <Image
                    src={selectedActivity.image}
                    alt=""
                    fill
                    className="object-cover opacity-40 blur-2xl scale-125"
                    sizes="(max-width: 512px) 100vw, 512px"
                  />
                  {/* Main Image */}
                  <Image
                    src={selectedActivity.image}
                    alt={selectedActivity.role}
                    fill
                    className={clsx(
                      "relative z-10",
                      selectedActivity.fit === "cover" ? "object-cover" : "object-contain"
                    )}
                    sizes="(max-width: 512px) 100vw, 512px"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 pointer-events-none" />

                  {/* Emoji & type badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-30">
                    <div className="text-2xl bg-white/20 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center border border-white/30 shadow-lg">
                      {selectedActivity.emoji}
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/95 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                      {selectedActivity.type}
                    </span>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20 z-30 shadow-lg"
                    aria-label="Close"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>

                  {/* Title over image */}
                  <div className="absolute bottom-4 left-4 right-4 z-30">
                    <h3 className="font-display font-bold text-[20px] sm:text-[22px] text-white leading-snug drop-shadow-lg">
                      {selectedActivity.role}
                    </h3>
                    <p className="text-[13px] font-semibold text-white/90 mt-1 drop-shadow-md">
                      {selectedActivity.org} • {selectedActivity.date}
                    </p>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                  <p className="text-[15px] leading-[1.75] text-on-surface-variant">
                    {selectedActivity.desc}
                  </p>

                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="mt-6 w-full py-3 rounded-2xl bg-on-surface text-surface text-[13px] font-bold tracking-wide hover:bg-primary hover:text-on-primary transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
