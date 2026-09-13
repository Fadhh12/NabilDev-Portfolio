"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const NAV_LINKS = [
  { name: "About",      href: "/about" },
  { name: "Projects",   href: "/projects" },
  { name: "Activities", href: "/activities" },
  { name: "Contact",    href: "/contact" },
];

const SOCIALS = [
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/nabil-fadhlur-rahman-686794320/", Icon: FaLinkedin,  bg: "#eab308" },
  { name: "GitHub",    href: "https://github.com/Fadhh12",                                   Icon: FaGithub,    bg: "#ec4899" },
  { name: "Instagram", href: "https://www.instagram.com/nabil_biel/",                       Icon: FaInstagram, bg: "#10b981" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full pt-14 pb-28 md:pb-8 border-t-2 border-[#191510]" style={{ background: "#e8e4da" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Main footer row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b-2 border-[#191510]">
          {/* Name + role */}
          <div>
            <div className="font-pixel uppercase text-[clamp(24px,5vw,44px)] leading-[1.2] tracking-tight text-[#191510]">
              Nabil Fadhlur Rahman
            </div>
            <div className="flex items-center gap-2 mt-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#7a7066] font-mono-accent">
              <span className="w-2 h-2 rounded-full bg-[#2563eb]" />
              AI Engineer &amp; Full-Stack Developer
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#7a7066] hover:text-[#191510] transition-colors font-mono-accent"
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Social circles */}
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform border-2 border-[#191510]"
                style={{ background: s.bg }}
              >
                <s.Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 text-[12px] text-[#7a7066]">
          <span>© {year} M Nabil Fadhlur Rahman. All Rights Reserved.</span>
          <span className="font-hand text-[15px]">designed &amp; built in Cikarang ⚡</span>
        </div>
      </div>
    </footer>
  );
}
