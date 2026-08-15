"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { Home, Briefcase, Award, Send, Menu, X, Code, FileText, User } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/#home", icon: Home },
  { name: "About", href: "/#about", icon: User },
  { name: "Stack", href: "/#stack", icon: Code },
  { name: "Projects", href: "/#projects", icon: Briefcase },
  { name: "Experience", href: "/#experience", icon: FileText },
  { name: "Certificates", href: "/#certificates", icon: Award },
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
      {/* ─── Desktop Nav Bar ─── */}
      <motion.nav
        className={clsx(
          "hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-[1000] items-center justify-center px-6 py-2.5 rounded-full border border-outline-variant/40 transition-all duration-500 overflow-hidden cursor-pointer",
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ─── Mobile Bottom Nav Bar ─── */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-[400px]">
        <div className="bg-[#111111] border border-white/10 rounded-full shadow-2xl p-2 flex items-center justify-around">
          <Link href="/#home" className="p-3 text-white/70 hover:text-white transition-colors" onClick={handleMobileLinkClick}>
            <Home className="w-[22px] h-[22px]" />
          </Link>
          <Link href="/#projects" className="p-3 text-white/70 hover:text-white transition-colors" onClick={handleMobileLinkClick}>
            <Briefcase className="w-[22px] h-[22px]" />
          </Link>
          <Link href="/#certificates" className="p-3 text-white/70 hover:text-white transition-colors" onClick={handleMobileLinkClick}>
            <Award className="w-[22px] h-[22px]" />
          </Link>
          <Link href="/#contact" className="p-3 text-white/70 hover:text-white transition-colors" onClick={handleMobileLinkClick}>
            <Send className="w-[22px] h-[22px]" />
          </Link>
          <button 
            className="p-3 text-white/70 hover:text-white transition-colors cursor-pointer"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-[22px] h-[22px]" />
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu Overlay (From Bottom) ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
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
                  <h3 className="font-display text-[22px] font-extrabold text-primary">Menu</h3>
                  <button 
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-full bg-surface-container hover:bg-surface-container-highest transition-colors"
                  >
                    <X className="w-5 h-5 text-on-surface" />
                  </button>
                </div>
                
                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleMobileLinkClick}
                        className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-primary/8 text-on-surface hover:text-primary transition-all duration-200 group"
                      >
                        <item.icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary" />
                        <span className="text-[16px] font-semibold tracking-wide">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-outline-variant/30">
                  <Link
                    href="/#contact"
                    onClick={handleMobileLinkClick}
                    className="flex items-center justify-center w-full py-4 rounded-2xl bg-primary text-on-primary text-[14px] font-bold tracking-[0.08em] uppercase hover:scale-[1.02] transition-all"
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
