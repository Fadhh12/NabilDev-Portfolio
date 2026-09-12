"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const ITEMS = [
  {
    role: "PUFA Computer Science (BEM)",
    type: "Campus Organization",
    org: "President University",
    date: "Oct 2025",
    desc: "Active member of the PUFA Computer Science division within the Executive Board of Students (BEM). Involved in tech-driven campus events, workshops, and community outreach programs.",
    emoji: "🏛️",
    image: "/assets/images/PUFA Computer Science BEM.jpeg",
    rotate: -3,
  },
  {
    role: "Jababeka Scholarship Recipient",
    type: "Scholarship",
    org: "Jababeka Foundation",
    date: "Dec 2023 – Present",
    desc: "Awarded the prestigious Jababeka Scholarship for academic excellence at President University. Recognizes outstanding academic performance and potential for contributing to the community.",
    emoji: "🎓",
    image: "/assets/images/WhatsApp Image 2026-04-11 at 22.47.17 (1).jpeg",
    rotate: 2,
  },
  {
    role: "Ocean Young Guards",
    type: "Environmental Volunteering",
    org: "1000 Island Jakarta",
    date: "Feb 2025",
    desc: "Fully-funded participant in a youth-driven volunteer program dedicated to protecting the ocean. Engaged in beach clean-ups, environmental education, and conservation campaigns to raise awareness about marine pollution.",
    emoji: "🌊",
    image: "/assets/images/Ocean Young Guards.png",
    rotate: 4,
  },
  {
    role: "Organization Student Hidayatunnajah (OSHAN)",
    type: "Student Organization",
    org: "Pesantren Hidayatunnajah",
    date: "Sep 2021",
    desc: "Active participant in the school's student organization, involved in organizing school events, leadership activities, and fostering community values within the pesantren environment.",
    emoji: "🤝",
    image: "/assets/images/Organization Student Hidayatunnajah OSHAN.jpeg",
    rotate: -2,
  },
  {
    role: "Effective English Conversation Course (EECC)",
    type: "Language Intensive Program",
    org: "Pare Kediri",
    date: "2022",
    desc: "Completed an intensive one-month English conversation course in Pare Kediri. Achieved Speaking A, Writing A, and Grammar B. Gained practical conversational fluency in an immersive English environment.",
    emoji: "🗣️",
    image: "/assets/images/Effective English Conversation Course EECC.jpeg",
    rotate: 3,
  },
  {
    role: "IYG #4 — International Youth Gathering",
    type: "Conference & Youth Forum",
    org: "President University",
    date: "2025",
    desc: "Represented President University in the International Youth Gathering (IYG) #4. Engaged with youth delegates from international backgrounds to discuss global challenges, leadership, and social innovation.",
    emoji: "🌍",
    image: "/assets/images/International Youth Gathering.jpeg",
    rotate: -4,
  },
];

type Item = (typeof ITEMS)[number];

export default function Gallery() {
  const [selected, setSelected] = useState<Item | null>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="gallery" className="min-h-[100dvh] py-20 md:py-24 bg-surface-container relative z-10 w-full overflow-x-hidden snap-start snap-always flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block font-mono-accent text-[11px] tracking-[0.15em] uppercase text-on-surface-variant mb-4"
          >
            playground
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display uppercase text-[clamp(36px,6vw,72px)] leading-[0.95] tracking-[-0.02em] text-on-surface"
          >
            just for fun
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {ITEMS.map((item, i) => (
            <motion.button
              key={item.role}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
              onClick={() => setSelected(item)}
              className="relative aspect-[4/5] rounded-xl overflow-hidden border-4 border-white shadow-xl tape-corner bg-surface cursor-pointer text-left"
            >
              <Image src={item.image} alt={item.role} fill className="object-cover" sizes="(max-width: 768px) 45vw, 30vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[10px] font-hand text-white text-[16px] block leading-tight drop-shadow">{item.role}</span>
              </div>
              <span className="absolute top-2 right-2 text-lg drop-shadow">{item.emoji}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[2000] bg-black/70 backdrop-blur-sm"
            />
            <motion.div
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
                <div className="relative w-full h-64 sm:h-72 bg-surface-container/50 overflow-hidden">
                  <Image src={selected.image} alt={selected.role} fill className="object-cover" sizes="(max-width: 512px) 100vw, 512px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="text-2xl bg-white/20 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center border border-white/30 shadow-lg">
                      {selected.emoji}
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/95 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                      {selected.type}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors border border-white/20 shadow-lg"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display uppercase text-[20px] sm:text-[22px] text-white leading-snug drop-shadow-lg">
                      {selected.role}
                    </h3>
                    <p className="text-[13px] font-semibold text-white/90 mt-1 drop-shadow-md">
                      {selected.org} • {selected.date}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[15px] leading-[1.75] text-on-surface-variant">{selected.desc}</p>
                  <button
                    onClick={() => setSelected(null)}
                    className="mt-6 w-full py-3 rounded-2xl bg-primary text-on-primary text-[13px] font-bold tracking-wide hover:opacity-90 transition-all duration-300"
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
