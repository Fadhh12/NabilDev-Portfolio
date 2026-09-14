"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 pb-16 relative z-10 w-full overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* ── Interactive Spotlight Zone: Smiley Face + LET'S TALK + Subtitle (Photo 4) ── */}
        <div
          data-cursor="letstalk"
          className="relative max-w-[680px] mx-auto flex flex-col items-center select-none pb-6"
        >
          {/* Normal Layer (Paper theme: Yellow smiley, black text) */}
          <div className="flex flex-col items-center">
            {/* Smiley Face */}
            <div
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-[#191510] flex items-center justify-center shadow-[4px_4px_0_#191510] mb-6"
              style={{ background: "#eab308" }}
            >
              <svg width="84" height="84" viewBox="0 0 88 88" fill="none">
                <circle cx="29" cy="36" r="7" fill="#191510" />
                <circle cx="59" cy="36" r="7" fill="#191510" />
                <circle cx="18" cy="54" r="8" fill="#f97316" opacity="0.45" />
                <circle cx="70" cy="54" r="8" fill="#f97316" opacity="0.45" />
                <path d="M22 56c8 14 36 14 44 0" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* LET'S TALK Title */}
            <h2 className="font-pixel uppercase text-[clamp(44px,9vw,84px)] leading-[1.0] tracking-tight text-[#191510] mb-3">
              LET&apos;S TALK
            </h2>

            {/* Subtitle */}
            <p className="font-hand text-[clamp(19px,2.8vw,26px)] text-center text-[#7a7066] max-w-[580px] leading-[1.45]">
              Got a project, a hard problem, or just want to say hi? Send it over. I read every message.
            </p>
          </div>
        </div>

        {/* ── Blue sticky note + Yellow contact card (Photo 4) ── */}
        <div className="relative flex justify-center items-start mt-6">

          {/* Blue sticky note — floating left */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="hidden md:flex absolute left-0 top-4 z-20 flex-col w-[230px] p-4 rounded-sm border-2 border-[#191510] shadow-[4px_4px_0_#191510]"
            style={{ background: "#bfdbfe" }}
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#191510] shrink-0 relative">
                <Image src="/assets/images/poto nabil 1.jpeg" alt="Nabil" fill className="object-cover" sizes="40px" />
              </div>
              <span className="font-bold text-[13px] text-[#191510] leading-tight">Nabil Fadhlur Rahman</span>
            </div>
            <p className="text-[12px] leading-[1.55] text-[#191510]/85">
              Open to contract work, full-time roles, and interesting conversations about AI and hard problems.
            </p>
            <div className="mt-3 inline-flex items-center gap-1 border-2 border-[#191510] px-2 py-0.5 rounded-sm text-[11px] font-bold w-fit bg-white/60">
              ⚡ 1
            </div>
          </motion.div>

          {/* Big Yellow contact card (Photo 4) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[640px] border-4 border-[#191510] rounded-sm p-8 sm:p-12 text-center relative shadow-[8px_8px_0_#191510]"
            style={{ background: "#eab308" }}
          >
            <p className="font-hand text-[22px] text-[#191510] mb-3">
              let&apos;s make something together
            </p>
            <h3 className="font-pixel uppercase text-[clamp(44px,9vw,86px)] leading-[1.0] tracking-tight text-[#191510] mb-5">
              CONTACT
            </h3>
            <Link
              href="/contact"
              className="inline-block font-mono-accent text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#191510] border-b-2 border-[#191510] pb-1 hover:opacity-75 transition-opacity"
            >
              DROP A LINE ↗
            </Link>

            {/* Socials inside card */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {[
                { Icon: FaLinkedin,  href: "https://www.linkedin.com/in/nabil-fadhlur-rahman-686794320/", label: "LinkedIn" },
                { Icon: FaGithub,    href: "https://github.com/Fadhh12",                                   label: "GitHub" },
                { Icon: FaInstagram, href: "https://www.instagram.com/nabil_biel/",                       label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform border-2 border-[#191510] bg-[#191510]"
                >
                  <s.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Contact details */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center text-[13px] font-bold text-[#191510]">
              <a href="mailto:Nabilbiel12@gmail.com" className="hover:underline">
                Nabilbiel12@gmail.com
              </a>
              <span className="hidden sm:inline opacity-40">·</span>
              <a href="https://github.com/Fadhh12" target="_blank" rel="noreferrer" className="hover:underline">
                github.com/Fadhh12
              </a>
            </div>

            {/* CV Download */}
            <a
              href="/assets/cv/Nabil_CV_General_Professional.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 border-2 border-[#191510] text-[#191510] font-bold text-[12px] hover:bg-[#191510] hover:text-white transition-all bg-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
