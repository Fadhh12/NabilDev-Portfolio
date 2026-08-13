"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

const NAV_LINKS = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Stack", href: "/#stack" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Certificates", href: "/#certificates" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const scrollContainer = document.getElementById('main-scroll') || window;

    const handleScroll = () => {
      const target = document.getElementById('main-scroll');
      const latest = target ? target.scrollTop : (window.scrollY || document.documentElement.scrollTop);

      if (latest > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setIsShrunk(false);
      }

      if (latest > lastScrollYRef.current && latest > 150) {
        setIsShrunk(true);
      } else if (latest < lastScrollYRef.current) {
        setIsShrunk(false);
      }

      lastScrollYRef.current = latest;
    };

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll, { capture: true });
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* ─── Main Nav Bar ─── */}
      <motion.nav
        className={clsx(
          "fixed top-4 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-center px-6 py-2.5 rounded-full border border-outline-variant/40 transition-all duration-500 overflow-hidden cursor-pointer",
          scrolled
            ? "bg-surface/95 backdrop-blur-xl shadow-[0_8px_40px_rgba(26,28,24,0.12)]"
            : "bg-surface/85 backdrop-blur-md shadow-[0_4px_24px_rgba(26,28,24,0.08)]",
          isShrunk ? "w-[80px]" : "w-auto"
        )}
        onClick={() => isShrunk && setIsShrunk(false)}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, width: isShrunk ? 80 : "auto" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isShrunk ? (
            <motion.div
              key="dots"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="flex flex-row gap-1.5 items-center justify-center h-[36px]"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                  className="w-1.5 h-1.5 bg-primary rounded-full"
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="full-nav"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex items-center w-full justify-between gap-2 whitespace-nowrap"
            >
              <Link href="/#home" className="font-display text-[22px] font-extrabold text-primary tracking-tight mr-4">
                NabilDev.
              </Link>

              {/* Desktop links */}
              <ul className="items-center gap-1 list-none m-0 p-0 hidden md:flex">
                {NAV_LINKS.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.08em] uppercase text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="hidden md:inline-flex items-center ml-2 px-5 py-2 text-[11px] font-bold tracking-[0.08em] uppercase text-on-primary bg-primary hover:bg-primary-container rounded-full transition-all hover:scale-105"
              >
                Hire Me
              </Link>

              {/* Mobile Hamburger */}
              <button
                id="mobile-menu-btn"
                className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-full hover:bg-primary/10 transition-colors ml-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileOpen((v) => !v);
                }}
                aria-label="Toggle mobile menu"
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-5 h-[2px] bg-on-surface rounded-full block origin-center"
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-[2px] bg-on-surface rounded-full block"
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-5 h-[2px] bg-on-surface rounded-full block origin-center"
                />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="fixed top-20 left-4 right-4 z-[999] md:hidden"
            >
              <div className="bg-surface/98 backdrop-blur-2xl border border-outline-variant/50 rounded-3xl shadow-2xl overflow-hidden">
                {/* Drawer Header */}
                <div className="px-6 pt-6 pb-4 border-b border-outline-variant/30">
                  <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-on-surface-variant">
                    Navigation
                  </p>
                </div>

                {/* Nav Links */}
                <div className="px-3 py-3">
                  {NAV_LINKS.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleMobileLinkClick}
                        className="flex items-center gap-4 px-4 py-3.5 rounded-2xl hover:bg-primary/8 text-on-surface hover:text-primary transition-all duration-200 group"
                      >
                        <span className="text-[15px] font-semibold tracking-wide">{item.name}</span>
                        <span className="ml-auto text-on-surface-variant/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all text-[12px]">→</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-5 pt-2">
                  <Link
                    href="/#contact"
                    onClick={handleMobileLinkClick}
                    className="flex items-center justify-center w-full py-3.5 rounded-2xl bg-on-surface text-surface text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-primary hover:text-on-primary transition-all duration-300"
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
