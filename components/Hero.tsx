"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AmbientNameBox from "./AmbientNameBox";

const GREETINGS = ["Oh, hello!", "You found me!", "Y'know...", "Let's build."];
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%*+";
const NAME = "NABIL";

type Phase = "greeting" | "box" | "scramble" | "badges" | "done";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Typewriter that types then backspaces through a list of phrases, once. */
function useTypewriterCycle(phrases: string[], active: boolean, onDone: () => void) {
  const [text, setText] = useState("");
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  });

  useEffect(() => {
    if (!active) return;
    let cancelled = false;

    (async () => {
      for (const phrase of phrases) {
        for (let i = 1; i <= phrase.length; i++) {
          if (cancelled) return;
          setText(phrase.slice(0, i));
          await wait(35);
        }
        await wait(700);
        for (let i = phrase.length; i >= 0; i--) {
          if (cancelled) return;
          setText(phrase.slice(0, i));
          await wait(22);
        }
        await wait(150);
      }
      if (!cancelled) onDoneRef.current();
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return text;
}

/** Reveals NAME left-to-right, scrambling the not-yet-revealed tail each tick. */
function useScrambleReveal(target: string, active: boolean, onDone: () => void) {
  const [display, setDisplay] = useState(active ? "" : target);
  const onDoneRef = useRef(onDone);
  useEffect(() => {
    onDoneRef.current = onDone;
  });

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const totalFrames = 22;
    const id = setInterval(() => {
      frame++;
      const revealCount = Math.floor((frame / totalFrames) * target.length);
      let out = "";
      for (let i = 0; i < target.length; i++) {
        out += i < revealCount ? target[i] : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      setDisplay(out);
      if (frame >= totalFrames) {
        clearInterval(id);
        setDisplay(target);
        onDoneRef.current();
      }
    }, 35);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return display;
}

export default function Hero() {
  const boxRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [phase, setPhase] = useState<Phase>("greeting");
  // Reduced-motion users skip straight to the settled end state — derived,
  // not stored, so there's no state to desync from the media query.
  const effectivePhase: Phase = prefersReducedMotion ? "done" : phase;

  const greetingActive = phase === "greeting" && !prefersReducedMotion;
  const greetingText = useTypewriterCycle(GREETINGS, greetingActive, () => setPhase("box"));

  // Box outline draws itself, then hands off to the scramble reveal.
  useEffect(() => {
    if (phase !== "box") return;
    const t = setTimeout(() => setPhase("scramble"), 650);
    return () => clearTimeout(t);
  }, [phase]);

  const scrambleActive = phase === "scramble";
  const scrambledName = useScrambleReveal(NAME, scrambleActive, () => setPhase("badges"));

  // Badges stagger in, then the ambient box / tagline / CTA settle in.
  useEffect(() => {
    if (phase !== "badges") return;
    const t = setTimeout(() => setPhase("done"), 950);
    return () => clearTimeout(t);
  }, [phase]);

  const nameSettled = effectivePhase === "scramble" || effectivePhase === "badges" || effectivePhase === "done";
  const badgesShown = effectivePhase === "badges" || effectivePhase === "done";
  const isDone = effectivePhase === "done";

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const ambientParallaxY = useTransform(scrollYProgress, [0, 1], [0, 36]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-[100dvh] pt-[72px] pb-16 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">

        {/* ── Center Stage: Compact Box Matching Photo 3 ── */}
        <div className="relative mt-2 mb-4 flex items-center justify-center w-full">

          {/* Top-Left Floating Avatar with Orange Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -14, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              opacity: { duration: 0.5 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.15 }}
            className="hidden md:block absolute left-8 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 w-[88px] h-[88px] lg:w-[96px] lg:h-[96px] rounded-full overflow-hidden shrink-0 z-20 border-4 border-[#f97316] shadow-xl cursor-pointer"
          >
            <Image src="/assets/images/poto nabil 1.jpeg" alt="Nabil Fadhlur Rahman" fill className="object-cover" sizes="96px" priority />
          </motion.div>

          {/* Right Floating Avatar with Orange Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [-12, 4, -12],
              rotate: [2, -2, 2],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.2 },
              y: { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.2 },
              rotate: { repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.2 },
            }}
            whileHover={{ scale: 1.15 }}
            className="hidden md:block absolute right-8 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 w-[88px] h-[88px] lg:w-[96px] lg:h-[96px] rounded-full overflow-hidden shrink-0 z-20 border-4 border-[#f97316] shadow-xl cursor-pointer"
          >
            <Image src="/assets/images/poto nabil.jpeg" alt="Nabil at campus" fill className="object-cover" sizes="96px" />
          </motion.div>

          {/* ── Main Compact Name Block ── */}
          <div className="relative inline-flex flex-col items-center">

            {/* "my name is" annotation on top with curved underline and arrow */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-hand text-[23px] text-[#7a7066] mb-1 relative inline-flex flex-col items-center"
            >
              <span>my name is</span>
              <svg width="78" height="7" viewBox="0 0 78 7" fill="none" className="mt-0.5">
                <path d="M2 5C20 1 58 1 76 5" stroke="#191510" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Top-left pill badge: MADE THINGS */}
            <motion.span
              initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
              animate={badgesShown ? { opacity: 1, rotate: -6, scale: 1 } : { opacity: 0, rotate: -12, scale: 0.8 }}
              transition={{ delay: 0, duration: 0.45, type: "spring", damping: 14 }}
              whileHover={{ scale: 1.08, rotate: -2 }}
              className="absolute -top-3 -left-12 sm:-left-20 z-30 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border-2 border-[#191510] shadow-[2px_2px_0_#191510] select-none"
              style={{ background: "#a7f3d0", color: "#191510" }}
            >
              MADE THINGS
            </motion.span>

            {/* Top-right pill badge: SWEAT THE DETAILS */}
            <motion.span
              initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
              animate={badgesShown ? { opacity: 1, rotate: 5, scale: 1 } : { opacity: 0, rotate: 10, scale: 0.8 }}
              transition={{ delay: 0.13, duration: 0.45, type: "spring", damping: 14 }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="absolute -top-3 -right-12 sm:-right-24 z-30 px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border-2 border-[#191510] shadow-[2px_2px_0_#191510] select-none"
              style={{ background: "#fef08a", color: "#191510" }}
            >
              SWEAT THE DETAILS
            </motion.span>

            {/* ── Compact Orange Border Box around NABIL ── */}
            <div ref={boxRef} className="relative">
              {/* Hand-drawn Orange Outline — stroke-draws itself in on the "box" phase */}
              <svg
                className="absolute -inset-2.5 sm:-inset-3 w-[calc(100%+20px)] h-[calc(100%+20px)] sm:w-[calc(100%+24px)] sm:h-[calc(100%+24px)] pointer-events-none z-0 overflow-visible"
                aria-hidden
              >
                <motion.rect
                  x="1%"
                  y="2%"
                  width="98%"
                  height="96%"
                  rx="12"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    effectivePhase !== "greeting"
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.65, ease: "easeInOut" }}
                />
              </svg>

              {/* Ambient wandering dark card — weaves in front of / behind the name */}
              <motion.div
                style={{ y: ambientParallaxY }}
                className="absolute inset-0 pointer-events-none"
              >
                <AmbientNameBox active={isDone && !prefersReducedMotion} />
              </motion.div>

              {/* Name Box Container — data-cursor="nabil" triggers the special NABIL variant on the global cursor */}
              <div
                data-cursor="nabil"
                className="relative z-10 w-[290px] sm:w-[360px] md:w-[410px] h-[150px] sm:h-[175px] rounded-lg px-4 sm:px-6 flex flex-col items-center justify-center select-none bg-transparent overflow-visible"
              >
                {/* Greeting rotator — highlighter pill with typewriter text, shown before the name lands */}
                <AnimatePresence>
                  {effectivePhase === "greeting" && (
                    <motion.div
                      key="greeting"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span
                        className="font-hand text-[20px] sm:text-[24px] font-bold text-[#191510] px-4 py-1 rounded-sm"
                        style={{ background: "#fef08a", boxShadow: "2px 2px 0 rgba(25,21,16,0.25)" }}
                      >
                        {greetingText}
                        <span className="inline-block w-[2px] h-[1em] ml-0.5 bg-[#191510] align-middle animate-pulse" />
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Text reveal entrance (Anton display font) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: nameSettled ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center"
                >
                  <h1
                    className="font-hero uppercase text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-[0.01em] text-[#191510]"
                    aria-label={NAME}
                  >
                    {prefersReducedMotion ? NAME : phase === "scramble" ? scrambledName : NAME}
                  </h1>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: badgesShown ? 1 : 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex items-center gap-1.5 mt-2.5 text-[9.5px] sm:text-[11px] font-bold tracking-[0.14em] uppercase text-[#191510]/80 font-mono-accent"
                  >
                    <span className="w-2 h-2 rounded-full shrink-0 bg-[#2563eb]" />
                    OPEN TO INTERNSHIPS &amp; GOOD PROBLEMS
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Bottom-left pill badge: AI Engineer falling down from above */}
            <motion.div
              initial={{ opacity: 0, y: -90, scale: 0.6 }}
              animate={
                badgesShown
                  ? { opacity: 1, y: 0, scale: 1, rotate: -3 }
                  : { opacity: 0, y: -90, scale: 0.6, rotate: -3 }
              }
              transition={{ delay: 0.26, type: "spring", damping: 12, stiffness: 180 }}
              whileHover={{ scale: 1.08, rotate: 0 }}
              className="absolute -bottom-5 -left-10 sm:-left-16 z-30 flex items-center gap-1.5 px-3.5 py-1 rounded-sm font-hand text-[15px] font-bold shadow-md border-2 border-[#191510] cursor-pointer select-none"
              style={{ background: "#eab308", color: "#191510" }}
            >
              <span>AI Engineer</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-[#191510]">
                <path d="M1 9L13 1M13 1H6M13 1V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* Bottom-right pill badge: Cikarang, Jababeka falling down from above */}
            <motion.div
              initial={{ opacity: 0, y: -90, scale: 0.6 }}
              animate={
                badgesShown
                  ? { opacity: 1, y: 0, scale: 1, rotate: 3 }
                  : { opacity: 0, y: -90, scale: 0.6, rotate: 3 }
              }
              transition={{ delay: 0.39, type: "spring", damping: 12, stiffness: 180 }}
              whileHover={{ scale: 1.08, rotate: 0 }}
              className="absolute -bottom-5 -right-10 sm:-right-16 z-30 flex items-center gap-1.5 px-3.5 py-1 rounded-sm font-hand text-[15px] font-bold shadow-md border-2 border-[#191510] cursor-pointer select-none"
              style={{ background: "#a7f3d0", color: "#191510" }}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="text-[#191510]">
                <path d="M13 9L1 1M1 1H8M1 1V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Cikarang, Jababeka</span>
            </motion.div>

          </div>

        </div>

        {/* ── Tagline (Replaced pink flower with tech/AI emoji ⚡ and 🎯) ── */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={badgesShown ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-14 sm:mt-16 text-[clamp(22px,4vw,38px)] font-bold text-[#191510] leading-[1.3] max-w-[760px]"
        >
          I design software that gets out of your way.
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="inline-flex w-7 h-7 sm:w-8 sm:h-8 rounded-full mx-2 align-middle items-center justify-center bg-[#10b981] text-white text-xs"
          >
            🎯
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex w-7 h-7 sm:w-8 sm:h-8 rounded-full mx-1 align-middle items-center justify-center bg-[#facc15] text-[#191510] text-sm border border-[#191510]"
          >
            ⚡
          </motion.span>
        </motion.p>

        {/* ── Contact Button (Photo 3 exact black box with blue arrow icon) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-sm pl-2 pr-6 py-2 text-[12px] font-bold tracking-[0.14em] uppercase text-white border-2 border-[#191510] hover:scale-105 transition-transform"
            style={{
              background: "#191510",
              boxShadow: "3px 3px 0 #7a7066",
            }}
          >
            <span className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "#2563eb" }}>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </span>
            Contact Me
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
