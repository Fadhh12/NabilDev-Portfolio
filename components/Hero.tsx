"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const boxRef = useRef<HTMLDivElement>(null);

  // Cursor-follow spotlight on the name box — mirrors the reference's
  // hover-reactive hero (mouse near the name lights it up).
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = boxRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--spot-x", `${x}%`);
    el.style.setProperty("--spot-y", `${y}%`);
    el.style.setProperty("--spot-opacity", "1");
  };
  const handleMouseLeave = () => {
    boxRef.current?.style.setProperty("--spot-opacity", "0");
  };

  return (
    <section id="home" className="min-h-[100dvh] pt-28 pb-16 flex items-center relative overflow-hidden snap-start snap-always">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">

        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-hand text-[22px] text-on-surface-variant mb-1 relative"
        >
          my name is
          <svg className="absolute -bottom-1 left-1/2 -translate-x-1/2" width="90" height="8" viewBox="0 0 90 8" fill="none">
            <path d="M2 5.5C20 1 60 1 88 5.5" stroke="var(--ca-blue)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </motion.span>

        {/* ── Name box, flanked by photos + sticky notes ── */}
        <div className="relative mt-8 flex items-center justify-center w-full">
          {/* Mint / yellow scrapbook tags */}
          <motion.span
            initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -8, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden sm:block absolute -top-2 left-2 md:left-10 z-30 px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wide shadow-md"
            style={{ background: "var(--ca-mint)", color: "var(--ca-ink)" }}
          >
            builds things
          </motion.span>
          <motion.span
            initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 6, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden sm:block absolute -top-4 right-2 md:right-6 z-30 px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wide shadow-md"
            style={{ background: "var(--ca-yellow)", color: "var(--ca-ink)" }}
          >
            detail obsessed
          </motion.span>

          {/* Left photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden md:block absolute left-0 xl:-left-16 w-[110px] h-[110px] rounded-full overflow-hidden border-[5px] shrink-0 z-20"
            style={{ borderColor: "var(--ca-orange)" }}
          >
            <Image src="/assets/images/foto.jpg" alt="Nabil Fadhlur Rahman" fill className="object-cover" sizes="110px" priority />
          </motion.div>

          {/* Right photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden md:block absolute right-0 xl:-right-16 w-[110px] h-[110px] rounded-full overflow-hidden border-[5px] shrink-0 z-20"
            style={{ borderColor: "var(--ca-orange)" }}
          >
            <Image src="/assets/images/PUFA Computer Science BEM.jpeg" alt="Nabil at a campus tech event" fill className="object-cover" sizes="110px" />
          </motion.div>

          {/* Marker outline, drawn around the box */}
          <svg className="absolute -inset-4 sm:-inset-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] h-[calc(100%+2rem)] sm:h-[calc(100%+3rem)] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect x="1.5" y="1.5" width="97" height="97" rx="6" fill="none" stroke="var(--ca-orange)" strokeWidth="0.6" />
          </svg>

          {/* The name box itself */}
          <motion.div
            ref={boxRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="spotlight relative z-10 w-full max-w-[720px] rounded-2xl px-6 sm:px-10 py-10 sm:py-14 flex flex-col items-center gap-4 overflow-hidden cursor-default"
            style={{ background: "var(--ca-ink)" }}
          >
            <h1 className="font-pixel uppercase text-[clamp(40px,10vw,88px)] leading-[1.1] tracking-tight text-white relative z-10">
              Nabil
            </h1>
            <div className="flex items-center gap-2 text-[11px] sm:text-[12px] font-bold tracking-[0.15em] uppercase text-white/90 relative z-10">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--ca-blue)" }} />
              Open to internships &amp; good problems
            </div>
          </motion.div>

          {/* Sticky notes overlapping the bottom edge */}
          <motion.span
            initial={{ opacity: 0, y: 10, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-5 left-4 sm:left-10 z-30 px-4 py-2 rounded-md text-[13px] font-hand text-[18px] shadow-lg"
            style={{ background: "var(--ca-yellow)", color: "var(--ca-ink)" }}
          >
            AI Engineer
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -bottom-5 right-4 sm:right-10 z-30 px-4 py-2 rounded-md font-hand text-[18px] shadow-lg"
            style={{ background: "var(--ca-mint)", color: "var(--ca-ink)" }}
          >
            Cikarang, Jababeka
          </motion.span>
        </div>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 sm:mt-20 text-[clamp(22px,4.4vw,42px)] leading-[1.25] font-bold text-on-surface max-w-[820px]"
        >
          I build software that gets out of your way
          <span className="inline-flex w-6 h-6 sm:w-8 sm:h-8 rounded-full mx-2 align-middle" style={{ background: "var(--ca-green)" }} />
          — bridging AI and the web to solve real problems, end to end.
          <span className="inline-block ml-2 align-middle">🌸</span>
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-3 bg-primary text-on-primary rounded-xl pl-2 pr-6 py-2 text-[12px] font-bold tracking-[0.1em] uppercase shadow-[4px_4px_0_var(--primary-hover)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--primary-hover)] transition-all"
        >
          <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--ca-blue)" }}>
            <ArrowUpRight className="w-5 h-5 text-white" />
          </span>
          Contact Me
        </motion.a>
      </div>
    </section>
  );
}
