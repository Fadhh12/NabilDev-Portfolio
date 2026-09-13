"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

type CursorVariant = "default" | "text" | "link" | "button" | "heading" | "nabil" | "letstalk";

interface CursorState {
  variant: CursorVariant;
  label: string | null;
}

const SPRING_BOX = { damping: 26, stiffness: 320, mass: 0.45 };
const SPRING_SNAP = { damping: 38, stiffness: 750, mass: 0.2 };

interface VariantConfig {
  size: number;
  cornerSize: number;
  label?: string;
  isSpecial?: boolean;
}

const VARIANTS: Record<CursorVariant, VariantConfig> = {
  default: {
    size: 34,
    cornerSize: 5,
  },
  text: {
    size: 44,
    cornerSize: 6,
  },
  heading: {
    size: 56,
    cornerSize: 7,
  },
  link: {
    size: 48,
    cornerSize: 7,
  },
  button: {
    size: 52,
    cornerSize: 8,
  },
  nabil: {
    size: 82, // Compact (not 150px!) but nicely frames the NABIL letters
    cornerSize: 9,
    label: "NABIL // AI",
    isSpecial: true,
  },
  letstalk: {
    size: 82, // Differentiated for LET'S TALK
    cornerSize: 9,
    label: "LET'S TALK ✦",
    isSpecial: true,
  },
};

export default function CustomCursor() {
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  // Smooth lag for outer selection box
  const boxX = useSpring(rawX, SPRING_BOX);
  const boxY = useSpring(rawY, SPRING_BOX);

  // Fast snap for center precision point
  const snapX = useSpring(rawX, SPRING_SNAP);
  const snapY = useSpring(rawY, SPRING_SNAP);

  const [state, setState] = useState<CursorState>({ variant: "default", label: null });
  const [visible, setVisible] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Check if touch-only device
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const detectVariant = useCallback((e: MouseEvent): CursorState => {
    const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
    if (!el) return { variant: "default", label: null };

    // 1. NABIL Special Zone
    if (el.closest("[data-cursor='nabil']")) {
      return { variant: "nabil", label: "NABIL // AI" };
    }

    // 2. LET'S TALK Special Zone
    if (
      el.closest("[data-cursor='letstalk']") ||
      el.closest("#contact h2") ||
      el.closest("a[href='/contact']") ||
      el.closest("a[href='#contact']")
    ) {
      return { variant: "letstalk", label: "LET'S TALK ✦" };
    }

    // 3. Buttons & Interactive Controls
    if (el.closest("button, [role='button'], input[type='submit'], .btn-interactive")) {
      const btn = el.closest("button") as HTMLElement | null;
      return {
        variant: "button",
        label: btn?.textContent?.trim().slice(0, 12) || null,
      };
    }

    // 4. Links
    if (el.closest("a")) {
      return { variant: "link", label: null };
    }

    // 5. Headings
    if (el.closest("h1, h2, h3, h4")) {
      return { variant: "heading", label: null };
    }

    // 6. Text / Paragraphs / Spans
    if (el.closest("p, li, span, label, input, textarea")) {
      return { variant: "text", label: null };
    }

    return { variant: "default", label: null };
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
      setState(detectVariant(e));
    };

    const onDown = () => setIsMouseDown(true);
    const onUp = () => setIsMouseDown(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY, detectVariant]);

  if (isTouchDevice) return null;

  const cfg = VARIANTS[state.variant];
  const activeSize = isMouseDown ? cfg.size * 0.88 : cfg.size;

  return (
    <>
      {/* ── Selection Box (Inversion Effect everywhere) ── */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99999]"
        style={{
          x: boxX,
          y: boxY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center bg-white"
          animate={{
            width: activeSize,
            height: activeSize,
            scale: visible ? 1 : 0.4,
          }}
          transition={{ type: "spring", damping: 22, stiffness: 320 }}
        >
          {/* 4 Corner Anchor Handles (The signature selection marquee) */}
          <span
            className="absolute bg-white pointer-events-none"
            style={{
              width: cfg.cornerSize,
              height: cfg.cornerSize,
              top: -Math.floor(cfg.cornerSize / 2),
              left: -Math.floor(cfg.cornerSize / 2),
            }}
          />
          <span
            className="absolute bg-white pointer-events-none"
            style={{
              width: cfg.cornerSize,
              height: cfg.cornerSize,
              top: -Math.floor(cfg.cornerSize / 2),
              right: -Math.floor(cfg.cornerSize / 2),
            }}
          />
          <span
            className="absolute bg-white pointer-events-none"
            style={{
              width: cfg.cornerSize,
              height: cfg.cornerSize,
              bottom: -Math.floor(cfg.cornerSize / 2),
              left: -Math.floor(cfg.cornerSize / 2),
            }}
          />
          <span
            className="absolute bg-white pointer-events-none"
            style={{
              width: cfg.cornerSize,
              height: cfg.cornerSize,
              bottom: -Math.floor(cfg.cornerSize / 2),
              right: -Math.floor(cfg.cornerSize / 2),
            }}
          />

          {/* Differentiated Special Accents for NABIL & LET'S TALK */}
          {cfg.isSpecial && (
            <>
              {/* Inner dashed frame */}
              <div className="absolute inset-1.5 border border-dashed border-black/80 pointer-events-none" />

              {/* Floating Marquee Label Badge */}
              <motion.div
                initial={{ opacity: 0, y: 4, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.8 }}
                className="absolute -top-6 left-0 px-1.5 py-0.5 bg-white text-black font-mono text-[9px] font-black uppercase tracking-wider whitespace-nowrap leading-none select-none pointer-events-none"
              >
                {cfg.label}
              </motion.div>
            </>
          )}
        </motion.div>
      </motion.div>

      {/* ── Center Precision Dot (snaps tight to true pointer) ── */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100000]"
        style={{
          x: snapX,
          y: snapY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
          opacity: visible ? 1 : 0,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
      </motion.div>
    </>
  );
}
