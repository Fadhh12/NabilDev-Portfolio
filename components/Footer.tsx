"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Sparkles } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Playground", href: "/#gallery" },
];

const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nabil-fadhlur-rahman-686794320/", Icon: FaLinkedin, bg: "var(--ca-yellow)" },
  { name: "GitHub", href: "https://github.com/Fadhh12", Icon: FaGithub, bg: "var(--ca-magenta)" },
  { name: "Instagram", href: "https://instagram.com", Icon: FaInstagram, bg: "var(--ca-green)" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full pt-14 pb-28 md:pb-8 bg-surface border-t border-outline-variant snap-end">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div>
            <div className="font-pixel uppercase text-[clamp(28px,6vw,56px)] leading-[1.2] tracking-tight text-on-surface">
              Nabil Fadhlur
            </div>
            <div className="flex items-center gap-2 mt-2 text-[12px] font-bold uppercase tracking-[0.1em] text-on-surface-variant">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--ca-blue)" }} />
              AI Engineer &amp; Full-Stack Developer
            </div>
          </div>

          <div className="flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link key={l.name} href={l.href} className="text-[11px] font-bold tracking-[0.1em] uppercase text-on-surface-variant hover:text-primary transition-colors">
                {l.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                style={{ background: s.bg }}
              >
                <s.Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-outline-variant/60">
          <div className="text-[12px] font-semibold text-on-surface-variant">
            © {year} M Nabil Fadhlur Rahman. All Rights Reserved.
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface-variant bg-surface-container">
            <Sparkles className="w-3 h-3" /> Designed &amp; built in Cikarang
          </div>
        </div>
      </div>
    </footer>
  );
}
