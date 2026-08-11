"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
      setIsShrunk(false); // always expanded at the top
    }

    // Determine scroll direction for shrinking logic
    if (latest > lastScrollY && latest > 150) {
      setIsShrunk(true); // scrolling down
    } else if (latest < lastScrollY) {
      setIsShrunk(false); // scrolling up
    }
    
    setLastScrollY(latest);
  });

  return (
    <motion.nav
      className={clsx(
        "fixed top-4 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-center px-6 py-2.5 rounded-full border border-outline-variant/40 transition-all duration-500 overflow-hidden cursor-pointer",
        scrolled
          ? "bg-surface/95 backdrop-blur-xl shadow-[0_8px_40px_rgba(26,28,24,0.12)]"
          : "bg-surface/85 backdrop-blur-md shadow-[0_4px_24px_rgba(26,28,24,0.08)]",
        isShrunk ? "w-[80px]" : "w-auto" // dynamic width
      )}
      onClick={() => isShrunk && setIsShrunk(false)} // allow click to expand
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, width: isShrunk ? 80 : "auto" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <AnimatePresence mode="wait">
        {isShrunk ? (
          <motion.div
            key="hamburger"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-[3px] items-center justify-center h-[36px] w-[36px]"
          >
            <div className="w-[18px] h-[2px] bg-primary rounded-full" />
            <div className="w-[18px] h-[2px] bg-primary rounded-full" />
            <div className="w-[18px] h-[2px] bg-primary rounded-full" />
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
            <Link href="#home" className="font-display text-[22px] font-extrabold text-primary tracking-tight mr-4">
              NabilDev.
            </Link>
            
            <ul className="flex items-center gap-1 list-none m-0 p-0 hidden md:flex">
              {["home", "about", "stack", "projects", "experience", "certificates"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.08em] uppercase text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                  >
                    {item}
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
  );
}
