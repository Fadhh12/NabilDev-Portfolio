"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Plus, Minus } from "lucide-react";

interface ActivityItem {
  id: number;
  role: string;
  type: string;
  org: string;
  date: string;
  desc: string;
  label: string;
  tapeColor: string;
  image: string;
  rot: number;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: 1,
    role: "PUFA Computer Science (BEM)",
    type: "Campus Organization",
    org: "President University",
    date: "Oct 2025",
    desc: "Active member of the PUFA Computer Science division within the Executive Board of Students (BEM). Involved in tech-driven campus events, workshops, and community outreach programs.",
    label: "Random shot",
    tapeColor: "#fef08a",
    image: "/assets/images/PUFA Computer Science BEM.jpeg",
    rot: -3,
  },
  {
    id: 2,
    role: "Jababeka Scholarship Recipient",
    type: "Scholarship & Honor",
    org: "Jababeka Foundation",
    date: "Dec 2023 – Present",
    desc: "Awarded the prestigious Jababeka Scholarship for academic excellence at President University. Recognizes outstanding academic performance and leadership potential.",
    label: "what is this",
    tapeColor: "#a7f3d0",
    image: "/assets/images/poto nabil 1.jpeg",
    rot: 2.5,
  },
  {
    id: 3,
    role: "Ocean Young Guards",
    type: "Environmental Volunteering",
    org: "1000 Island Jakarta",
    date: "Feb 2025",
    desc: "Fully-funded participant in a youth-driven volunteer program dedicated to protecting the ocean. Engaged in marine conservation, youth education, and sustainable campaigns.",
    label: "found!",
    tapeColor: "#93c5fd",
    image: "/assets/images/Ocean Young Guards.png",
    rot: -4,
  },
  {
    id: 4,
    role: "Organization Student Hidayatunnajah (OSHAN)",
    type: "Student Organization",
    org: "Pesantren Hidayatunnajah",
    date: "Sep 2021",
    desc: "Active participant in the school's student organization, leading student events, character-building programs, and community service.",
    label: "20th take",
    tapeColor: "#fbcfe8",
    image: "/assets/images/Organization Student Hidayatunnajah OSHAN.jpeg",
    rot: 3,
  },
  {
    id: 5,
    role: "Effective English Conversation Course (EECC)",
    type: "Language Intensive",
    org: "Pare Kediri",
    date: "2022",
    desc: "Completed an intensive one-month English immersion in Kampung Inggris Pare Kediri. Achieved Speaking A, Writing A, and Grammar B.",
    label: "hello world",
    tapeColor: "#fed7aa",
    image: "/assets/images/Effective English Conversation Course EECC.jpeg",
    rot: -2,
  },
  {
    id: 6,
    role: "International Youth Gathering (IYG #4)",
    type: "Youth Forum & Summit",
    org: "President University",
    date: "2025",
    desc: "Represented President University in the International Youth Gathering #4. Collaborated with international delegates on global tech leadership and youth development.",
    label: "first time",
    tapeColor: "#fef08a",
    image: "/assets/images/International Youth Gathering.jpeg",
    rot: 3.5,
  },
  {
    id: 7,
    role: "Campus Tech & Hackathons",
    type: "Innovation & Build",
    org: "President University",
    date: "2024 – 2025",
    desc: "Collaborative prototyping sessions and engineering sprints building AI tools and intelligent full-stack applications.",
    label: "practiceeee",
    tapeColor: "#a7f3d0",
    image: "/assets/images/poto nabil.jpeg",
    rot: -3,
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<ActivityItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Smooth zoom limits
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(1.35, +(prev + 0.12).toFixed(2)));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(0.75, +(prev - 0.12).toFixed(2)));
  };

  // Keyboard escape handler for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="activities"
      className="scroll-mt-14 relative z-10 w-full min-h-[100dvh] py-20 md:py-24 border-t-2 border-[#191510] flex flex-col justify-between overflow-hidden"
      style={{ background: "#e8e4da" }}
    >
      {/* ── Section Header (Photo 5 layout) ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center shrink-0 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hand text-[24px] text-[#7a7066] mb-1 lowercase"
        >
          playground
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-pixel uppercase text-[clamp(32px,6vw,60px)] leading-[1.1] tracking-tight text-[#191510] inline-block border-b-2 border-[#191510] pb-2"
        >
          JUST FOR FUN
        </motion.h2>
        <p className="text-[12px] sm:text-[13px] text-[#7a7066] font-mono-accent uppercase tracking-wider mt-3">
          click any snapshot to read the story
        </p>
      </div>

      {/* ── Scattered Polaroid Scrapbook Canvas (Photo 5 layout) ── */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
        <motion.div
          animate={{ scale: zoomLevel }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 w-full origin-center py-4"
        >
          {ACTIVITIES.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.07, rotate: 0, zIndex: 30 }}
              style={{ rotate: item.rot }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={() => setSelected(item)}
              className="relative bg-white p-3 pb-4 shadow-xl border border-black/20 cursor-pointer select-none group"
            >
              {/* Sticky Note Label with Tape (Photo 5 style) */}
              <div
                className="absolute -top-3.5 left-4 px-3 py-1 text-[13px] font-hand font-bold shadow-md z-20 border border-black/20"
                style={{
                  background: item.tapeColor,
                  color: "#191510",
                  transform: `rotate(${item.rot > 0 ? -4 : 4}deg)`,
                }}
              >
                {item.label}
              </div>

              {/* Photo */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e8e4da] mt-1 border border-black/10">
                <Image
                  src={item.image}
                  alt={item.role}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 250px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Bottom Caption */}
              <p className="font-hand text-[15px] sm:text-[16px] text-center text-[#191510] mt-2 line-clamp-1 font-bold">
                {item.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Zoom Controls (Photo 5 bottom right) ── */}
      <div className="absolute bottom-8 right-8 z-[50] flex flex-col gap-1.5 bg-[#f0ece0] border-2 border-[#191510] shadow-[4px_4px_0_#191510] p-1 rounded-sm">
        <button
          onClick={handleZoomIn}
          className="w-9 h-9 flex items-center justify-center hover:bg-[#facc15] transition-colors border-b border-[#191510]/30 text-[#191510] cursor-pointer"
          aria-label="Zoom in"
          title="Zoom in"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-9 h-9 flex items-center justify-center hover:bg-[#facc15] transition-colors text-[#191510] cursor-pointer"
          aria-label="Zoom out"
          title="Zoom out"
        >
          <Minus className="w-4 h-4" />
        </button>
      </div>

      {/* ── Detail Story Modal (Fixed Close & Return Behavior) ── */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[2500] bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              key="modal-dialog"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="fixed inset-0 z-[2501] flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="pointer-events-auto bg-[#f0ece0] border-2 border-[#191510] rounded-sm max-w-lg w-full overflow-hidden shadow-[8px_8px_0_#191510] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo header */}
                <div className="relative w-full h-64 sm:h-72 bg-black/20">
                  <Image
                    src={selected.image}
                    alt={selected.role}
                    fill
                    className="object-cover"
                    sizes="512px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Close button top-right */}
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white border-2 border-[#191510] text-[#191510] rounded-full flex items-center justify-center shadow-md hover:bg-[#facc15] transition-colors cursor-pointer z-30"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider border-2 border-[#191510] shadow-sm font-mono-accent"
                      style={{ background: selected.tapeColor, color: "#191510" }}
                    >
                      {selected.type}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-display text-[22px] sm:text-[24px] font-bold drop-shadow leading-tight">
                      {selected.role}
                    </h3>
                    <p className="text-[13px] text-white/90 font-mono-accent mt-1">
                      {selected.org} • {selected.date}
                    </p>
                  </div>
                </div>

                {/* Body & Close Button */}
                <div className="p-6">
                  <p className="text-[15px] leading-relaxed text-[#191510]/90">
                    {selected.desc}
                  </p>

                  <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t-2 border-[#191510]/15">
                    <button
                      onClick={() => setSelected(null)}
                      className="w-full py-3 bg-[#191510] text-white font-bold text-[13px] tracking-wider uppercase hover:bg-[#2563eb] transition-colors border-2 border-[#191510] cursor-pointer"
                    >
                      Close &amp; Return
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
