"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Star, User, LayoutGrid, Diamond, Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home",       href: "/",           id: "home",       icon: Star },
  { name: "About",      href: "/about",      id: "about",      icon: User },
  { name: "Projects",   href: "/projects",   id: "projects",   icon: LayoutGrid },
  { name: "Activities", href: "/activities", id: "activities", icon: Diamond },
];

const SOCIALS = [
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/nabil-fadhlur-rahman-686794320/", icon: FaLinkedin,  bg: "#eab308" },
  { name: "GitHub",    href: "https://github.com/Fadhh12",                                   icon: FaGithub,    bg: "#ec4899" },
  { name: "Instagram", href: "https://www.instagram.com/nabil_biel/",                       icon: FaInstagram, bg: "#10b981" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ─── Desktop Navbar — flat full-width bar ─── */}
      <motion.nav
        className="hidden md:flex fixed top-0 left-0 right-0 z-[1000] items-center h-[56px] px-4 border-b-2"
        style={{
          background: "#f0ece0",
          borderBottomColor: "#191510",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Smiley logo */}
        <Link
          href="/"
          aria-label="Home"
          className="w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 mr-1 hover:scale-110 transition-transform"
          style={{ background: "#ec4899" }}
        >
          🙂
        </Link>

        {/* Nav links */}
        <ul className="flex items-center h-full list-none m-0 p-0">
          {NAV_LINKS.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <li key={item.name} className="h-full">
                <Link
                  href={item.href}
                  className={clsx(
                    "h-full flex items-center gap-1.5 px-5 text-[12px] font-bold tracking-[0.1em] uppercase border-r-2 transition-colors",
                    active
                      ? "bg-[#facc15] text-[#191510]"
                      : "text-[#191510] hover:bg-[#facc15]/40"
                  )}
                  style={{ borderRightColor: "#191510" }}
                >
                  <item.icon className="w-3.5 h-3.5 shrink-0" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Social circles */}
        <div className="flex items-center gap-2 mr-3">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform border-2"
              style={{ background: s.bg, borderColor: "#191510" }}
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Contact button */}
        <Link
          href="/contact"
          className="flex items-center gap-1.5 px-4 py-2 text-[12px] font-bold tracking-[0.1em] uppercase text-[#191510] border-2 border-[#191510] rounded-sm hover:bg-[#191510] hover:text-white transition-all"
        >
          <Mail className="w-3.5 h-3.5" />
          Contact
        </Link>
      </motion.nav>

      {/* ─── Mobile Bottom Nav Bar ─── */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] w-[90%] max-w-[400px]">
        <div className="bg-[#191510] border-2 border-[#191510] rounded-full shadow-2xl p-2 flex items-center justify-around">
          {NAV_LINKS.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "p-3 rounded-full transition-all",
                  active ? "bg-[#facc15] text-[#191510]" : "text-white/70 hover:text-white"
                )}
              >
                <item.icon className="w-[22px] h-[22px]" />
              </Link>
            );
          })}
          <button
            className="p-3 text-white/70 hover:text-white transition-colors cursor-pointer"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-[22px] h-[22px]" />
          </button>
        </div>
      </div>

      {/* ─── Mobile Menu Drawer ─── */}
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
              className="fixed bottom-0 left-0 right-0 z-[1002] md:hidden rounded-t-3xl overflow-hidden shadow-2xl border-t-2"
              style={{ background: "#f0ece0", borderTopColor: "#191510" }}
            >
              <div className="flex flex-col p-6 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full flex items-center justify-center text-[16px]" style={{ background: "#ec4899" }}>🙂</span>
                    <h3 className="font-pixel text-[16px] text-[#191510]">Menu</h3>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full border-2 border-[#191510] hover:bg-[#191510] hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map((item, i) => {
                    const active = isLinkActive(item.href);
                    return (
                      <motion.div key={item.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 + 0.1 }}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={clsx(
                            "flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 group border-2",
                            active ? "bg-[#facc15] text-[#191510] border-[#191510]" : "hover:bg-[#facc15]/40 text-[#191510] border-transparent"
                          )}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="text-[16px] font-bold tracking-wide uppercase">{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3 mt-6 pt-6 border-t-2" style={{ borderTopColor: "#191510" }}>
                  {SOCIALS.map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white border-2 border-[#191510]"
                      style={{ background: s.bg }}
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full mt-4 py-4 rounded-2xl border-2 border-[#191510] bg-[#191510] text-white text-[14px] font-bold tracking-[0.08em] uppercase hover:scale-[1.02] transition-all"
                >
                  <Mail className="w-4 h-4" /> Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
