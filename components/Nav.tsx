"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { Star, User, LayoutGrid, Diamond, Heart, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home", href: "/#home", id: "home", icon: Star },
  { name: "About", href: "/#about", id: "about", icon: User },
  { name: "Projects", href: "/#projects", id: "projects", icon: LayoutGrid },
  { name: "Playground", href: "/#gallery", id: "gallery", icon: Diamond },
];

const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nabil-fadhlur-rahman-686794320/", icon: FaLinkedin, bg: "var(--ca-yellow)" },
  { name: "GitHub", href: "https://github.com/Fadhh12", icon: FaGithub, bg: "var(--ca-magenta)" },
  { name: "Instagram", href: "https://instagram.com", icon: FaInstagram, bg: "var(--ca-green)" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll") || window;
    const handleScroll = () => {
      const target = document.getElementById("main-scroll");
      const latest = target ? target.scrollTop : window.scrollY || document.documentElement.scrollTop;
      setScrolled(latest > 50);
    };
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll, { capture: true });
  }, []);

  // Scrollspy — highlight the tab for whichever section is centered in view.
  useEffect(() => {
    const root = document.getElementById("main-scroll") || null;
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { root, threshold: [0.3, 0.5, 0.7] }
    );
    sections.forEach((s) => observerRef.current?.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ─── Desktop Nav Bar ─── */}
      <motion.nav
        className={clsx(
          "hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-[1000] items-center gap-2 px-3 py-2 rounded-full border border-outline-variant/40 transition-shadow duration-500",
          scrolled
            ? "bg-surface/95 backdrop-blur-xl shadow-[0_8px_40px_rgba(26,28,24,0.12)]"
            : "bg-surface/85 backdrop-blur-md shadow-[0_4px_24px_rgba(26,28,24,0.08)]"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Smiley logo */}
        <Link
          href="/#home"
          aria-label="Home"
          className="w-9 h-9 rounded-full flex items-center justify-center text-[18px] shrink-0"
          style={{ background: "var(--ca-pink-soft)" }}
        >
          🙂
        </Link>

        <ul className="flex items-center gap-1 list-none m-0 p-0">
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.name} className="relative">
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--ca-yellow)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Link
                  href={item.href}
                  className={clsx(
                    "relative z-10 flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-bold tracking-[0.08em] uppercase rounded-full transition-colors whitespace-nowrap",
                    isActive ? "text-on-surface" : "text-on-surface-variant hover:text-primary"
                  )}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5 mx-1">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
              style={{ background: s.bg }}
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <Link
          href="#contact"
          className="flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold tracking-[0.08em] uppercase text-on-primary bg-primary hover:bg-primary-hover rounded-full transition-all"
        >
          <Heart className="w-3.5 h-3.5 fill-current" />
          Contact
        </Link>
      </motion.nav>

      {/* ─── Mobile Bottom Nav Bar ─── */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-[400px]">
        <div className="bg-[#111111] border border-white/10 rounded-full shadow-2xl p-2 flex items-center justify-around">
          {NAV_LINKS.map((item) => (
            <Link key={item.name} href={item.href} className="p-3 text-white/70 hover:text-white transition-colors">
              <item.icon className="w-[22px] h-[22px]" />
            </Link>
          ))}
          <button
            className="p-3 text-white/70 hover:text-white transition-colors cursor-pointer"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-[22px] h-[22px]" />
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1001] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="mobile-drawer"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-[1002] md:hidden bg-surface rounded-t-3xl overflow-hidden shadow-2xl border-t border-outline-variant/30"
            >
              <div className="flex flex-col p-6 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-[16px]" style={{ background: "var(--ca-pink-soft)" }}>🙂</span>
                    <h3 className="font-pixel text-[16px] text-primary">Menu</h3>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full bg-surface-container hover:bg-surface-container-highest transition-colors">
                    <X className="w-5 h-5 text-on-surface" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map((item, i) => (
                    <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + 0.1 }}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-primary/8 text-on-surface hover:text-primary transition-all duration-200 group"
                      >
                        <item.icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary" />
                        <span className="text-[16px] font-semibold tracking-wide">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-outline-variant/30">
                  {SOCIALS.map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: s.bg }}>
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full mt-4 py-4 rounded-2xl bg-primary text-on-primary text-[14px] font-bold tracking-[0.08em] uppercase hover:scale-[1.02] transition-all"
                >
                  <Heart className="w-4 h-4 fill-current" /> Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
