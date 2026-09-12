"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { X, Plus, Minus } from "lucide-react";

const ITEMS = [
  {
    role: "PUFA Computer Science (BEM)",
    type: "Campus Organization",
    org: "President University",
    date: "Oct 2025",
    desc: "Active member of the PUFA Computer Science division within the Executive Board of Students (BEM). Involved in tech-driven campus events, workshops, and community outreach programs.",
    label: "campus life",
    image: "/assets/images/PUFA Computer Science BEM.jpeg",
    pos: { top: "8%", left: "6%" }, rotate: -6,
  },
  {
    role: "Jababeka Scholarship Recipient",
    type: "Scholarship",
    org: "Jababeka Foundation",
    date: "Dec 2023 – Present",
    desc: "Awarded the prestigious Jababeka Scholarship for academic excellence at President University. Recognizes outstanding academic performance and potential for contributing to the community.",
    label: "scholarship day",
    image: "/assets/images/WhatsApp Image 2026-04-11 at 22.47.17 (1).jpeg",
    pos: { top: "4%", left: "38%" }, rotate: 4,
  },
  {
    role: "Ocean Young Guards",
    type: "Environmental Volunteering",
    org: "1000 Island Jakarta",
    date: "Feb 2025",
    desc: "Fully-funded participant in a youth-driven volunteer program dedicated to protecting the ocean. Engaged in beach clean-ups, environmental education, and conservation campaigns to raise awareness about marine pollution.",
    label: "found the ocean!",
    image: "/assets/images/Ocean Young Guards.png",
    pos: { top: "10%", left: "68%" }, rotate: 5,
  },
  {
    role: "Organization Student Hidayatunnajah (OSHAN)",
    type: "Student Organization",
    org: "Pesantren Hidayatunnajah",
    date: "Sep 2021",
    desc: "Active participant in the school's student organization, involved in organizing school events, leadership activities, and fostering community values within the pesantren environment.",
    label: "20th take",
    image: "/assets/images/Organization Student Hidayatunnajah OSHAN.jpeg",
    pos: { top: "42%", left: "4%" }, rotate: -4,
  },
  {
    role: "Effective English Conversation Course (EECC)",
    type: "Language Intensive Program",
    org: "Pare Kediri",
    date: "2022",
    desc: "Completed an intensive one-month English conversation course in Pare Kediri. Achieved Speaking A, Writing A, and Grammar B. Gained practical conversational fluency in an immersive English environment.",
    label: "hello world",
    image: "/assets/images/Effective English Conversation Course EECC.jpeg",
    pos: { top: "38%", left: "33%" }, rotate: 3,
  },
  {
    role: "IYG #4 — International Youth Gathering",
    type: "Conference & Youth Forum",
    org: "President University",
    date: "2025",
    desc: "Represented President University in the International Youth Gathering (IYG) #4. Engaged with youth delegates from international backgrounds to discuss global challenges, leadership, and social innovation.",
    label: "first time",
    image: "/assets/images/International Youth Gathering.jpeg",
    pos: { top: "40%", left: "64%" }, rotate: -5,
  },
];

type Item = (typeof ITEMS)[number];

const MIN_ZOOM = 0.35;
const MAX_ZOOM = 2;

export default function Gallery() {
  const [selected, setSelected] = useState<Item | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragState = useRef<{ dragging: boolean; startX: number; startY: number; panX: number; panY: number }>({
    dragging: false, startX: 0, startY: 0, panX: 0, panY: 0,
  });
  // Tracks every active touch/pen/mouse pointer by id — a second concurrent
  // pointer means a pinch, so we measure the distance between the two and
  // scale zoom from that instead of panning.
  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchStartDistRef = useRef<number | null>(null);
  const pinchStartZoomRef = useRef(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // On narrow screens the 1100x620 board is wider than the viewport — start
  // zoomed out so the whole canvas is visible instead of one cropped corner.
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setZoom(0.4);
    }
  }, []);

  // Wheel over the canvas zooms in/out — the "unique" pan-zoom board behavior.
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z - e.deltaY * 0.0015)));
  }, []);

  const pointerDistance = (pts: { x: number; y: number }[]) => Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);

    if (pointersRef.current.size === 2) {
      dragState.current.dragging = false;
      pinchStartDistRef.current = pointerDistance(Array.from(pointersRef.current.values()));
      pinchStartZoomRef.current = zoom;
    } else if (pointersRef.current.size === 1) {
      dragState.current = { dragging: true, startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y };
    }
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!pointersRef.current.has(e.pointerId)) return;
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointersRef.current.size === 2 && pinchStartDistRef.current) {
      const ratio = pointerDistance(Array.from(pointersRef.current.values())) / pinchStartDistRef.current;
      setZoom(Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, pinchStartZoomRef.current * ratio)));
      return;
    }
    if (dragState.current.dragging) {
      const dx = e.clientX - dragState.current.startX;
      const dy = e.clientY - dragState.current.startY;
      setPan({ x: dragState.current.panX + dx, y: dragState.current.panY + dy });
    }
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size < 2) pinchStartDistRef.current = null;
    dragState.current.dragging = pointersRef.current.size === 1;
  };

  const zoomBy = (delta: number) => setZoom((z) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z + delta)));

  return (
    <section id="gallery" className="h-[100dvh] bg-surface-container relative z-10 w-full overflow-hidden snap-start snap-always flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 md:pt-20 pb-4 text-center shrink-0 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="inline-block font-hand text-[20px] text-on-surface-variant mb-2"
        >
          playground
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="font-pixel uppercase text-[clamp(28px,6vw,56px)] leading-[1.2] tracking-tight text-on-surface"
        >
          My Activities
        </motion.h2>
        <p className="text-[12px] text-on-surface-variant mt-2 font-semibold uppercase tracking-wide">
          scroll / pinch to zoom · drag to pan
        </p>
      </div>

      {/* ── Pan / zoom canvas ── */}
      <div
        ref={containerRef}
        className="flex-1 relative cursor-grab active:cursor-grabbing touch-none"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 w-[1100px] h-[620px]"
          animate={{ x: pan.x - 550, y: pan.y - 310, scale: zoom }}
          transition={{ type: "tween", duration: 0.05 }}
          style={{ transformOrigin: "center center" }}
        >
          {ITEMS.map((item) => (
            <motion.button
              key={item.role}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 20 }}
              style={{ position: "absolute", top: item.pos.top, left: item.pos.left, rotate: item.rotate }}
              onClick={() => setSelected(item)}
              onPointerDown={(e) => e.stopPropagation()}
              className="w-[190px] aspect-[4/5] rounded-xl overflow-hidden border-4 border-white shadow-xl tape-corner bg-surface cursor-pointer text-left"
            >
              <div className="relative w-full h-full">
                <Image src={item.image} alt={item.role} fill className="object-cover pointer-events-none" sizes="190px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 font-hand text-white text-[15px] leading-tight drop-shadow">{item.label}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Zoom controls — lifted clear of the fixed mobile bottom nav */}
        <div className="absolute bottom-24 md:bottom-6 right-6 flex flex-col gap-2 z-20">
          <button onClick={() => zoomBy(0.15)} className="w-10 h-10 rounded-xl bg-surface border border-outline-variant shadow-lg flex items-center justify-center hover:bg-surface-container-highest transition-colors">
            <Plus className="w-4 h-4 text-on-surface" />
          </button>
          <button onClick={() => zoomBy(-0.15)} className="w-10 h-10 rounded-xl bg-surface border border-outline-variant shadow-lg flex items-center justify-center hover:bg-surface-container-highest transition-colors">
            <Minus className="w-4 h-4 text-on-surface" />
          </button>
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
                  <div className="absolute top-4 left-4">
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
