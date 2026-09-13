"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, Plus, Minus, ArrowLeft } from "lucide-react";
import BackButton from "@/components/BackButton";

interface ActivityPhoto {
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
  initialX: number;
  initialY: number;
  width: string;
}

const ALL_ACTIVITIES: ActivityPhoto[] = [
  {
    id: 1,
    role: "PUFA Computer Science Division (BEM)",
    type: "Campus Organization",
    org: "President University",
    date: "Oct 2025",
    desc: "Active member of the PUFA Computer Science division within the Executive Board of Students (BEM). Organizing tech-driven campus events, coding workshops, and community outreach programs.",
    label: "Random shot",
    tapeColor: "#fef08a",
    image: "/assets/images/PUFA Computer Science BEM.jpeg",
    rot: -4,
    initialX: -45,
    initialY: -60,
    width: "w-[240px] sm:w-[280px]",
  },
  {
    id: 2,
    role: "Jababeka Scholarship Recipient Ceremony",
    type: "Academic Honor",
    org: "Jababeka Foundation",
    date: "Dec 2023 – Present",
    desc: "Awarded the prestigious Jababeka Scholarship for academic excellence at President University. Recognized for top academic performance and active community contributions.",
    label: "what is this",
    tapeColor: "#a7f3d0",
    image: "/assets/images/WhatsApp Image 2026-04-11 at 22.47.17 (1).jpeg",
    rot: 3,
    initialX: 35,
    initialY: -70,
    width: "w-[220px] sm:w-[260px]",
  },
  {
    id: 3,
    role: "Effective English Conversation Course (EECC)",
    type: "Language Intensive",
    org: "Pare Kediri",
    date: "2022",
    desc: "Completed an intensive one-month English immersion program in Kampung Inggris Pare Kediri. Achieved Speaking A, Writing A, and Grammar B.",
    label: "hello world",
    tapeColor: "#fed7aa",
    image: "/assets/images/Effective English Conversation Course EECC.jpeg",
    rot: -2.5,
    initialX: -50,
    initialY: 40,
    width: "w-[250px] sm:w-[300px]",
  },
  {
    id: 4,
    role: "International Youth Gathering (IYG #4)",
    type: "Youth Forum & Summit",
    org: "President University",
    date: "2025",
    desc: "Represented President University in the International Youth Gathering #4. Collaborated with delegates from global universities on tech leadership, AI ethics, and youth innovation.",
    label: "first time",
    tapeColor: "#fef08a",
    image: "/assets/images/International Youth Gathering.jpeg",
    rot: 4.5,
    initialX: 55,
    initialY: -40,
    width: "w-[240px] sm:w-[280px]",
  },
  {
    id: 5,
    role: "Ocean Young Guards Expedition",
    type: "Environmental Volunteering",
    org: "1000 Island Jakarta",
    date: "Feb 2025",
    desc: "Fully-funded youth volunteer program dedicated to protecting coastal ecosystems. Participated in coral reef restoration, mangrove planting, and marine conservation workshops.",
    label: "found!",
    tapeColor: "#93c5fd",
    image: "/assets/images/Ocean Young Guards.png",
    rot: -3.5,
    initialX: -60,
    initialY: 50,
    width: "w-[220px] sm:w-[260px]",
  },
  {
    id: 6,
    role: "Organization Student Hidayatunnajah (OSHAN)",
    type: "Student Council & Leadership",
    org: "Pesantren Hidayatunnajah",
    date: "Sep 2021",
    desc: "Active participant and event coordinator within the school student organization, managing campus activities, Islamic studies events, and student discipline programs.",
    label: "20th take",
    tapeColor: "#fbcfe8",
    image: "/assets/images/Organization Student Hidayatunnajah OSHAN.jpeg",
    rot: 2.5,
    initialX: 40,
    initialY: 60,
    width: "w-[240px] sm:w-[280px]",
  },
  {
    id: 7,
    role: "Hackathons & Creative AI Sprints",
    type: "Engineering Workshop",
    org: "Informatics Labs",
    date: "2024 – 2025",
    desc: "Hands-on engineering sprints building full-stack applications, agentic workflows, and machine learning models under tight hackathon deadlines.",
    label: "practiceeee",
    tapeColor: "#a7f3d0",
    image: "/assets/images/foto.jpg",
    rot: 3,
    initialX: -35,
    initialY: -50,
    width: "w-[230px] sm:w-[270px]",
  },
  {
    id: 8,
    role: "Campus Life & Tech Communities",
    type: "Community",
    org: "President University",
    date: "2024 – Present",
    desc: "Engaging in student mentoring, competitive programming discussions, and collaborative software design projects.",
    label: "uhm",
    tapeColor: "#fef08a",
    image: "/assets/images/PUFA Computer Science BEM.jpeg",
    rot: -4,
    initialX: 45,
    initialY: 30,
    width: "w-[230px] sm:w-[270px]",
  },
];

export default function ActivitiesPage() {
  const [selected, setSelected] = useState<ActivityPhoto | null>(null);
  const [manualZoom, setManualZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic scroll-based zoom animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollZoom = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 0.96]);

  const handleZoomIn = () => {
    setManualZoom((z) => Math.min(1.35, +(z + 0.1).toFixed(2)));
  };

  const handleZoomOut = () => {
    setManualZoom((z) => Math.max(0.75, +(z - 0.1).toFixed(2)));
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen pt-20 pb-24 relative overflow-hidden flex flex-col justify-between"
      style={{ background: "#e8e4da" }}
    >
      {/* ── Background Notebook Grid ── */}
      <div className="grid-pattern fixed inset-0 z-0 pointer-events-none" />

      {/* ── Page Header (Title: activities / ACTIVITIES) ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0 mb-8 relative z-10">
        <BackButton label="← Kembali ke Beranda" />
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-hand text-[26px] text-[#7a7066] mb-1 lowercase"
        >
          activities
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, type: "spring", damping: 14 }}
          className="font-pixel uppercase text-[clamp(38px,8.5vw,76px)] leading-[1.05] tracking-tight text-[#191510] inline-block border-b-2 border-[#191510] pb-2"
        >
          ACTIVITIES
        </motion.h1>
          <p className="text-[12px] sm:text-[13px] text-[#7a7066] font-mono-accent uppercase tracking-wider mt-3">
            scroll to zoom &amp; click any memory snapshot
          </p>
        </div>
      </div>

      {/* ── Pure Scattered Polaroid Canvas with Scattered Entrance & Scroll Zoom ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center relative z-10 py-6">
        <motion.div
          style={{ scale: scrollZoom }}
          animate={{ scale: manualZoom }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="flex flex-wrap justify-center items-center gap-8 sm:gap-11 max-w-6xl mx-auto origin-center"
        >
          {ALL_ACTIVITIES.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{
                opacity: 0,
                x: photo.initialX,
                y: photo.initialY,
                rotate: photo.rot * 2,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: photo.rot,
                scale: 1,
              }}
              transition={{
                delay: 0.15 + i * 0.07,
                type: "spring",
                stiffness: 220,
                damping: 15,
              }}
              whileHover={{ scale: 1.09, rotate: 0, zIndex: 40 }}
              onClick={() => setSelected(photo)}
              className={`relative bg-white p-3 sm:p-3.5 pb-4 sm:pb-5 shadow-2xl border border-black/20 cursor-pointer select-none group ${photo.width}`}
            >
              {/* Washi Tape Note Header */}
              <div
                className="absolute -top-3.5 left-5 px-3.5 py-1 text-[13px] sm:text-[14px] font-hand font-bold shadow-md z-20 border border-black/20"
                style={{
                  background: photo.tapeColor,
                  color: "#191510",
                  transform: `rotate(${photo.rot > 0 ? -5 : 5}deg)`,
                }}
              >
                {photo.label}
              </div>

              {/* Photo View */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e8e4da] mt-1 border border-black/10">
                <Image
                  src={photo.image}
                  alt={photo.role}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                  sizes="(max-width: 640px) 240px, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Caption */}
              <p className="font-hand text-[15px] sm:text-[17px] text-center text-[#191510] mt-3 line-clamp-1 font-bold">
                {photo.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Zoom Controls (+ / -) in bottom-right ── */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-1 bg-[#f0ece0] border-2 border-[#191510] shadow-[4px_4px_0_#191510] p-1 rounded-sm">
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

      {/* ── Photo Story Modal (Smooth Close & Return) ── */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="act-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[2500] bg-black/75 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              key="act-dialog"
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
                <div className="relative w-full h-64 sm:h-72 bg-black/20">
                  <Image
                    src={selected.image}
                    alt={selected.role}
                    fill
                    className="object-cover"
                    sizes="512px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

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
    </div>
  );
}
